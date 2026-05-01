'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Layers, BarChart3, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Animated Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none">
          <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6 inline-block">
              Scale Your Workflow
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Manage Tasks with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Precision & Speed
              </span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the next generation of task management. Built for performance, 
              security, and seamless collaboration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-white/10 transition-all"
              >
                Sign In
              </Link>
            </div>
          </motion.div>

          {/* Stats/Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32"
          >
            {[
              { icon: Shield, title: "Secure by Design", desc: "Enterprise-grade JWT authentication with role-based access control." },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized backend architecture ensures sub-100ms API response times." },
              { icon: Layers, title: "Highly Scalable", desc: "Built with a modular structure ready for microservices and caching." }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all text-left group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-xl"><Globe className="w-6 h-6" /> GLOBAL</div>
            <div className="flex items-center gap-2 font-bold text-xl"><BarChart3 className="w-6 h-6" /> ANALYTICS</div>
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-400 italic">PRIME TRADE</div>
          </div>
        </div>
      </section>
    </div>
  );
}
