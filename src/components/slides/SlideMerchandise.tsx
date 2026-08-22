import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, Database, Cloud, Terminal, CheckCircle2, ExternalLink } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideMerchandiseProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideMerchandise: React.FC<SlideMerchandiseProps> = ({ items = [], onSelectProject }) => {
  const certifications = [
    {
      title: 'Generative AI in Action',
      issuer: 'IBM SkillsBuild',
      category: 'Artificial Intelligence',
      badge: 'Verified Credential',
      desc: 'Transformer architectures, enterprise prompt engineering, generative model deployment, and AI security ethics.',
      icon: Sparkles,
      color: 'border-cyan-400/40 bg-cyan-950/40 text-cyan-300'
    },
    {
      title: 'Google Cloud Cybersecurity',
      issuer: 'Google Cloud',
      category: 'Cloud Defense & IAM',
      badge: 'Professional Specialization',
      desc: 'VPC perimeter firewalls, Cloud Armor security policies, Identity & Access Management (IAM), and cloud threat containment.',
      icon: ShieldCheck,
      color: 'border-emerald-400/40 bg-emerald-950/40 text-emerald-300'
    },
    {
      title: 'Google Cloud Data Analytics',
      issuer: 'Google Cloud',
      category: 'Data Engineering',
      badge: 'Certified',
      desc: 'Serverless big data pipelines, SQL analytics, BigQuery infrastructure, and distributed cloud analytics.',
      icon: Database,
      color: 'border-blue-400/40 bg-blue-950/40 text-blue-300'
    },
    {
      title: 'Oracle Certified AI Foundations Associate',
      issuer: 'Oracle Cloud Infrastructure',
      category: 'Cloud Infrastructure',
      badge: 'Oracle Certified',
      desc: 'OCI compute infrastructure, machine learning lifecycle management, and enterprise AI services.',
      icon: Cloud,
      color: 'border-amber-400/40 bg-amber-950/40 text-amber-300'
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco Systems',
      category: 'Enterprise Networking',
      badge: 'In Progress (Active Prep)',
      desc: 'Network fundamentals, IP connectivity, routing protocols, VLANs, switching, IP services, and network automation.',
      icon: Award,
      color: 'border-rose-400/40 bg-rose-950/40 text-rose-300'
    },
    {
      title: 'Linux Administration Certificate',
      issuer: 'Applied Labs & Self Learning',
      category: 'Operating Systems',
      badge: 'Completed',
      desc: 'File permissions, systemd daemon control, UFW firewalls, SSH key security, Netplan network configurations, and Bash automation.',
      icon: Terminal,
      color: 'border-indigo-400/40 bg-indigo-950/40 text-indigo-300'
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 09</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Verified Industry Certifications</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">09 / 15</div>
      </div>

      {/* Main Grid: 6 Certification Cards */}
      <div className="my-auto py-2">
        <div className="text-center max-w-xl mx-auto mb-4 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-[#f4edd9] tracking-tight">
            INDUSTRY CREDENTIALS & SPECIALIZATIONS
          </h2>
          <p className="text-xs text-cyan-200/80 font-light">
            Recognized certifications across Cloud Security, Artificial Intelligence, Big Data, and Networking
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-[#081e26]/95 border border-cyan-500/30 hover:border-cyan-300/60 rounded-xl p-4 shadow-lg flex flex-col justify-between space-y-3 transition-all hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className={`p-2 rounded-lg border ${cert.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-400/30 text-cyan-300">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-[#f4edd9] font-heading leading-tight mb-0.5">
                    {cert.title}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-300 font-semibold mb-2">
                    {cert.issuer}
                  </div>
                  <p className="text-[10px] text-cyan-100/75 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                  <span>{cert.category}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Continuous Learning & Technical Verification</span>
        <span>Slide 09 / 15</span>
      </div>
    </div>
  );
};
