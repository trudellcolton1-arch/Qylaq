import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Qylaq - Crystal Currency of 3000',
  description: 'The future of value is clarity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}