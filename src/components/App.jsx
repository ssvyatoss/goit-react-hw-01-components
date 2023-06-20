import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlogalStyled } from 'styles/global.styles';
export const App = () => {
  return (
    <GlogalStyled
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Profile {...user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList persons={friends} />
      <TransactionHistory transactions={transactions} />
    </GlogalStyled>
  );
};
