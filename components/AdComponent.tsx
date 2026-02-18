'use client';

import { useEffect, useRef } from 'react';

interface AdComponentProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

/**
 * AdSense/Ezoic Ad Component
 * Replace with actual ad implementation when ready
 */
export function AdComponent({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = '' 
}: AdComponentProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize ads when component mounts
    // This is a placeholder - implement actual AdSense script
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Ad loading error:', error);
    }
  }, []);

  return (
    <div className={`ad-container my-8 ${className}`} ref={adRef}>
      {/* Placeholder for development */}
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Advertisement Placeholder
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          Slot: {slot}
        </p>
      </div>
      
      {/* Actual AdSense code (uncomment when ready) */}
      {/* <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={slot}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins> */}
    </div>
  );
}
