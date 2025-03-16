
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QRCodeCard from '@/components/ui/QRCodeCard';
import CalendarConnect from '@/components/ui/CalendarConnect';
import { useAnimation } from '@/hooks/useAnimation';
import { Clock, Calendar, MessageCircle, RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  // Sample statistics data
  const stats = [
    { 
      title: 'Meetings Created', 
      value: '24', 
      icon: <Calendar className="w-5 h-5" />,
      color: 'bg-green-50 text-green-600'
    },
    { 
      title: 'Messages Exchanged', 
      value: '156', 
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      title: 'Time Saved', 
      value: '8.5 hrs', 
      icon: <Clock className="w-5 h-5" />,
      color: 'bg-purple-50 text-purple-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-gray-900">Brooklyn Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Help</Button>
            <Button variant="ghost" size="sm">Settings</Button>
            <Button variant="ghost" size="sm">Log out</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Calendar Connection */}
          <div 
            className={cn(
              "col-span-1 md:col-span-2 transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <CalendarConnect />
          </div>

          {/* Whatsapp QR Code */}
          <div 
            className={cn(
              "transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-100"
            )}
          >
            <QRCodeCard />
          </div>
        </div>

        {/* Statistics Section */}
        <div 
          className={cn(
            "mt-8 transition-all duration-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            "delay-200"
          )}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-gray-500">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    <div className={cn("p-2 rounded-full", stat.color)}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscription Section */}
        <div 
          className={cn(
            "mt-8 transition-all duration-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            "delay-300"
          )}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Plan</p>
                  <p className="text-lg font-semibold">Monthly ($4.99/month)</p>
                  <p className="text-sm text-gray-500 mt-1">Next billing date: August 15, 2023</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700 hover:border-red-200">
                    Cancel Subscription
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div 
          className={cn(
            "mt-8 transition-all duration-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            "delay-400"
          )}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="bg-blue-50 p-2 rounded-full text-blue-600">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Meeting with Design Team added</p>
                    <p className="text-sm text-gray-500">Today at 10:30 AM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="bg-purple-50 p-2 rounded-full text-purple-600">
                    <RefreshCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Calendar connection refreshed</p>
                    <p className="text-sm text-gray-500">Yesterday at 4:15 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-50 p-2 rounded-full text-green-600">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Client meeting rescheduled</p>
                    <p className="text-sm text-gray-500">Aug 10, 2023 at 2:45 PM</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
