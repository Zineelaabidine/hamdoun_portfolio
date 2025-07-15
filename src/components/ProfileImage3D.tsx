
import React, { useRef, useEffect } from 'react';

const ProfileImage3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Perspective effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Apply the transform with more noticeable rotation
      container.style.transform =
        `perspective(800px)
         rotateY(${x * 25}deg)
         rotateX(${-y * 25}deg)
         translateZ(20px)
         scale(1.05)`;
    };
    
    // Reset transform on mouse leave
    const handleMouseLeave = () => {
      container.style.transform =
        `perspective(800px)
         rotateY(0deg)
         rotateX(0deg)
         translateZ(0)
         scale(1)`;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-64 h-64 md:w-80 md:h-80 transition-all duration-300 ease-out cursor-pointer animate-fade-in"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Profile image container with extended head effect */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10">
        {/* Image clipping for extending top of head effect */}
        <div className="absolute w-full h-full bg-background rounded-full">
          {/* Extended top head image (positioned higher than normal) */}
          <img 
            src="/zine.jpeg"
            alt="Zine El Aabidine Hamdoun"
            className="absolute w-[110%] h-[110%] object-cover object-center"
            style={{
              top: '-5%',
              left: '-5%',
            }}
          />
        </div>
      </div>
      
      {/* 3D effect elements */}
      <div className="absolute left-0 right-0 -bottom-3 mx-auto w-[90%] h-[20px] bg-black/40 blur-md rounded-full z-0"></div>
      
      {/* Shine/glare effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 z-10 rounded-full"></div>
      
      {/* Edge highlight */}
      <div className="absolute inset-0 rounded-full border-2 border-white/10 z-20"></div>
    </div>
  );
};

export default ProfileImage3D;
