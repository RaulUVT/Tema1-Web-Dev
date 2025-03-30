
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Collections', path: '/collections' },
    { title: 'Perfume Types', path: '/perfume-types' },
    { title: 'Discounts', path: '/discounts' },
    { title: 'Ingredients', path: '/ingredients' },
  ];

  return (
    <header className={`sticky-nav ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-rich-purple">ESSENCE<span className="text-gold">ELITE</span></h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`font-medium transition-colors hover:text-rich-purple ${
                location.pathname === link.path ? 'text-rich-purple' : 'text-gray-700'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="p-2 hover:text-rich-purple">
            <Search size={20} />
          </button>
          <Link to="/account" className="p-2 hover:text-rich-purple">
            <User size={20} />
          </Link>
          <Link to="/cart" className="p-2 hover:text-rich-purple">
            <ShoppingBag size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 z-50" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'menu-open' : 'menu-closed'
          }`}
        >
          <div className="container mx-auto py-20 px-6">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-xl font-medium ${
                    location.pathname === link.path ? 'text-rich-purple' : 'text-gray-800'
                  }`}
                >
                  {link.title}
                </Link>
              ))}

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link to="/delivery" className="text-gray-600 hover:text-rich-purple">Delivery Methods</Link></li>
                  <li><Link to="/pricing" className="text-gray-600 hover:text-rich-purple">Pricing</Link></li>
                  <li><Link to="/returns" className="text-gray-600 hover:text-rich-purple">Return Policy</Link></li>
                </ul>
              </div>

              <div className="flex space-x-4 pt-6">
                <Link to="/account" className="p-2 hover:text-rich-purple">
                  <User size={20} />
                </Link>
                <Link to="/cart" className="p-2 hover:text-rich-purple">
                  <ShoppingBag size={20} />
                </Link>
                <button className="p-2 hover:text-rich-purple">
                  <Search size={20} />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
