
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-brooklyn-800">Brooklyn</h2>
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Your personal assistant for seamless calendar management and scheduling.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brooklyn-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brooklyn-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brooklyn-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Terms</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Privacy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-brooklyn-600 transition-colors duration-300">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Brooklyn. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-brooklyn-600 text-sm flex items-center transition-colors duration-300"
            >
              Made with Lovable
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
