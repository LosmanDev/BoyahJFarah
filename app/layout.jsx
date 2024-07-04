import { Roboto_Slab } from 'next/font/google';
import './globals.css';

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Boyah J Farah',
  description: "Boyah J Farah's blog for his creative think pieces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
