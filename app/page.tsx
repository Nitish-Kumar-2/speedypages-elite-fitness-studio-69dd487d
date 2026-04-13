import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
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
    'primaryCta': 'Get Started',
    'secondaryCta': 'Learn More',
    'title': 'Unleash Your Potential with Elite Fitness',
    'tagline': 'Join our elite fitness community and transform your health with personalized training, group classes, and wellness programs tailored to your goals.'
};
  const featuresProps = {
    'title': 'Why Choose Elite Fitness Studio',
    'subtitle': 'Experience unparalleled fitness solutions designed for your lifestyle and goals.',
    'features': [
        {
            'icon': 'Trophy',
            'title': 'Personalized Training',
            'description': 'Tailored workouts focused on your unique fitness goals.'
        },
        {
            'icon': 'Zap',
            'title': 'Innovative Group Classes',
            'description': 'Engaging classes that keep you motivated while building a supportive community.'
        },
        {
            'icon': 'Star',
            'title': 'Holistic Wellness Programs',
            'description': 'Programs that encompass nutrition, mental health, and fitness.'
        }
    ]
};
  const statsProps = {
    'title': 'Our Impact',
    'stats': [
        {
            'number': '1000+',
            'label': 'Clients Transformed',
            'icon': 'Users'
        },
        {
            'number': '98%',
            'label': 'Customer Satisfaction',
            'icon': 'TrendingUp'
        },
        {
            'number': '5+',
            'label': 'Years in Excellence',
            'icon': 'Activity'
        }
    ]
};
  const testimonialsProps = {
    'title': 'What Our Clients Say',
    'testimonials': [
        {
            'name': 'Sarah Mitchell',
            'role': 'CEO, Elite Fitness Studio',
            'feedback': 'The personal training here has transformed my life! I've lost 30 pounds and gained confidence.',
            'rating': 5
        },
        {
            'name': 'David Chen',
            'role': 'Marketing Director',
            'feedback': 'The group classes are engaging and fun! I love the community atmosphere.',
            'rating': 4
        },
        {
            'name': 'Emily Rodriguez',
            'role': 'Fitness Enthusiast',
            'feedback': 'The wellness programs are comprehensive and tailored to my needs. Highly recommend!',
            'rating': 5
        }
    ]
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
      <Features {...featuresProps} />
      <Stats {...statsProps} />
      <Testimonials {...testimonialsProps} />
      <Services {...servicesProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}