import styled from 'styled-components';

export const Table = styled.table`
  font-family: 'Times New Roman', Times, serif;
  border: 1px solid #ffffff;
  width: 350px;
  height: 200px;
  text-align: center;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border-left: 2px solid #ffffff;
`;

export const TableRow = styled.tr`
  font-size: 17px;
  font-weight: bold;
  color: ${props => {
    return props.theme.colors.black;
  }};
  text-align: center;
  border-left: 2px solid #ffffff;
`;

export const TableHeaderCell = styled.th`
  border: 1px solid #ffffff;
  padding: 3px 2px;
`;

export const TableCell = styled.td`
  border: 1px solid #ffffff;
  padding: 3px 2px;
  font-size: 13px;
`;

export const Tbody = styled.tbody`
  font-size: 13px;
`;
