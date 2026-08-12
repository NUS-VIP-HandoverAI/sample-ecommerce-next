"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";

export function SiteHeader() {
  const { count } = useCart();

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        Northstar
      </Link>

      <nav className="nav-links">
        <Link href="/">Store</Link>
        <Link href="/admin/orders">Orders</Link>
        <Link href="/api/products">Products API</Link>
      </nav>

      <Link href="/cart" className="header-cart">
        Cart ({count})
      </Link>
    </header>
  );
}
