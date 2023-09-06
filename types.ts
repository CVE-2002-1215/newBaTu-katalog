export interface Billboard {
  id: string;
  label: string;
  images: Imageforbillboard[]
  name: string; //
  url:string;
};

export interface Imageforbillboard {
  id: string;
  url:string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Product {
  id: string;
  category: Category;
  name: string;
  minqty: string;
  info: string;
  code: string
  isFeatured: boolean;
  brand: Brand;
  subCategory: SubCategory;
  images: Image[]
  url:string;
};

export interface Image {
  id: string;
  url: string;
}

export interface Brand {
  id: string;
  name: string;
};
  
export interface SubCategory {
  id: string;
  name: string;
};