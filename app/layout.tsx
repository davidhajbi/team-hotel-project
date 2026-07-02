import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Q2C Travel | AI Quote-to-Close for Travel Agencies',
  description:
    'Q2C Travel helps travel agencies turn every inquiry into a profitable, followed-up offer from quote to payment and booking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
