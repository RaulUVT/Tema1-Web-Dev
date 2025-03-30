
import React from 'react';
import Hero from '@/components/common/Hero';
import SectionTitle from '@/components/common/SectionTitle';
import ProductCard from '@/components/common/ProductCard';
import RewardsSection from '@/components/home/RewardsSection';
import AccountSignup from '@/components/account/AccountSignup';
import { getAllProducts, getDiscountedProducts } from '@/services/productService';

const Home = () => {
  const featuredProducts = getAllProducts().slice(0, 4);
  const discountedProducts = getDiscountedProducts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Discover the Essence of Luxury"
        subtitle="Explore our curated collection of premium fragrances that define your signature style."
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&auto=format&fit=crop"
        buttonText="Explore Collection"
        buttonLink="/collections"
      />
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle
            title="Featured Fragrances"
            subtitle="Discover our selection of premium scents crafted by world-renowned perfumers."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/collections" className="btn-outline">
              View All Fragrances
            </a>
          </div>
        </div>
      </section>
      
      {/* Blurred Background Section */}
      <section 
        className="py-20 bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1595425970377-c61637d01558?q=80&auto=format&fit=crop')",
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6 text-white">
            The Art of Fragrance
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Every scent tells a story. Discover yours in our collection of meticulously crafted fragrances from the world's finest perfumers.
          </p>
          <a href="/perfume-types" className="btn-primary">
            Explore Fragrance Families
          </a>
        </div>
      </section>
      
      {/* Special Offers */}
      {discountedProducts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="container mx-auto">
            <SectionTitle
              title="Special Offers"
              subtitle="Limited-time discounts on select premium fragrances."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {discountedProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a href="/discounts" className="btn-primary">
                View All Discounts
              </a>
            </div>
          </div>
        </section>
      )}
      
      {/* Rewards Program */}
      <RewardsSection />
      
      {/* Account Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <AccountSignup />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
