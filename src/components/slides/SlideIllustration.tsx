import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Server, Terminal, ShieldCheck, CheckCircle2, ChevronRight, Layers, Cpu, Radio } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideIllustrationProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideIllustration: React.FC<SlideIllustrationProps> = ({ items = [], onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'topology' | 'cli' | 'vlans'>('topology');

  const vlanList = [
    { vlan: 10, name: 'MANAGEMENT', subnet: '192.168.10.0/24', gw: '192.168.10.1', color: 'bg-cyan-500' },
    { vlan: 20, name: 'ENGINEERING', subnet: '192.168.20.0/24', gw: '192.168.20.1', color: 'bg-emerald-500' },
    { vlan: 30, name: 'FINANCE', subnet: '192.168.30.0/24', gw: '192.168.30.1', color: 'bg-amber-500' },
    { vlan: 40, name: 'HUMAN RESOURCES', subnet: '192.168.40.0/24', gw: '192.168.40.1', color: 'bg-indigo-500' },
    { vlan: 50, name: 'GUEST WIFI', subnet: '192.168.50.0/24', gw: '192.168.50.1', color: 'bg-rose-500' },
    { vlan: 99, name: 'SERVER FARM', subnet: '192.168.99.0/24', gw: '192.168.99.1', color: 'bg-purple-500' }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 04</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Enterprise Network Design • Cisco Packet Tracer</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">04 / 15</div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
        {/* Left: Interactive Topology & Inspector (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          {/* Tab Selector */}
          <div className="flex items-center gap-2 bg-[#061820] p-1.5 rounded-xl border border-cyan-500/25">
            <button
              onClick={() => setActiveTab('topology')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'topology' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-cyan-300/70 hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Multi-Branch Topology</span>
            </button>
            <button
              onClick={() => setActiveTab('vlans')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'vlans' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-cyan-300/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>6x VLAN Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab('cli')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'cli' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-cyan-300/70 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Cisco IOS CLI</span>
            </button>
          </div>

          {/* Tab 1: Topology Visual */}
          {activeTab === 'topology' && (
            <div className="bg-[#081e26]/95 border border-cyan-500/30 rounded-2xl p-4 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  3x Cisco 1941 Routers • 2x Catalyst 2960 Switches
                </span>
                <span className="text-[10px] text-amber-300">IEEE 802.1Q Trunk Active</span>
              </div>

              {/* Graphical Topo Map */}
              <div className="relative bg-[#051319] border border-cyan-500/20 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center space-y-4">
                {/* Router Tier */}
                <div className="flex items-center justify-center gap-4 sm:gap-8 w-full">
                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-400/50 text-center shadow-lg w-28 sm:w-32">
                    <Server className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white font-mono">HQ-R1 (1941)</div>
                    <div className="text-[9px] text-cyan-300 font-mono">10.0.0.1/30</div>
                  </div>

                  <div className="h-0.5 w-8 sm:w-16 bg-gradient-to-r from-cyan-400 to-amber-400" />

                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-400/50 text-center shadow-lg w-28 sm:w-32">
                    <Server className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white font-mono">Branch-R2</div>
                    <div className="text-[9px] text-cyan-300 font-mono">10.0.0.2/30</div>
                  </div>

                  <div className="h-0.5 w-8 sm:w-16 bg-gradient-to-r from-amber-400 to-emerald-400 hidden sm:block" />

                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-400/50 text-center shadow-lg w-28 sm:w-32 hidden sm:block">
                    <Server className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white font-mono">Branch-R3</div>
                    <div className="text-[9px] text-cyan-300 font-mono">10.0.0.6/30</div>
                  </div>
                </div>

                {/* Vertical Trunk Links */}
                <div className="w-0.5 h-6 bg-cyan-400/60" />

                {/* Switch Tier */}
                <div className="flex items-center justify-around w-full">
                  <div className="p-2.5 rounded-xl bg-[#09222c] border border-cyan-500/40 text-center shadow-lg w-36 sm:w-44">
                    <Network className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-cyan-100 font-mono">SW-CORE (2960)</div>
                    <div className="text-[9px] text-cyan-400 font-mono">Dot1Q 802.1Q Trunk</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#09222c] border border-cyan-500/40 text-center shadow-lg w-36 sm:w-44">
                    <Network className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-cyan-100 font-mono">SW-ACCESS (2960)</div>
                    <div className="text-[9px] text-cyan-400 font-mono">VLAN 10,20,30,40,50,99</div>
                  </div>
                </div>
              </div>

              {/* Quick Spec Bullet list */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-cyan-100/90">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Router-on-a-Stick Config</span>
                </div>
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Static WAN Routing</span>
                </div>
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DHCP Dynamic Leases</span>
                </div>
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>0% Packet Drop Verified</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: VLAN Matrix */}
          {activeTab === 'vlans' && (
            <div className="bg-[#081e26]/95 border border-cyan-500/30 rounded-2xl p-4 shadow-xl space-y-2">
              <div className="text-xs font-mono font-bold text-cyan-300 mb-2">VLAN SEGMENTATION & SUBNET SCHEME</div>
              <div className="space-y-1.5 max-h-56 overflow-y-auto font-mono text-xs">
                {vlanList.map((v) => (
                  <div key={v.vlan} className="p-2 rounded-lg bg-[#05141b] border border-cyan-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${v.color}`} />
                      <span className="font-bold text-white">VLAN {v.vlan}</span>
                      <span className="text-cyan-300 text-[11px]">[{v.name}]</span>
                    </div>
                    <div className="text-right text-[11px]">
                      <div className="text-cyan-100">{v.subnet}</div>
                      <div className="text-cyan-400/80 text-[10px]">GW: {v.gw}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: CLI Commands */}
          {activeTab === 'cli' && (
            <div className="bg-[#040f14] border border-cyan-500/30 rounded-2xl p-4 shadow-xl font-mono text-xs space-y-2 text-cyan-200">
              <div className="text-emerald-400 font-bold text-[11px]">// Cisco 1941 Router-on-a-Stick Sub-interfaces</div>
              <div className="bg-[#02080a] p-3 rounded-xl border border-cyan-500/20 space-y-1 text-[11px] leading-relaxed">
                <div>Router(config)# <span className="text-white">interface GigabitEthernet0/0.10</span></div>
                <div>Router(config-subif)# <span className="text-amber-300">encapsulation dot1Q 10</span></div>
                <div>Router(config-subif)# <span className="text-white">ip address 192.168.10.1 255.255.255.0</span></div>
                <div className="text-cyan-400/70 pt-1">// Configure Static Routing between branches:</div>
                <div>Router(config)# <span className="text-white">ip route 192.168.20.0 255.255.255.0 10.0.0.2</span></div>
                <div>Router# <span className="text-emerald-300">show ip route static</span></div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Technical Highlights & Specs (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              ENTERPRISE<br />
              <span className="text-cyan-300">NETWORK DESIGN</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              Cisco Packet Tracer Multi-Branch Topology
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Designed and deployed a multi-branch enterprise network using 3 Cisco 1941 routers, 2 Cisco 2960 switches, and 6 end devices. Segmented the network into 6 VLANs by department and implemented IEEE 802.1Q trunking with Router-on-a-Stick for inter-VLAN routing.
          </p>

          {/* Key Engineering Accomplishments */}
          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2.5 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>KEY ACCOMPLISHMENTS</span>
            </div>
            
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Configured DHCP for automatic IP allocation across departmental subnets.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Configured static routing between branch routers for end-to-end WAN reachability.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Validated connectivity and resolved network faults using ICMP & Packet Tracer diagnostics.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Enterprise Network Simulation Lab</span>
        <span>Slide 04 / 15</span>
      </div>
    </div>
  );
};
