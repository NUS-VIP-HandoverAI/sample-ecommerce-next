import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/format";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} className="product-card" key={product.id}>
          <div className="product-visual">
            <span>{product.category}</span>
            <strong>{product.name}</strong>
          </div>
          <div className="product-card-body">
            <div>
              <p className="eyebrow">{product.tag}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <strong>{formatCurrency(product.price)}</strong>
          </div>
        </Link>
      ))}
    </div>
  );
}
