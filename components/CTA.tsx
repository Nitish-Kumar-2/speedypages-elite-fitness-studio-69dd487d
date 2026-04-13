import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
}

const CTA = (props: CTAProps) => {
  const title = props.title;
  const description = props.description;
  const primaryButton = props.primaryButton;
  const secondaryButton = props.secondaryButton;

  return (
    <div className="py-12 px-4 md:py-16 bg-gradient-to-br from-green-500 to-green-700 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-6 text-lg">{description}</p>
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-200 transition-colors">{primaryButton}</button>
        {secondaryButton && (
          <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors">{secondaryButton}</button>
        )}
      </div>
    </div>
  );
};

export default CTA;