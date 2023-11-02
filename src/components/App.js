import user from '../components/user/user.json';
import data from '../components/StatisticsUser/data.json';

import { Profile } from './user/profile';
import Statistics from './StatisticsUser/Statistic'; // Імпорт компонента статистики
import { FriendList } from './FriendListOnline/Friend';
import friends from './FriendListOnline/friends.json';
import TransactionHistory from './Transactions/TrasactionsHistory';
import transactions from './Transactions/transaction.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
