import styled from 'styled-components';
import { getRandomHexColor } from './randomColors';

const StatisticsWrap = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.black};
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 0;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  flex-basis: calc(300px / 5);
  background: ${() => getRandomHexColor};
`;

const Label = styled.span`
  padding: 10px;
  color: ${props => props.theme.colors.while};
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
`;

const Persentage = styled.span`
  font-size: 25px;
  padding: 15px;
  color: ${props => props.theme.colors.while};
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
`;

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label>{stat.label}</Label>
            <Persentage>{stat.percentage}%</Persentage>
          </Item>
        ))}
      </List>
    </StatisticsWrap>
  );
};

export default Statistics;
