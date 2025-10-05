import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float opacity-30"></div>
      <div className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl floating-element-delayed opacity-25"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-glow/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
      
      {/* Particle Grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 border border-primary/20 rotate-45 animate-spin opacity-40" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 border border-accent/20 animate-bounce opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-primary-glow/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;