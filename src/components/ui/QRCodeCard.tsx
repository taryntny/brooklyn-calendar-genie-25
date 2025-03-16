
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Copy, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface QRCodeCardProps {
  className?: string;
}

export const QRCodeCard: React.FC<QRCodeCardProps> = ({ 
  className 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const phoneNumber = "+1 (555) 123-4567";

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success('Phone number copied to clipboard!');
  };

  const handleDownloadQR = () => {
    setIsLoading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setIsLoading(false);
      toast.success('QR code downloaded successfully!');
    }, 1000);
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
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Brooklyn on WhatsApp</h3>
        <p className="text-sm text-gray-600">
          Scan this QR code with your phone's camera to add Brooklyn as a WhatsApp contact, or add the number manually.
        </p>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 relative">
          {/* Simulated QR Code */}
          <div className="w-40 h-40 grid grid-cols-10 grid-rows-10 gap-0.5">
            {Array.from({ length: 100 }).map((_, index) => {
              // Create a consistent pattern for the QR code
              const rowIndex = Math.floor(index / 10);
              const colIndex = index % 10;
              const isBlack = (
                // Frame
                (rowIndex < 2 && colIndex < 2) || 
                (rowIndex < 2 && colIndex > 7) || 
                (rowIndex > 7 && colIndex < 2) ||
                // Create a "B" shape in the middle
                (colIndex === 4) ||
                (rowIndex === 3 && colIndex > 4 && colIndex < 8) ||
                (rowIndex === 5 && colIndex > 4 && colIndex < 8) ||
                (rowIndex === 7 && colIndex > 4 && colIndex < 8) ||
                (rowIndex === 4 && colIndex === 7) ||
                (rowIndex === 6 && colIndex === 7)
              );
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "w-full h-full",
                    isBlack ? "bg-black" : "bg-transparent"
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 text-center mb-2">Or add manually:</p>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-gray-50 px-4 py-2 rounded border border-gray-200">
            <p className="text-gray-900 font-medium">{phoneNumber}</p>
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleCopyNumber}
            className="h-9 w-9"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Button
        variant="outline"
        className="w-full flex items-center justify-center"
        disabled={isLoading}
        onClick={handleDownloadQR}
      >
        {isLoading ? (
          <span className="flex items-center">
            Downloading...
          </span>
        ) : (
          <span className="flex items-center">
            <ArrowDown className="h-4 w-4 mr-2" />
            Download QR Code
          </span>
        )}
      </Button>
    </div>
  );
};

export default QRCodeCard;
