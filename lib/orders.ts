import { promises as fs } from "fs";
import path from "path";
import type { Order, OrderItem } from "@/lib/types";

const ordersFilePath = path.join(process.cwd(), "data", "orders.json");

type CreateOrderInput = {
  customer: Order["customer"];
  items: OrderItem[];
};

async function ensureOrdersFile() {
  await fs.mkdir(path.dirname(ordersFilePath), { recursive: true });

  try {
    await fs.access(ordersFilePath);
  } catch {
    await fs.writeFile(ordersFilePath, "[]", "utf8");
  }
}

export async function getOrders() {
  await ensureOrdersFile();
  const contents = await fs.readFile(ordersFilePath, "utf8");
  return JSON.parse(contents) as Order[];
}

export async function createOrder(input: CreateOrderInput) {
  const orders = await getOrders();
  const total = input.items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  const order: Order = {
    id: `ord_${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "paid",
    customer: input.customer,
    items: input.items,
    total
  };

  orders.unshift(order);
  await fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2), "utf8");
  return order;
}
