import { useQuery } from "react-query";
import OrdersProcessedDataTable from "../components/OrdersProcessedTable";
import { getHeaders } from "@/helpers/getHeaders";

export default function OrdersProcessed() {
  const { data, isLoading } = useQuery("headersActive", getHeaders);
  const dataHeaders = data ? data : [];

  const format = dataHeaders.map((item: Header) => {
    const order = item.orders.find((item) => item);
    return {
      ...item,
      hostess: order?.hostess,
    };
  });

  return (
    <section>
      <h1>Pedidos atendidos</h1>
      <div>
        <OrdersProcessedDataTable
          data={format}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
