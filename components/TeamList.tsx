import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Users': Users,
  'Star': Star,
  'Trophy': Trophy
};

interface TeamListProps {
  title?: string;
  teamMembers: Array<{ name: string; specialty: string; experience: string; icon?: string }>; 
}

const TeamList = (props: TeamListProps) => {
  const title = props.title || 'Meet Our Team';
  const teamMembers = props.teamMembers || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => {
            const IconComponent = member.icon ? iconMap[member.icon] : Users;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
                <IconComponent className="w-8 h-8 text-primary mb-4 mx-auto" aria-label="Team Member Icon" />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.specialty}</p>
                <p className="text-gray-500">{member.experience} years of experience</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamList;