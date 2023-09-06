"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Phone } from "lucide-react";

const Summary = () => {

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
      style={{ paddingTop: '20px' }}
    >
      <h2 className="text-xl text-center font-bold text-black pb-2">
        Ba&Tu Toptan Hırdavat
      </h2>
      <div className="mt-4 space-y-1 ">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-bold text-black">Fiyat Listesi almak için aşağıdaki adımları takip edin.</div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="text-base font-medium text-gray-900">- Toptan fiyat almak istediğiniz ürünleri belirleyin.</div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="text-base font-medium text-gray-900">- Ürünleri, ürün kodu ve sipariş adedi ile birlikte aşağıda bulunan iletişim numarası üzerinden bize iletin. </div>
        </div>
        <div className="flex items-center justify-between pt-2 pb-2">
          <div className="text-base font-medium text-gray-900">- Bizlere vermiş olduğunuz bilgiler kapsamında 'Size Özel Fiyat Listesi' en kısa sürede hazırlanacak, WhatsApp ve E-mail üzerinden sizlere iletilecektir.  </div>
        </div>
        <h2 className="text-base font-medium border-t border-gray-200 text-gray-900 pt-4" style={{ fontStyle: 'italic' }}>
            Siz müşterilerimize hizmet vermekten son derece mutluluk duyuyoruz. Bizi tercih ediyor olduğunuz için teşekkür ederiz.
        </h2>
      </div>
      <Button onClick={()=>{}} className="w-full mt-6 flex items-center justify-center">
            <Phone 
            size={20}
            color="white"
            className="mr-2"
            />
            Bize Ulaşın: +90 542 710 8489
      </Button>
    </div>
  );
}
 
export default Summary;