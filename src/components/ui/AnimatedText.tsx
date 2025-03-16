
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  delay?: number;
  once?: boolean;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-in-right' | 'slide-in-left';
  words?: boolean;
  characters?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  once = true,
  animation = 'fade-in',
  words = false,
  characters = false,
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay, once]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    return `animate-${animation}`;
  };

  const renderContent = () => {
    if (characters) {
      return text.split('').map((char, index) => (
        <span 
          key={`${char}-${index}`} 
          className={cn(getAnimationClass())}
          style={{ 
            animationDelay: `${delay + index * 30}ms`,
            opacity: 0,
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ));
    }

    if (words) {
      return text.split(' ').map((word, index) => (
        <span 
          key={`${word}-${index}`} 
          className={cn(getAnimationClass())}
          style={{ 
            animationDelay: `${delay + index * 100}ms`,
            opacity: 0,
            display: 'inline-block',
            marginRight: '0.25em',
          }}
        >
          {word}
        </span>
      ));
    }

    return (
      <span 
        className={cn(getAnimationClass())}
        style={{ opacity: 0 }}
      >
        {text}
      </span>
    );
  };

  return (
    <div ref={containerRef} className={cn('inline-block', className)} {...props}>
      {renderContent()}
    </div>
  );
};

export default AnimatedText;
