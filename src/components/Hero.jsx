import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          // Alternative: https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=1920&q=80
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-20 container-custom pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-500 rounded-full text-sm font-semibold mb-6 tracking-widest uppercase">
              Premier Bartending Institute
            </span>
            <h1 className="text-4xl xs:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Become a <span className="text-gradient-gold">Professional Bartender</span> & Work Worldwide
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Elevate your skills at Skyline IMB. Hands-on training from industry experts, 
              real bar exposure, and a gateway to global career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Apply Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                Explore Courses
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold-500">100%</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Placement Support</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold-500">30+</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Real Bar Exposure</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl md:text-3xl font-bold text-gold-500">ISO</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Certified Training</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold-500 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
