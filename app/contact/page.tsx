import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elite Fitness Studio - Contact Us - Elite Fitness Studio",
  description: "Get in touch with Elite Fitness Studio for inquiries about our fitness programs and membership."
};

export default function ContactPage() {
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
    'primaryCta': 'Contact Us',
    'secondaryCta': 'FAQs',
    'title': 'Get in Touch with Us',
    'tagline': 'Have questions? We're here to help you on your fitness journey!'
};
  const contactformProps = {
    'title': 'Get In Touch With Us'
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
      <ContactForm {...contactformProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}