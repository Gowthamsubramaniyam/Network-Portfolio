import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize, 
  Grid, 
  Sparkles, 
  Download,
  Share2,
  Check
} from 'lucide-react';
import { ProfileData, SlideItem, ProjectMedia } from '../types';

import { SlideCover } from './slides/SlideCover';
import { SlideIntro } from './slides/SlideIntro';
import { SlideIndex } from './slides/SlideIndex';
import { SlideIllustration } from './slides/SlideIllustration';
import { SlideTypography } from './slides/SlideTypography';
import { SlideBookCover } from './slides/SlideBookCover';
import { SlideDigitalImaging } from './slides/SlideDigitalImaging';
import { SlideDivider } from './slides/SlideDivider';
import { SlideMerchandise } from './slides/SlideMerchandise';
import { SlideJarLabel } from './slides/SlideJarLabel';
import { SlideBrandBook } from './slides/SlideBrandBook';
import { SlideFeedDesign1 } from './slides/SlideFeedDesign1';
import { SlideFeedDesign2 } from './slides/SlideFeedDesign2';
import { SlideVectorArt } from './slides/SlideVectorArt';
import { SlidePromoContent } from './slides/SlidePromoContent';

interface SlideDeckViewProps {
  slides: SlideItem[];
  profile: ProfileData;
  currentSlideId: number;
  onChangeSlide: (slideId: number) => void;
  onSelectProject?: (project: ProjectMedia) => void;
  onOpenEdit?: () => void;
  onOpenWall?: () => void;
}

export const SlideDeckView: React.FC<SlideDeckViewProps> = ({
  slides,
  profile,
  currentSlideId,
  onChangeSlide,
  onSelectProject,
  onOpenEdit,
  onOpenWall
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentIndex = slides.findIndex(s => s.id === currentSlideId);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const currentSlide = slides[safeIndex] || slides[0];

  const handlePrev = () => {
    if (safeIndex > 0) {
      onChangeSlide(slides[safeIndex - 1].id);
    } else {
      onChangeSlide(slides[slides.length - 1].id); // loop back
    }
  };

  const handleNext = () => {
    if (safeIndex < slides.length - 1) {
      onChangeSlide(slides[safeIndex + 1].id);
    } else {
      onChangeSlide(slides[0].id); // loop around
    }
  };

  // Keyboard Navigation Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, slides]);

  // Autoplay timer
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, safeIndex]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render respective slide component based on slide id
  const renderSlideContent = () => {
    switch (currentSlide.id) {
      case 1:
        return <SlideCover profile={profile} onNext={handleNext} onOpenEdit={onOpenEdit} />;
      case 2:
        return <SlideIntro profile={profile} onOpenEdit={onOpenEdit} />;
      case 3:
        return <SlideIndex onSelectSlide={(id) => onChangeSlide(id)} />;
      case 4:
        return <SlideIllustration items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 5:
        return <SlideTypography items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 6:
        return <SlideBookCover items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 7:
        return <SlideDigitalImaging items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 8:
        return <SlideDivider onNext={handleNext} />;
      case 9:
        return <SlideMerchandise items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 10:
        return <SlideJarLabel items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 11:
        return <SlideBrandBook items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 12:
        return <SlideFeedDesign1 items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 13:
        return <SlideFeedDesign2 items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 14:
        return <SlideVectorArt items={currentSlide.items} onSelectProject={onSelectProject} />;
      case 15:
        return <SlidePromoContent items={currentSlide.items} onSelectProject={onSelectProject} />;
      default:
        return <SlideCover profile={profile} onNext={handleNext} onOpenEdit={onOpenEdit} />;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Deck Presentation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#09222c]/90 border border-cyan-500/25 rounded-2xl p-3.5 sm:p-4 backdrop-blur-md shadow-xl">
        {/* Left: Current Slide Info & Jumper */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold shadow-inner">
            {currentSlide.slideNumberStr} / {slides.length.toString().padStart(2, '0')}
          </div>
          <div>
            <div className="text-xs font-bold text-[#f4edd9] font-heading">{currentSlide.title}</div>
            <div className="text-[10px] text-cyan-300/80">{currentSlide.subtitle}</div>
          </div>
        </div>

        {/* Center: Slide Switcher Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            id="deck-prev-btn"
            title="Previous Slide (Left Arrow)"
            className="w-9 h-9 rounded-xl bg-[#0e313d] hover:bg-cyan-800 text-cyan-200 border border-cyan-500/30 flex items-center justify-center transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            id="deck-autoplay-btn"
            title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            className="px-3 py-1.5 rounded-xl bg-[#0e313d] hover:bg-cyan-800 text-cyan-200 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                <span>Auto Play</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            id="deck-next-btn"
            title="Next Slide (Right Arrow or Space)"
            className="w-9 h-9 rounded-xl bg-[#0e313d] hover:bg-cyan-800 text-cyan-200 border border-cyan-500/30 flex items-center justify-center transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          {onOpenWall && (
            <button
              onClick={onOpenWall}
              id="deck-view-wall-btn"
              title="Overview Wall View"
              className="px-3 py-1.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-400/30 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">15-Sheet Wall</span>
            </button>
          )}

          <button
            onClick={handleShare}
            id="deck-share-btn"
            className="p-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-400/30 text-xs transition cursor-pointer"
            title="Copy Portfolio Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Presentation Canvas Stage */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Thumbnail Ribbon */}
      <div className="space-y-2 bg-[#081e26]/80 p-3 sm:p-4 rounded-2xl border border-cyan-500/20 backdrop-blur-md">
        <div className="flex items-center justify-between text-xs text-cyan-300/80 px-1 font-semibold">
          <span>PRESENTATION CHAPTERS</span>
          <span className="text-[11px] text-cyan-200/60">Use ← and → keys to navigate</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
          {slides.map((s, idx) => {
            const isActive = s.id === currentSlide.id;
            return (
              <button
                key={s.id}
                onClick={() => onChangeSlide(s.id)}
                id={`slide-thumb-${s.id}`}
                className={`shrink-0 px-3 py-2 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between min-w-[130px] ${
                  isActive
                    ? 'bg-cyan-800/90 border-cyan-300 text-white shadow-lg scale-102 ring-2 ring-cyan-400/30'
                    : 'bg-[#09222c] border-cyan-500/25 text-cyan-200/70 hover:bg-[#0e313d] hover:text-cyan-100'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                  <span>{s.slideNumberStr}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />}
                </div>
                <div className="text-xs font-bold font-heading truncate max-w-[110px] text-[#f4edd9]">
                  {s.title}
                </div>
                <div className="text-[9px] text-cyan-300/80 truncate max-w-[110px]">
                  {s.category}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
