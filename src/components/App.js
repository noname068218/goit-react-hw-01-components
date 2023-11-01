import user from '../components/user/user.json';
import data from '../components/StatisticsUser/data.json';

import { Profile } from './user/profile';
import Statistics from './StatisticsUser/Statistic'; // Імпорт компонента статистики
import { FriendList } from './FriendListOnline/Friend';
import friends from './FriendListOnline/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
