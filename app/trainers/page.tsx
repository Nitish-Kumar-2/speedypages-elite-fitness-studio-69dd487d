import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamList from "@/components/TeamList";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elite Fitness Studio - Meet Our Trainers - Elite Fitness Studio",
  description: "Discover the experienced trainers at Elite Fitness Studio dedicated to helping you achieve your fitness goals."
};

export default function TrainersPage() {
  const headerProps = {
    'logo': 'Elite Fitness Studio',
    'navigation': [
        {
            'label': 'Home',
            'path': '/'
        },
        {
            'label': 'Trainers',
            'path': '/trainers'
        },
        {
            'label': 'Membership',
            'path': '/membership'
        },
        {
            'label': 'Contact',
            'path': '/contact'
        }
    ]
};
  const heroProps = {
    'headline': 'Unleash Your Potential with Elite Fitness',
    'subheadline': 'Discover amazing features and services',
    'primaryCta': 'Start Training',
    'secondaryCta': 'Meet Our Team',
    'title': 'Meet Our Expert Trainers',
    'tagline': 'Our certified trainers are here to guide you through your fitness journey with personalized attention and support.'
};
  const teamlistProps = {
    'title': 'Meet Our Expert Trainers',
    'teamMembers': [
        {
            'name': 'John Doe',
            'specialty': 'Personal Trainer',
            'experience': '5',
            'icon': 'Users'
        },
        {
            'name': 'Jane Smith',
            'specialty': 'Nutrition Coach',
            'experience': '8',
            'icon': 'Star'
        },
        {
            'name': 'Mike Johnson',
            'specialty': 'Group Fitness Instructor',
            'experience': '6',
            'icon': 'Trophy'
        },
        {
            'name': 'Emily Davis',
            'specialty': 'Yoga Instructor',
            'experience': '4',
            'icon': 'Users'
        },
        {
            'name': 'Chris Lee',
            'specialty': 'Strength Coach',
            'experience': '10',
            'icon': 'Star'
        }
    ]
};
  const testimonialsProps = {
    'title': 'What Our Clients Say',
    'testimonials': [
        {
            'name': 'Emily White',
            'role': 'Client',
            'feedback': 'The trainers are incredible! I've lost 20 lbs and feel amazing.',
            'rating': 5
        },
        {
            'name': 'Tom Brown',
            'role': 'Client',
            'feedback': 'The group classes are fun and motivational!',
            'rating': 4
        }
    ]
};
  const ctaProps = {
    'title': 'Join Elite Fitness Today!',
    'description': 'Transform your life through fitness with our tailored programs and expert trainers. Start your journey now and unlock your potential.',
    'primaryButton': 'Get Started',
    'secondaryButton': 'Learn More'
};
  const footerProps = {
    'companyName': 'Elite Fitness Studio',
    'copyright': '© 2026 Elite Fitness Studio. All rights reserved.',
    'links': [
        {
            'label': 'Privacy',
            'path': '/privacy'
        },
        {
            'label': 'Terms',
            'path': '/terms'
        }
    ]
};

  return (
    <main className="min-h-screen">
      <Header {...headerProps} />
      <Hero {...heroProps} />
      <TeamList {...teamlistProps} />
      <Testimonials {...testimonialsProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}