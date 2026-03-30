import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center mb-6">
              <span className="text-gold-500">SKYLINE</span>
              <span className="text-white ml-2">IMB</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              The premier institute for aspiring mixologists and bartending professionals. 
              Elevating the art of service and hospitality since 2026.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-gold-500 transition-colors">Courses Highlights</a></li>
              <li><a href="#verification" className="hover:text-gold-500 transition-colors">Student Verification</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Amaun, Khatima near Nexa Showroom, 262308</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>+91 9557795551</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>info.skyline.imb@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Enrollment</h4>
            <p className="text-gray-500 text-xs mb-4">Admissions open for the next professional batch.</p>
            <a href="https://wa.me/919557795551" className="inline-block w-full text-center bg-white/5 border border-white/10 hover:border-gold-500 text-gold-500 py-3 rounded-lg text-sm font-bold transition-all">
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} Skyline Institute of Mixology & Bartending. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
