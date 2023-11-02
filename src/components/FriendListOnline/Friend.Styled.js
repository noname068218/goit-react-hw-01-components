import styled from 'styled-components';

export const FriendWraper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  -webkit-box-shadow: -2px 9px 25px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 9px 25px -9px rgba(0, 0, 0, 0.75);
  transition: all 300ms ease-in;

  &:hover {
    transform: scale(1.04);
  }
`;

export const StatusIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${getStatusColor};
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
`;

function getStatusColor(props) {
  switch (props.$isOnline) {
    case true:
      return '#50AD53';
    default:
      return '#FF4F55';
  }
}
