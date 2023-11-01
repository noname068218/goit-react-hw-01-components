import styled from 'styled-components';

import { FriendListItem } from './FriendCard';

const FriendWraper = styled.ul`
  display: flex;
`;
export const FriendList = ({ friends }) => {
  return (
    <FriendWraper>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          s
          key={friend.id}
        />
      ))}
    </FriendWraper>
  );
};
