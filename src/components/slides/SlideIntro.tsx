import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Award, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Github, 
  Linkedin,
  ShieldAlert,
  Server,
  Network
} from 'lucide-react';
import { ProfileData } from '../../types';

interface SlideIntroProps {
  profile: ProfileData;
  onOpenEdit?: () => void;
}

export const SlideIntro: React.FC<SlideIntroProps> = ({ profile, onOpenEdit }) => {
  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f3c] via-[#09242e] to-[#05151c] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-cyan-500/25 text-[#f3ede2]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-cyan-500/25 pb-4 mb-4 gap-3">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase font-mono">CHAPTER 02</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-wide text-[#f4edd9] flex items-center gap-3">
            ENGINEER PROFILE & RESUME
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
              Curriculum Vitae
            </span>
          </h2>
        </div>

        {onOpenEdit && (
          <button
            onClick={onOpenEdit}
            id="intro-edit-btn"
            className="px-3.5 py-1.5 rounded-xl bg-cyan-900/40 hover:bg-cyan-800/60 border border-cyan-400/30 text-xs font-semibold text-cyan-200 transition cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Customize Details</span>
          </button>
        )}
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto items-start">
        {/* Column 1: Profile Summary & Contact Details (4 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 space-y-4"
        >
          {/* Bio card */}
          <div className="bg-[#081e26]/90 border border-cyan-500/30 rounded-xl p-4 shadow-lg space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-900/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-display font-bold text-xl">
                GS
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-[#f4edd9]">{profile.name}</h3>
                <p className="text-[11px] font-mono text-cyan-300">
                  {profile.title}
                </p>
                <p className="text-[10px] text-cyan-200/70 font-mono">
                  {profile.subtitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-cyan-100/80 leading-relaxed pt-1">
              {profile.bio}
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#081e26]/90 border border-cyan-500/30 rounded-xl p-4 shadow-lg space-y-2.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#f4edd9] tracking-wider uppercase font-heading">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>DIRECT CONTACT</span>
            </div>
            
            <div className="space-y-2 text-[11px] text-cyan-100/90">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-cyan-300 truncate underline decoration-cyan-400/40 text-cyan-200">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-bold text-white">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 truncate text-cyan-300 underline">
                  linkedin.com/in/gowtham-s
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 truncate text-cyan-300 underline">
                  github.com/Gowthamsubramaniyam
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Education & Technical Skills (4 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 space-y-4"
        >
          {/* Education Card */}
          <div className="bg-[#081e26]/90 border border-cyan-500/30 rounded-xl p-4 shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#f4edd9] tracking-wider uppercase font-heading">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>ACADEMIC EDUCATION</span>
            </div>
            
            <div className="space-y-3">
              {profile.education?.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1 border-l-2 border-cyan-400/50 pl-3">
                  <div className="font-bold text-[#f4edd9] text-xs">{edu.degree}</div>
                  <div className="text-cyan-200/90 text-[11px]">{edu.institution}</div>
                  <div className="flex items-center justify-between text-[10px] text-cyan-400 font-mono">
                    <span>{edu.period}</span>
                  </div>
                  {edu.scoreOrHonor && (
                    <div className="text-[10px] text-cyan-100/70">{edu.scoreOrHonor}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="bg-[#081e26]/90 border border-cyan-500/30 rounded-xl p-4 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#f4edd9] tracking-wider uppercase font-heading">
                <Network className="w-4 h-4 text-cyan-400" />
                <span>CORE NETWORKING SKILLS</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300">Cisco / CCNA</span>
            </div>

            <div className="space-y-2">
              {profile.softwareSkills?.slice(0, 5).map((skill) => (
                <div key={skill.name} className="bg-cyan-950/70 p-2 rounded-lg border border-cyan-500/20">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-medium text-cyan-100 truncate">{skill.name}</span>
                    <span className="text-[10px] font-mono text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-cyan-950 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 3: Certifications & Leadership (4 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4 space-y-4"
        >
          {/* Verified Certifications Card */}
          <div className="bg-[#081e26]/90 border border-cyan-500/30 rounded-xl p-4 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#f4edd9] tracking-wider uppercase font-heading">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CERTIFICATIONS</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Verified</span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {profile.certifications?.map((cert) => (
                <div key={cert.id} className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#f4edd9] text-[11px]">{cert.title}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-900/80 text-cyan-200 font-mono">
                      {cert.status}
                    </span>
                  </div>
                  <div className="text-[10px] text-cyan-300/80 font-mono">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Extracurricular Card */}
          <div className="bg-[#081e26]/90 border border-cyan-500/30 rounded-xl p-4 shadow-lg space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#f4edd9] tracking-wider uppercase font-heading">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>LEADERSHIP & SERVICE</span>
            </div>

            <div className="space-y-2">
              <div className="text-xs border-l-2 border-amber-400/60 pl-2.5">
                <div className="font-bold text-[#f4edd9] text-[11px]">Student Welfare Committee Head</div>
                <div className="text-[10px] text-cyan-200/80">Angel College of Engineering & Technology</div>
              </div>

              <div className="text-xs border-l-2 border-emerald-400/60 pl-2.5">
                <div className="font-bold text-[#f4edd9] text-[11px]">Team Captain - Yellow Lions</div>
                <div className="text-[10px] text-cyan-200/80">College Sports & Athletics League</div>
              </div>

              <div className="text-xs border-l-2 border-cyan-400/60 pl-2.5">
                <div className="font-bold text-[#f4edd9] text-[11px]">YouTube / Short Film Creator</div>
                <div className="text-[10px] text-cyan-200/80">Directed & Produced 2 Independent Short Films</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-cyan-500/20 text-[11px] text-cyan-300/70 font-mono gap-2">
        <span>Gowtham S • Aspiring Network Engineer • CCNA Candidate</span>
        <span>Slide 02 / 15</span>
      </div>
    </div>
  );
};
