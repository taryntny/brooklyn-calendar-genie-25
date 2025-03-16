
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'relative px-3 py-2 transition-all duration-300 hover:text-brooklyn-800',
        isActive 
          ? 'text-brooklyn-800 font-medium' 
          : 'text-gray-600',
        className
      )}
    >
      {children}
      <span 
        className={cn(
          'absolute bottom-0 left-0 w-full h-0.5 bg-brooklyn-600 scale-x-0 transition-transform duration-300 origin-left',
          isActive && 'scale-x-100'
        )}
      />
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-brooklyn-800 flex items-center transition-all duration-300 hover:opacity-80"
        >
          Brooklyn
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/features">Features</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="hover:text-brooklyn-800 hover:bg-brooklyn-50 transition-all duration-300"
            >
              Log in
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-brooklyn-600 hover:bg-brooklyn-700 transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col p-4 space-y-3">
          <NavItem to="/" className="py-3">Home</NavItem>
          <NavItem to="/features" className="py-3">Features</NavItem>
          <NavItem to="/pricing" className="py-3">Pricing</NavItem>
          <NavItem to="/about" className="py-3">About</NavItem>
          <NavItem to="/contact" className="py-3">Contact</NavItem>
          
          <div className="flex flex-col pt-4 space-y-3 border-t border-gray-100">
            <Link to="/login">
              <Button 
                variant="ghost" 
                className="w-full justify-center hover:text-brooklyn-800 hover:bg-brooklyn-50"
              >
                Log in
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                className="w-full justify-center bg-brooklyn-600 hover:bg-brooklyn-700"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
