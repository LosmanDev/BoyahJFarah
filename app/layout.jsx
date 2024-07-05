import { Roboto_Slab } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
