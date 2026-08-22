import React from 'react';
import { motion } from 'motion/react';
import { Network, Layers, Binary, ShieldCheck, ChevronRight, Hash, Cpu } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideBookCoverProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideBookCover: React.FC<SlideBookCoverProps> = ({ items = [], onSelectProject }) => {
  const subnetExamples = [
    { prefix: '/24', mask: '255.255.255.0', usableHosts: 254, useCase: 'Departmental LAN (VLAN 10, 20)' },
    { prefix: '/28', mask: '255.255.255.240', usableHosts: 14, useCase: 'Management / Server Subnet' },
    { prefix: '/30', mask: '255.255.255.252', usableHosts: 2, useCase: 'Point-to-Point Router WAN Links' }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 06</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Routing & Switching Core Protocols</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">06 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
        {/* Left: Frame Anatomy & Subnetting Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* IEEE 802.1Q Frame Anatomy */}
          <div className="bg-[#081e26] border border-cyan-500/30 rounded-2xl p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
              <span className="font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                IEEE 802.1Q Ethernet Frame Tagging (4 Bytes)
              </span>
              <span className="text-[10px] text-amber-300">VLAN ID: 12 Bits (4096 VLANs)</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 font-mono text-center text-xs">
              <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30">
                <div className="text-[10px] text-cyan-400">TPID (16 bits)</div>
                <div className="font-bold text-white text-[11px]">0x8100</div>
              </div>
              <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30">
                <div className="text-[10px] text-cyan-400">PCP (3 bits)</div>
                <div className="font-bold text-white text-[11px]">Priority QoS</div>
              </div>
              <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30">
                <div className="text-[10px] text-cyan-400">DEI (1 bit)</div>
                <div className="font-bold text-white text-[11px]">Drop Eligible</div>
              </div>
              <div className="p-2 rounded-lg bg-cyan-800/90 border border-cyan-300 text-white font-bold">
                <div className="text-[10px] text-cyan-200">VID (12 bits)</div>
                <div className="text-[11px]">VLAN ID#</div>
              </div>
            </div>
          </div>

          {/* Subnetting Math Table */}
          <div className="bg-[#081e26] border border-cyan-500/30 rounded-2xl p-4 shadow-xl space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
              <span className="font-bold flex items-center gap-1.5">
                <Binary className="w-4 h-4 text-emerald-400" />
                VLSM & Subnet Allocation Matrix
              </span>
              <span className="text-[10px] text-cyan-400">IPv4 Calculations</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {subnetExamples.map((s) => (
                <div key={s.prefix} className="p-2.5 rounded-xl bg-[#05141b] border border-cyan-500/20 flex items-center justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-bold mr-2 text-[11px]">{s.prefix}</span>
                    <span className="text-white text-[11px]">{s.mask}</span>
                    <div className="text-[10px] text-cyan-400/80 mt-0.5">{s.useCase}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-300 font-bold">{s.usableHosts}</span>
                    <div className="text-[9px] text-cyan-300/60">Usable Hosts</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Architectural Explanation (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              ROUTING &<br />
              <span className="text-cyan-300">SWITCHING</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              VLANs, Dot1Q Trunking & Inter-VLAN Routing
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Granular Layer 2 broadcast containment and Layer 3 inter-VLAN routing architectures. Configured Cisco 2960 switches with trunking encapsulation, native VLAN security hardening, and Router-on-a-Stick sub-interfaces on Cisco 1941 ISR routers.
          </p>

          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>KEY PROTOCOL COMPETENCIES</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Switchport mode access vs. trunk port configuration.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Router-on-a-Stick dot1q sub-interface IP gateway assignments.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Eliminating broadcast storms and isolating guest wireless traffic.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Layer 2 / Layer 3 Protocol Engineering</span>
        <span>Slide 06 / 15</span>
      </div>
    </div>
  );
};
