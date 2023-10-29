import {
  CardWrapper,
  Card,
  Name,
  Avatar,
  Tag,
  Location,
  StatsList,
  Item,
  Label,
  Quantity,
} from './profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <CardWrapper>
      <Card>
        <Avatar src={avatar} alt="User Avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Card>
      <StatsList>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </StatsList>
    </CardWrapper>
  );
};
