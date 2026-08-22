import React, { useState, useEffect } from 'react';
import { initialProfile, defaultSlides } from './data/defaultPortfolio';
import { ProfileData, SlideItem, ViewMode, ProjectMedia } from './types';

import { NavigationHeader } from './components/NavigationHeader';
import { SlideDeckView } from './components/SlideDeckView';
import { OverviewWallView } from './components/OverviewWallView';
import { ProjectShowcaseView } from './components/ProjectShowcaseView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { QuickUploaderModal } from './components/QuickUploaderModal';
import { EditProfileDrawer } from './components/EditProfileDrawer';

// Printable slide components
import { SlideCover } from './components/slides/SlideCover';
import { SlideIntro } from './components/slides/SlideIntro';
import { SlideIndex } from './components/slides/SlideIndex';
import { SlideIllustration } from './components/slides/SlideIllustration';
import { SlideTypography } from './components/slides/SlideTypography';
import { SlideBookCover } from './components/slides/SlideBookCover';
import { SlideDigitalImaging } from './components/slides/SlideDigitalImaging';
import { SlideDivider } from './components/slides/SlideDivider';
import { SlideMerchandise } from './components/slides/SlideMerchandise';
import { SlideJarLabel } from './components/slides/SlideJarLabel';
import { SlideBrandBook } from './components/slides/SlideBrandBook';
import { SlideFeedDesign1 } from './components/slides/SlideFeedDesign1';
import { SlideFeedDesign2 } from './components/slides/SlideFeedDesign2';
import { SlideVectorArt } from './components/slides/SlideVectorArt';
import { SlidePromoContent } from './components/slides/SlidePromoContent';

export default function App() {
  // Load saved state from localStorage if available
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('gd_portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialProfile;
      }
    }
    return initialProfile;
  });

  const [slides, setSlides] = useState<SlideItem[]>(() => {
    const saved = localStorage.getItem('gd_portfolio_slides');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultSlides;
      }
    }
    return defaultSlides;
  });

  const [currentMode, setCurrentMode] = useState<ViewMode>('deck');
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<ProjectMedia | null>(null);
  
  const [isQuickUploadOpen, setIsQuickUploadOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('gd_portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('gd_portfolio_slides', JSON.stringify(slides));
  }, [slides]);

  const handleSaveProfile = (newProfile: ProfileData) => {
    setProfile(newProfile);
  };

  const handleSaveAll = (newProfile: ProfileData, newSlides: SlideItem[]) => {
    setProfile(newProfile);
    setSlides(newSlides);
  };

  const handleReset = () => {
    setProfile(initialProfile);
    setSlides(defaultSlides);
    localStorage.removeItem('gd_portfolio_profile');
    localStorage.removeItem('gd_portfolio_slides');
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#06181f] text-[#e2ecf0] selection:bg-[#22d3ee] selection:text-[#06181f] flex flex-col justify-between">
      {/* Navigation Header (Hidden in Print) */}
      <div className="no-print">
        <NavigationHeader
          currentMode={currentMode}
          onSelectMode={setCurrentMode}
          profile={profile}
          onOpenQuickUpload={() => setIsQuickUploadOpen(true)}
          onOpenEditDrawer={() => setIsEditDrawerOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 no-print">
        {currentMode === 'deck' && (
          <SlideDeckView
            slides={slides}
            profile={profile}
            currentSlideId={currentSlideId}
            onChangeSlide={setCurrentSlideId}
            onSelectProject={setSelectedProject}
            onOpenEdit={() => setIsEditDrawerOpen(true)}
            onOpenWall={() => setCurrentMode('wall')}
          />
        )}

        {currentMode === 'wall' && (
          <OverviewWallView
            slides={slides}
            profile={profile}
            onSelectSlide={(slideId) => {
              setCurrentSlideId(slideId);
              setCurrentMode('deck');
            }}
            onSelectProject={setSelectedProject}
            onOpenQuickUpload={() => setIsQuickUploadOpen(true)}
          />
        )}

        {currentMode === 'portfolio' && (
          <ProjectShowcaseView
            slides={slides}
            profile={profile}
            onSelectProject={setSelectedProject}
            onOpenEdit={() => setIsEditDrawerOpen(true)}
          />
        )}
      </main>

      {/* Printable Sequential 15 Slides Container (Displayed Only When Printing) */}
      <div className="hidden print:block space-y-12 bg-white text-black p-4">
        <div className="print-slide"><SlideCover profile={profile} /></div>
        <div className="print-slide"><SlideIntro profile={profile} /></div>
        <div className="print-slide"><SlideIndex onSelectSlide={() => {}} /></div>
        <div className="print-slide"><SlideIllustration items={slides[3]?.items} /></div>
        <div className="print-slide"><SlideTypography items={slides[4]?.items} /></div>
        <div className="print-slide"><SlideBookCover items={slides[5]?.items} /></div>
        <div className="print-slide"><SlideDigitalImaging items={slides[6]?.items} /></div>
        <div className="print-slide"><SlideDivider /></div>
        <div className="print-slide"><SlideMerchandise items={slides[8]?.items} /></div>
        <div className="print-slide"><SlideJarLabel items={slides[9]?.items} /></div>
        <div className="print-slide"><SlideBrandBook items={slides[10]?.items} /></div>
        <div className="print-slide"><SlideFeedDesign1 items={slides[11]?.items} /></div>
        <div className="print-slide"><SlideFeedDesign2 items={slides[12]?.items} /></div>
        <div className="print-slide"><SlideVectorArt items={slides[13]?.items} /></div>
        <div className="print-slide"><SlidePromoContent items={slides[14]?.items} /></div>
      </div>

      {/* Footer Banner (No Print) */}
      <footer className="no-print border-t border-cyan-500/15 bg-[#041117] py-6 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cyan-300/70">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#f4edd9]">{profile.name}</span>
            <span>•</span>
            <span>{profile.title} & {profile.subtitle}</span>
            <span>•</span>
            <span className="font-mono">{profile.email}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsQuickUploadOpen(true)}
              className="text-cyan-400 hover:text-cyan-200 underline cursor-pointer"
            >
              Upload / Fill Details
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setCurrentSlideId(1);
                setCurrentMode('deck');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-cyan-400 hover:text-cyan-200 underline cursor-pointer"
            >
              Back to Cover Slide
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <QuickUploaderModal
        isOpen={isQuickUploadOpen}
        onClose={() => setIsQuickUploadOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />

      <EditProfileDrawer
        isOpen={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
        profile={profile}
        slides={slides}
        onSave={handleSaveAll}
        onReset={handleReset}
      />
    </div>
  );
}
