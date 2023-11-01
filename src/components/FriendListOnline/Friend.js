import styled from 'styled-components';

import { FriendListItem } from './FriendCard';

const FriendWraper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
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
