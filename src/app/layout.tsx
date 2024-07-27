import type { Metadata } from "next";
import "./globals.css";
import { mont } from "@/config/fonts";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Order-Up",
  description: "Una app para ordenar tus comidas favoritas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
