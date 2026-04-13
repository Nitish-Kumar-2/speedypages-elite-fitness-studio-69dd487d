'use client';
import React, { useState } from 'react';
import { Users, Mail, Phone } from 'lucide-react';

interface ContactFormProps {
  title: string;
  subtitle?: string;
}

const ContactForm = (props: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
      {props.subtitle && <p className="text-lg text-gray-600 mb-6">{props.subtitle}</p>}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            <Users className="inline-block w-6 h-6 text-primary mr-2" aria-hidden="true" />
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <Mail className="inline-block w-6 h-6 text-primary mr-2" aria-hidden="true" />
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            <Phone className="inline-block w-6 h-6 text-primary mr-2" aria-hidden="true" />
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Write your message here"
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;