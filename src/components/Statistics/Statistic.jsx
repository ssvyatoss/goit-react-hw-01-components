import PropTypes from 'prop-types'
import { StatItem, StatList, StatSection } from "./Statistics.styles";

export const Statistic = ({ title, stats }) => {
  const bgColor = () => Math.floor(Math.random() * 16777215).toString(16)
  return (
    <StatSection>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats.map(val => {
          return (
            <StatItem key={val.id} bg={bgColor}>
              <span className="label">{val.label}</span>
              <span className="percentage">{val.percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};

Statistic.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  })
}