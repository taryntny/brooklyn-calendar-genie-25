
import React from 'react';
import PricingCard from '@/components/ui/PricingCard';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';

export const Pricing: React.FC = () => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-3/4 h-1/2 bg-gray-50 rounded-l-3xl -z-10" />
      <div className="absolute -top-20 left-20 w-72 h-72 rounded-full bg-brooklyn-50/50 blur-3xl -z-10" />
      
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
            Simple Pricing
          </span>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-100"
            )}
          >
            Start Saving Time Today
          </h2>
          <p 
            className={cn(
              "text-xl text-gray-600 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-200"
            )}
          >
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Monthly"
            description="Perfect for trying out Brooklyn's features"
            price="$4.99"
            duration="/month"
            features={[
              { text: "Brooklyn as WhatsApp contact" },
              { text: "Unlimited calendar events" },
              { text: "Connect one calendar" },
              { text: "Multi-timezone support" },
              { text: "Email support" },
            ]}
            buttonText="Start Free Trial"
            buttonLink="/login"
            index={0}
          />
          
          <PricingCard
            title="Annual"
            description="Our most popular plan with big savings"
            price="$47.88"
            duration="/year"
            features={[
              { text: "Brooklyn as WhatsApp contact" },
              { text: "Unlimited calendar events" },
              { text: "Connect multiple calendars" },
              { text: "Multi-timezone support" },
              { text: "Priority email support" },
              { text: "Save 20% ($11.99)" },
            ]}
            buttonText="Start Free Trial"
            buttonLink="/login"
            popular={true}
            index={1}
          />
          
          <PricingCard
            title="Team"
            description="For businesses with multiple users"
            price="Contact us"
            duration=""
            features={[
              { text: "All Annual plan features" },
              { text: "Multiple user accounts" },
              { text: "Admin dashboard" },
              { text: "Advanced analytics" },
              { text: "API access" },
              { text: "Dedicated support" },
            ]}
            buttonText="Contact Sales"
            buttonLink="/contact"
            index={2}
          />
        </div>
        
        <div 
          className={cn(
            "mt-16 text-center max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            "delay-[600ms]"
          )}
        >
          <p className="text-gray-500">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
