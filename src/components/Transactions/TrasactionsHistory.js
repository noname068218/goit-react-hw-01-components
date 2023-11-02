import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableCell,
  Tbody,
} from './Transactions.Styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <Tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </TableRow>
        ))}
      </Tbody>
    </Table>
  );
};
