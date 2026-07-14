import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/mock';

const About = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="text-[#c8951e] font-semibold uppercase tracking-[0.2em] text-xs mb-4">About Us</div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f4a2a] leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {siteData.about.heading}
          </h2>
          <div className="mt-5 h-1 w-16 bg-[#c8951e] rounded-full" />
          <p className="mt-6 text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            {siteData.about.body}
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              { n: '15+', l: 'Countries Served' },
              { n: '100%', l: 'Quality Checked' },
              { n: '24h', l: 'Response Time' },
            ].map((s, i) => (
              <div key={i} className="border-l-2 border-[#c8951e] pl-4">
                <div className="text-2xl md:text-3xl font-extrabold text-[#2f6b3a]">{s.n}</div>
                <div className="text-xs text-[#6b6255] uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollTo('products')}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-[#2f6b3a] hover:bg-[#255a2f]"
          >
            Explore Our Products <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#c8951e] rounded-xl -z-0" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#2f6b3a] rounded-xl -z-0" />
          <img
            src={siteData.about.image}
            alt="STR Enterprise"
            className="relative rounded-xl shadow-xl w-full h-[420px] object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
