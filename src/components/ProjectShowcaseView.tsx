import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Eye, Layers, Sparkles, ExternalLink, Tag } from 'lucide-react';
import { SlideItem, ProjectMedia, ProfileData } from '../types';

interface ProjectShowcaseViewProps {
  slides: SlideItem[];
  profile: ProfileData;
  onSelectProject: (project: ProjectMedia) => void;
  onOpenEdit?: () => void;
}

export const ProjectShowcaseView: React.FC<ProjectShowcaseViewProps> = ({
  slides,
  profile,
  onSelectProject,
  onOpenEdit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect all projects across all slides
  const allProjects: ProjectMedia[] = slides.reduce((acc: ProjectMedia[], slide) => {
    if (slide.items && slide.items.length > 0) {
      return [...acc, ...slide.items];
    }
    return acc;
  }, []);

  const categories = [
    'All',
    'Vector Art',
    'Typography',
    'Book Cover',
    'Digital Imaging',
    'Merchandise',
    'Packaging',
    'Social Media',
    'Advertising'
  ];

  const filteredProjects = allProjects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesQuery = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.subtitle && proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.description && proj.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.tags && proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Portfolio Header Bar */}
      <div className="bg-[#0b2935]/80 border border-cyan-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 tracking-widest uppercase">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>DISCIPLINE SHOWCASE & CASE STUDIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#f4edd9]">
            Interactive Creative Archive
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100/80 max-w-2xl font-light">
            Filter through individual artwork items, typography lockups, packaging labels, and digital advertising campaigns crafted by {profile.name}.
          </p>
        </div>

        {onOpenEdit && (
          <button
            onClick={onOpenEdit}
            id="showcase-add-work-btn"
            className="px-4 py-2.5 rounded-xl bg-cyan-900/80 hover:bg-cyan-800 border border-cyan-400/40 text-cyan-200 text-xs font-bold shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>+ Add / Edit Works</span>
          </button>
        )}
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-[#09222c] p-4 rounded-2xl border border-cyan-500/25">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#f4edd9] text-[#0a2732] font-extrabold shadow-md'
                  : 'bg-cyan-950/80 text-cyan-200 hover:bg-cyan-900 border border-cyan-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects, tools, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-[#e2ecf0] placeholder-cyan-300/40 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-[#09222c]/50 rounded-2xl border border-cyan-500/20 text-cyan-200">
          <p className="text-sm font-semibold">No works found matching your filter.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-3 text-xs text-cyan-300 underline cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#09202a] border-2 border-cyan-500/25 hover:border-cyan-300 shadow-xl cursor-pointer flex flex-col justify-between"
              >
                {/* Media Artwork Area */}
                <div className="relative aspect-[4/3] bg-cyan-950 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[9px] font-mono font-bold text-cyan-200 border border-white/10">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold">
                    <Eye className="w-4 h-4 text-cyan-300" />
                    <span>View Case Study</span>
                  </div>
                </div>

                {/* Info Description */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#f4edd9] group-hover:text-cyan-200 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-cyan-300/80 line-clamp-1 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#0b2b38] text-[9px] text-cyan-200/80 border border-cyan-500/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Client & Year Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-cyan-500/15 text-[10px] text-cyan-300/60 font-mono">
                    <span>{project.client || 'Personal Project'}</span>
                    <span>{project.year || '2024'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
