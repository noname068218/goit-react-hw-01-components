import styled from 'styled-components';

export const List = styled.li`
  width: auto;
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
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
`;
