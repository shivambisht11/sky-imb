import React from 'react';
import { motion } from 'framer-motion';
import { GlassWater, Ghost, Users, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const Experience = () => {
  const experiences = [
    {
      icon: GlassWater,
      title: "Top 30 Bars Exposure",
      description: "Direct industry immersion in the most prestigious cocktail bars and luxury hotels.",
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc3b?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Users,
      title: "Live Event Training",
      description: "Real-world experience managing high-pressure events, weddings, and corporate galas.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Zap,
      title: "Practical Sessions",
      description: "Intensive 100% hands-on learning every single day in our fully equipped bar lab.",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Real World Training
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              More Than Just a <span className="text-gold-500">Classroom</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              We bridge the gap between education and the professional world. Our students 
              graduate with actual industry experience, not just a certificate.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="space-y-4"
            >
              <div className="flex items-center gap-3 text-white font-semibold italic">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                Industry Networking
              </div>
              <div className="flex items-center gap-3 text-white font-semibold italic">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                Live Guest Interaction
              </div>
              <div className="flex items-center gap-3 text-white font-semibold italic">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                Confidence Building
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/5"
              >
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gold-500 text-black rounded-lg flex items-center justify-center mb-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
