import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elite Fitness Studio - Membership Plans - Elite Fitness Studio",
  description: "Explore our membership options and find the perfect plan to fit your lifestyle and fitness goals."
};

export default function MembershipPage() {
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
    'primaryCta': 'Join Now',
    'secondaryCta': 'Explore Membership Options',
    'title': 'Join the Elite Fitness Community',
    'tagline': 'Become a member and access premium fitness solutions including personal training and group classes.'
};
  const servicesProps = {
    'title': 'Our Services',
    'subtitle': 'Explore our range of fitness offerings',
    'services': [
        {
            'icon': 'Dumbbell',
            'title': 'Personal Training',
            'description': 'One-on-one personalized training sessions with experienced trainers to help you achieve your fitness goals.',
            'price': '$75/session'
        },
        {
            'icon': 'Users',
            'title': 'Group Classes',
            'description': 'Engaging group classes that include HIIT, yoga, pilates, and more, designed to motivate and challenge you.',
            'price': '$25/class'
        },
        {
            'icon': 'Heart',
            'title': 'Nutrition Coaching',
            'description': 'Tailored nutrition plans and advice from certified nutritionists to support your health and fitness journey.',
            'price': '$150/month'
        }
    ]
};
  const benefitsProps = {
    'title': 'Our Benefits',
    'benefits': [
        {
            'icon': 'Coffee',
            'title': 'Personal Training',
            'description': 'Receive tailored training sessions with our certified trainers to achieve your fitness goals.'
        },
        {
            'icon': 'Users',
            'title': 'Group Classes',
            'description': 'Join our dynamic group classes that foster community and motivation among participants.'
        },
        {
            'icon': 'Star',
            'title': 'Wellness Programs',
            'description': 'Participate in our comprehensive wellness programs designed to enhance your overall health.'
        },
        {
            'icon': 'Coffee',
            'title': 'Nutrition Guidance',
            'description': 'Get personalized nutrition advice from our expert dieticians to complement your fitness journey.'
        },
        {
            'icon': 'Users',
            'title': 'Flexible Scheduling',
            'description': 'Enjoy the flexibility of scheduling your workouts at your convenience with our extended hours.'
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
      <Services {...servicesProps} />
      <Benefits {...benefitsProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}