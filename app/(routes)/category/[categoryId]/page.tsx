import { Brand, SubCategory } from "@/types";

import getBillboards from "@/actions/get-billboards";
import getCategoryBillboardId from "@/actions/get-category-billboardId";
import getProducts from "@/actions/get-products";

import ImageSlider from "@/components/image-slider";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import Container from "@/components/ui/container";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import FilterClearButton from "@/components/ui/filter-clear-button";
import getCategoryName from "@/actions/get-category-name";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
      categoryId: string;
    },
    searchParams: {
      subCategoryId: string;
      brandId: string;
    }
  }

  export async function generateMetadata({
    params,
  }:{
    params:{
        categoryId:string;
    };
  }) {
    try {
      
      const categoryName = await getCategoryName(params.categoryId);
        
      if(!categoryName){
        return {
          title : "Bulunamadı",
          description: "Aramakta olduğunuz sayfaya ulaşılamıyor."
        }
      }
      return {
        title:categoryName,
        description:categoryName,
        alternates:{
            canonical :`/${params.categoryId}`
        },
        openGraph: {
          title: categoryName,
          description: categoryName,
          url:`https://www.batuhirdavat.com/category/${params.categoryId}`,
          type: 'website',
          siteName:'batuhirdavat.com'
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

  const CategoryPage: React.FC<CategoryPageProps> = async ({ 
    params, 
    searchParams
  }) => {

    const products = await getProducts({ 
        categoryId: params.categoryId,
        brandId: searchParams.brandId,
        subCategoryId: searchParams.subCategoryId,
    });

    const uniqueBrands: Brand[] = [];
    const brands = products.map(item => item.brand);

    brands.forEach(brand => {
        const existingBrand = uniqueBrands.find(b => b.id === brand.id);
        if (!existingBrand) {
            uniqueBrands.push(brand);
        }
    });
    uniqueBrands.sort((a, b) => a.name.localeCompare(b.name));

    const uniqueSubCategories: SubCategory[] = [];
    const subCategories = products.map(item => item.subCategory);

    subCategories.forEach(subCategory => {
        const existingSubCategory = uniqueSubCategories.find(b => b.id === subCategory.id);
        if (!existingSubCategory) {
            uniqueSubCategories.push(subCategory);
        }
    });
    uniqueSubCategories.sort((a, b) => a.name.localeCompare(b.name));

    // console.log(products);
    // console.log(uniqueBrands)
    // console.log(uniqueSubCategories)

    // const brandsApı = await getBrands();
    // console.log(brandsApı);  // Videoda kullanılan veri türü

    const category_billboard_Id = await getCategoryBillboardId(params.categoryId);
    const slides = await getBillboards(`${category_billboard_Id}`);

    return ( 
        <div className="bg-white">
            <Container>
                <ImageSlider slides={slides} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters brands={uniqueBrands} subCategories={uniqueSubCategories} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="subCategoryId" 
                                name="Alt Kategoriler" 
                                data={uniqueSubCategories}
                            />
                            <Filter 
                                valueKey="brandId" 
                                name="Markalar" 
                                data={uniqueBrands}
                            />
                            <FilterClearButton />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                          {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
  }
 
export default CategoryPage;