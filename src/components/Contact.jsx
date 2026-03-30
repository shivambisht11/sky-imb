import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Contact = () => {
  const contacts = [
    { name: "Piyush Bora", role: "Founder", phone: "+91 9557795551" },
    { name: "Bhawna Bisht", role: "HOD", phone: "+91 7466077602" },
    { name: "Yogita Rana", role: "HOD", phone: "+91 6395427119" },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-gradient relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={itemVariants} className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Contact Us
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-8">
              Start Your <span className="text-gradient-gold">Journey</span> Today
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-10 leading-relaxed">
              Have questions about our courses or placement? Reach out to our team directly. 
              We're here to guide you to your professional bartending career.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Our Location</h4>
                  <p className="text-gray-400">Amaun, Khatima near Nexa Showroom, 262308</p>
                  <a href="#" className="flex items-center gap-1 text-gold-500 text-xs mt-2 hover:underline">
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Instagram</h4>
                  <a href="https://instagram.com/line.sky2026" className="text-gray-400 hover:text-gold-500 transition-colors">@line.sky2026</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Address</h4>
                  <a href="mailto:info.skyline.imb@gmail.com" className="text-gray-400 hover:text-gold-500 transition-colors">info.skyline.imb@gmail.com</a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contacts.map((contact, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-6 sm:p-8 border hover:border-gold-500/50 transition-all group">
                <h4 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">{contact.role}</h4>
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">{contact.name}</h3>
                
                <div className="space-y-3">
                  <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover/link:bg-gold-500/20">
                      <Phone className="w-4 h-4 text-gold-500" />
                    </div>
                    <span className="text-sm font-medium">{contact.phone}</span>
                  </a>
                  <a href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover/link:bg-green-500/20">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">Chat on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants} className="bg-gold-500 p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-black mb-2 leading-tight">Apply Now</h3>
              <p className="text-black/70 text-sm mb-6 font-medium">Reserve your seat for the upcoming batch.</p>
              <a href="https://wa.me/919557795551" className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Submit Interest
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
