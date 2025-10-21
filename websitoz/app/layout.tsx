import './globals.css';
import Script from 'next/script';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'Websitoz',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
