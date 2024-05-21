import { getProducts } from "@/helpers/getProducts";
import OrderAction from "../components/OrderAction";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import OrderTables from "../components/OrderTables";

export default function Orders() {
  const [pendindgOrders, setPendingOrders] = useState<Product[] | []>([]);
  const [ searchValue, setSearchValue ] = useState("");
  const { data, isLoading } = useQuery("products", getProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const formatOrders = pendindgOrders.reduce((acc, product) => {
    const productExist = acc.find((obj) => obj.id == product.id);
  if(productExist){
    productExist.count++ 
    productExist.price = Number(productExist.price) + Number(product.price);
  }else{
    acc.push({ ...product, count: 1 });
  }
    return acc;
  }, [] as Order[]);


  const totalPrice = formatOrders.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

  useEffect(() => {
    const newFilteredProducts = (data ? data.product : []).filter(
      ({ name }: Product) => {
        const todoText = name.toLocaleLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      }
    );
    setFilteredProducts(newFilteredProducts);
  }, [data, searchValue]);

  console.log(formatOrders)
  console.log(totalPrice)

  return (
    <section className="flex flex-col gap-8 w-full">
      <h3 className="text-3xl">Pedido</h3>
      <div>
        <OrderTables pendingOrders={formatOrders} />
      </div>
      <div className="flex gap-4">
        <OrderAction
          product={data ? data.product : []}
          isLoading={isLoading}
          setPendingOrders={setPendingOrders}
          pendingOrders={pendindgOrders}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </section>
  );
}
