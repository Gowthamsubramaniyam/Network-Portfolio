import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Trophy, ChevronRight, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideBrandBookProps {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideBrandBook: React.FC<SlideBrandBookProps> = ({ items = [], onSelectProject }) => {
  const leadershipRoles = [
    {
      title: 'Student Welfare Committee Head',
      org: 'Angel College of Engineering & Technology',
      period: '2023 - 2025',
      icon: HeartHandshake,
      color: 'border-cyan-400/40 bg-cyan-950/50 text-cyan-300',
      highlights: [
        'Coordinated student initiatives, cultural activities, and symposiums.',
        'Acted as primary liaison between student body and senior collegiate administration.',
        'Addressed academic grievances, lab requirements, and welfare programs.'
      ]
    },
    {
      title: 'Team Captain - Yellow Lions',
      org: 'College Sports & Athletics League',
      period: '2024',
      icon: Trophy,
      color: 'border-amber-400/40 bg-amber-950/50 text-amber-300',
      highlights: [
        'Led and coordinated team members during college sports activities and tournaments.',
        'Formulated match strategies, conducted team training, and managed responsibilities.',
        'Fostered high team morale, discipline, and sportsmanship across events.'
      ]
    },
    {
      title: 'Class Representative',
      org: 'Department of Computer Science & Engineering',
      period: '2023 - 2024',
      icon: Users,
      color: 'border-emerald-400/40 bg-emerald-950/50 text-emerald-300',
      highlights: [
        'Coordinated communication between students and professors.',
        'Assisted in scheduling lab sessions, technical seminars, and project reviews.',
        'Maintained class records and coordinated departmental announcements.'
      ]
    }
  ];

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 11</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Leadership & Campus Governance</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">11 / 15</div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-2">
        <div className="text-center max-w-xl mx-auto mb-5 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-[#f4edd9] tracking-tight">
            CAMPUS LEADERSHIP & COMMUNITY IMPACT
          </h2>
          <p className="text-xs text-cyan-200/80 font-light">
            Demonstrated accountability, conflict resolution, team coordination, and student advocacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leadershipRoles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-[#081e26]/95 border border-cyan-500/30 hover:border-cyan-300/60 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-3 transition-all hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${role.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-400/30 text-cyan-300">
                      {role.period}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#f4edd9] font-heading mb-1">
                    {role.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300/90 mb-3">
                    {role.org}
                  </div>

                  <ul className="space-y-2 text-[11px] text-cyan-100/80">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                  <span>Verified Role</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Leadership, Team Dynamics & Institutional Coordination</span>
        <span>Slide 11 / 15</span>
      </div>
    </div>
  );
};
