export interface Product {
  id: string;
  title: string;
  price: number;
  category: "Electronics" | "Clothing" | "Home";
  image: string;
  rating: number;
  description: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}