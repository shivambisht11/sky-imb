import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Shirt, Beer } from 'lucide-react';

const WhatYouGet = () => {
  const items = [
    {
      icon: Briefcase,
      title: "Professional Kit",
      description: "A complete set of high-end bar tools including shakers, strainers, jiggers, and more.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Shirt,
      title: "Premium Uniform",
      description: "Custom-fitted, sharp uniform that reflects the professional standards of the industry.",
      image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Beer,
      title: "Fully Equipped Bar Lab",
      description: "Access to our modern facility with the latest spirits and equipment for practice.",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 bg-dark-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            What You <span className="text-gold-500">Get</span>
          </motion.h2>
          <p className="text-gray-400">Everything you need to kickstart your professional career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col items-center text-center p-8 group border border-white/5 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="mb-6 w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center group-hover:bg-gold-500/20 transition-all duration-300 transform group-hover:-rotate-12">
                <item.icon className="w-10 h-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-gold-500 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
