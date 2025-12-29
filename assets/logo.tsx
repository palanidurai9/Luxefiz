import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className= {`flex items-center gap-2 font-playfair font-black text-3xl ${className || ''}`}>
    {/* Image element (left side) */ }
{/* Optimized Logo: explicit size, eager loading */ }
<img
      src="/image/luxefiz-logo.png"
alt = "Luxefiz Logo - Creative Digital Agency in Tamil Nadu"
className = "w-12 h-12 object-contain"
width = "48"
height = "48"
loading = "eager"
  />

  {/* Text elements */ }
  < div >
  <span className="text-brand-purple" > Luxe </span>
    < span className = "text-brand-pink" > fiz </span>
      </div>
      </div>
);
