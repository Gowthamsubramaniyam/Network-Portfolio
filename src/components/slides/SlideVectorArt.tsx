import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Activity, GitBranch, Github, Code, Server, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideVectorArtProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideVectorArt: React.FC<SlideVectorArtProps> = ({ items = [], onSelectProject }) => {
  const tools = [
    {
      name: 'Cisco Packet Tracer',
      role: 'Network Simulation & Topology Design',
      category: 'Primary Tool',
      icon: Server,
      color: 'border-cyan-400/40 text-cyan-300'
    },
    {
      name: 'Wireshark',
      role: 'Packet Analysis & Telemetry',
      category: 'Diagnostics',
      icon: Activity,
      color: 'border-emerald-400/40 text-emerald-300'
    },
    {
      name: 'Ubuntu Linux Server',
      role: 'CLI Admin, Netplan & UFW',
      category: 'Operating System',
      icon: Terminal,
      color: 'border-amber-400/40 text-amber-300'
    },
    {
      name: 'Git & GitHub',
      role: 'Version Control & Repositories',
      category: 'DevOps & Code',
      icon: Github,
      color: 'border-purple-400/40 text-purple-300'
    },
    {
      name: 'Python',
      role: 'Scripting & Automation Basics',
      category: 'Programming',
      icon: Code,
      color: 'border-blue-400/40 text-blue-300'
    },
    {
      name: 'Cisco IOS CLI',
      role: 'Router & Switch Configuration',
      category: 'Hardware CLI',
      icon: Cpu,
      color: 'border-rose-400/40 text-rose-300'
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Radial glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 14</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Technical Toolchain & Engineering Stack</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">14 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: 6 Tools Grid (7 cols) */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tools.map((t, idx) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="p-3.5 rounded-xl bg-[#081e26]/95 border border-cyan-500/30 hover:border-cyan-300/60 shadow-lg space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-cyan-950/80 border ${t.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-400/20">
                      {t.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-[#f4edd9] font-heading">{t.name}</h3>
                    <p className="text-[10px] text-cyan-200/80 font-mono">{t.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Stack Overview (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              TECHNICAL<br />
              <span className="text-cyan-300">TOOLKIT</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              Simulation, Diagnostic & Automation Stack
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Comprehensive suite of networking simulation platforms, packet analyzers, operating systems, and scripting tools utilized to design, configure, and maintain robust infrastructure.
          </p>

          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>STACK WORKFLOW</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Simulation: Cisco Packet Tracer (Routers, Switches, Servers).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Diagnostics: Wireshark captures, ICMP ping, traceroute, netstat.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Environment: Ubuntu Linux Server, Bash scripts & Git versioning.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Integrated Diagnostic & Configuration Toolchain</span>
        <span>Slide 14 / 15</span>
      </div>
    </div>
  );
};
