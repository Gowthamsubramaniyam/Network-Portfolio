import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Sparkles, Check, FileText, User, Camera, Image, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData } from '../types';

interface QuickUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (newProfile: ProfileData) => void;
}

export const QuickUploaderModal: React.FC<QuickUploaderModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'paste' | 'avatar'>('form');
  const [formData, setFormData] = useState<ProfileData>({ ...profile });
  const [pastedText, setPastedText] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleAvatarFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData(prev => ({ ...prev, avatarUrl: event.target?.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyPastedText = () => {
    if (!pastedText.trim()) return;

    // Simple heuristic parser for pasted bio / resume
    const lines = pastedText.split('\n').map(l => l.trim()).filter(Boolean);
    const updated = { ...formData };

    if (lines.length > 0) updated.name = lines[0].replace(/^(name:?|i am|hi,? i'm)/i, '').trim() || updated.name;
    if (lines.length > 1) updated.title = lines[1].toUpperCase() || updated.title;
    
    // Check for email
    const emailMatch = pastedText.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) updated.email = emailMatch[0];

    // Check for phone
    const phoneMatch = pastedText.match(/(\+?\d[\d -]{8,15}\d)/);
    if (phoneMatch) updated.phone = phoneMatch[0];

    // Bio
    updated.bio = pastedText.slice(0, 300);

    setFormData(updated);
    setActiveTab('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setIsSaved(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#09222c] border-2 border-cyan-400/50 shadow-2xl text-[#f3ede2] p-6 sm:p-8 space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/50 hover:bg-black text-white hover:text-cyan-300 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bilingual Tamil/English Welcome Banner */}
          <div className="space-y-2 border-b border-cyan-500/20 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>PORTFOLIO CUSTOMIZATION & DETAILS UPLOADER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#f4edd9]">
              உங்கள் விவரங்களை பதிவேற்றவும் (Upload Your Details)
            </h2>
            <p className="text-xs text-cyan-100/80 leading-relaxed font-light">
              <strong className="text-cyan-300">ஆம் (Yes)!</strong> You can fill in your name, bio, contact details, and upload your profile photo/projects here. All changes reflect across all 15 slide sheets instantly.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#06181f] p-1.5 rounded-xl border border-cyan-500/25">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'form' ? 'bg-cyan-600 text-white shadow-md' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>1. Basic Details</span>
            </button>

            <button
              onClick={() => setActiveTab('avatar')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'avatar' ? 'bg-cyan-600 text-white shadow-md' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>2. Profile Photo</span>
            </button>

            <button
              onClick={() => setActiveTab('paste')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'paste' ? 'bg-cyan-600 text-white shadow-md' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>3. Paste Resume / Bio</span>
            </button>
          </div>

          {/* Tab 1: Form */}
          {activeTab === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-cyan-200">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Gowthami V"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-cyan-200">Primary Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. ILLUSTRATOR"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400 uppercase"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-cyan-200">Secondary Role / Subtitle</label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="e.g. GRAPHIC DESIGNER"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400 uppercase"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-cyan-200">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. gowthamivin235@gmail.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-cyan-200">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-cyan-200">Location / City</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Chennai, India / Remote"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-cyan-200">Bio Narrative / Summary</label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Tell your design story, philosophy, and specializations..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="save-quick-profile-btn"
                  className="px-6 py-2 rounded-xl bg-[#f4edd9] hover:bg-white text-[#0a2732] text-xs font-black shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                >
                  {isSaved ? <Check className="w-4 h-4 text-emerald-600" /> : <Sparkles className="w-4 h-4" />}
                  <span>{isSaved ? 'Saved Successfully!' : 'Apply to All 15 Slides'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Tab 2: Avatar Photo */}
          {activeTab === 'avatar' && (
            <div className="space-y-6 text-center">
              <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl bg-black">
                <img
                  src={formData.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"}
                  alt="Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                <label className="block p-4 border-2 border-dashed border-cyan-400/40 rounded-2xl hover:border-cyan-300 cursor-pointer bg-[#06181f] transition">
                  <Upload className="w-6 h-6 text-cyan-400 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-[#f4edd9] block">Click to upload photo from your device</span>
                  <span className="text-[10px] text-cyan-300/70 block mt-0.5">Supports PNG, JPG, WebP</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarFile}
                    className="hidden"
                  />
                </label>

                <div className="text-xs text-cyan-300/60 font-mono">OR enter an image URL:</div>
                <input
                  type="text"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400 text-center"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-cyan-500/20">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="px-5 py-2 rounded-xl bg-[#f4edd9] text-[#0a2732] text-xs font-bold cursor-pointer"
                >
                  Continue to Basic Details ➔
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Paste Resume Text */}
          {activeTab === 'paste' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#06181f] rounded-xl border border-cyan-500/25 text-xs text-cyan-200">
                💡 Paste your bio or resume text below. Our parser will extract your name, roles, email, and contact info automatically!
              </div>

              <textarea
                rows={6}
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder={`Example:\nGowthami V\nILLUSTRATOR & GRAPHIC DESIGNER\nEmail: gowthamivin235@gmail.com\nPhone: +91 98765 43210\nLocation: Chennai, India\nPassionate graphic designer with 3+ years experience...`}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleApplyPastedText}
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Parse & Auto-Fill Form</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
