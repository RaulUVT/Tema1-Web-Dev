
import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { ingredientsData } from '@/services/productService';

const Ingredients = () => {
  const { notes, families } = ingredientsData;
  
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-gray-900 py-12 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair mb-2">Perfume Ingredients & Notes</h1>
          <p className="text-gray-300">Understanding the building blocks of fine fragrances</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              The art of perfumery involves combining various ingredients to create complex and evocative scents. 
              Understanding the different notes and fragrance families can help you appreciate perfumes on a deeper level 
              and find scents that resonate with your personal preferences.
            </p>
            <p className="text-gray-700">
              A perfume's composition is often described in terms of "notes" - the individual scents that can be detected throughout 
              the wearing experience. These notes are typically categorized into top, middle, and base notes, each revealing themselves 
              at different times.
            </p>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto">
          <SectionTitle
            title="Understanding Perfume Notes"
            subtitle="How fragrances evolve over time on your skin"
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Top Notes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-rich-purple/10 flex items-center justify-center mr-3">
                    <span className="font-playfair font-bold text-rich-purple">1</span>
                  </div>
                  <h3 className="font-playfair text-xl">Top Notes</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The initial, lighter scents that are perceived immediately upon application. These evaporate quickly, typically lasting 5-15 minutes.
                </p>
                <ul className="space-y-3">
                  {notes.top.map((note, index) => (
                    <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium block">{note.name}</span>
                      <span className="text-gray-600 text-sm">{note.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Middle Notes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-rich-purple/10 flex items-center justify-center mr-3">
                    <span className="font-playfair font-bold text-rich-purple">2</span>
                  </div>
                  <h3 className="font-playfair text-xl">Middle Notes</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The "heart" of the fragrance that emerges after the top notes fade. These typically last 2-4 hours and form the main character of the perfume.
                </p>
                <ul className="space-y-3">
                  {notes.middle.map((note, index) => (
                    <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium block">{note.name}</span>
                      <span className="text-gray-600 text-sm">{note.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Base Notes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-rich-purple/10 flex items-center justify-center mr-3">
                    <span className="font-playfair font-bold text-rich-purple">3</span>
                  </div>
                  <h3 className="font-playfair text-xl">Base Notes</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The foundation of the fragrance that appears once the middle notes dissipate. These can last 5-10 hours and give the perfume its longevity and depth.
                </p>
                <ul className="space-y-3">
                  {notes.base.map((note, index) => (
                    <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium block">{note.name}</span>
                      <span className="text-gray-600 text-sm">{note.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fragrance Families */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle
            title="Fragrance Families"
            subtitle="The major categories used to classify and organize perfumes"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {families.map((family, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair text-xl mb-3">{family.name}</h3>
                <p className="text-gray-600 mb-4">{family.description}</p>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Notable Examples:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {family.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto">
          <SectionTitle
            title="Fascinating Fragrance Facts"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-lg mb-2">The Power of Scent Memory</h3>
              <p className="text-gray-600">
                The olfactory bulb is part of the brain's limbic system, which is closely associated with memory and emotion. 
                This is why certain scents can trigger vivid memories or strong emotional responses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-lg mb-2">Natural vs Synthetic</h3>
              <p className="text-gray-600">
                Modern perfumery uses both natural extracts and synthetic molecules. Synthetics can provide consistency, 
                sustainability, and novel scent profiles that aren't found in nature.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-lg mb-2">Concentration Matters</h3>
              <p className="text-gray-600">
                The concentration of aromatic compounds determines whether a fragrance is classified as perfume (15-30%), 
                eau de parfum (15-20%), eau de toilette (5-15%), or eau de cologne (2-4%).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-lg mb-2">Skin Chemistry</h3>
              <p className="text-gray-600">
                The same fragrance can smell different on different people due to variations in skin pH, temperature, 
                and natural oils. This is why testing a perfume on your own skin is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-rich-purple text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-playfair mb-4">Find Your Perfect Fragrance</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Now that you understand more about perfume ingredients and notes, explore our collection 
            to discover the perfect scent that matches your preferences.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/collections?gender=men" className="bg-white text-rich-purple py-2.5 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Men's Fragrances
            </a>
            <a href="/collections?gender=women" className="bg-white text-rich-purple py-2.5 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Women's Fragrances
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ingredients;
