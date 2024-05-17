import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

interface Props {
  pendingOrders: Product[];
}

export default function OrderTables({ pendingOrders }: Props) {
  // id 1 tiene 2, id 2 tiene 2, id 3 tiene 1

  // export const pendingOrders = [
  //   {
  //     id: 1,
  //     name: 'Corona',
  //     price: '230.00',
  //     category_id: 1,
  //     unit_id: 1,
  //     has_alcohol: 1,
  //     created_at: '2024-05-14T19:24:17.000000Z',
  //     updated_at: '2024-05-15T17:27:29.000000Z',
  //     category: null,
  //     unit_measure: null
  //   },
  //   {
  //     id: 2,
  //     name: 'Pilsen',
  //     price: '214.00',
  //     category_id: 1,
  //     unit_id: 1,
  //     has_alcohol: 1,
  //     created_at: '2024-05-15T14:20:25.000000Z',
  //     updated_at: '2024-05-16T15:53:57.000000Z',
  //     category: null,
  //     unit_measure: null
  //   },
  //   {
  //     id: 3,
  //     name: 'Cristal',
  //     price: '100.00',
  //     category_id: 1,
  //     unit_id: 1,
  //     has_alcohol: 1,
  //     created_at: '2024-05-15T15:52:05.000000Z',
  //     updated_at: '2024-05-15T15:52:05.000000Z',
  //     category: null,
  //     unit_measure: null
  //   },
  //   {
  //     id: 2,
  //     name: 'Pilsen',
  //     price: '214.00',
  //     category_id: 1,
  //     unit_id: 1,
  //     has_alcohol: 1,
  //     created_at: '2024-05-15T14:20:25.000000Z',
  //     updated_at: '2024-05-16T15:53:57.000000Z',
  //     category: null,
  //     unit_measure: null
  //   },
  //   {
  //     id: 1,
  //     name: 'Corona',
  //     price: '230.00',
  //     category_id: 1,
  //     unit_id: 1,
  //     has_alcohol: 1,
  //     created_at: '2024-05-14T19:24:17.000000Z',
  //     updated_at: '2024-05-15T17:27:29.000000Z',
  //     category: null,
  //     unit_measure: null
  //   },
  // ]
  return (
    <Table className="mb-20 border border-black">
      <TableHeader>
        <TableRow>
          <TableHead>Cantidad</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>Precio</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {pendingOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
