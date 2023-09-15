import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

export async function generateMetadata({
  params,
}:{
  params:{
    productId:string;
  };
}) {
  try {
    const product = await getProduct(params.productId);
    if(!product){
      return {
        title : "Bulunamadı",
        description: "Aramakta olduğunuz sayfaya ulaşılamıyor."
      }
    }
    return {
      title:product.name,
      description:product.name,
      alternates:{
        canonical :`/${product.id}`
      },
      openGraph: {
        title: product.name,
        description: product.name,
        url:`https://wwww.batuhirdavat.com/product/${params.productId}`,
        type: 'website',
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

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
    const product = await getProduct(params.productId);
    // console.log(product);
    // console.log(product?.images[0].url);
    const suggestedProducts = await getProducts({ 
        subCategoryId: product?.subCategory?.id,
    });

    if (!product) {
        return null;
    }

    return ( 
      <div className="bg-white">
        <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Gallery images={product.images} />
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <Info data={product} />
              </div>
            </div>
            <hr className="my-10" />
            <ProductList title="Önerilen Ürünler" items={suggestedProducts} />
          </div>
        </Container>
    </div>  
     );
}
 
export default ProductPage;