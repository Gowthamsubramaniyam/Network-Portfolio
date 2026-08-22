import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Printer, CheckCircle2, Send, Network, Copy, Check } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlidePromoContentProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlidePromoContent: React.FC<SlidePromoContentProps> = ({ items = [], onSelectProject }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gowthamsubramaniyam05@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919944195898');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-12 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 15</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Contact, Resume & Opportunities</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">15 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        {/* Left: Giant Call-to-Action & Summary (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-3">
              <Network className="w-3.5 h-3.5 text-emerald-400" />
              <span>OPEN FOR NETWORK ENGINEER ROLES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              LET’S BUILD<br />
              <span className="text-cyan-300">TOGETHER</span>
            </h2>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Currently pursuing CCNA certification and actively seeking a <strong className="text-white">Network Engineer Internship</strong> or <strong className="text-white">Entry-Level Network Engineer</strong> role. Ready to deploy enterprise routing, configure VLANs, administer Linux servers, and solve complex network challenges.
          </p>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:gowthamsubramaniyam05@gmail.com"
              className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#071f28] font-black text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105 font-mono cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-xl bg-[#09242e] hover:bg-[#0e3340] border border-cyan-400/40 text-cyan-200 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 font-mono cursor-pointer shadow"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / Save Complete PDF</span>
            </button>
          </div>
        </div>

        {/* Right: Direct Contact Spec Card (6 cols) */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#081e26]/95 border-2 border-cyan-400/40 rounded-2xl p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-cyan-500/25 pb-3">
              <div>
                <h3 className="font-bold text-lg text-[#f4edd9] font-heading">GOWTHAM S</h3>
                <div className="text-xs font-mono text-cyan-300">Aspiring Network Engineer • CCNA Candidate</div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
                Available Immediately
              </span>
            </div>

            {/* Detailed Rows */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="p-3 rounded-xl bg-[#05141b] border border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-300/70">Email Address</div>
                    <a href="mailto:gowthamsubramaniyam05@gmail.com" className="text-cyan-100 font-semibold hover:text-white underline">
                      gowthamsubramaniyam05@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-xl bg-[#05141b] border border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-300/70">Phone / WhatsApp</div>
                    <a href="tel:+919944195898" className="text-white font-bold hover:text-cyan-300">
                      +91 9944195898
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3 rounded-xl bg-[#05141b] border border-cyan-500/20 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-cyan-300/70">Location</div>
                  <div className="text-cyan-100 font-semibold">Tamil Nadu, India / Open to Relocation & Remote</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/gowtham-s-155984420"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#05141b] hover:bg-cyan-950 border border-cyan-500/20 flex items-center gap-2 text-cyan-200 transition"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px] truncate font-bold">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Gowthamsubramaniyam"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#05141b] hover:bg-cyan-950 border border-cyan-500/20 flex items-center gap-2 text-cyan-200 transition"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px] truncate font-bold">GitHub Repos</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Portfolio 2024–2027 • Thank You for Reviewing!</span>
        <span>Slide 15 / 15</span>
      </div>
    </div>
  );
};
