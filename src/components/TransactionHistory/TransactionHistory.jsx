import PropTypes from 'prop-types';
import { BodyTrStyled, TheadStyled, TransactionsTable } from "./Transaction.styles";

export const TransactionHistory = ({ transactions }) => {

  console.log('transactions', transactions);
  return (
    <TransactionsTable>
      <TheadStyled>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TheadStyled>

      <tbody>
      {transactions.map((item, idx) => {
        const { id, type, amount, currency } = item;
        return <BodyTrStyled key={id} idx={idx}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </BodyTrStyled>
      })}
      </tbody>
    </TransactionsTable>
  );
};


TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }))
}