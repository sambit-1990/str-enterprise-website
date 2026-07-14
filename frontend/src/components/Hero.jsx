import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteData } from '../data/mock';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div
        className="relative min-h-[560px] md:min-h-[640px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(245,232,215,0.92) 0%, rgba(245,232,215,0.55) 45%, rgba(245,232,215,0.15) 100%), url('https://images.pexels.com/photos/31280796/pexels-photo-31280796.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 400%22%3E%3Cpath d=%22M100 200 Q 300 100 500 200 T 800 200%22 stroke=%22%232f6b3a%22 fill=%22none%22 stroke-dasharray=%224 6%22/%3E%3C/svg%3E')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#c8951e]/30 text-[#8a6410] text-xs font-semibold uppercase tracking-widest mb-6">
              Kolkata • India • Est. 2020
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1f4a2a] leading-[1.08] tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {siteData.hero.title}
            </h1>
            <p className="mt-6 text-lg text-[#3a4a3a] max-w-lg">
              {siteData.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(90deg,#d9a441 0%, #b3801f 100%)' }}
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20STR%20Enterprise.%20I%20am%20interested%20in%20your%20products.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-[#2f6b3a] hover:bg-[#255a2f]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
