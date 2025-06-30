
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorter loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-background z-50 transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 relative">
          {/* Animated logo or icon */}
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-accent/50 border-b-accent/30 border-l-primary/50 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-t-accent border-r-primary/50 border-b-primary/30 border-l-accent/50 animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="h-8 w-8 text-primary animate-pulse" />
          </div>
        </div>
        <div className="mt-4 text-foreground font-medium">
          <span className="text-primary">Loading</span>
          <span className="text-accent">...</span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
