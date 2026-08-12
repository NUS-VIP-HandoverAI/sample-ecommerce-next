import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { formatCurrency } from "@/lib/format";
import { getProductById, getProducts } from "@/lib/data";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="page">
      <div className="breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="product-detail">
        <div className="product-visual large">
          <span>{product.category}</span>
          <strong>{product.name}</strong>
        </div>
        <div className="product-content">
          <span className="eyebrow">{product.tag}</span>
          <h1>{product.name}</h1>
          <p className="price">{formatCurrency(product.price)}</p>
          <p>{product.description}</p>

          <div className="detail-meta">
            <div>
              <span>Rating</span>
              <strong>{product.rating.toFixed(1)} / 5</strong>
            </div>
            <div>
              <span>Inventory</span>
              <strong>{product.inventory} in stock</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>Free over $100</strong>
            </div>
          </div>

          <AddToCartButton product={product} />
        </div>
      </section>
    </div>
  );
}
