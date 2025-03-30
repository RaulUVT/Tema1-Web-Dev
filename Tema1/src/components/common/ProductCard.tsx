
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  isOnSale?: boolean;
  discountPercentage?: number;
  gender: 'men' | 'women' | 'unisex';
}

const ProductCard = ({ 
  id, 
  name, 
  brand, 
  price, 
  image, 
  isOnSale = false, 
  discountPercentage = 0,
  gender 
}: ProductCardProps) => {
  
  // Calculate sale price if on sale
  const salePrice = isOnSale ? price - (price * (discountPercentage / 100)) : price;
  
  return (
    <div className="product-card group bg-white rounded-lg overflow-hidden shadow hover:-translate-y-1">
      <div className="relative">
        {/* Product Image */}
        <Link to={`/product/${id}`} className="block">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
        </Link>
        
        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 text-sm font-medium">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button className="absolute top-2 left-2 p-2 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
          <Heart size={18} className="text-gray-700 hover:text-red-500 transition-colors" />
        </button>
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-rich-purple text-white py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Add to Cart
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <span className="text-sm text-gray-500 uppercase">{brand}</span>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-gray-800 hover:text-rich-purple transition-colors mt-1">
            {name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <div>
            {isOnSale ? (
              <div className="flex items-center space-x-2">
                <span className="text-red-600 font-medium">€{salePrice.toFixed(2)}</span>
                <span className="text-gray-500 text-sm line-through">€{price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-medium">€{price.toFixed(2)}</span>
            )}
          </div>
          <span className="text-xs uppercase bg-gray-100 py-0.5 px-2 rounded-sm">
            {gender === 'women' ? "Women" : gender === 'men' ? "Men" : "Unisex"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
