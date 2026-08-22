import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Terminal, Users, Award, Sparkles, Network } from 'lucide-react';

interface SlideDividerProps {
  onNext?: () => void;
}

export const SlideDivider: React.FC<SlideDividerProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09232d] to-[#041319] p-8 sm:p-12 md:p-16 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Tag */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>SECTION 02 / 02 • CREDENTIALS & ECOSYSTEM</span>
        </div>
        <div className="text-xs font-mono text-cyan-300/80">08 / 15</div>
      </div>

      {/* Center Giant Statement */}
      <div className="relative z-10 my-auto text-center space-y-6 max-w-3xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>INDUSTRY CERTIFICATIONS & SYSTEMS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
            CERTIFICATIONS,<br />
            <span className="text-cyan-300">LINUX & LEADERSHIP</span>
          </h2>

          <p className="text-sm sm:text-base text-cyan-100/80 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Verified technical achievements spanning Google Cloud Cybersecurity, IBM Generative AI, Oracle OCI AI, Ubuntu Server administration, student committee governance, and creative film direction.
          </p>
        </motion.div>

        {/* Feature Pill Matrix */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <div className="px-3.5 py-2 rounded-xl bg-[#081e26] border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center gap-2 shadow">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Google Cloud Cybersecurity</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-[#081e26] border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center gap-2 shadow">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>IBM Generative AI in Action</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-[#081e26] border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center gap-2 shadow">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>Ubuntu Linux Systems</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-[#081e26] border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center gap-2 shadow">
            <Users className="w-4 h-4 text-rose-400" />
            <span>Student Welfare Leadership</span>
          </div>
        </div>
      </div>

      {/* Footer & Continue Button */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-cyan-500/20 text-xs font-mono text-cyan-300/70">
        <span>Gowtham S • Professional Portfolio Deck</span>

        {onNext && (
          <button
            onClick={onNext}
            className="px-5 py-2 rounded-xl bg-[#f4edd9] hover:bg-white text-[#0a2732] font-black text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105 cursor-pointer font-heading tracking-wider"
          >
            <span>View Certifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
