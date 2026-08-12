"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatCurrency } from "@/lib/format";

export function CartPageClient() {
  const { items, subtotal, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return <div className="cart-card cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-layout">
      <div className="cart-card">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <p>{formatCurrency(item.price)} each</p>
            </div>
            <div className="quantity-controls">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="quantity-controls">
              <strong>{formatCurrency(item.price * item.quantity)}</strong>
              <button type="button" onClick={() => removeItem(item.id)}>
                x
              </button>
            </div>
          </div>
        ))}
      </div>

      <aside className="cart-card">
        <div className="summary-stack">
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{subtotal > 100 ? "Free" : formatCurrency(12)}</strong>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>
              {formatCurrency(subtotal > 100 ? subtotal : subtotal + 12)}
            </strong>
          </div>
          <Link href="/checkout" className="button primary">
            Proceed to checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
