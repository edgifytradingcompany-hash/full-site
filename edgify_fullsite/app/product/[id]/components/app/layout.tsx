import { CartProvider } from "../components/CartContext";
<CartProvider>
 <ThemeProvider>
  <Navbar />
  <main>{children}</main>
  <Footer />
 </ThemeProvider>
</CartProvider>
