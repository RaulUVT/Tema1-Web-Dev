
import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ProductCard from '@/components/common/ProductCard';
import { getDiscountedProducts } from '@/services/productService';
import { Tag, Clock } from 'lucide-react';

const Discounts = () => {
  const discountedProducts = getDiscountedProducts();
  
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-red-600 py-12 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair mb-2">Special Offers</h1>
          <p className="text-white/90">Limited-time discounts on premium fragrances</p>
        </div>
      </div>

      {/* Countdown Banner */}
      <div className="bg-gray-900 text-white py-4 flex justify-center items-center">
        <Clock className="mr-2" size={20} />
        <span>Limited Time Offer - Ends in: <span className="font-bold">5 days 12 hours</span></span>
      </div>
      
      {/* Discounted Products */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle
            title="Current Discounts"
            subtitle="Take advantage of our limited-time offers on these premium fragrances."
            centered
          />
          
          {discountedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {discountedProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No discounted products available at the moment.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Promotional Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Tag className="text-red-500" size={24} />
              </div>
              <h3 className="font-playfair text-xl mb-2">New Customer Discount</h3>
              <p className="text-gray-600">
                Sign up for an account and get 10% off your first purchase with code <span className="font-medium">WELCOME10</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <path d="M8 21h8"></path>
                  <path d="M12 17v4"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl mb-2">Mobile App Discount</h3>
              <p className="text-gray-600">
                Download our mobile app and receive 10% off your first in-app purchase
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl mb-2">Loyalty Rewards</h3>
              <p className="text-gray-600">
                Join our rewards program and earn up to 30% discount as you shop
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Shipping Banner */}
      <section className="py-10 bg-rich-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-playfair mb-2">Free Shipping on Orders Over €80</h2>
          <p className="mb-4">Orders under €80 have a flat shipping fee of €5</p>
          <a href="/collections" className="inline-block bg-white text-rich-purple py-2 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Discounts;
