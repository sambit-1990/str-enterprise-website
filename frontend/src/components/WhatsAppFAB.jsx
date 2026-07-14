import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/mock';

const WhatsAppFAB = () => {
  return (
    <a
      href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20STR%20Enterprise.%20I%20am%20interested%20in%20your%20products.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20b558] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppFAB;
