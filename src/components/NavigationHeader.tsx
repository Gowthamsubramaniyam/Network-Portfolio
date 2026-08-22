import React from 'react';
import { 
  Presentation, 
  Grid3X3, 
  FolderArchive, 
  Printer, 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  SlidersHorizontal,
  Network,
  Download,
  Mail,
  Phone
} from 'lucide-react';
import { ViewMode, ProfileData } from '../types';

interface NavigationHeaderProps {
  currentMode: ViewMode;
  onSelectMode: (mode: ViewMode) => void;
  profile: ProfileData;
  onOpenQuickUpload: () => void;
  onOpenEditDrawer: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentMode,
  onSelectMode,
  profile,
  onOpenQuickUpload,
  onOpenEditDrawer,
  isFullscreen,
  onToggleFullscreen
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#06181f]/90 backdrop-blur-xl border-b border-cyan-500/20 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Persona Identity */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-cyan-500/20">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-base sm:text-lg text-[#f4edd9] tracking-tight">
                  {profile.name || 'GOWTHAM S'}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300">
                  {profile.title || 'NETWORK ENGINEER'}
                </span>
              </div>
              <p className="text-[10px] text-cyan-200/70 font-mono">
                {profile.subtitle || 'Cisco Packet Tracer • CCNA Candidate • Linux Infrastructure'}
              </p>
            </div>
          </div>

          {/* Mobile Edit Button */}
          <button
            onClick={onOpenQuickUpload}
            className="md:hidden px-3 py-1.5 rounded-xl bg-cyan-600 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Center Mode Switcher Tabs */}
        <div className="flex items-center bg-[#09222c] p-1 rounded-2xl border border-cyan-500/30 shadow-inner overflow-x-auto max-w-full">
          <button
            onClick={() => onSelectMode('deck')}
            id="nav-mode-deck"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentMode === 'deck'
                ? 'bg-[#f4edd9] text-[#0a2732] shadow-md'
                : 'text-cyan-200/80 hover:text-white'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>15-Slide Deck</span>
          </button>

          <button
            onClick={() => onSelectMode('wall')}
            id="nav-mode-wall"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentMode === 'wall'
                ? 'bg-[#f4edd9] text-[#0a2732] shadow-md'
                : 'text-cyan-200/80 hover:text-white'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>Overview Wall</span>
          </button>

          <button
            onClick={() => onSelectMode('portfolio')}
            id="nav-mode-portfolio"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentMode === 'portfolio'
                ? 'bg-[#f4edd9] text-[#0a2732] shadow-md'
                : 'text-cyan-200/80 hover:text-white'
            }`}
          >
            <FolderArchive className="w-3.5 h-3.5" />
            <span>Projects & Labs</span>
          </button>

          <button
            onClick={handlePrint}
            id="nav-mode-print"
            title="Export / Print PDF"
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-200/80 hover:text-white transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
        </div>

        {/* Right Tools & Call to Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="mailto:gowthamsubramaniyam05@gmail.com"
            className="px-3.5 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-400/40 text-cyan-200 text-xs font-mono font-bold flex items-center gap-1.5 transition"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Contact Gowtham</span>
          </a>

          <button
            onClick={onOpenQuickUpload}
            id="nav-quick-upload-btn"
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-extrabold shadow-lg shadow-cyan-600/20 flex items-center gap-1.5 transition hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Edit Profile</span>
          </button>

          <button
            onClick={onOpenEditDrawer}
            id="nav-open-drawer-btn"
            title="Advanced Portfolio Customizer"
            className="p-2 rounded-xl bg-[#09222c] hover:bg-cyan-900/80 text-cyan-200 border border-cyan-500/30 transition cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleFullscreen}
            id="nav-fullscreen-btn"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            className="p-2 rounded-xl bg-[#09222c] hover:bg-cyan-900/80 text-cyan-200 border border-cyan-500/30 transition cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
