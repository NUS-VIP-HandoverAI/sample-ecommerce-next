import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts, getProducts } from "@/lib/data";

export default async function HomePage() {
  const [featuredProducts, products] = await Promise.all([
    getFeaturedProducts(),
    getProducts()
  ]);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">New season essentials</span>
          <h1>Design-led gear for people who build things that last.</h1>
          <p>
            Northstar Commerce is a full-stack demo shop built with Next.js,
            server routes, persistent order storage, and a smooth client cart
            flow.
          </p>
          <div className="hero-actions">
            <Link href="#catalog" className="button primary">
              Shop the collection
            </Link>
            <Link href="/admin/orders" className="button secondary">
              View orders
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <p>Featured drop</p>
          <strong>Field Pack Pro</strong>
          <span>Weatherproof storage for laptops, cables, and notebooks.</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Featured</span>
          <h2>Curated picks</h2>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="section" id="catalog">
        <div className="section-heading">
          <span className="eyebrow">Catalog</span>
          <h2>Everything in store</h2>
        </div>
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
