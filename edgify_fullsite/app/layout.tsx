import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeProvider from '../components/ThemeProvider';

export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body>
    <ThemeProvider>
     <Navbar />
     <main>{children}</main>
     <Footer />
    </ThemeProvider>
   </body>
  </html>
 );
}