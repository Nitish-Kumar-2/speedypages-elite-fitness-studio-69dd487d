import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  tagline: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const Hero = (props: HeroProps) => {
  const title = props.title || 'Welcome to Elite Fitness Studio';
  const tagline = props.tagline || 'Transform Your Life Through Fitness';
  const primaryCta = props.primaryCta || 'Get Started';
  const secondaryCta = props.secondaryCta || 'Learn More';

  return (
    <section className="bg-gradient-to-br from-green-500 to-green-700 py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4" aria-label="Hero Title">{title}</h1>
        <p className="text-lg text-white mb-8" aria-label="Hero Tagline">{tagline}</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-gray-200 transition-colors" aria-label="Primary Call to Action">{primaryCta}</a>
          <a href="#" className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-green-700 transition-colors" aria-label="Secondary Call to Action">{secondaryCta}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;