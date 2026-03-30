import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Zap, Globe2, Sparkles, MessageSquare } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const CourseCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="glass-card group hover:border-gold-500/50 transition-all duration-300 relative overflow-hidden h-full"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 blur-2xl group-hover:bg-gold-500/20 transition-all duration-300" />
      <div className="mb-6 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300">
        <Icon className="w-7 h-7 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Theory & Fundamentals",
      description: "Master the history of spirits, liquor classifications, and the science behind classic beverage service.",
    },
    {
      icon: FlaskConical,
      title: "Advanced Mixology",
      description: "Explore cocktail chemistry, homemade syrups, infusions, and the art of balanced flavor profiles.",
    },
    {
      icon: Zap,
      title: "Flair Bartending (4 Levels)",
      description: "From beginner bottle movements to advanced exhibition flair. Master the showmanship of elite bartending.",
    },
    {
      icon: Globe2,
      title: "International Preparation",
      description: "Specialized training for global standards, cruise line requirements, and overseas placement prep.",
    },
    {
      icon: Sparkles,
      title: "Personal Development",
      description: "Build confidence, grooming standards, and the sophisticated persona required for luxury hospitality.",
    },
    {
      icon: MessageSquare,
      title: "Spoken English & Communication",
      description: "Enhance your verbal skills to interact fluently with international guests and elite clientele.",
    },
  ];

  return (
    <section id="courses" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold uppercase tracking-widest text-sm block mb-4"
          >
            Our Curriculum
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Course <span className="text-gradient-gold">Highlights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive training program designed to transform beginners into world-class 
            mixologists ready for the global stage.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              description={course.description}
            />
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our modules are regularly updated to stay aligned with the latest global trends 
            in the beverage industry.
          </p>
          <a href="#contact" className="btn-primary">
            Get Full Syllabus
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
