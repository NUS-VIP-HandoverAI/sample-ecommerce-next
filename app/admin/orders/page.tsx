import { formatCurrency } from "@/lib/format";
import { getOrders } from "@/lib/orders";

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="page">
      <div className="section-heading">
        <span className="eyebrow">Back office</span>
        <h1>Orders</h1>
        <p>Submitted orders are persisted in a local JSON file for easy demos.</p>
      </div>

      <div className="orders-table">
        <div className="orders-header">
          <span>Order</span>
          <span>Customer</span>
          <span>Total</span>
          <span>Status</span>
        </div>
        {orders.length === 0 ? (
          <div className="order-row empty">
            <span>No orders yet. Complete checkout to create one.</span>
          </div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-row">
              <div>
                <strong>{order.id}</strong>
                <span>{new Date(order.createdAt).toLocaleString()}</span>
              </div>
              <div>
                <strong>{order.customer.name}</strong>
                <span>{order.customer.email}</span>
              </div>
              <strong>{formatCurrency(order.total)}</strong>
              <span className="status-pill">{order.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
