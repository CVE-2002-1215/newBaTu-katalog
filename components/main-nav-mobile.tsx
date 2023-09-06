"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./ui/button";
import { CircleDot, CornerDownRight, List, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/icon-button";

interface MainNavMobileProps {
    data: Category[];
  };

const MainNavMobile: React.FC<MainNavMobileProps> = ({
    data
}) => {

    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
      }));
    const sortedRoutes = routes.slice().sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()));
    // console.log(sortedRoutes);

    return ( 
    <>
        <div className="flex items-center justify-center xl:hidden space-x-4">
            <Button onClick={onOpen} className="button flex items-center rounded-full bg-black px-4 py-2 space-x-4 h-9">
                <List size={20} />
                <div className="flex items-center ml-1 hide-on-small-screen">Kategoriler</div>
            </Button>
        </div>

        <Dialog open={open} as="div" className="relative z-40 xl:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
    
            <div className="p-4">
                <div className="mb-8">
                    <h3 className="text-lg font-semibold">
                        Kategoriler
                    </h3>
                    <hr className="my-4" />
                    <nav 
                    className="mx-6 flex flex-col space-y-4 lg:space-y-6"
                    >
                        {sortedRoutes.map((route) => (
                                    <div onClick={onClose} className="flex items-center" key={route.href}>
                                        <CornerDownRight className="w-4 h-4 mr-2" /> {/* Add the Dot icon */}
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                            'text-m font-medium transition-colors hover:text-black',
                                            route.active ? 'text-black' : 'text-neutral-500'
                                        )}
                                    >
                                        {route.label}
                                    </Link>
                                    </div>
                                )
                            )
                        }
                    </nav>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>        


    </>

        // <nav 
        //  className="mx-6 flex items-center space-x-4 lg:space-x-6"
        // >
        //  {sortedRoutes.map((route) => (
        //     <Link
        //         key={route.href}
        //         href={route.href}
        //         className={cn(
        //             'text-sm font-medium transition-colors hover:text-black',
        //             route.active ? 'text-black' : 'text-neutral-500'
        //           )}
        //     >
        //         {route.label}
        //     </Link>
        //       )
        //     )
        //   }
        // </nav>
     );
}
 
export default MainNavMobile;