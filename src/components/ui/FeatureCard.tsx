
import React from 'react';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/useAnimation';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  index = 0,
}) => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "p-6 rounded-xl transition-all duration-500",
        "hover:shadow-lg hover:-translate-y-1",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8",
        className
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brooklyn-100 text-brooklyn-700 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
