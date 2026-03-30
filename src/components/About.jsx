import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gold-500/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              About the Institute
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting Next-Gen <span className="text-gold-500">Bartending Professionals</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Skyline IMB (Institute of Mixology & Bartending) is a premier training academy dedicated to the art of liquid storytelling. 
              We don't just teach recipes; we cultivate personality, confidence, and international industry readiness.
            </p>

            <div className="space-y-6">
              {[
                { icon: Star, title: "Industry Experts", desc: "Learn from founders and HODs with decades of experience." },
                { icon: Shield, title: "Real Exposure", desc: "Get trained in top 30 premium bars and live events." },
                { icon: Globe, title: "Global Careers", desc: "Preparation for luxury cruise ships and international bars." },
                { icon: Award, title: "Certified Excellence", desc: "Industry-recognized certification for your professional career." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl"
            >
              <p className="text-gold-500/90 font-medium italic">
                "We train students with real-world bartending skills, personality development, and international career preparation."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Modern Collage / Single Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Skyline IMB Training" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-gold-500 text-black p-8 rounded-3xl shadow-3xl max-w-[200px]"
            >
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Practical Oriented Program</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
