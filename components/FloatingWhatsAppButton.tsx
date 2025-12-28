import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const FloatingWhatsAppButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Config
    const phoneNumber = "916382839617"; // Derived from Footer.tsx
    const message = "Hi Luxefiz, I’m looking for a professional business website. Can we discuss?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat with us on WhatsApp"
        >
            {/* Tooltip (Desktop only) */}
            <div className={`absolute right-full mr-3 bg-brand-charcoal text-white text-xs py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap transition-opacity duration-300 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'} hidden md:block`}>
                Chat with us on WhatsApp
                {/* Tooltip Arrow */}
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-brand-charcoal border-b-4 border-b-transparent"></div>
            </div>

            {/* Button Container */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300">
                {/* Icon */}
                <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center">
                    <WhatsAppIcon />
                </div>
            </div>
        </a>
    );
};

export default FloatingWhatsAppButton;
