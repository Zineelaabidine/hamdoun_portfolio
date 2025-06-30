
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Animated gradient bubbles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-50" />
      <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-float-delayed opacity-40" />
      <div className="absolute bottom-1/4 left-2/3 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-float-reverse opacity-30" />
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-accent/10 rounded-full filter blur-3xl animate-float-slow opacity-40" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl animate-float-slower opacity-30" />
      
      {/* Animated particles - now larger */}
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-particle"
            style={{
              width: 3 + Math.random() * 4 + 'px',  // Increased size from 1px to 3-7px
              height: 3 + Math.random() * 4 + 'px', // Increased size from 1px to 3-7px
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.4, // Increased opacity slightly
              animationDuration: `${15 + Math.random() * 30}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;
