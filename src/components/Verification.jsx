import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, XCircle, Loader2, User, BookOpen, Calendar } from 'lucide-react';

const Verification = () => {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!studentId) return;

    setLoading(true);
    setResult(null);

    // Fake delay
    setTimeout(() => {
      if (studentId === "12345") {
        setResult({
          name: "Rahul Sharma",
          course: "Bartending Pro",
          status: "Verified",
          date: "March 15, 2026",
          id: "IMB-2026-001"
        });
      } else {
        setResult("NOT_FOUND");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="verification" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold uppercase tracking-widest text-sm block mb-4"
          >
            Student Portal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Identity <span className="text-gold-500">Verification</span>
          </motion.h2>
          <p className="text-gray-400">Enter your Student ID or Mobile Number to verify certification status.</p>
        </div>

        <div className="glass-card p-4 sm:p-10 border-white/5 relative overflow-hidden">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Student ID (e.g. 12345)"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-gray-500"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center justify-center gap-2 min-w-[160px] disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Status"}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-gray-400"
              >
                <Loader2 className="w-10 h-10 animate-spin text-gold-500 mb-4" />
                <p>Establishing secure connection to database...</p>
              </motion.div>
            )}

            {result === "NOT_FOUND" && !loading && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-500"
              >
                <XCircle className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Student Not Found</h4>
                  <p className="text-sm opacity-80 text-red-400">The provided credentials do not match any record in our database.</p>
                </div>
              </motion.div>
            )}

            {typeof result === 'object' && result !== null && !loading && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative p-6 sm:p-8 bg-gold-500/5 border border-gold-500/20 rounded-2xl overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/10 blur-[60px] rounded-full" />
                
                <div className="absolute top-0 right-0 p-4">
                  <motion.span 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-green-500/20"
                  >
                    <CheckCircle className="w-3 h-3" /> {result.status}
                  </motion.span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  {[
                    { icon: User, label: "Full Name", value: result.name },
                    { icon: BookOpen, label: "Course Enrolled", value: result.course },
                    { icon: Calendar, label: "Completion Date", value: result.date },
                    { icon: Search, label: "Certificate ID", value: result.id },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500 shadow-inner">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                        <h4 className="text-xl font-bold text-white">{item.value}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Verification;
