import { FriendWraper } from './Friend.Styled';

import { FriendListItem } from './FriendCard';

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
