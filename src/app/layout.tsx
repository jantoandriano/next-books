import './globals.css';
import type { Metadata } from 'next';
import Providers from './_utils/provider';
import Navbar from './_components/navbar';

export const metadata: Metadata = {
  title: 'Books App',
  description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
