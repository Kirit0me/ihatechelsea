// src/pages/EmbarrassingSlideshow.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmbarrassingSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Replace with your actual image paths
  const images = [
    "/src/images/embarrassing1.jpg",
    "/src/images/embarrassing2.jpg",
    "/src/images/embarrassing3.jpg"
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-black min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Just embarrassing</h1>
      
      <div className="relative w-full max-w-4xl h-96 md:h-[500px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Embarrassing moment"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <button 
            onClick={prevSlide}
            className="bg-blue-900/70 hover:bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Previous
          </button>
          <button 
            onClick={nextSlide}
            className="bg-blue-900/70 hover:bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
