import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  companyName: string;
  copyright: string;
  links?: Array<{ label: string; path: string }>; 
}

const Footer = (props: FooterProps) => {
  const links = props.links || [];
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{props.companyName}</h2>
            <p className="text-sm">&copy; {new Date().getFullYear()} {props.copyright}</p>
          </div>
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <a key={index} href={link.path} className="hover:underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;