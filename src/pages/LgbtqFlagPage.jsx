// src/pages/LgbtqFlagPage.jsx
import React from 'react';

const lgbtqColors = ["#E40303", "#FF8C00", "#FFED00", "#008026", "#004DFF", "#750787"];

export default function LgbtqFlagPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="w-full">
        {lgbtqColors.map((color, index) => (
          <div 
            key={index} 
            className="h-16 w-full" 
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-white text-center px-4">
        Chelsea supporters are gay
      </h1>
    </div>
  );
}
