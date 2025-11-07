import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aether",
  description: "Flower Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-naru bg-surface text-on-surface px-4 tracking-wide antialiased md:px-8">
        <Header />
        {children}
      </body>
    </html>
  );
}
