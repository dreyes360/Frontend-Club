import CardProduct from "../OrderCard";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Pencil } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

interface Props {
  product: Product[];
  pendingOrders: Product[];
  isLoading: boolean;
  searchValue: string;
  setPendingOrders: (value: Product[]) => void;
  setSearchValue: (value: string) => void;
}

export default function OrderAction({
  product,
  setPendingOrders,
  pendingOrders,
  searchValue,
  setSearchValue,
}: Props) {
  const [edit, setEdit] = useState(false);
  //const [editedPrice, setEditedPrice] = useState<string | undefined>(undefined);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  const toggleEdit = (productId: number) => {
    //const price = product.find((product) => product.id === productId)?.price;
    setEditingProductId(productId);
    //setEditedPrice(price?.toString());
    setEdit(!edit);
  };

  const addOrder = (productId: number) => {
    const newProducts = [...product];
    const orderInProcess = newProducts.find(
      (product) => product.id === productId
    ) as Product;
    setPendingOrders([...pendingOrders, orderInProcess]);
  };

  return (
    <div className="space-y-14">
      {/* Search  Input */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4 2xl:w-[95%] mx-auto p-2">
        {product.map((product) => {
          const cardById = product.id == editingProductId;
          return (
            <Card
              key={product.id}
              className="relative flex flex-col justify-center items-center p-4 h-52 max-w-[246px] border-gray-700 border-2 mx-auto"
            >
              <CardProduct
                {...product}
                editingProductId={editingProductId}
                edit={edit}
                addOrder={addOrder}
              />
              {edit && cardById ? (
                <Button
                  type="submit"
                  form="update-orders-form"
                  className="absolute -top-3 -right-3 rounded-full w-8 h-8 p-2"
                  onClick={() => toggleEdit(product.id)}
                >
                  <Check className="w-full h-full" />
                </Button>
              ) : (
                <Button
                  className="absolute -top-4 -right-4 rounded-full w-10 h-10 p-2"
                  onClick={() => toggleEdit(product.id)}
                >
                  <Pencil className="w-full h-full" />
                </Button>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}