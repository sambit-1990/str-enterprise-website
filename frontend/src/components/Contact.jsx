import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/mock';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: 'Onion Powder', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // MOCKED: stores in localStorage for now
    const list = JSON.parse(localStorage.getItem('str_enquiries') || '[]');
    list.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem('str_enquiries', JSON.stringify(list));
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', product: 'Onion Powder', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#fbf7ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[#c8951e] font-semibold uppercase tracking-[0.2em] text-xs mb-3">Contact Us</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f4a2a] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Send Us Your Enquiry
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 bg-[#c8951e] rounded-full" />
          <p className="mt-5 text-[#4a4a4a]">We usually respond within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ecdfc8] flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-[#2f6b3a]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#2f6b3a]" />
              </div>
              <div>
                <div className="font-semibold text-[#1f4a2a]">Office Address</div>
                <div className="text-sm text-[#4a4a4a] mt-1 leading-relaxed">{siteData.company.address}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ecdfc8] flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-[#2f6b3a]/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#2f6b3a]" />
              </div>
              <div>
                <div className="font-semibold text-[#1f4a2a]">Call / WhatsApp</div>
                <div className="text-sm text-[#4a4a4a] mt-1">{siteData.company.phone}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ecdfc8] flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-[#2f6b3a]/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#2f6b3a]" />
              </div>
              <div>
                <div className="font-semibold text-[#1f4a2a]">Email</div>
                <div className="text-sm text-[#4a4a4a] mt-1 break-all">{siteData.company.email}</div>
              </div>
            </div>
            <a
              href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20STR%20Enterprise.%20I%20am%20interested%20in%20your%20products.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-[#2f6b3a] hover:bg-[#255a2f]"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#ecdfc8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#1f4a2a] uppercase tracking-wider">Full Name</label>
                <input name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full px-4 py-2.5 rounded-md border border-[#e2d7c1] bg-[#fbf7ef] focus:outline-none focus:ring-2 focus:ring-[#c8951e]/40 focus:border-[#c8951e] transition" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#1f4a2a] uppercase tracking-wider">Email</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full px-4 py-2.5 rounded-md border border-[#e2d7c1] bg-[#fbf7ef] focus:outline-none focus:ring-2 focus:ring-[#c8951e]/40 focus:border-[#c8951e] transition" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#1f4a2a] uppercase tracking-wider">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full px-4 py-2.5 rounded-md border border-[#e2d7c1] bg-[#fbf7ef] focus:outline-none focus:ring-2 focus:ring-[#c8951e]/40 focus:border-[#c8951e] transition" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#1f4a2a] uppercase tracking-wider">Interested Product</label>
                <select name="product" value={form.product} onChange={handleChange} className="mt-1 w-full px-4 py-2.5 rounded-md border border-[#e2d7c1] bg-[#fbf7ef] focus:outline-none focus:ring-2 focus:ring-[#c8951e]/40 focus:border-[#c8951e] transition">
                  <option>Onion Powder</option>
                  <option>Garlic Powder</option>
                  <option>Turmeric Powder</option>
                  <option>Multiple Products</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold text-[#1f4a2a] uppercase tracking-wider">Your Message</label>
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} className="mt-1 w-full px-4 py-2.5 rounded-md border border-[#e2d7c1] bg-[#fbf7ef] focus:outline-none focus:ring-2 focus:ring-[#c8951e]/40 focus:border-[#c8951e] transition resize-none" placeholder="Please share quantity, packaging, destination country..." />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'linear-gradient(90deg,#d9a441 0%, #b3801f 100%)' }}>
              <Send className="w-4 h-4" /> Send Enquiry
            </button>
            {sent && (
              <div className="mt-4 flex items-center gap-2 text-[#2f6b3a] text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> Enquiry received. We'll be in touch within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
