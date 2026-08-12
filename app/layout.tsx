import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Northstar Commerce",
  description: "A modern full-stack Next.js ecommerce starter."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="shell">
            <SiteHeader />
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
