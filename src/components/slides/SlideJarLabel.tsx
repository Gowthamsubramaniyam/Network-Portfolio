import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, CheckCircle2, ChevronRight, HardDrive, FileCode, Server } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideJarLabelProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideJarLabel: React.FC<SlideJarLabelProps> = ({ items = [], onSelectProject }) => {
  const [activeSnippet, setActiveSnippet] = useState<'netplan' | 'ufw' | 'bash'>('netplan');

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Radial glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 10</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Ubuntu Linux Administration & Server Configuration</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">10 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
        {/* Left: Terminal & Script Editor (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          {/* File Switcher */}
          <div className="flex items-center gap-2 bg-[#061820] p-1.5 rounded-xl border border-cyan-500/25 text-xs font-mono">
            <button
              onClick={() => setActiveSnippet('netplan')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                activeSnippet === 'netplan' ? 'bg-cyan-600 text-white font-bold' : 'text-cyan-300/70 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>/etc/netplan.yaml</span>
            </button>
            <button
              onClick={() => setActiveSnippet('ufw')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                activeSnippet === 'ufw' ? 'bg-cyan-600 text-white font-bold' : 'text-cyan-300/70 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>UFW Firewall Rules</span>
            </button>
            <button
              onClick={() => setActiveSnippet('bash')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                activeSnippet === 'bash' ? 'bg-cyan-600 text-white font-bold' : 'text-cyan-300/70 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>network_monitor.sh</span>
            </button>
          </div>

          {/* Terminal Box */}
          <div className="bg-[#040f14] border border-cyan-500/30 rounded-2xl p-4 shadow-2xl font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 text-[11px] text-cyan-300">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                gowtham@ubuntu-server:~$
              </span>
              <span className="text-[10px] text-amber-300">Ubuntu 24.04 LTS</span>
            </div>

            {activeSnippet === 'netplan' && (
              <div className="bg-[#020709] p-3 rounded-xl border border-cyan-500/15 text-[11px] space-y-1 text-cyan-100">
                <div className="text-cyan-400/80"># Static IP Configuration with Netplan</div>
                <div>network:</div>
                <div className="pl-4">version: 2</div>
                <div className="pl-4">ethernets:</div>
                <div className="pl-8 text-amber-300">eth0:</div>
                <div className="pl-12">dhcp4: no</div>
                <div className="pl-12">addresses: [<span className="text-emerald-300">192.168.1.50/24</span>]</div>
                <div className="pl-12">gateway4: 192.168.1.1</div>
                <div className="pl-12">nameservers:</div>
                <div className="pl-16">addresses: [192.168.1.10, 8.8.8.8]</div>
                <div className="pt-2 text-cyan-400">$ sudo netplan apply && ip a show eth0</div>
              </div>
            )}

            {activeSnippet === 'ufw' && (
              <div className="bg-[#020709] p-3 rounded-xl border border-cyan-500/15 text-[11px] space-y-1 text-cyan-100">
                <div className="text-cyan-400/80"># Firewall Hardening with UFW</div>
                <div>$ sudo ufw default deny incoming</div>
                <div>$ sudo ufw default allow outgoing</div>
                <div>$ sudo ufw allow from 192.168.1.0/24 to any port 22 proto tcp</div>
                <div>$ sudo ufw allow 80,443/tcp</div>
                <div>$ sudo ufw enable</div>
                <div className="text-emerald-400 pt-1">Status: active | Logging: on (low)</div>
              </div>
            )}

            {activeSnippet === 'bash' && (
              <div className="bg-[#020709] p-3 rounded-xl border border-cyan-500/15 text-[11px] space-y-1 text-cyan-100">
                <div className="text-cyan-400/80">#!/bin/bash - Automated Interface Health Check</div>
                <div>GATEWAY="192.168.1.1"</div>
                <div>if ping -c 1 "$GATEWAY" &amp;&gt; /dev/null; then</div>
                <div className="pl-4 text-emerald-300">echo "[$(date)] Network UP: Gateway reachable" &gt;&gt; /var/log/netcheck.log</div>
                <div>else</div>
                <div className="pl-4 text-rose-300">echo "[$(date)] Network ALERT: Gateway unreachable" &gt;&gt; /var/log/netcheck.log</div>
                <div>fi</div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Architectural Highlights (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              LINUX SYSTEMS &<br />
              <span className="text-cyan-300">ADMINISTRATION</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              Ubuntu Server, Bash, Networking & Services
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Hands-on administration of Ubuntu Linux environments: managing network interfaces via Netplan, enforcing UFW firewall rules, configuring SSH key-pair authentication, systemd service lifecycle control, and automated monitoring via Bash scripting.
          </p>

          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>SYSTEMS CAPABILITIES</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Netplan static routing and DNS resolver configuration.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Systemd services: systemctl start/restart/enable.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>UFW firewall access control and port protection.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Linux Systems Engineering & CLI Mastery</span>
        <span>Slide 10 / 15</span>
      </div>
    </div>
  );
};
