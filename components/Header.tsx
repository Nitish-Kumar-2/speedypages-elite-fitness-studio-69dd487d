import React from 'react';
import { Home, Users, Settings } from 'lucide-react';

interface HeaderProps {
  logo: string;
  navigation: Array<{ label: string; path: string; }>; 
}

const iconMap: Record<string, React.ElementType> = {
  'Home': Home,
  'Users': Users,
  'Settings': Settings
};

const Header = (props: HeaderProps) => {
  const logo = props.logo || 'Elite Fitness Studio';
  const navigation = props.navigation || [];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-primary">{logo}</h1>
        <nav>
          <ul className="flex space-x-4">
            {navigation.map((item, index) => (
              <li key={index} className="text-gray-700 hover:text-primary">
                <a href={item.path} aria-label={item.label}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;