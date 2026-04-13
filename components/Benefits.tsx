import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Coffee': Coffee,
  'Users': Users,
  'Star': Star
};

interface BenefitsProps {
  title?: string;
  benefits: Array<{icon: string; title: string; description: string}>;
}

const Benefits = (props: BenefitsProps) => {
  const title = props.title || 'Our Benefits';
  const benefits = props.benefits || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">{title}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || Star;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;