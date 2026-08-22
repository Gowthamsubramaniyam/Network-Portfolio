import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowUpRight, Network, Server, ShieldCheck, Activity, Award } from 'lucide-react';

interface SlideIndexProps {
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideIndex: React.FC<SlideIndexProps> = ({ onSelectSlide }) => {
  const chapters = [
    { num: '01', title: 'ENTERPRISE NETWORK', slideIndex: 4, icon: Network, desc: '3x Cisco 1941 Routers, 2960 Switches, 6 VLANs & Router-on-a-Stick' },
    { num: '02', title: 'SMALL OFFICE NETWORK', slideIndex: 5, icon: Server, desc: 'Centralized DHCP, Local DNS Server, File Sharing & Subnetting' },
    { num: '03', title: 'ROUTING & SWITCHING', slideIndex: 6, icon: Network, desc: 'IEEE 802.1Q Trunking, Inter-VLAN Sub-interfaces & Static Routes' },
    { num: '04', title: 'WIRESHARK & PACKET DIAGNOSTICS', slideIndex: 7, icon: Activity, desc: 'TCP Handshake, ARP Resolution, ICMP Ping & Fault Isolation' },
    { num: '05', title: 'CERTS, LINUX & LEADERSHIP', slideIndex: 8, icon: Award, desc: 'IBM AI, Google Cloud Security, Oracle, Ubuntu Linux & Direction' }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09232d] to-[#041319] p-6 sm:p-10 md:p-12 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-4 gap-3">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 03</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-wider text-[#f4edd9] flex items-center gap-3">
            TECHNICAL INDEX
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300">
              Interactive Lab Navigation
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-200/80 font-mono">
          <Compass className="w-4 h-4 text-cyan-400" />
          <span>Click any card to inspect topology</span>
        </div>
      </div>

      {/* Big Numbered Index Cards Row */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-auto py-4">
        {chapters.map((chap, idx) => {
          const Icon = chap.icon;
          return (
            <motion.button
              key={chap.num}
              onClick={() => onSelectSlide(chap.slideIndex)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-left group relative p-5 rounded-2xl bg-[#081e26]/95 hover:bg-[#0e3340]/95 border border-cyan-500/30 hover:border-cyan-300/70 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[230px]"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl sm:text-5xl font-black font-display text-[#f4edd9] group-hover:text-cyan-300 transition-colors">
                  {chap.num}
                </div>
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#0c2f3c] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5 mt-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-300 mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold font-heading text-[#f4edd9] tracking-wide group-hover:text-cyan-100">
                  {chap.title}
                </h3>
                <p className="text-[11px] text-cyan-200/70 leading-snug line-clamp-3">
                  {chap.desc}
                </p>
              </div>

              {/* Bottom indicator stripe */}
              <div className="w-full h-1 bg-cyan-950 rounded-full mt-3 overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-cyan-400 transition-all duration-300" />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Cisco Packet Tracer & Linux Infrastructure Presentation</span>
        <span>Slide 03 / 15</span>
      </div>
    </div>
  );
};
