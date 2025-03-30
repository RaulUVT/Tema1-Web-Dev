
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="font-playfair text-2xl mb-4 text-gold">ESSENCE<span className="text-white">ELITE</span></h3>
            <p className="text-gray-300 mb-4">
              Discover the finest collection of luxury fragrances from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-4 border-b border-gray-700 pb-2">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/collections" className="text-gray-300 hover:text-white">All Fragrances</Link></li>
              <li><Link to="/collections?gender=men" className="text-gray-300 hover:text-white">Men's Fragrances</Link></li>
              <li><Link to="/collections?gender=women" className="text-gray-300 hover:text-white">Women's Fragrances</Link></li>
              <li><Link to="/discounts" className="text-gray-300 hover:text-white">Special Offers</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-300 hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Info Pages */}
          <div>
            <h4 className="font-playfair text-lg mb-4 border-b border-gray-700 pb-2">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-gray-300 hover:text-white">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>ESSENCEELITE Headquarters<br />Victory Square, Timișoara, Romania</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+40 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@essenceelite.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Shipping & Return Summary */}
        <div className="border-t border-gray-700 mt-12 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-gold font-playfair mb-2">Shipping</h5>
              <ul className="text-gray-300">
                <li>• Orders over €80: Free shipping</li>
                <li>• Orders under €80: €5 shipping fee</li>
              </ul>
            </div>
            <div>
              <h5 className="text-gold font-playfair mb-2">Returns</h5>
              <p className="text-gray-300">
                Products can be returned only if the box remains sealed and the original receipt is provided.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
          <p>© {new Date().getFullYear()} ESSENCEELITE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
