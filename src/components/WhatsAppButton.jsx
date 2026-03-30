import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919557795551"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5 
      }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl group flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:hidden" />
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="white"
        className="relative z-10"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.556-5.333 11.888-11.889 11.888-2.013 0-3.993-.513-5.747-1.488l-6.236 1.699zm6.338-3.085c1.543.916 3.125 1.399 4.793 1.399 5.211 0 9.451-4.24 9.451-9.454 0-2.527-.984-4.903-2.77-6.69s-4.163-2.771-6.689-2.771c-5.212 0-9.452 4.24-9.452 9.454 0 1.761.493 3.479 1.424 4.976l-1.07 3.91 4.313-1.124zm10.596-6.632c-.104-.175-.383-.28-.804-.49s-2.484-1.225-2.868-1.365-.663-.21-.942.21-.104.805-.347 1.085-.49.315-.91.105-.347-.14-.735-.49c-1.782-1.588-2.984-3.55-3.333-4.148s-.037-.923.173-1.132c.19-.188.421-.49.631-.735s.28-.42.42-.7-.035-.526-.175-.805-.942-2.275-1.293-3.115c-.341-.817-.687-.706-.942-.719s-.522-.013-.804-.013-.734.105-1.119.526-.105 1.436-1.436 2.066c-1.332 1.33-3.467.42-4.114.621s-1.085.63-1.33.91-.49.63-.1.17 10.334 11.411c.21.315.49.525.805.7-.035.175-.104.385-.245.49s-.35.105-.49.105-.315-.105-.42-.315z"/>
      </svg>

      <motion.span 
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold shadow-2xl pointer-events-none whitespace-nowrap hidden md:block"
      >
        Chat with us
      </motion.span>
    </motion.a>
  );
};

export default WhatsAppButton;
