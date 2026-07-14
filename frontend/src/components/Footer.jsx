import React from 'react';
import { Leaf, MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';
import { siteData } from '../data/mock';

const Footer = () => {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2f6b3a] text-[#e8e0c9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#e2b34b]" />
              </div>
              <div>
                <div className="font-extrabold text-white text-lg tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  STR ENTERPRISE
                </div>
                <div className="text-[11px] text-[#e2b34b] italic">Agro & Food Ingredient Exporter</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#d8d0b8]">
              STR Enterprise supplies premium dehydrated onion, garlic and turmeric powders to international buyers across multiple regions with focus on quality, timely delivery and compliance.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c8951e] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:pl-6">
            <h4 className="font-bold text-[#e2b34b] text-lg mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {siteData.quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    className="text-[#d8d0b8] hover:text-white hover:pl-1 transition-all duration-200 text-sm inline-block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#e2b34b] text-lg mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e2b34b] mt-1 shrink-0" />
                <span className="text-[#d8d0b8] leading-relaxed">{siteData.company.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#e2b34b] mt-1 shrink-0" />
                <span className="text-[#d8d0b8] break-all">{siteData.company.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#e2b34b] mt-1 shrink-0" />
                <span className="text-[#d8d0b8]">{siteData.company.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#c8bfa3]">
            © {siteData.company.year} {siteData.company.name}. All rights reserved.
          </div>
          <div className="text-xs text-[#c8bfa3]">
            Designed for global agro exports — Kolkata, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
