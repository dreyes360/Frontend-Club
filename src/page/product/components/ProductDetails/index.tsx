import { SheetContent, SheetFooter, SheetTitle } from "@/components/ui/Sheet";
import { useState } from "react";
import ProductEditForm from "../ProductEditForm";
import { Button } from "@/components/ui/Button";
import { Pencil } from "lucide-react";

interface Props {
  product: Product;
  open: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function ProductDetails({ product, setIsOpen }: Props) {
  const [isPending, setIsPending] = useState(false);
  return (
    <SheetContent>
      <SheetTitle>Informacion del producto</SheetTitle>

      <ProductEditForm
        product={product}
        setIsPending={setIsPending}
        setIsOpen={setIsOpen}
      />
      <SheetFooter className="mt-2 p-2">
        <Button type="submit" form="update-product-form" disabled={isPending}>
          <Pencil className="mr-2 h-4 w-4" />
          Aplicar
        </Button>
      </SheetFooter>
    </SheetContent>
  );
}
