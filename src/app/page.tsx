import Image from "next/image";
import Navigation from "@/components/Navigation";
import SkillsList from "@/components/SkillsList";

import ProjectsGrid from "@/components/ProjectsGrid";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import CertificationsGrid from "@/components/CertificationsGrid";
import { Download, Github, Linkedin, Mail, ExternalLink, ShieldCheck } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Intro text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-custom/10 border border-primary-custom/30 rounded-full text-xs font-mono text-primary-custom">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-custom opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-custom"></span>
              </span>
              <span>Available for Backend & Full-Stack Roles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Omar Mohamed Abdelghani
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-primary-custom font-mono">
              Full-Stack Developer | Cybersecurity Background
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
              Computer Science student and full-stack developer with a cybersecurity background, combining hands-on Python/Java/PHP engineering with secure-systems thinking. Proven track record building production-style backend architectures, real-time intrusion detection systems, and independently designed full-stack business platforms — including a graduation project (SpecSense AI) led as team lead for an industrial electrical-engineering platform. Seeking a junior full-stack or backend software engineering role where I can ship reliable, secure, well-designed systems from day one.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Omar_Mohamed_Abdelghani_CV.pdf"
                download="Omar_Mohamed_Abdelghani_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-primary-custom hover:bg-blue-600 transition-all-custom shadow-lg shadow-primary-custom/20"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0E1322]/80 border border-border-custom hover:border-slate-600 hover:bg-[#161D33] transition-all-custom"
              >
                <Mail size={18} />
                <span>Contact Omar</span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/omar230101276"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-text-secondary hover:text-white transition-colors duration-200"
              >
                <Github size={16} />
                <span>GITHUB</span>
              </a>
              <a
                href="https://linkedin.com/in/omar-mohamed-gaafer-612072307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-text-secondary hover:text-white transition-colors duration-200"
              >
                <Linkedin size={16} />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 bg-[#0E1322]/60 border border-border-custom rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full group">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-border-custom">
                <Image
                  src="/Profile.jpeg"
                  alt="Omar Mohamed Abdelghani"
                  fill
                  className="object-contain object-center group-hover:scale-102 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              <div className="p-4 mt-2 text-center">
                <div className="text-sm font-semibold text-white">Omar M. Abdelghani</div>
                <div className="text-xs text-text-secondary font-mono mt-1">Full-Stack Developer · Cybersecurity · Cairo, Egypt</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Engineering Projects</h2>
          <p className="text-sm sm:text-base text-text-secondary">
            A verified catalog of software architectures, tools, and platforms built from scratch. Explore deep technical specifications for each database schema and deployment route.
          </p>
        </div>
        <ProjectsGrid />
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[#080C14]/50 border-y border-border-custom py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Professional Experience</h2>
            <p className="text-sm sm:text-base text-text-secondary">
              A timeline tracking my studies, internships, and structured training achievements.
            </p>
          </div>
          <div className="max-w-4xl">
            <Experience />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Core Tech Competencies</h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Categorized skills highlighting languages, frameworks, infrastructure platforms, databases, and auditing tools I actively work with.
          </p>
        </div>
        <SkillsList />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-[#080C14]/50 border-y border-border-custom py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Verified Certifications</h2>
            <p className="text-sm sm:text-base text-text-secondary">
              Academic credentials, corporate internship sign-offs, and security program completions.
            </p>
          </div>
          <CertificationsGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Let&apos;s Connect</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              I am open to discuss professional opportunities, backend architectures, full-stack developments, and security audits. Send a direct message or connect with me via email/social media.
            </p>
            <div className="space-y-4 pt-4 text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-custom" />
                <a href="mailto:omargaffer51@gmail.com" className="hover:text-white transition-colors duration-200">
                  omargaffer51@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary-custom" />
                <a
                  href="https://linkedin.com/in/omar-mohamed-gaafer-612072307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  linkedin.com/in/omar-mohamed-gaafer-612072307
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={18} className="text-primary-custom" />
                <a
                  href="https://github.com/omar230101276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  github.com/omar230101276
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-custom bg-[#05070B] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <div>© {new Date().getFullYear()} Omar Mohamed Abdelghani. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="/Omar_Mohamed_Abdelghani_CV.pdf" download="Omar_Mohamed_Abdelghani_CV.pdf" className="hover:text-white transition-colors duration-200">CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
