import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Server, Globe, HardDrive, CheckCircle2, ChevronRight, Activity, Terminal, Shield } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideTypographyProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideTypography: React.FC<SlideTypographyProps> = ({ items = [], onSelectProject }) => {
  const [testHost, setTestHost] = useState('files.office.local');
  const [pingResult, setPingResult] = useState<string | null>(null);

  const handlePing = (host: string) => {
    setTestHost(host);
    setPingResult('Pinging ' + host + ' [192.168.1.100] with 32 bytes of data:\nReply from 192.168.1.100: bytes=32 time<1ms TTL=128\nReply from 192.168.1.100: bytes=32 time<1ms TTL=128\nPing statistics: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)');
  };

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 05</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Small Office Network Infrastructure • Cisco Packet Tracer</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">05 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
        {/* Left: Server Infrastructure & Live DNS/Ping Console (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* DNS Server Card */}
            <div className="bg-[#081e26] border border-cyan-500/30 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">Port 53 Active</span>
              </div>
              <div className="font-bold text-sm text-[#f4edd9] font-mono">DNS Server</div>
              <div className="text-[11px] text-cyan-200/80 font-mono">192.168.1.10</div>
              <div className="text-[10px] text-cyan-300/70 border-t border-cyan-500/20 pt-1.5">
                Local A-Records & Hostname mapping for all office clients
              </div>
            </div>

            {/* DHCP Server Card */}
            <div className="bg-[#081e26] border border-cyan-500/30 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <Server className="w-5 h-5 text-amber-400" />
                <span className="text-[9px] font-mono text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded">Port 67/68 UDP</span>
              </div>
              <div className="font-bold text-sm text-[#f4edd9] font-mono">DHCP Pool</div>
              <div className="text-[11px] text-cyan-200/80 font-mono">192.168.1.50–150</div>
              <div className="text-[10px] text-cyan-300/70 border-t border-cyan-500/20 pt-1.5">
                Dynamic IP leasing with default gateway & DNS auto-configuration
              </div>
            </div>

            {/* File Server Card */}
            <div className="bg-[#081e26] border border-cyan-500/30 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <HardDrive className="w-5 h-5 text-purple-400" />
                <span className="text-[9px] font-mono text-purple-400 bg-purple-950 px-1.5 py-0.5 rounded">FTP / SMB</span>
              </div>
              <div className="font-bold text-sm text-[#f4edd9] font-mono">File Server</div>
              <div className="text-[11px] text-cyan-200/80 font-mono">192.168.1.100</div>
              <div className="text-[10px] text-cyan-300/70 border-t border-cyan-500/20 pt-1.5">
                Centralized storage sharing across Windows & Linux workstations
              </div>
            </div>
          </div>

          {/* Interactive Diagnostic Terminal Simulator */}
          <div className="bg-[#040f14] border border-cyan-500/30 rounded-2xl p-4 shadow-xl font-mono text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-xs font-bold">Client-to-Server ICMP Verification Console</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handlePing('dns.office.local')}
                  className="px-2 py-1 bg-cyan-950 hover:bg-cyan-900 border border-cyan-400/40 text-[10px] text-cyan-200 rounded cursor-pointer transition"
                >
                  Ping DNS
                </button>
                <button
                  onClick={() => handlePing('files.office.local')}
                  className="px-2 py-1 bg-cyan-950 hover:bg-cyan-900 border border-cyan-400/40 text-[10px] text-cyan-200 rounded cursor-pointer transition"
                >
                  Ping File Server
                </button>
              </div>
            </div>

            <div className="bg-[#020709] p-3 rounded-xl border border-cyan-500/15 space-y-1.5 text-[11px]">
              <div className="text-emerald-400">$ ping {testHost}</div>
              <div className="text-cyan-100/90 whitespace-pre-wrap leading-relaxed">
                {pingResult || `Pinging ${testHost} [192.168.1.100] with 32 bytes of data:\nReply from 192.168.1.100: bytes=32 time<1ms TTL=128\nReply from 192.168.1.100: bytes=32 time<1ms TTL=128\nPing statistics: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Summary (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              SMALL OFFICE<br />
              <span className="text-cyan-300">INFRASTRUCTURE</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              DHCP, DNS, File Server & Cross-Platform Clients
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Designed and implemented a small office network with centralized DHCP, DNS, and file-sharing services. Configured local DNS for hostname resolution, centralized storage access, assigned static IPs where needed, and validated end-to-end connectivity using ICMP ping diagnostics.
          </p>

          {/* Applied Core CCNA Concepts */}
          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2.5 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>APPLIED CCNA PRINCIPLES</span>
            </div>
            
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>IPv4 Subnet Planning & Default Gateway redundancy.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>DNS A-Record mappings for seamless internal service discovery.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Troubleshooting client-server communication across Windows & Ubuntu.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • SOHO Network Deployment & Server Infrastructure</span>
        <span>Slide 05 / 15</span>
      </div>
    </div>
  );
};
