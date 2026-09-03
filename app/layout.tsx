import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import CartDrawer from "@/components/Cart/CartDrawer";

export const metadata: Metadata = {
  title: "Ole Father — Wear The Word (Brutalism Concept)",
  description: "Bold designs. Original phrases. Heavyweight cotton, made to be worn your way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="announce">FREE SHIPPING ON SELECTED ORDERS // WORLDWIDE DELIVERY</div>
        <Header />
        {children}
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
