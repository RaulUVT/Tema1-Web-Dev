
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
