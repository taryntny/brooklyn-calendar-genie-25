
import React from 'react';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/useAnimation';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  avatar,
  index = 0,
}) => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "bg-white rounded-xl p-6 transition-all duration-700",
        "shadow-md hover:shadow-lg",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.07)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
      }}
    >
      <div className="mb-4">
        {/* Star rating */}
        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-700 italic mb-6">"{quote}"</p>
      </div>
      
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name} 
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brooklyn-100 text-brooklyn-600 flex items-center justify-center font-medium mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
