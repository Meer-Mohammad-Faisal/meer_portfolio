import { Download, Eye } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { profile, resumeHighlights } from '../data/portfolio';

const Resume = () => {
  return (
    <AnimatedSection id="resume" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resume"
          title="A quick recruiter snapshot, ready to download."
          copy="The resume highlights full stack engineering, backend development, MERN projects, practical GenAI features, and deployment basics."
        />

        <SpotlightCard className="p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.4rem] border border-white/10 bg-[#080c16]/75 p-6 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Resume preview</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{profile.name}</h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-black text-slate-950">
                  MF
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {resumeHighlights.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-100">
                      <Icon size={18} />
                    </span>
                    <span className="font-medium text-slate-200">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200/80">Recruiter-ready</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Full Stack & GenAI Engineer</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Strong foundation in MERN stack development, backend APIs, authentication, RBAC, MongoDB, PostgreSQL basics, OpenAI-powered workflows, OCR, CI/CD basics, Docker basics, and DSA problem solving.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={profile.resume} download className="btn-primary">
                  Download resume
                  <Download size={18} />
                </a>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-secondary">
                  Preview
                  <Eye size={18} />
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </AnimatedSection>
  );
};

export default Resume;
