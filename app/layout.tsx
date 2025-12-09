import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KidSteps - Premium Children\'s Footwear',
  description: 'Discover comfortable, stylish, and durable footwear for children. Shop sneakers, sandals, boots, school shoes and more.',
  keywords: ['children shoes', 'kids footwear', 'sneakers', 'sandals', 'boots', 'school shoes'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
