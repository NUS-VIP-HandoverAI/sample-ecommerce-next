"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { formatCurrency } from "@/lib/format";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shipping = items.length > 0 ? 12 : 0;
  const total = useMemo(() => subtotal + shipping, [shipping, subtotal]);

  async function handleSubmit(formData: FormData) {
    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const payload = {
      customer: {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        address: String(formData.get("address") || "")
      },
      items: items.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.price
      }))
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setIsSubmitting(false);
      setError("Unable to place your order right now.");
      return;
    }

    clearCart();
    router.push("/checkout/success");
  }

  return (
    <div className="page checkout-layout">
      <div className="checkout-form-card">
        <div className="section-heading">
          <span className="eyebrow">Checkout</span>
          <h1>Complete your order</h1>
        </div>

        <form
          action={async (formData) => {
            await handleSubmit(formData);
          }}
          className="checkout-form"
        >
          <label>
            Full name
            <input name="name" placeholder="Avery Tan" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="avery@example.com"
              required
            />
          </label>
          <label>
            Shipping address
            <textarea
              name="address"
              placeholder="123 Orchard Road, Singapore"
              rows={4}
              required
            />
          </label>

          {error ? <p className="error-text">{error}</p> : null}

          <button className="button primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Place order"}
          </button>
        </form>
      </div>

      <aside className="order-summary-card">
        <h2>Order summary</h2>
        <div className="summary-stack">
          {items.map((item) => (
            <div key={item.id} className="summary-row">
              <span>
                {item.name} x {item.quantity}
              </span>
              <strong>{formatCurrency(item.price * item.quantity)}</strong>
            </div>
          ))}
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{formatCurrency(shipping)}</strong>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </div>
      </aside>
    </div>
  );
}
