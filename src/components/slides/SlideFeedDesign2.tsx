import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, ChevronRight, Binary } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideFeedDesign2Props {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideFeedDesign2: React.FC<SlideFeedDesign2Props> = ({ items = [], onSelectProject }) => {
  const educationMilestones = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Angel College of Engineering & Technology',
      period: '2023 - 2027 (Expected Graduation)',
      location: 'Tamil Nadu, India',
      status: 'Current Undergrad',
      focus: 'Computer Networks, Data Communications, Operating Systems, Cloud Infrastructure & Distributed Algorithms',
      color: 'border-cyan-400/40 bg-cyan-950/60 text-cyan-300'
    },
    {
      degree: 'Higher Secondary Education (Bio-Maths)',
      institution: 'Shanthi Nikethan Higher Secondary School',
      period: 'Completed: 2015',
      location: 'Tamil Nadu, India',
      status: 'Completed',
      focus: 'Higher Mathematics, Analytical Thinking, Physics & Logical Reasoning',
      color: 'border-emerald-400/40 bg-emerald-950/60 text-emerald-300'
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 13</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Academic Education & Engineering Foundation</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">13 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Education Timeline Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {educationMilestones.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-[#081e26]/95 border border-cyan-500/30 rounded-2xl p-5 shadow-xl space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${edu.color}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#f4edd9] font-heading">{edu.degree}</h3>
                    <div className="text-xs font-mono text-cyan-300">{edu.institution}</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-400/30 text-cyan-300 shrink-0">
                  {edu.period}
                </span>
              </div>

              <p className="text-xs text-cyan-100/80 leading-relaxed pl-1">
                <span className="text-cyan-400 font-mono text-[11px]">Specialization: </span>
                {edu.focus}
              </p>

              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 pt-1 border-t border-cyan-500/20">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {edu.location}
                </span>
                <span className="text-emerald-400 font-bold">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Academic Focus Overview (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              ACADEMIC<br />
              <span className="text-cyan-300">ROADMAP</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              B.E. Computer Science & Engineering
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Strong foundation in Computer Networks, Discrete Mathematics, Data Structures, Operating Systems, and Cloud Architectures. Prepared for rigorous enterprise networking environments and technical troubleshooting.
          </p>

          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <Binary className="w-4 h-4 text-cyan-400" />
              <span>ACADEMIC FOCUS AREAS</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Computer Network Protocols (TCP/IP, Routing & Switching).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Operating Systems & Linux Kernel concepts.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Cloud Security & Machine Learning fundamentals.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Angel College of Engineering & Technology (Graduation 2027)</span>
        <span>Slide 13 / 15</span>
      </div>
    </div>
  );
};
