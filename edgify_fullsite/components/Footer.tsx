import ThemeToggle from './ThemeToggle';

export default function Footer(){
 return (
  <footer className="p-6 text-center border-t mt-20 opacity-80">
    <p>© 2025 Edgify</p>
    <div className="mt-2"><ThemeToggle/></div>
  </footer>
 );
}