import './globals.css';
import type { Metadata } from 'next';
import Providers from './_utils/provider';
import Navbar from './_components/navbar';
import { WishlistContextProvider } from './_context/WishListContext';

export const metadata: Metadata = {
  title: 'Books App',
  description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <WishlistContextProvider>
            {children}
          </WishlistContextProvider>
        </Providers>
      </body>
    </html>
  );
}
