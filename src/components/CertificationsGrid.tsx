"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export default function CertificationsGrid() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      title: "SpecSense AI",
      issuer: "Elsewedy Electric & SUTECH",
      date: "2026",
      image: "/certifications/SpecSense AI Certificate.png",
    },
    {
      title: "Summer Internship 2025",
      issuer: "Elsewedy Electric PSP",
      date: "2025",
      image: "/certifications/Summer Internship 2025 -Elsewedy Electric PSP-.jpeg",
    },
    {
      title: "Junior Penetration Tester",
      issuer: "TryHackMe",
      date: "2025",
      image: "/certifications/Jr Penetration Tester -Try Hack Me-.jpeg",
    },
    {
      title: "Pre Security Certified",
      issuer: "TryHackMe",
      date: "2025",
      image: "/certifications/Pre Security -Try Hack Me-.jpeg",
    },
    {
      title: "Career Compass Scholar",
      issuer: "Nile University",
      date: "2025",
      image: "/certifications/Career Compass -Nile University-.jpeg",
    },
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            onClick={() => setSelectedCert(cert)}
            className="bg-[#0E1322]/60 border border-border-custom rounded-xl overflow-hidden shadow-lg group hover:border-slate-700 transition-colors duration-300 cursor-pointer"
          >
            <div className="relative aspect-video w-full bg-slate-950 border-b border-border-custom overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1.5 mb-1 text-primary-custom">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold font-mono uppercase tracking-wider">
                  Verified Credential
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-primary-custom transition-colors duration-200">
                {cert.title}
              </h3>
              <p className="text-xs text-text-secondary">{cert.issuer}</p>
              <p className="text-[10px] text-text-secondary/70 font-mono mt-2">
                {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative z-10 flex flex-col items-center max-w-[95vw] max-h-[90vh] bg-[#0E1322]/90 border border-border-custom rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6"
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between w-full mb-4 gap-4">
                <div className="text-left">
                  <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {selectedCert.issuer} · {selectedCert.date}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-white bg-slate-900 border border-border-custom rounded-lg transition-colors hover:bg-slate-800"
                    title="Open image in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-text-secondary hover:text-white bg-slate-900 border border-border-custom rounded-lg transition-colors hover:bg-slate-800"
                    title="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Image view */}
              <div className="relative w-[90vw] h-[65vh] md:h-[75vh] flex items-center justify-center rounded-xl bg-slate-950/80 border border-border-custom overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
