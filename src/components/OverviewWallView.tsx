import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, ArrowUpRight, Maximize2, Layers } from 'lucide-react';
import { ProfileData, SlideItem, ProjectMedia } from '../types';

interface OverviewWallViewProps {
  slides: SlideItem[];
  profile: ProfileData;
  onSelectSlide: (slideNumber: number) => void;
  onSelectProject?: (project: ProjectMedia) => void;
  onOpenQuickUpload?: () => void;
}

export const OverviewWallView: React.FC<OverviewWallViewProps> = ({
  slides,
  profile,
  onSelectSlide,
  onSelectProject,
  onOpenQuickUpload
}) => {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Wall Intro Banner */}
      <div className="bg-[#0b2935]/80 border border-cyan-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 tracking-widest uppercase">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>MOODBOARD WALL DISPLAY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#f4edd9]">
            Full Presentation Sheet Overview
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100/80 max-w-2xl font-light">
            All 15 portfolio presentation cards arranged in our signature studio sheet layout. Click any slide card below to open the interactive slide presentation or view full high-res details.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {onOpenQuickUpload && (
            <button
              onClick={onOpenQuickUpload}
              id="wall-quick-upload-btn"
              className="px-4 py-2.5 rounded-xl bg-cyan-900/80 hover:bg-cyan-800 border border-cyan-400/40 text-cyan-200 text-xs font-bold shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Upload / Customise Details</span>
            </button>
          )}

          <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
            15 Sheets Loaded
          </div>
        </div>
      </div>

      {/* The 15 Cards Wall Layout (Inspired by the physical presentation sheet mockup) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden bg-[#0a232d] border-2 border-cyan-500/25 hover:border-cyan-300 shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Sheet Top Status Bar */}
            <div className="p-3 bg-[#081b23] border-b border-cyan-500/20 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 font-mono text-cyan-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>SLIDE {slide.slideNumberStr}</span>
              </div>
              <span className="text-[10px] uppercase font-semibold text-cyan-200/70 tracking-wider">
                {slide.category}
              </span>
            </div>

            {/* Thumbnail Canvas Representation */}
            <div 
              onClick={() => onSelectSlide(slide.id)}
              className="relative aspect-[16/10] bg-gradient-to-br from-[#124252] via-[#0f3745] to-[#08222b] p-4 sm:p-5 flex flex-col justify-between cursor-pointer overflow-hidden group/canvas"
            >
              {/* Subtle ambient lighting */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl group-hover/canvas:bg-cyan-400/25 transition-all" />

              {/* Title representation */}
              <div className="space-y-1 relative z-10">
                <div className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#f4edd9] leading-tight group-hover/canvas:text-cyan-200 transition-colors">
                  {slide.title}
                </div>
                <div className="text-[10px] font-heading font-bold text-cyan-300 uppercase tracking-wider">
                  {slide.subtitle}
                </div>
              </div>

              {/* Mini visual elements per slide type */}
              <div className="relative z-10">
                {slide.items && slide.items.length > 0 ? (
                  <div className="flex items-center gap-1.5 overflow-hidden py-1">
                    {slide.items.slice(0, 4).map((item, i) => (
                      <div 
                        key={item.id} 
                        className="w-10 h-10 rounded-lg overflow-hidden border border-cyan-400/30 shadow-md shrink-0 bg-cyan-950"
                      >
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                    {slide.items.length > 4 && (
                      <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400/30 flex items-center justify-center text-[10px] font-mono text-cyan-300">
                        +{slide.items.length - 4}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[11px] text-cyan-100/70 line-clamp-2 font-light">
                    {slide.description}
                  </p>
                )}
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-cyan-950/70 backdrop-blur-[2px] opacity-0 group-hover/canvas:opacity-100 transition-all flex items-center justify-center gap-2 text-xs font-bold text-[#f4edd9] z-20">
                <Maximize2 className="w-4 h-4 text-cyan-300" />
                <span>Open Slide #{slide.slideNumberStr}</span>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="p-3 bg-[#091f28] border-t border-cyan-500/20 flex items-center justify-between text-xs">
              <span className="text-[11px] text-cyan-200/70 truncate max-w-[180px]">
                {slide.title}
              </span>
              <button
                onClick={() => onSelectSlide(slide.id)}
                className="px-3 py-1 rounded-lg bg-cyan-900/60 hover:bg-cyan-700 text-cyan-200 text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
              >
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
