import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, ShieldAlert, CheckCircle2, ChevronRight, Terminal, RefreshCw, Layers } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideDigitalImagingProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideDigitalImaging: React.FC<SlideDigitalImagingProps> = ({ items = [], onSelectProject }) => {
  const [activeProtocol, setActiveProtocol] = useState<'tcp' | 'arp' | 'icmp'>('tcp');

  const packets = [
    { no: 1, time: '0.000000', src: '192.168.1.50', dst: '192.168.1.10', proto: 'TCP', len: 74, info: '52431 → 53 [SYN] Seq=0 Win=64240 Len=0 MSS=1460' },
    { no: 2, time: '0.000412', src: '192.168.1.10', dst: '192.168.1.50', proto: 'TCP', len: 74, info: '53 → 52431 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0' },
    { no: 3, time: '0.000628', src: '192.168.1.50', dst: '192.168.1.10', proto: 'TCP', len: 66, info: '52431 → 53 [ACK] Seq=1 Ack=1 Win=64240 Len=0' },
    { no: 4, time: '0.001204', src: '192.168.1.50', dst: '192.168.1.100', proto: 'ICMP', len: 98, info: 'Echo (ping) request  id=0x0001, seq=1/256, ttl=128' },
    { no: 5, time: '0.001598', src: '192.168.1.100', dst: '192.168.1.50', proto: 'ICMP', len: 98, info: 'Echo (ping) reply    id=0x0001, seq=1/256, ttl=128' }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Radial glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 07</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Wireshark Packet Analysis & Troubleshooting</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">07 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
        {/* Left: Wireshark Simulation Frame (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          {/* Protocol Switcher */}
          <div className="flex items-center justify-between bg-[#061820] p-1.5 rounded-xl border border-cyan-500/25">
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <button
                onClick={() => setActiveProtocol('tcp')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  activeProtocol === 'tcp' ? 'bg-cyan-600 text-white font-bold' : 'text-cyan-300/70 hover:text-white'
                }`}
              >
                TCP Handshake
              </button>
              <button
                onClick={() => setActiveProtocol('arp')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  activeProtocol === 'arp' ? 'bg-cyan-600 text-white font-bold' : 'text-cyan-300/70 hover:text-white'
                }`}
              >
                ARP Resolution
              </button>
              <button
                onClick={() => setActiveProtocol('icmp')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  activeProtocol === 'icmp' ? 'bg-cyan-600 text-white font-bold' : 'text-cyan-300/70 hover:text-white'
                }`}
              >
                ICMP Ping Diagnostics
              </button>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 bg-emerald-950/80 rounded border border-emerald-500/30">
              Live Capture
            </span>
          </div>

          {/* Wireshark Packet List View */}
          <div className="bg-[#040f14] border border-cyan-500/30 rounded-2xl p-3 shadow-2xl font-mono text-xs space-y-1.5 overflow-x-auto">
            <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-cyan-400/80 border-b border-cyan-500/20 pb-1.5 px-2">
              <span className="col-span-1">No.</span>
              <span className="col-span-2">Time</span>
              <span className="col-span-3">Source</span>
              <span className="col-span-3">Destination</span>
              <span className="col-span-1">Proto</span>
              <span className="col-span-2">Length</span>
            </div>

            <div className="space-y-1">
              {packets.map((pkt) => (
                <div
                  key={pkt.no}
                  className="grid grid-cols-12 gap-2 text-[10px] p-1.5 rounded bg-[#061820] hover:bg-cyan-950 border border-cyan-500/15 cursor-pointer text-cyan-100 transition-colors"
                >
                  <span className="col-span-1 text-cyan-400">{pkt.no}</span>
                  <span className="col-span-2 text-cyan-300">{pkt.time}</span>
                  <span className="col-span-3 truncate text-white">{pkt.src}</span>
                  <span className="col-span-3 truncate text-white">{pkt.dst}</span>
                  <span className={`col-span-1 font-bold ${pkt.proto === 'TCP' ? 'text-amber-300' : 'text-emerald-300'}`}>
                    {pkt.proto}
                  </span>
                  <span className="col-span-2 text-cyan-300">{pkt.len}</span>
                </div>
              ))}
            </div>

            {/* Packet Detail Inspector */}
            <div className="p-2.5 rounded-xl bg-[#02080a] border border-cyan-500/20 text-[10px] text-cyan-200/90 space-y-1 mt-2">
              <div className="text-cyan-400 font-bold">▶ Frame 1: 74 bytes on wire, 74 bytes captured</div>
              <div className="text-cyan-300">▶ Ethernet II, Src: 00:50:79:66:68:01, Dst: 00:50:79:66:68:02</div>
              <div className="text-cyan-200">▶ Internet Protocol Version 4, Src: 192.168.1.50, Dst: 192.168.1.10</div>
              <div className="text-amber-300">▼ Transmission Control Protocol, Src Port: 52431, Dst Port: 53, Flags: [SYN]</div>
            </div>
          </div>
        </div>

        {/* Right: Analytical Overview (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              WIRESHARK &<br />
              <span className="text-cyan-300">PACKET TELEMETRY</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              Deep Packet Inspection & Fault Diagnosis
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Hands-on protocol inspection across the OSI 7-Layer and TCP/IP 4-Layer models. Diagnosed DNS resolution delays, ARP table misalignments, MTU packet fragmentation, and default gateway routing anomalies.
          </p>

          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>TROUBLESHOOTING TOOLKIT</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Wireshark filter syntax: <code className="text-amber-300">ip.addr == 192.168.1.50</code></span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>ICMP Type 8 (Echo Request) & Type 0 (Echo Reply) verification.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Cisco Packet Tracer simulation mode PDU inspection.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Protocol Diagnostics & Network Security Telemetry</span>
        <span>Slide 07 / 15</span>
      </div>
    </div>
  );
};
