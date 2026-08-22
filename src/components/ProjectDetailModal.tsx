import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Calendar, User, Wrench, Tag, ExternalLink, Download } from 'lucide-react';
import { ProjectMedia } from '../types';

interface ProjectDetailModalProps {
  project: ProjectMedia | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a232d] border-2 border-cyan-400/40 shadow-2xl text-[#f3ede2] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-cyan-300 border border-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header & Hero Image */}
          <div className="relative w-full bg-[#06181f] max-h-[440px] flex items-center justify-center overflow-hidden border-b border-cyan-500/25">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-contain"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono text-cyan-300 font-bold">
              {project.category}
            </div>
          </div>

          {/* Modal Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#f4edd9]">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-sm font-semibold text-cyan-300">
                  {project.subtitle}
                </p>
              )}
            </div>

            <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed font-light">
              {project.description || 'Custom crafted design asset built with precision vector lines, custom typography, and high-impact visual color palettes.'}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#0d2e3b] border border-cyan-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                  <User className="w-3 h-3" />
                  <span>CLIENT</span>
                </div>
                <div className="text-xs font-bold text-[#f4edd9] truncate">{project.client || 'Personal Studio'}</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0d2e3b] border border-cyan-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                  <Calendar className="w-3 h-3" />
                  <span>YEAR</span>
                </div>
                <div className="text-xs font-bold text-[#f4edd9]">{project.year || '2024'}</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0d2e3b] border border-cyan-500/20 space-y-1 col-span-2">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                  <Wrench className="w-3 h-3" />
                  <span>SOFTWARE & PRODUCTION TOOLS</span>
                </div>
                <div className="text-xs font-bold text-[#f4edd9] truncate">
                  {project.tools ? project.tools.join(', ') : 'Adobe Illustrator, Photoshop CC'}
                </div>
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <Tag className="w-3 h-3" />
                  <span>TAGS & DISCIPLINES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-400/30 text-xs text-cyan-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-cyan-500/20">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-400/40 text-cyan-200 text-xs font-bold transition cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
