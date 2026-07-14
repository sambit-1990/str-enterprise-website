import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/mock';

const Markets = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[#c8951e] font-semibold uppercase tracking-[0.2em] text-xs mb-3">Global Reach</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f4a2a] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {siteData.markets.heading}
            </h2>
            <div className="mt-4 h-1 w-16 bg-[#c8951e] rounded-full" />
            <p className="mt-5 text-[#4a4a4a] leading-relaxed">{siteData.markets.body}</p>

            <h3 className="mt-8 text-xl font-bold text-[#1f4a2a]" style={{ fontFamily: 'Poppins, sans-serif' }}>Strategic Global Reach</h3>
            <div className="mt-6 space-y-5">
              {siteData.markets.regions.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#c8951e]/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#c8951e]" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="font-semibold text-[#1f4a2a]">{r.title}:</div>
                    <div className="text-[#4a4a4a] text-sm mt-0.5">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#f9efe0] to-[#eddfc4] p-8 shadow-inner relative overflow-hidden">
              <svg viewBox="0 0 800 500" className="w-full h-full">
                <defs>
                  <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1" fill="#2f6b3a" opacity="0.35" />
                  </pattern>
                </defs>
                {/* stylized continents */}
                <path d="M60,140 Q100,90 180,110 Q240,120 260,180 Q250,240 200,260 Q140,250 100,220 Q60,190 60,140 Z" fill="url(#dots)" />
                <path d="M300,80 Q360,60 420,90 Q460,140 430,180 Q380,200 340,180 Q290,150 300,80 Z" fill="url(#dots)" />
                <path d="M340,220 Q400,220 430,270 Q440,340 400,380 Q360,400 340,340 Q320,290 340,220 Z" fill="url(#dots)" />
                <path d="M470,120 Q560,100 640,140 Q700,180 690,240 Q650,280 580,260 Q500,240 470,180 Q460,150 470,120 Z" fill="url(#dots)" />
                <path d="M660,280 Q720,270 740,320 Q730,360 690,370 Q650,360 660,280 Z" fill="url(#dots)" />

                {/* Kolkata hub */}
                <circle cx="560" cy="200" r="7" fill="#c8951e" />
                <circle cx="560" cy="200" r="14" fill="#c8951e" opacity="0.25">
                  <animate attributeName="r" from="7" to="22" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* destination pins */}
                {[
                  [140, 180], [370, 130], [400, 300], [600, 150], [700, 320],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <line x1="560" y1="200" x2={cx} y2={cy} stroke="#2f6b3a" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
                    <circle cx={cx} cy={cy} r="5" fill="#2f6b3a" />
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-xs text-[#1f4a2a] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2f6b3a]" /> Kolkata → Worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 pt-12 border-t border-[#f0e2c8]">
          <div className="text-center text-[#c8951e] font-semibold uppercase tracking-[0.2em] text-xs mb-8">Certifications & Compliance</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {siteData.certifications.map((c, i) => (
              <div key={i} className="flex flex-col items-center justify-center h-24 rounded-lg border border-[#ecdfc8] bg-[#fbf7ef] hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="font-extrabold text-[#1f4a2a] text-lg tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{c.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#8a6410] mt-1">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
