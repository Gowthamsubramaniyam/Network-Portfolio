import React from 'react';
import { motion } from 'motion/react';
import { Network, ArrowRight, ShieldCheck, Terminal, Award, FileText, CheckCircle2, Server, Cpu } from 'lucide-react';
import { ProfileData } from '../../types';

interface SlideCoverProps {
  profile: ProfileData;
  onNext?: () => void;
  onOpenEdit?: () => void;
}

export const SlideCover: React.FC<SlideCoverProps> = ({ profile, onNext, onOpenEdit }) => {
  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09232d] to-[#041319] p-6 sm:p-10 md:p-14 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background ambient network grid & lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top Bar / Metadata */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-inner">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] tracking-widest uppercase font-semibold text-cyan-300 font-mono">
              ENGINEERING PORTFOLIO • 2024–2027
            </div>
            <div className="text-sm font-semibold text-[#e2ecf0]">{profile.name}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-cyan-500/30 text-xs text-cyan-200 backdrop-blur-sm shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px]">CCNA CANDIDATE • OPEN FOR INTERNSHIPS</span>
        </div>
      </div>

      {/* Main Center Composition */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        {/* Left Typography & Highlights (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Display Title */}
            <div className="flex flex-col select-none">
              <div className="text-[3.2rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.2rem] leading-[0.85] font-black tracking-tighter font-display text-[#f4edd9] drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
                NETWORK<br />
                <span className="text-cyan-300">ENGINEER</span>
              </div>
            </div>
          </motion.div>

          {/* Subtitles & Category Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <div className="px-3.5 py-1.5 bg-[#f4edd9] text-[#0c2f3c] font-black text-xs md:text-sm tracking-wider uppercase rounded shadow-lg font-heading">
              {profile.title || 'ASPIRING NETWORK ENGINEER'}
            </div>
            <div className="px-3.5 py-1.5 bg-cyan-950/90 border border-cyan-400/50 text-cyan-200 font-bold text-xs md:text-sm tracking-wider uppercase rounded backdrop-blur-sm font-mono">
              {profile.subtitle || 'CCNA CANDIDATE • LINUX ENTHUSIAST'}
            </div>
          </motion.div>

          <p className="text-cyan-100/85 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed pt-1">
            {profile.bio}
          </p>

          {/* Key Quick Metrics / Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 rounded-lg bg-[#061820] border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-1.5 font-mono">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              Cisco Packet Tracer
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#061820] border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              Ubuntu Linux & CLI
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#061820] border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Google & IBM Certified
            </span>
          </div>
        </div>

        {/* Right 3D Visual Profile Frame & Spec Sheet (4 cols) */}
        <div className="lg:col-span-4 flex justify-center items-center relative">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-sm relative group"
          >
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-2xl group-hover:bg-cyan-300/30 transition-all" />
            
            {/* Terminal Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#071d26] border-2 border-cyan-400/40 p-5 shadow-2xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-cyan-300/80">gowtham@cisco-lab:~</span>
              </div>

              {/* Terminal Bio Output */}
              <div className="font-mono text-xs space-y-2 text-cyan-100/90">
                <div className="text-cyan-400">$ whoami</div>
                <div className="text-white font-bold text-sm">{profile.name}</div>
                <div className="text-cyan-300/80 text-[11px]">B.E. Computer Science & Engg</div>
                <div className="text-cyan-200/70 text-[10px]">Angel College of Engineering</div>

                <div className="pt-2 border-t border-cyan-500/20 space-y-1 text-[11px]">
                  <div className="flex justify-between text-cyan-300">
                    <span>Target Cert:</span>
                    <span className="font-bold text-amber-300">Cisco CCNA</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span>Location:</span>
                    <span className="text-white">{profile.location}</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span>Phone:</span>
                    <span className="text-cyan-200 font-bold">{profile.phone}</span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-between text-[11px] text-cyan-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Portfolio
                </span>
                <span className="text-[10px] font-mono text-amber-400">15 Chapters</span>
              </div>
            </div>

            {/* Top Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>CCNA CANDIDATE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-cyan-500/20 text-xs text-cyan-200/70 gap-4">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px]">
          <div className="flex items-center gap-2 text-cyan-300">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>15 Interactive Presentation Chapters</span>
          </div>
          <div>{profile.location}</div>
          <div className="text-cyan-400 font-bold">{profile.email}</div>
        </div>

        <div className="flex items-center gap-3">
          {onOpenEdit && (
            <button
              onClick={onOpenEdit}
              id="cover-edit-btn"
              className="px-4 py-2 rounded-xl bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 border border-cyan-400/40 text-xs font-semibold transition-all hover:scale-105 cursor-pointer"
            >
              ✏️ Edit / Customize Details
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              id="cover-explore-btn"
              className="px-5 py-2 rounded-xl bg-[#f4edd9] hover:bg-white text-[#0a2732] text-xs font-extrabold flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer font-heading tracking-wide"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
