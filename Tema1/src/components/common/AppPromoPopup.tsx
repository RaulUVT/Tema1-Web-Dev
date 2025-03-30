
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AppPromoPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasClosedBefore, setHasClosedBefore] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has closed popup before
    const hasClosedPopup = localStorage.getItem('appPromoPopupClosed');
    setHasClosedBefore(!!hasClosedPopup);
    
    // Show popup after 15 seconds if they haven't closed it before
    if (!hasClosedPopup) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, 15000); // 15 seconds
      
      return () => clearTimeout(timeout);
    }
  }, []);
  
  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('appPromoPopupClosed', 'true');
    setHasClosedBefore(true);
  };
  
  if (!isOpen || hasClosedBefore) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-playfair font-semibold">Download Our App</h3>
          <button 
            onClick={closePopup}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="bg-rich-purple p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 18v-6"></path>
              <path d="M8 18v-1"></path>
              <path d="M16 18v-3"></path>
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <path d="M6 21h12"></path>
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-800">Enjoy 10% off your first order</p>
            <p className="text-gray-500 text-sm">Download our mobile app and get an exclusive discount!</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <a href="#" className="flex-1 bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors">
            App Store
          </a>
          <a href="#" className="flex-1 bg-rich-purple text-white text-center py-2 rounded-md hover:bg-dark-purple transition-colors">
            Google Play
          </a>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By downloading, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default AppPromoPopup;
