import React from 'react';
import { Trophy, Shield, Zap, Users, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Trophy': Trophy,
  'Shield': Shield,
  'Zap': Zap,
  'Users': Users,
  'Star': Star
};

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Array<{ icon: string; title: string; description: string; }>; 
}

const Features = (props: FeaturesProps) => {
  const title = props.title || 'Our Outstanding Features';
  const subtitle = props.subtitle || 'Explore what makes us unique';
  const features = props.features || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Star;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <IconComponent className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;