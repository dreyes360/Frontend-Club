import { getProducts } from "@/helpers/getProducts";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import {OrderTables, SearchHostess, SearchProduct, OrderAction} from "../components/index";

export default function Orders() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [pendindgOrders, setPendingOrders] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery("products", getProducts);

  const formatOrders = pendindgOrders.reduce((acc, product) => {
    const productExist = acc.find((obj) => obj.id == product.id);
    if(productExist) 
      {
        productExist.count++ 
        productExist.price = Number(product.price) + Number(product.price)  
      }else {
        acc.push({ ...product, count: 1 });
      }
    return acc;
  }, [] as Order[]);
  console.log(formatOrders)
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

  return (
    <section className="flex justify-center items-center flex-col gap-8 w-full relative md:-left-7 lg:left-4">
      <div className="fixed md:right-26 space-y-3 md:space-y-6 w-[95%] md:w-[60%] lg:w-[65%] h-[30rem] top-[4.7rem] p-5 bg-background z-30 shadow-lg">
        <h3 className="text-3xl">Pedido</h3>
        <div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-24">
            <SearchHostess />
            <SearchProduct
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <OrderTables pendingOrders={pendindgOrders} totalPrice={totalPrice} />
        </div>
      </div>
      <div className="flex gap-4 relative top-[30rem]">
        <OrderAction
          isLoading={isLoading}
          setPendingOrders={setPendingOrders}
          pendingOrders={pendindgOrders}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </section>
  );
}
