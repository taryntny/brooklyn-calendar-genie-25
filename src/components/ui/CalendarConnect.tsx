
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, RefreshCw, Unlink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface CalendarConnectProps {
  className?: string;
}

export const CalendarConnect: React.FC<CalendarConnectProps> = ({ 
  className 
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      toast.success('Calendar connected successfully!');
    }, 1500);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Calendar refreshed successfully!');
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsConnected(false);
      setIsLoading(false);
      toast.success('Calendar disconnected successfully!');
    }, 1500);
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-md transition-all duration-300",
        className
      )}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Calendar Connection</h3>
        <div 
          className={cn(
            "px-2 py-1 rounded text-xs font-medium",
            isConnected 
              ? "bg-green-100 text-green-800" 
              : "bg-yellow-100 text-yellow-800"
          )}
        >
          {isConnected ? 'Connected' : 'Not Connected'}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-brooklyn-100 flex items-center justify-center mr-3">
            <Calendar className="h-5 w-5 text-brooklyn-700" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              {isConnected ? 'Google Calendar' : 'Connect Your Calendar'}
            </h4>
            <p className="text-sm text-gray-500">
              {isConnected 
                ? 'Last synced: Just now' 
                : 'Sync your events automatically'}
            </p>
          </div>
        </div>
        
        {isConnected ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Your calendar is connected and syncing properly. You can refresh the connection or disconnect at any time.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Connect your calendar to start managing events through Brooklyn. We support Google Calendar, Apple Calendar, and Microsoft Outlook.
            </p>
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        {isConnected ? (
          <>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center"
              disabled={isLoading}
              onClick={handleRefresh}
            >
              <RefreshCw className={cn("h-4 w-4 mr-2", isLoading && "animate-spin")} />
              Refresh
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800"
              disabled={isLoading}
              onClick={handleDisconnect}
            >
              <Unlink className="h-4 w-4 mr-2" />
              Disconnect
            </Button>
          </>
        ) : (
          <Button
            className="w-full bg-brooklyn-600 hover:bg-brooklyn-700"
            disabled={isLoading}
            onClick={handleConnect}
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Calendar className="h-4 w-4 mr-2" />
                Connect Calendar
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CalendarConnect;
