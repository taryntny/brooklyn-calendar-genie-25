import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/ui/AnimatedText';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';

export const Hero: React.FC = () => {
  const {
    ref,
    isVisible
  } = useAnimation({
    triggerOnce: true
  });
  return <section ref={ref as React.RefObject<HTMLDivElement>} className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brooklyn-50/30 to-white -z-10" />
      
      <div className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full bg-brooklyn-200/20 blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/6 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="flex flex-col justify-center">
          <div className={cn("transition-all duration-700 delay-100", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <span className="inline-block px-3 py-1 bg-brooklyn-100 text-brooklyn-800 rounded-full text-sm font-medium mb-6">
              Just $4.99/month
            </span>
          </div>
          
          <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-gray-900 mb-6", isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-8")}>
            Hire Brooklyn, 
            <br /> Your Personal 
            <br /> AI Secretary
          </h1>
          
          <p className={cn("text-xl text-gray-600 mb-8 max-w-lg", isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-300" : "opacity-0 translate-y-8")}>Add Brooklyn on WhatsApp and never miss a meeting again. Share your meeting details, and Brooklyn will handle the rest.</p>
          
          <div className={cn("flex flex-col sm:flex-row gap-4 mb-10", isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : "opacity-0 translate-y-8")}>
            <Link to="/login">
              <Button className="h-12 px-8 bg-brooklyn-600 hover:bg-brooklyn-700 text-base transition-all duration-300">
                Try Free for 14 Days
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="h-12 px-8 text-base border-brooklyn-200 text-brooklyn-800 hover:bg-brooklyn-50">
                See How It Works
              </Button>
            </Link>
          </div>
          
          <div className={cn("text-sm text-gray-500", isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-500" : "opacity-0 translate-y-8")}>
            <p>✓ 24/7 online</p>
            <p>✓ Cancel anytime</p>
            <p>✓ Setup in just 5 minutes</p>
          </div>
        </div>
        
        <div className={cn("flex items-center justify-center relative", isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : "opacity-0 translate-y-8")}>
          <div className="relative max-w-sm w-full aspect-[4/5] bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 border-8 border-gray-800 rounded-3xl pointer-events-none z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
            </div>
            
            <div className="absolute inset-0 flex flex-col">
              <div className="bg-brooklyn-600 px-4 py-3 text-white flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-medium">Brooklyn</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              
              <div className="flex-grow bg-gradient-to-b from-gray-50 to-gray-100 p-3 overflow-hidden">
                <div className="flex flex-col space-y-3">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm self-start animate-slide-in-right" style={{
                  animationDelay: '600ms'
                }}>
                    <p className="text-sm">Hi there! I'm Brooklyn, your personal calendar assistant.</p>
                  </div>
                  
                  <div className="bg-brooklyn-100 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm self-end animate-slide-in-left" style={{
                  animationDelay: '900ms'
                }}>
                    <p className="text-sm">I have a meeting with Alex tomorrow at 3pm about the new project.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm self-start animate-slide-in-right" style={{
                  animationDelay: '1200ms'
                }}>
                    <p className="text-sm">Perfect! I've added "Project Meeting with Alex" to your calendar tomorrow at 3:00 PM.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm self-start animate-slide-in-right" style={{
                  animationDelay: '1500ms'
                }}>
                    <p className="text-sm">Would you like me to send a reminder 15 minutes before?</p>
                  </div>
                  
                  <div className="bg-brooklyn-100 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm self-end animate-slide-in-left" style={{
                  animationDelay: '1800ms'
                }}>
                    <p className="text-sm">Yes, please!</p>
                  </div>
                  
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm self-start animate-slide-in-right" style={{
                  animationDelay: '2100ms'
                }}>
                    <p className="text-sm">Great! I'll remind you 15 minutes before your meeting. Anything else you need help with?</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white px-3 py-2 flex items-center">
                <div className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                  Type a message...
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-brooklyn-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-float" style={{
          animationDelay: '1s'
        }}></div>
        </div>
      </div>
    </section>;
};
export default Hero;
