'use client';
import React, { useState } from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface NewsletterProps {
  title: string;
  description: string;
  buttonText: string;
}

const Newsletter = (props: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic
    console.log(`Email submitted: ${email}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{props.title}</h2>
      <p className="text-lg text-gray-700 mb-6">{props.description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow p-3 border border-gray-300 rounded-md mr-0 md:mr-2 mb-4 md:mb-0"
        />
        <button type="submit" className="px-6 py-3 bg-[#10B981] text-white rounded-lg hover:bg-[#0e8b6b] transition-colors">
          <Coffee className="w-6 h-6 inline-block mr-2" />
          {props.buttonText}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;