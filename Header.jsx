import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import guiaDeVanLogo from '../assets/guiadevan-logo.png'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.png'
import redditIcon from '../assets/reddit-icon.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { name: 'Início', path: '/inicio' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobrenos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Blog', path: '/blog' }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: instagramIcon, url: '#' },
    { name: 'Facebook', icon: facebookIcon, url: '#' },
    { name: 'Reddit', icon: redditIcon, url: '#' }
  ]

  const isActivePath = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/inicio" className="flex items-center">
              <img 
                src={guiaDeVanLogo} 
                alt="GuiaDeVan" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button 
              asChild
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
            >
              <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                ENTRAR EM CONTATO
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full overflow-hidden"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="w-full h-full object-cover"
                    />
                  </a>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                    ENTRAR EM CONTATO
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
