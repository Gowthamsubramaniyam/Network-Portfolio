import React from 'react';
import { motion } from 'motion/react';
import { Film, Clapperboard, Video, Sparkles, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface SlideFeedDesign1Props {
  items?: ProjectMedia[];
  onSelectProject?: (project: ProjectMedia) => void;
}

export const SlideFeedDesign1: React.FC<SlideFeedDesign1Props> = ({ items = [], onSelectProject }) => {
  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#041319] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Radial glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 12</span>
          <span className="text-cyan-400/40">•</span>
          <span className="text-xs text-cyan-200 font-semibold">Creative Direction & Video Production</span>
        </div>
        <div className="text-xs text-cyan-300/80 font-mono">12 / 15</div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Film Slate & Creative Visuals (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Film 1 Card */}
            <div className="bg-[#081e26] border border-cyan-500/30 rounded-2xl p-4 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-400/30 text-cyan-300">
                  <Clapperboard className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/30">
                  Directed & Produced
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#f4edd9] font-heading">Narrative Short Film #1</h3>
                <div className="text-[11px] font-mono text-cyan-300">Screenplay, Direction & Editing</div>
              </div>

              <p className="text-[10px] text-cyan-100/75 leading-relaxed">
                Handled complete narrative scripting, actor direction, location scouting, multi-camera setups, and post-production pacing.
              </p>

              <div className="flex flex-wrap gap-1 text-[9px] font-mono text-cyan-300">
                <span className="px-2 py-0.5 bg-cyan-950 rounded">Scriptwriting</span>
                <span className="px-2 py-0.5 bg-cyan-950 rounded">Cinematography</span>
                <span className="px-2 py-0.5 bg-cyan-950 rounded">Color Grading</span>
              </div>
            </div>

            {/* Film 2 Card */}
            <div className="bg-[#081e26] border border-cyan-500/30 rounded-2xl p-4 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-400/30 text-amber-300">
                  <Film className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-amber-300 border border-amber-400/30">
                  Directed & Produced
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#f4edd9] font-heading">Conceptual Short Film #2</h3>
                <div className="text-[11px] font-mono text-amber-300">Cinematography & Audio Master</div>
              </div>

              <p className="text-[10px] text-cyan-100/75 leading-relaxed">
                Supervised sound design, dynamic scene transitions, lighting design, dialogue editing, and YouTube digital publishing workflows.
              </p>

              <div className="flex flex-wrap gap-1 text-[9px] font-mono text-cyan-300">
                <span className="px-2 py-0.5 bg-cyan-950 rounded">Sound Design</span>
                <span className="px-2 py-0.5 bg-cyan-950 rounded">Direction</span>
                <span className="px-2 py-0.5 bg-cyan-950 rounded">Post-Production</span>
              </div>
            </div>
          </div>

          {/* Quick Creator Metric Banner */}
          <div className="p-3 rounded-xl bg-[#05141b] border border-cyan-500/20 flex items-center justify-between text-xs font-mono text-cyan-200">
            <span className="flex items-center gap-2">
              <Video className="w-4 h-4 text-emerald-400" />
              <span>2 Independent Short Films Produced</span>
            </span>
            <span className="text-cyan-400">YouTube Creator</span>
          </div>
        </div>

        {/* Right: Creative Profile Details (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:pl-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#f4edd9] leading-[0.95]">
              CREATIVE<br />
              <span className="text-cyan-300">DIRECTION</span>
            </h2>
            <div className="text-xs font-mono font-bold tracking-wider text-cyan-300 mt-2 uppercase">
              YouTube & Short Film Production
            </div>
          </motion.div>

          <p className="text-xs sm:text-sm text-cyan-100/85 leading-relaxed font-light">
            Combining technical engineering discipline with creative storytelling. Directed, written, and produced 2 complete short films, orchestrating cinematography, sound engineering, video editing, and project delivery.
          </p>

          <div className="p-4 rounded-xl bg-[#081e26] border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="text-[11px] font-bold text-[#f4edd9] font-heading flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>CORE CREATIVE COMPETENCIES</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-cyan-100/90">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Screenwriting & storyboard visualization.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Camera composition, framing & three-point lighting.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Video editing, pacing, audio mixing & delivery.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono">
        <span>Gowtham S • Creative Media & Independent Video Production</span>
        <span>Slide 12 / 15</span>
      </div>
    </div>
  );
};
