import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/inicio" className="flex items-center space-x-2">
            <img 
              src="/favicon.png" 
              alt="GuiaDeVan" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-800">GuiaDeVan</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/inicio" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Início
            </Link>
            <Link 
              to="/servico" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Serviços
            </Link>
            <Link 
              to="/sobrenos" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contato
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://reddit.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              <img src="/src/assets/reddit-icon.png" alt="Reddit" className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
