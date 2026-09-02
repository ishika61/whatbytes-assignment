import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import FeaturedProductCard from "./FeaturedProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) =>
        product.featured ? (
          <FeaturedProductCard key={product.id} product={product} />
        ) : (
          <ProductCard key={product.id} product={product} />
        )
      )}
    </div>
  );
}