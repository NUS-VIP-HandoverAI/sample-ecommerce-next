import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="page centered-card-page">
      <div className="message-card">
        <span className="eyebrow">Success</span>
        <h1>Order placed</h1>
        <p>
          Your order has been saved to the local store. You can review it from
          the orders dashboard.
        </p>
        <div className="hero-actions">
          <Link href="/admin/orders" className="button primary">
            View orders
          </Link>
          <Link href="/" className="button secondary">
            Back to store
          </Link>
        </div>
      </div>
    </div>
  );
}
