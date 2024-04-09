import { Category, Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategoryById = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  console.log(res.json())
  return res.json();
};

export default getCategoryById;