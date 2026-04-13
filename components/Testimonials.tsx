import React from 'react';
import { Star, Trophy, Users } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Star': Star,
  'Trophy': Trophy,
  'Users': Users
};

interface TestimonialsProps {
  title?: string;
  testimonials: Array<{ name: string; role: string; feedback: string; rating?: number }>; 
}

const Testimonials = (props: TestimonialsProps) => {
  const title = props.title || 'What Our Clients Say';
  const testimonials = props.testimonials || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.rating ? iconMap['Star'] : Users;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <IconComponent className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 italic">{testimonial.role}</p>
                <p className="mt-4 text-gray-800">“{testimonial.feedback}”</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;