import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  padding-top: 30px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 17px -4px #000000;
  box-shadow: 0px 5px 17px -4px #000000;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Name = styled.h1`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 20px;
`;
export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${props => {
    return props.theme.colors.black;
  }};
`;
export const Tag = styled.p`
  margin-bottom: 20px;
  margin-top: 0;
`;
export const Location = styled.p`
  margin-bottom: 20px;
  margin-top: 0;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgb(141, 155, 155);
  background-color: rgb(213, 238, 238);
  padding: 0;
  list-style: none;
  width: 100%;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border: 1px solid rgb(141, 155, 155);
  margin: 0;
`;

export const Label = styled.span`
  font-size: 12px;
  color: grey;
`;
export const Quantity = styled.span`
  font-weight: 500;
`;
