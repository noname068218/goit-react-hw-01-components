import { Friend, StatusIndicator, Avatar, Name } from './Friend.Styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <StatusIndicator $isOnline={isOnline}></StatusIndicator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};
