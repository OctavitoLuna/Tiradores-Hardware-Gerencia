import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Gestión de Tecnología', path: '/gestion-tecnologia' },
    { name: 'Ciencia, Tecnología e Innovación', path: '/ciencia-tecnologia-innovacion' },
    { name: 'Misión y Visión', path: '/mision-vision' },
    { name: 'Organigrama', path: '/organigrama' },
    { name: 'MBTI', path: '/mbti' },
    { name: 'Scrum', path: '/scrum' },
    { name: 'IDEF0', path: '/idef0' },
    { name: 'BPMN', path: '/bpmn' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background border-b border-gray-300">
        <div className="container-wide py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold tracking-wider flex items-center gap-2 group">
            <Cpu size={28} className="text-primary group-hover:rotate-12 transition-transform" />
            Tiradores
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-sans font-medium hover:text-primary transition-colors py-2 relative",
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-primary rounded-t-md"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-background-dark p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-lg font-display tracking-wide uppercase hover:text-primary transition-colors",
                  location.pathname === link.path ? "text-primary border-l-4 border-primary pl-2" : "text-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface text-foreground-inverse py-16">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-display mb-4">Tiradores</h2>
            <p className="text-gray-400 max-w-sm">
              Construimos la base física que sostiene la salud digital. Equipo de Hardware e Infraestructura, IA MediTech.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display mb-4 text-primary">Navegación</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container-wide mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Tiradores Hardware. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>LinkedIn</span>
             <span>Twitter</span>
             <span>GitHub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
