
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';

export const CTA: React.FC = () => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brooklyn-50 via-blue-50 to-white -z-10" />
      <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-brooklyn-100/40 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 rounded-full bg-blue-100/30 blur-3xl -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div 
          className={cn(
            "bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-16 relative overflow-hidden",
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
          }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brooklyn-100/30 blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-blue-50/60 blur-3xl -z-10" />
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Save 2 Hours Every Week?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who are streamlining their calendar management with Brooklyn.
              Try it free for 14 days, no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login">
                <Button className="h-12 px-8 bg-brooklyn-600 hover:bg-brooklyn-700 text-base transition-all duration-300">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="h-12 px-8 text-base border-brooklyn-200 text-brooklyn-800 hover:bg-brooklyn-50">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
