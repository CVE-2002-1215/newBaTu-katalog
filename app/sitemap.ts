import getAllProducts from "@/actions/get-all-products";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

export default async function sitemap() {
  const baseUrl = "https://www.batuhirdavat.com";

  // Get All Posts from CMS
  const products = await getAllProducts();
  const productsUrls =
    products.map((product) => {
      return {
        url: `${baseUrl}/product/${product.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // Get All Categories from CMS
  const categories = await getCategories();
  const categoriesUrls =
    categories?.map((category) => {
      return {
        url: `${baseUrl}/category/${category.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...productsUrls,
    ...categoriesUrls,
  ];
}