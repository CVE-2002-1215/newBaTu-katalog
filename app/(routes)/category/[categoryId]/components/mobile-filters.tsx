"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Brand, SubCategory } from "@/types";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

import Filter from "./filter";
import FilterClearButton from "@/components/ui/filter-clear-button";

interface MobileFiltersProps {
    brands: Brand[],
    subCategories: SubCategory[],
  }

  const MobileFilters: React.FC<MobileFiltersProps> = ({
    brands,
    subCategories
  }) => {

    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
  

    return ( 
    <>

      <div className="flex items-center justify-center lg:hidden space-x-4">
        <Button onClick={onOpen} className="flex items-center gap-x-2">
          Ürünleri Filtrele
          <Plus size={20} />
        </Button>

        <FilterClearButton />
      </div>

      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        
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
              <Filter
                valueKey="subCategoryId" 
                name="Alt Kategoriler" 
                data={subCategories}
              />
              <Filter 
                valueKey="brandId" 
                name="Markalar" 
                data={brands}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
     );
}
 
export default MobileFilters;