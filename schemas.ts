export type Color = {
  name: string;
  value: string;
};

export type Size = {
  name: string;
  value: number;
  hex: string;
};

export type Product = {
  name: string;
  thumbnail: string;
  images: string[];
  description: string;
  price: number;
  colors: Color[];
  sizes: Size[];
  quantity: number;
}