import ThemeToggle from './ThemeToggle';

export default function Navbar(){
 return (
  <nav className="flex justify-between items-center p-4 border-b">
   <img src="/logo.png" className="w-12" />
   <ThemeToggle />
  </nav>
 );
}