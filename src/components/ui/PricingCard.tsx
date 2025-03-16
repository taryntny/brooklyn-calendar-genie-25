
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useAnimation } from '@/hooks/useAnimation';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  popular?: boolean;
  index?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  duration,
  features,
  buttonText,
  buttonLink,
  popular = false,
  index = 0
}) => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "rounded-2xl transition-all duration-700",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12",
        popular 
          ? "border-2 border-brooklyn-500 shadow-lg transform scale-[1.02] z-10" 
          : "border border-gray-100 shadow-md",
        "bg-white p-6 md:p-8 relative overflow-hidden"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-brooklyn-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%] shadow-sm">
            POPULAR
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm min-h-[40px]">{description}</p>
      </div>
      
      <div className="mb-6">
        <span className="text-3xl md:text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500 ml-2">{duration}</span>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 mt-1 flex-shrink-0 text-brooklyn-500">
              <Check className="h-5 w-5" />
            </span>
            <span className="text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Link to={buttonLink} className="block">
        <Button 
          className={cn(
            "w-full h-12",
            popular 
              ? "bg-brooklyn-600 hover:bg-brooklyn-700" 
              : "bg-gray-900 hover:bg-gray-800"
          )}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
