import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { siteData } from '../data/mock';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleClick('#home'); }} className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2f6b3a] flex items-center justify-center shadow-sm">
            <Leaf className="w-6 h-6 text-[#e2b34b]" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[#1f4a2a] text-xl tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              STR <span className="text-[#2f6b3a]">ENTERPRISE</span>
            </div>
            <div className="text-[11px] text-[#c8951e] italic font-medium">Agro & Food Ingredient Exporter</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {siteData.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => { e.preventDefault(); handleClick(n.href); }}
              className="text-[15px] font-medium text-[#333] hover:text-[#c8951e] transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c8951e] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <button className="md:hidden text-[#2f6b3a]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {siteData.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => { e.preventDefault(); handleClick(n.href); }}
              className="block text-[15px] font-medium text-[#333] hover:text-[#c8951e]"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
