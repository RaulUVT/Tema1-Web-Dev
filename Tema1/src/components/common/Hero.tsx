
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttonText = "Shop Now", 
  buttonLink = "/collections"
}: HeroProps) => {
  return (
    <section 
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-start"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="container mx-auto relative z-10 animate-fade-in">
        <div className="max-w-xl px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 text-shadow">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white mb-8 text-shadow">
              {subtitle}
            </p>
          )}
          {buttonText && (
            <a
              href={buttonLink}
              className="btn-primary inline-block"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
