
import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';

export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  const testimonials = [
    {
      quote: "Brooklyn has been a game-changer for me. I used to spend hours managing my calendar and now it's all automated. The best $4.99 I spend each month!",
      name: "Sarah Johnson",
      title: "Marketing Director"
    },
    {
      quote: "As someone who works across multiple time zones, Brooklyn has eliminated all the mental math I used to do. It just works seamlessly.",
      name: "Michael Chen",
      title: "Software Engineer"
    },
    {
      quote: "I was skeptical at first, but after trying the free trial I was hooked. Brooklyn has saved me countless hours and prevented several scheduling conflicts.",
      name: "Jessica Rivera",
      title: "Freelance Consultant"
    },
    {
      quote: "The setup was incredibly easy and the WhatsApp integration means I can manage my calendar from anywhere. Brilliant service!",
      name: "David Williams",
      title: "Sales Manager"
    },
    {
      quote: "Our entire team now uses Brooklyn and it's transformed how we schedule meetings. Worth every penny for the time it saves us.",
      name: "Emily Taylor",
      title: "Project Manager"
    },
    {
      quote: "I love that I can just forward meeting emails to Brooklyn and it handles everything. So simple yet so powerful.",
      name: "Alex Roberts",
      title: "Entrepreneur"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent -z-10" />
      <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-brooklyn-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-50/30 blur-3xl -z-10" />
      
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={cn(
              "inline-block px-3 py-1 bg-brooklyn-100 text-brooklyn-800 rounded-full text-sm font-medium mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Testimonials
          </span>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-100"
            )}
          >
            Loved by Busy Professionals
          </h2>
          <p 
            className={cn(
              "text-xl text-gray-600 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-200"
            )}
          >
            See what our customers are saying about how Brooklyn has transformed their scheduling experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
