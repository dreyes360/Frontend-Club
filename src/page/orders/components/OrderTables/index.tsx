import { ScrollArea } from "@/components/ui/ScrollArea";
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
  // const orderInProcess = []
  // const result  = [ pendingOrders.reduce((acc, item) => {
  //   if(!acc.has(item.id)) 
  // }, new Map)]
  
  return (
    <Table className="mb-20 border border-black">
      <TableHeader >
        <TableRow >
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
