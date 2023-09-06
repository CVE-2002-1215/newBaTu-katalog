"use client";

import { useRouter } from 'next/navigation';
import Button from './button';
import { X } from 'lucide-react';
import { useState } from 'react';

function FilterClearButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClearFilters = () => {
    const currentURL = window.location.href;
    const baseUrl = currentURL.split('?')[0]; // Remove query parameters
    router.push(baseUrl,{ scroll: false });
    // console.log(baseUrl)

    if(!loading){
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },1800)
    }else{
      setLoading(false);
      setTimeout(()=>{
        setLoading(true);
      },1800)
    }
  };

  return (
    <div>
      {loading ? 
      (
        <div className="flex items-center justify-center">
          <Button
              onClick={handleClearFilters}
              className="flex hover:opacity-100 items-center gap-x-2 border-gray-300 animate-bounce"
          >
              Filtreler Kaldırılıyor...
          </Button>
        </div>
      )
      : 
      (
        <div className="flex items-center justify-center">
          <Button
              onClick={handleClearFilters}
              className="flex hover:opacity-100 items-center gap-x-2 border-gray-300"
          >
              Filtreleri Temizle
            <X size={20} />
          </Button>
        </div>
      ) 
      }
    </div>
  );
}

export default FilterClearButton;