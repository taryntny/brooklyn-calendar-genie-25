
import React from 'react';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ: React.FC = () => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  const faqs = [
    {
      question: "How does Brooklyn work?",
      answer: "Brooklyn works by connecting to your calendar and becoming a contact in your WhatsApp. You can forward meeting details to Brooklyn, and it will automatically create calendar events for you. It can also alert you to scheduling conflicts and send reminders before meetings."
    },
    {
      question: "Which calendar apps does Brooklyn support?",
      answer: "Brooklyn integrates with all major calendar applications including Google Calendar, Apple Calendar, Microsoft Outlook, and more. During the setup process, you'll be guided through connecting your preferred calendar app."
    },
    {
      question: "How do I add Brooklyn to WhatsApp?",
      answer: "After signing up, you'll receive a QR code and a phone number to add Brooklyn as a contact in WhatsApp. Simply scan the QR code or add the number manually to your contacts, then start a conversation with Brooklyn."
    },
    {
      question: "Can I use Brooklyn on multiple devices?",
      answer: "Yes, since Brooklyn works through WhatsApp, you can use it on any device where you use WhatsApp. Your calendar will stay synchronized across all your devices."
    },
    {
      question: "What happens if I have scheduling conflicts?",
      answer: "Brooklyn automatically detects conflicts when you're trying to schedule a new meeting that overlaps with an existing appointment. It will notify you of the conflict and offer options to reschedule or adjust the timing."
    },
    {
      question: "How secure is my calendar information?",
      answer: "Brooklyn takes security seriously. We use industry-standard encryption for all data transmission and storage. We never share your calendar information with third parties, and we only access the minimum data necessary to provide our service."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time from your dashboard. If you cancel during your free trial, you won't be charged anything. If you cancel after the trial, you'll maintain access until the end of your current billing period."
    },
    {
      question: "Is there a limit to how many events I can schedule?",
      answer: "No, all plans include unlimited calendar events. Whether you have a few meetings a week or dozens per day, Brooklyn can handle your scheduling needs."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={cn(
              "inline-block px-3 py-1 bg-brooklyn-100 text-brooklyn-800 rounded-full text-sm font-medium mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Frequently Asked Questions
          </span>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-100"
            )}
          >
            Got Questions?
          </h2>
          <p 
            className={cn(
              "text-xl text-gray-600 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-200"
            )}
          >
            Find answers to commonly asked questions about Brooklyn and how it can help you manage your calendar.
          </p>
        </div>
        
        <div 
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
            "delay-300"
          )}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg text-left font-medium py-5 text-gray-800 hover:text-brooklyn-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
