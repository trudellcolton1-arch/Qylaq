import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qylaq | Crystal Currency of 3000",
  description: "The clarity-based economy of the future",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}