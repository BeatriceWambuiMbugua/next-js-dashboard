import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/navbar';


const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "E-commerce Platform",
  description: "Created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
         <Navbar/>
        {children}
      </body>
    </html>
  );
}
