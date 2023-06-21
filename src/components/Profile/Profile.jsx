import PropTypes from 'prop-types'
import { AvatarStyled, DescriptionStyled, ProfileStyled, StatsItemStyled, StatsStyled } from "./Profile.styles";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <AvatarStyled src={avatar} alt="User avatar"/>
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </DescriptionStyled>

      <StatsStyled>
        {Object.entries(stats).map(([key, value]) => {
          return (
            <StatsItemStyled key={key}>
              <span className="label">{key}</span>
              <span className="quantity">{value}</span>
            </StatsItemStyled>
          );
        })}
      </StatsStyled>
    </ProfileStyled>
  );
};

Profile.propTypes = {
    username: PropTypes.string, 
    tag:  PropTypes.string,
    location: PropTypes.string, 
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      folowers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
}
