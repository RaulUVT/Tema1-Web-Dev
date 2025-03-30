
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-gray-50 min-h-[70vh] flex items-center">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 text-rich-purple">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! This page doesn't seem to exist.</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="btn-primary"
          >
            Return to Home
          </Link>
          <Link 
            to="/collections" 
            className="btn-outline"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
