import React from 'react';
import { Globe2, BadgeCheck, PackageOpen, Ship } from 'lucide-react';
import { siteData } from '../data/mock';

const iconMap = { Globe2, BadgeCheck, PackageOpen, Ship };

const Features = () => {
  return (
    <section className="bg-[#f9efe0] py-8 md:py-10 border-b border-[#ecdfc8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteData.features.map((f, idx) => {
            const Icon = iconMap[f.icon];
            return (
              <div
                key={idx}
                className="flex items-start gap-4 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-white shadow-sm border border-[#ecdfc8] flex items-center justify-center group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#2f6b3a]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1f4a2a] text-[15px] leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#6b6255] mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
