import './globals.css';
import Script from 'next/script';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'Websitoz',
  description: '',
  icons: {
    icon: 'https://instagram.fdel63-1.fna.fbcdn.net/v/t51.2885-19/485398546_1321325272449258_1299840672708163635_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fdel63-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFeAZ-B9btK9po-Y4eBS5eApRYWRE7ytKN68NONwYypjysgX41v2pi5s4Hz_7E1MFc&_nc_ohc=f8PKPUKpZoUQ7kNvwFSfeSC&_nc_gid=XDTmhscIjqql8v3K8fjpYw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AffTPtgFLSstg8iJFoEkvObPKymKspKJuz95cjt7JECMmw&oe=68FD7666&_nc_sid=8b3546', // this sets the favicon
  },
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
