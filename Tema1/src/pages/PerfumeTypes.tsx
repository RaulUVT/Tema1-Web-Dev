
import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { perfumeTypes } from '@/services/productService';

const PerfumeTypes = () => {
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-gray-900 py-12 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair mb-2">Popular Perfume Types</h1>
          <p className="text-gray-300">Discover the different fragrance families for men and women</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-playfair mb-4">Understanding Fragrance Families</h2>
            <p className="text-gray-600">
              Perfumes are categorized into different families based on their dominant scent characteristics. 
              These classifications help you identify scents you might enjoy and provide a framework for exploring 
              new fragrances that match your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Men's Fragrances */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="Men's Fragrance Types" 
            subtitle="Explore the most popular fragrance families for men"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perfumeTypes.men.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair text-xl mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Popular Examples:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {type.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Women's Fragrances */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="Women's Fragrance Types" 
            subtitle="Explore the most popular fragrance families for women"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perfumeTypes.women.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair text-xl mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Popular Examples:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {type.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finding Your Signature Scent */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Finding Your Signature Scent" 
              subtitle="Tips for discovering the perfect fragrance that suits your personality"
              centered
            />
            
            <div className="bg-white p-8 rounded-lg shadow">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-rich-purple text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium mb-1">Consider Your Preferences</h4>
                    <p className="text-gray-600">Think about scents you already enjoy in nature, food, or other products. This can guide you toward fragrance families you might like.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-rich-purple text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium mb-1">Test Before Purchasing</h4>
                    <p className="text-gray-600">Fragrances react differently with each person's skin chemistry. Always test a fragrance on your skin and see how it develops over several hours.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-rich-purple text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium mb-1">Consider the Occasion</h4>
                    <p className="text-gray-600">Some fragrances are better suited for specific seasons or occasions. Fresh scents work well for daytime and summer, while richer, warmer fragrances might be better for evening or winter.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-rich-purple text-white flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <h4 className="font-medium mb-1">Start with Sample Sizes</h4>
                    <p className="text-gray-600">Many brands offer sample sizes or discovery sets that allow you to try multiple fragrances before committing to a full bottle.</p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-8 text-center">
                <a href="/collections" className="btn-primary">
                  Explore Our Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfumeTypes;
