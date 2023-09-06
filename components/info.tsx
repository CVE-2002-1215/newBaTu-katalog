"use client";

import { ShoppingCart } from "lucide-react";

import Button from "@/components/ui/button";
import { Product } from "@/types";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({
    data 
}) => {

  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900 font-semibold">
                Minimum Sipariş Adedi: {data.minqty}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Ürün Kodu:</h3>
          <div>
            {data?.code}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Kategori:</h3>
          <div>
            {data?.category?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Alt Kategori:</h3>
          <div>
            {data?.subCategory?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Marka:</h3>
          <div>
            {data?.brand?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Ürün Bilgisi:</h3>
          <div>
            {data?.info}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button  className="flex items-center gap-x-2">
          Sepete Ekle
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;