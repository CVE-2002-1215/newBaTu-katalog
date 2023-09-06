"use client";

import { MapPin, Phone, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import PhoneDialog from "./phone-dialog";


const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    function openGoogleMaps() {
        const googleMapsLink = 'https://www.google.com/maps/dir//new+batu+h%C4%B1rdavat/@39.9734989,32.9067779,17.99z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d353cba0f3c879:0x91402dcb66528c73!2m2!1d32.9076947!2d39.973808?entry=ttu';
        window.open(googleMapsLink, '_blank');
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-1 px-3">
            <PhoneDialog />
            <Button onClick={openGoogleMaps} className="button flex items-center rounded-full bg-black px-4 py-2 h-9">
               <MapPin 
                size={20}
                color="white"
               />
               <div className="flex items-center ml-1 hide-on-small-screen">Yol Tarifi</div>
            </Button>
            <Button onClick = {() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2 h-9">
               <ShoppingBag 
                size={20}
                color="white"
               />
               <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
               </span>
            </Button>
        </div>
     );
}
 
export default NavbarActions;