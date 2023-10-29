// import styled from 'styled-components';

import { Profile } from './user/profile';
import user from '../data/user/user.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
