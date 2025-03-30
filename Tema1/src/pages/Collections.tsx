
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle';
import ProductCard from '@/components/common/ProductCard';
import { getAllProducts, getProductsByGender } from '@/services/productService';
import { Filter, Check } from 'lucide-react';

const Collections = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialGenderFilter = queryParams.get('gender') as 'men' | 'women' | null;
  
  const [products, setProducts] = useState(getAllProducts());
  const [filters, setFilters] = useState({
    gender: initialGenderFilter || 'all',
    priceRange: 'all',
    sort: 'name-asc',
    brand: 'all',
  });
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Update products when filters change
  useEffect(() => {
    let filteredProducts = getAllProducts();
    
    // Apply gender filter
    if (filters.gender !== 'all') {
      filteredProducts = getProductsByGender(filters.gender as 'men' | 'women');
    }
    
    // Apply price range filter
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-50':
          filteredProducts = filteredProducts.filter(product => product.price < 50);
          break;
        case '50-100':
          filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case '100-150':
          filteredProducts = filteredProducts.filter(product => product.price > 100 && product.price <= 150);
          break;
        case 'over-150':
          filteredProducts = filteredProducts.filter(product => product.price > 150);
          break;
      }
    }
    
    // Apply brand filter
    if (filters.brand !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
        product.brand.toLowerCase() === filters.brand.toLowerCase()
      );
    }
    
    // Apply sorting
    switch (filters.sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    
    setProducts(filteredProducts);
  }, [filters]);
  
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    
    // Close mobile filter after selection
    if (window.innerWidth < 768) {
      setIsMobileFilterOpen(false);
    }
  };
  
  const uniqueBrands = [...new Set(getAllProducts().map(product => product.brand))];
  
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-gray-900 py-12 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair mb-2">Our Collection</h1>
          <p className="text-gray-300">Discover our premium selection of luxury fragrances</p>
        </div>
      </div>
      
      {/* Collections Grid with Filters */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Mobile filter toggle */}
            <div className="md:hidden mb-6">
              <button 
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md bg-white shadow-sm"
              >
                <Filter size={18} />
                <span>Filter Products</span>
              </button>
            </div>
            
            {/* Filters Sidebar */}
            <div 
              className={`
                md:w-64 md:pr-8 mb-8 md:mb-0 flex-shrink-0
                ${isMobileFilterOpen ? 'block' : 'hidden'} md:block
              `}
            >
              <div className="sticky top-24">
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-playfair text-lg mb-3">Gender</h3>
                  <div className="space-y-2">
                    {['all', 'men', 'women'].map((gender) => (
                      <label key={gender} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          checked={filters.gender === gender}
                          onChange={() => handleFilterChange('gender', gender)}
                          className="mr-2"
                        />
                        <span className="capitalize">{gender === 'all' ? 'All' : gender}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-playfair text-lg mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under-50', label: 'Under €50' },
                      { value: '50-100', label: '€50 - €100' },
                      { value: '100-150', label: '€100 - €150' },
                      { value: 'over-150', label: 'Over €150' },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === range.value}
                          onChange={() => handleFilterChange('priceRange', range.value)}
                          className="mr-2"
                        />
                        <span>{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="pb-4 mb-4">
                  <h3 className="font-playfair text-lg mb-3">Brand</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        checked={filters.brand === 'all'}
                        onChange={() => handleFilterChange('brand', 'all')}
                        className="mr-2"
                      />
                      <span>All Brands</span>
                    </label>
                    
                    {uniqueBrands.map((brand) => (
                      <label key={brand} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="brand"
                          checked={filters.brand === brand}
                          onChange={() => handleFilterChange('brand', brand)}
                          className="mr-2"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{products.length} products</p>
                
                <select 
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1.5"
                >
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-600">No products match your filter criteria.</p>
                  <button 
                    onClick={() => setFilters({gender: 'all', priceRange: 'all', sort: 'name-asc', brand: 'all'})}
                    className="mt-4 text-rich-purple underline"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
