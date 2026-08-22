"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, Github, Linkedin } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070B]/85 backdrop-blur-md border-b border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-primary-custom transition-colors duration-200">
              Omar Abdelghani
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/omar-gaafer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/omar-mohamed-gaafer-612072307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/Omar_Mohamed_Abdelghani_CV.pdf"
              download="Omar_Mohamed_Abdelghani_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary-custom/40 rounded-lg text-sm font-medium text-white bg-primary-custom/10 hover:bg-primary-custom/25 transition-all-custom"
            >
              <FileText size={16} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#05070B] border-b border-border-custom" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-white hover:bg-[#111827]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-border-custom px-5 flex flex-col gap-4">
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/omar-gaafer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/omar-mohamed-gaafer-612072307"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white"
              >
                <Linkedin size={22} />
              </a>
            </div>
            <a
              href="/Omar_Mohamed_Abdelghani_CV.pdf"
              download="Omar_Mohamed_Abdelghani_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-primary-custom/40 rounded-lg text-sm font-medium text-white bg-primary-custom/10 hover:bg-primary-custom/25 transition-all-custom w-full"
            >
              <FileText size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
