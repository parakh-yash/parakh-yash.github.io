'use client';
import { useState } from 'react';
import{
resumne_link
} from "@/data/me";
export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      {/* Loader Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe 
          src= {resumne_link}
          className="w-full h-full border-0"
          loading="lazy"
          title="Resume"
          onLoad={() => setIsLoading(false)}
          />
    </>
  );
}