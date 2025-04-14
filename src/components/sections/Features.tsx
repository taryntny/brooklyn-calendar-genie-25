import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  Clock, 
  Globe, 
  MessageSquare, 
  RefreshCw, 
  Clock4, 
  AlertTriangle,
  Check
} from 'lucide-react';

export const Features: React.FC = () => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Brooklyn on WhatsApp",
      description: "Add Brooklyn as a WhatsApp contact for just $4.99/month and manage your calendar through simple text messages."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Automatic Calendar Events",
      description: "Forward your meeting details to Brooklyn and it automatically creates calendar events with all the necessary information."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Conflict Detection",
      description: "Brooklyn warns you about scheduling conflicts so you never double-book yourself again."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Timezone Support",
      description: "Seamlessly handle meetings across different time zones without confusion or manual calculations."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Get up and running in just 2 steps."
    },
    {
      icon: <Clock4 className="w-6 h-6" />,
      title: "Time Savings",
      description: "Save up to 2 hours every week by eliminating manual calendar management and coordination tasks."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Free Trial",
      description: "Try Brooklyn risk-free for 2 weeks with no credit card required. Cancel anytime if you're not satisfied."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Smart Reminders",
      description: "Get timely reminders about upcoming meetings directly through WhatsApp."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brooklyn-100/50 blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-50/50 blur-3xl -z-10" />
      
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
            How It Works
          </span>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-100"
            )}
          >
            Your Personal Calendar Assistant
          </h2>
          <p 
            className={cn(
              "text-xl text-gray-600 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-200"
            )}
          >
            Brooklyn makes calendar management effortless by handling all the details for you,
            so you can focus on what truly matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
