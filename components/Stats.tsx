import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Coffee': Coffee,
  'Users': Users,
  'Star': Star
};

interface StatsProps {
  title?: string;
  stats: Array<{ number: string; label: string; icon?: string }>; 
}

const Stats = (props: StatsProps) => {
  const title = props.title || 'Our Achievements';
  const stats = props.stats || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">{title}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon ? iconMap[stat.icon] : Star;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <IconComponent className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-3xl font-semibold text-gray-800">{stat.number}</h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;