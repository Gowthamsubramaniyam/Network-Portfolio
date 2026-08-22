import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Save, 
  Upload, 
  Plus, 
  Trash2, 
  User, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Layers, 
  RotateCcw,
  Download,
  FileJson,
  Check
} from 'lucide-react';
import { ProfileData, SlideItem, ExperienceItem, EducationItem, SoftwareSkill, ProjectMedia } from '../types';
import confetti from 'canvas-confetti';

interface EditProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  slides: SlideItem[];
  onSave: (newProfile: ProfileData, newSlides: SlideItem[]) => void;
  onReset: () => void;
}

export const EditProfileDrawer: React.FC<EditProfileDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  slides,
  onSave,
  onReset
}) => {
  const [activeSection, setActiveSection] = useState<'profile' | 'experience' | 'education' | 'skills' | 'slides' | 'json'>('profile');
  const [draftProfile, setDraftProfile] = useState<ProfileData>({ ...profile });
  const [draftSlides, setDraftSlides] = useState<SlideItem[]>([...slides]);
  const [selectedSlideEditId, setSelectedSlideEditId] = useState<number>(4);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(draftProfile, draftSlides);
    setSavedSuccess(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      setSavedSuccess(false);
    }, 2000);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setDraftProfile(prev => ({ ...prev, avatarUrl: event.target?.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Experience handlers
  const addExperience = () => {
    const newExp: ExperienceItem = {
      id: `exp-${Date.now()}`,
      role: 'Graphic Designer',
      company: 'Creative Studio',
      period: '2024 - PRESENT',
      description: 'Designing brand assets and illustrations.'
    };
    setDraftProfile(prev => ({ ...prev, experiences: [newExp, ...prev.experiences] }));
  };

  const removeExperience = (id: string) => {
    setDraftProfile(prev => ({
      ...prev,
      experiences: prev.experiences.filter(e => e.id !== id)
    }));
  };

  // Education handlers
  const addEducation = () => {
    const newEdu: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: 'Bachelor of Design',
      institution: 'Design Academy',
      period: '2020 - 2024'
    };
    setDraftProfile(prev => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const removeEducation = (id: string) => {
    setDraftProfile(prev => ({
      ...prev,
      education: prev.education.filter(e => e.id !== id)
    }));
  };

  // Skills handlers
  const updateSkillLevel = (index: number, level: number) => {
    const newSkills = [...draftProfile.softwareSkills];
    newSkills[index] = { ...newSkills[index], level };
    setDraftProfile(prev => ({ ...prev, softwareSkills: newSkills }));
  };

  // Slide Project Add handler
  const handleAddProjectToSlide = (slideId: number) => {
    const newProject: ProjectMedia = {
      id: `proj-${Date.now()}`,
      title: 'New Creative Artwork',
      subtitle: 'Custom Showcase',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      description: 'Custom designed artwork piece added to portfolio.',
      year: '2024',
      tags: ['Creative', 'Design']
    };

    setDraftSlides(prev => prev.map(s => {
      if (s.id === slideId) {
        return {
          ...s,
          items: [...(s.items || []), newProject]
        };
      }
      return s;
    }));
  };

  // Slide Project Remove handler
  const handleRemoveProject = (slideId: number, projId: string) => {
    setDraftSlides(prev => prev.map(s => {
      if (s.id === slideId && s.items) {
        return {
          ...s,
          items: s.items.filter(item => item.id !== projId)
        };
      }
      return s;
    }));
  };

  // JSON Export / Import
  const handleExportJSON = () => {
    const data = { profile: draftProfile, slides: draftSlides };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target?.result as string);
          if (parsed.profile) setDraftProfile(parsed.profile);
          if (parsed.slides) setDraftSlides(parsed.slides);
          alert('Portfolio data imported successfully!');
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl h-full bg-[#081e26] border-l-2 border-cyan-500/30 text-[#f3ede2] flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-5 border-b border-cyan-500/20 flex items-center justify-between bg-[#06181f]">
            <div>
              <h2 className="text-xl font-bold font-heading text-[#f4edd9] flex items-center gap-2">
                Portfolio Data Manager
              </h2>
              <p className="text-xs text-cyan-300/70">Customize details, bio, and slide media</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                id="drawer-save-btn"
                className="px-4 py-2 rounded-xl bg-[#f4edd9] hover:bg-white text-[#0a2732] text-xs font-black shadow-lg flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
              >
                {savedSuccess ? <Check className="w-4 h-4 text-emerald-700" /> : <Save className="w-4 h-4" />}
                <span>{savedSuccess ? 'Saved!' : 'Save All Changes'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-cyan-950 text-cyan-300 hover:text-white border border-cyan-500/30 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-1 p-2 bg-[#09222c] border-b border-cyan-500/20 overflow-x-auto scrollbar-none text-xs font-semibold">
            <button
              onClick={() => setActiveSection('profile')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'profile' ? 'bg-cyan-600 text-white' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Bio & Contact</span>
            </button>

            <button
              onClick={() => setActiveSection('experience')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'experience' ? 'bg-cyan-600 text-white' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveSection('education')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'education' ? 'bg-cyan-600 text-white' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveSection('skills')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'skills' ? 'bg-cyan-600 text-white' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Skills</span>
            </button>

            <button
              onClick={() => setActiveSection('slides')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'slides' ? 'bg-cyan-600 text-white' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>15 Slide Projects</span>
            </button>

            <button
              onClick={() => setActiveSection('json')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'json' ? 'bg-cyan-600 text-white' : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              <FileJson className="w-3.5 h-3.5" />
              <span>Backup / JSON</span>
            </button>
          </div>

          {/* Section Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* 1. Profile Section */}
            {activeSection === 'profile' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a2732] border border-cyan-500/25">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-black border-2 border-cyan-400/40 shrink-0">
                    <img
                      src={draftProfile.avatarUrl}
                      alt="Avatar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <label className="inline-block px-3 py-1.5 rounded-lg bg-cyan-900/80 hover:bg-cyan-800 text-cyan-200 border border-cyan-400/30 text-xs font-bold cursor-pointer transition">
                      <Upload className="w-3.5 h-3.5 inline mr-1" />
                      Upload Photo
                      <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                    </label>
                    <input
                      type="text"
                      value={draftProfile.avatarUrl}
                      onChange={(e) => setDraftProfile({ ...draftProfile, avatarUrl: e.target.value })}
                      placeholder="Image URL..."
                      className="w-full px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-cyan-200">Full Name</label>
                    <input
                      type="text"
                      value={draftProfile.name}
                      onChange={(e) => setDraftProfile({ ...draftProfile, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-cyan-200">Title (e.g. ILLUSTRATOR)</label>
                    <input
                      type="text"
                      value={draftProfile.title}
                      onChange={(e) => setDraftProfile({ ...draftProfile, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-cyan-200">Subtitle (e.g. GRAPHIC DESIGNER)</label>
                    <input
                      type="text"
                      value={draftProfile.subtitle}
                      onChange={(e) => setDraftProfile({ ...draftProfile, subtitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-cyan-200">Email Address</label>
                    <input
                      type="email"
                      value={draftProfile.email}
                      onChange={(e) => setDraftProfile({ ...draftProfile, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-cyan-200">Phone</label>
                    <input
                      type="text"
                      value={draftProfile.phone}
                      onChange={(e) => setDraftProfile({ ...draftProfile, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-cyan-200">Location</label>
                    <input
                      type="text"
                      value={draftProfile.location}
                      onChange={(e) => setDraftProfile({ ...draftProfile, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-cyan-200">Tagline / Motto</label>
                  <input
                    type="text"
                    value={draftProfile.tagline}
                    onChange={(e) => setDraftProfile({ ...draftProfile, tagline: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-cyan-200">Bio Narrative</label>
                  <textarea
                    rows={4}
                    value={draftProfile.bio}
                    onChange={(e) => setDraftProfile({ ...draftProfile, bio: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                  />
                </div>
              </div>
            )}

            {/* 2. Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-cyan-300">Career Experience Timeline</h3>
                  <button
                    onClick={addExperience}
                    className="px-3 py-1.5 rounded-lg bg-cyan-900 hover:bg-cyan-800 text-cyan-200 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Role</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {draftProfile.experiences.map((exp, index) => (
                    <div key={exp.id} className="p-4 rounded-xl bg-[#0a2732] border border-cyan-500/25 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300 font-mono">Role #{index + 1}</span>
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="p-1 rounded text-red-400 hover:bg-red-950/50 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => {
                            const newExp = [...draftProfile.experiences];
                            newExp[index].role = e.target.value;
                            setDraftProfile({ ...draftProfile, experiences: newExp });
                          }}
                          placeholder="Role (e.g. Lead Illustrator)"
                          className="px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            const newExp = [...draftProfile.experiences];
                            newExp[index].company = e.target.value;
                            setDraftProfile({ ...draftProfile, experiences: newExp });
                          }}
                          placeholder="Company Studio"
                          className="px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                        />
                      </div>

                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const newExp = [...draftProfile.experiences];
                          newExp[index].period = e.target.value;
                          setDraftProfile({ ...draftProfile, experiences: newExp });
                        }}
                        placeholder="2023 - PRESENT"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white font-mono"
                      />

                      <textarea
                        rows={2}
                        value={exp.description}
                        onChange={(e) => {
                          const newExp = [...draftProfile.experiences];
                          newExp[index].description = e.target.value;
                          setDraftProfile({ ...draftProfile, experiences: newExp });
                        }}
                        placeholder="Role description & highlights..."
                        className="w-full px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Education Section */}
            {activeSection === 'education' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-cyan-300">Academic & Certification Background</h3>
                  <button
                    onClick={addEducation}
                    className="px-3 py-1.5 rounded-lg bg-cyan-900 hover:bg-cyan-800 text-cyan-200 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Degree</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {draftProfile.education.map((edu, index) => (
                    <div key={edu.id} className="p-4 rounded-xl bg-[#0a2732] border border-cyan-500/25 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300 font-mono">Degree #{index + 1}</span>
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="p-1 rounded text-red-400 hover:bg-red-950/50 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const newEdu = [...draftProfile.education];
                          newEdu[index].degree = e.target.value;
                          setDraftProfile({ ...draftProfile, education: newEdu });
                        }}
                        placeholder="Degree / Certificate Name"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => {
                            const newEdu = [...draftProfile.education];
                            newEdu[index].institution = e.target.value;
                            setDraftProfile({ ...draftProfile, education: newEdu });
                          }}
                          placeholder="Institution / University"
                          className="px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={edu.period}
                          onChange={(e) => {
                            const newEdu = [...draftProfile.education];
                            newEdu[index].period = e.target.value;
                            setDraftProfile({ ...draftProfile, education: newEdu });
                          }}
                          placeholder="2018 - 2022"
                          className="px-3 py-1.5 rounded-lg bg-[#06181f] border border-cyan-500/30 text-xs text-white font-mono"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Skills Section */}
            {activeSection === 'skills' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-cyan-300">Software Proficiency Levels</h3>
                <div className="space-y-3">
                  {draftProfile.softwareSkills.map((skill, index) => (
                    <div key={skill.name} className="p-3.5 rounded-xl bg-[#0a2732] border border-cyan-500/25 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span>{skill.name}</span>
                        <span className="text-cyan-300 font-mono">{skill.level}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={skill.level}
                        onChange={(e) => updateSkillLevel(index, parseInt(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. 15 Slide Projects Section */}
            {activeSection === 'slides' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-cyan-200">Select Presentation Slide to Edit:</label>
                  <select
                    value={selectedSlideEditId}
                    onChange={(e) => setSelectedSlideEditId(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#06181f] border border-cyan-500/30 text-xs text-white font-bold"
                  >
                    {draftSlides.map(s => (
                      <option key={s.id} value={s.id}>
                        Slide {s.slideNumberStr}: {s.title} ({s.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Edit Selected Slide Media Items */}
                {(() => {
                  const currentEditSlide = draftSlides.find(s => s.id === selectedSlideEditId);
                  if (!currentEditSlide) return null;

                  return (
                    <div className="p-4 rounded-2xl bg-[#0a2732] border border-cyan-500/30 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#f4edd9]">{currentEditSlide.title}</div>
                          <div className="text-[10px] text-cyan-300">{currentEditSlide.subtitle}</div>
                        </div>

                        <button
                          onClick={() => handleAddProjectToSlide(currentEditSlide.id)}
                          className="px-3 py-1.5 rounded-lg bg-cyan-900 hover:bg-cyan-800 text-cyan-200 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>+ Add Artwork Item</span>
                        </button>
                      </div>

                      {/* Items List */}
                      {currentEditSlide.items && currentEditSlide.items.length > 0 ? (
                        <div className="space-y-3">
                          {currentEditSlide.items.map((item, itemIdx) => (
                            <div key={item.id} className="p-3 rounded-xl bg-[#071922] border border-cyan-500/20 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono text-cyan-300 font-bold">Item #{itemIdx + 1}</span>
                                <button
                                  onClick={() => handleRemoveProject(currentEditSlide.id, item.id)}
                                  className="p-1 text-red-400 hover:bg-red-950/40 rounded cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="text"
                                  value={item.title}
                                  onChange={(e) => {
                                    const updated = [...draftSlides];
                                    const sl = updated.find(s => s.id === currentEditSlide.id);
                                    if (sl?.items) sl.items[itemIdx].title = e.target.value;
                                    setDraftSlides(updated);
                                  }}
                                  placeholder="Title"
                                  className="px-2.5 py-1.5 rounded bg-[#05141a] border border-cyan-500/30 text-xs text-white"
                                />
                                <input
                                  type="text"
                                  value={item.imageUrl}
                                  onChange={(e) => {
                                    const updated = [...draftSlides];
                                    const sl = updated.find(s => s.id === currentEditSlide.id);
                                    if (sl?.items) sl.items[itemIdx].imageUrl = e.target.value;
                                    setDraftSlides(updated);
                                  }}
                                  placeholder="Image URL"
                                  className="px-2.5 py-1.5 rounded bg-[#05141a] border border-cyan-500/30 text-xs text-white"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-cyan-200/60 text-center py-4">
                          This slide is a title / chapter slide. Click "+ Add Artwork Item" above if you'd like to add individual media showcase cards.
                        </p>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 6. JSON Export / Backup */}
            {activeSection === 'json' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#0a2732] border border-cyan-500/25 space-y-3">
                  <h4 className="text-xs font-bold text-cyan-300">Backup & Share JSON</h4>
                  <p className="text-xs text-cyan-100/80">
                    Export your custom portfolio data as a portable JSON file, or restore from a previously exported backup.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleExportJSON}
                      className="px-4 py-2 rounded-xl bg-cyan-900 hover:bg-cyan-800 text-cyan-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download portfolio-data.json</span>
                    </button>

                    <label className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer">
                      <Upload className="w-4 h-4" />
                      <span>Import JSON File</span>
                      <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0a2732] border border-cyan-500/25 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400">Reset to Default Mockup</h4>
                  <p className="text-xs text-cyan-100/70">
                    Revert all changes and restore original graphic design template matching the mockup presentation sheet.
                  </p>
                  <button
                    onClick={() => {
                      if (confirm('Reset portfolio to initial template?')) {
                        onReset();
                        onClose();
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-red-500/30"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Portfolio State</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footer Actions */}
          <div className="p-4 border-t border-cyan-500/20 bg-[#06181f] flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-950 text-cyan-300 text-xs font-bold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-[#f4edd9] hover:bg-white text-[#0a2732] text-xs font-black shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <Save className="w-4 h-4" />
              <span>Apply & Save All Changes</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
