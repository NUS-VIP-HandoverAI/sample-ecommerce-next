import Link from "next/link";
import { CartPageClient } from "@/components/cart-page-client";

export default function CartPage() {
  return (
    <div className="page">
      <div className="section-heading">
        <span className="eyebrow">Cart</span>
        <h1>Your bag</h1>
        <p>
          Review your order, adjust quantities, and head to checkout when
          you&apos;re ready.
        </p>
      </div>
      <CartPageClient />
      <div className="inline-link-row">
        <Link href="/">Continue shopping</Link>
      </div>
    </div>
  );
}
