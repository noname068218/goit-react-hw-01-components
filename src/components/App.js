import user from '../components/user/user.json';
import data from '../components/StatisticsUser/data.json';

import { Profile } from './user/profile';
import Statistics from './StatisticsUser/Statistic'; // Імпорт компонента статистики

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
