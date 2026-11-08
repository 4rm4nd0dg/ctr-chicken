'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Utensils } from 'lucide-react';

interface FoodImageProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export const FoodImage: React.FC<FoodImageProps> = ({
  src,
  alt,
  fill = true,
  width,
  height,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  // If no source or error during load: fallback placeholder
  if (!src || hasError) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-brand-orange via-brand-red to-brand-red-dark text-white select-none ${
          fill ? 'w-full h-full' : ''
        } ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        {/* Background watermark CTR Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none scale-125">
          <Image
            src="/images/logo-transparent.webp"
            alt=""
            width={240}
            height={240}
            className="object-contain filter grayscale invert"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 shadow-inner">
            <Utensils className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="font-display uppercase tracking-wider text-sm font-bold text-white drop-shadow">
            CTR CHICKEN
          </span>
          <span className="text-[10px] text-white/90 font-medium">
            Chicken Taste Revolution
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-brand-cream ${
        fill ? 'w-full h-full' : ''
      } ${className}`}
      style={!fill && width && height ? { width, height } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        onError={() => setHasError(true)}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

