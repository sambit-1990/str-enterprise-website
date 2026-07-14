import React from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { siteData } from '../data/mock';

const ProductCard = ({ product, reverse }) => {
  return (
    <div
      id={product.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div>
        <div className="text-[#c8951e] font-semibold uppercase tracking-[0.2em] text-xs mb-3">Our Product</div>
        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f4a2a] leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.name}
        </h3>
        <div className="mt-4 h-1 w-14 bg-[#c8951e] rounded-full" />
        <p className="mt-5 text-[#4a4a4a] text-base leading-relaxed">{product.description}</p>
        <ul className="mt-6 space-y-3">
          {product.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2f6b3a]/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#2f6b3a]" strokeWidth={3} />
              </span>
              <span className="text-[#333] text-[15px]">{pt}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-white text-sm font-semibold shadow hover:shadow-lg transition-all duration-300 bg-[#2f6b3a] hover:bg-[#255a2f]"
          >
            Get Specification <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20STR%20Enterprise.%20I%20want%20a%20quote%20for%20${encodeURIComponent(product.name)}.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border-2 border-[#c8951e] text-[#8a6410] hover:bg-[#c8951e] hover:text-white transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" /> Get Price
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9efe0] to-[#f0e2c8] rounded-2xl transform rotate-2" />
        <img
          src={product.image}
          alt={product.name}
          className="relative rounded-2xl shadow-xl w-full h-[380px] md:h-[440px] object-cover"
        />
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-24 bg-[#fbf7ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[#c8951e] font-semibold uppercase tracking-[0.2em] text-xs mb-3">Our Products</div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f4a2a] leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Premium Indian Spice Powders
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 bg-[#c8951e] rounded-full" />
          <p className="mt-5 text-[#4a4a4a]">
            Sourced from certified processing units. Consistent quality, timely shipment, and flexible packaging for global buyers.
          </p>
        </div>

        <div className="space-y-24">
          {siteData.products.map((p, i) => (
            <ProductCard key={p.id} product={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
