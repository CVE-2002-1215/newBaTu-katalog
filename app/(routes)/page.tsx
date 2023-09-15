import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import ImageSlider from '@/components/image-slider';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

export async function generateMetadata({
  }) {
    try {
        const slides = await getBillboards("e0ec14b4-81fa-4696-8822-eda5cfcc9798"); // Anasayfa billboard

      if(!slides){
        return {
          title : "Bulunamadı",
          description: "Aramakta olduğunuz sayfaya ulaşılamıyor."
        }
      }
      return {
        openGraph: {
          title: "New Ba&Tu Hırdavat",
          description: "Ankara Toptan Hırdavat, Türkiye'nin Tek Adresi | New Ba&Tu Hırdavat",
          url:`https://www.batuhirdavat.com`,
          type: 'website',
          siteName:'batuhirdavat.com',
          images: slides[0].url,
        }
      };
    } catch(error){
      console.log(error);
      return {
        title : "Bulunamadı",
        description: "Aramakta olduğunuz sayfaya ulaşılamıyor."
      }
    }
  }

const HomePage: React.FC = async () => {
    const products = await getProducts({isFeatured : true});
    const slides = await getBillboards("e0ec14b4-81fa-4696-8822-eda5cfcc9798"); // Anasayfa billboard
    return (
        <Container >
            <div className='space-y-2 pb-10'>
                <ImageSlider slides={slides} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Öne Çıkarılanlar" items={products} />
                </div>
            </div>
        </Container>
      );
    };

export default HomePage;