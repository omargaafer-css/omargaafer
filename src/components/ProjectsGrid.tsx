"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Shield, Cpu, Database, Trophy } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "backend" | "security" | "ai" | "frontend";
  image: string;
  icon: React.ReactNode;
  awardBadge?: string;
}

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("all");

  const projects: ProjectItem[] = [
    {
      id: "specsense-ai",
      title: "SpecSense AI",
      subtitle: "Intelligent Cable Spec & Inspection System",
      description: "State-of-the-art computer vision & NLP system for automated datasheet analysis, cable segmentation (YOLOv8), and feeder validation calculations.",
      tags: ["FastAPI", "React", "YOLOv8", "PostgreSQL", "SpaCy"],
      category: "ai",
      image: "/projects/SpecSense AI/Dashboard.png",
      icon: <Cpu className="text-primary-custom" size={20} />,
      awardBadge: "Top 3 Industry Project",
    },
    {
      id: "edgmon-v4",
      title: "EdgeMon V4.0",
      subtitle: "Intelligent Threat & System Monitor",
      description: "A hybrid system monitoring and Layer 2/4 intrusion detection system (IDS) utilizing Machine Learning (Scikit-Learn) and raw Scapy packet analysis.",
      tags: ["Flask", "Scikit-Learn", "Scapy", "SQLite", "openpyxl"],
      category: "security",
      image: "/projects/EdgMon V4.0/dashbord.png",
      icon: <Shield className="text-[#EF4444]" size={20} />,
    },
    {
      id: "ecommerce-microservices",
      title: "Docker E-Commerce",
      subtitle: "Microservices Catalog & Order Ecosystem",
      description: "A containerized shopping API framework separating catalog, cart, order and payment into autonomous FastAPI servers prepared for Kubernetes orchestration.",
      tags: ["FastAPI", "React", "Docker", "Kubernetes", "Microservices"],
      category: "backend",
      image: "/projects/E-Commerce App/dashboard.png",
      icon: <Database className="text-[#F59E0B]" size={20} />,
    },
    {
      id: "huffman-compressor",
      title: "Huffman Compressor",
      subtitle: "Lossless Coding & Decompression Tool",
      description: "A desktop and terminal compiler deploying the Huffman prefix algorithm. Integrates Shannon Entropy verification limits for files.",
      tags: ["Python", "Tkinter", "CLI", "Data Structures"],
      category: "backend",
      image: "/projects/Huffman Compression/Dashbord.png",
      icon: <Database className="text-text-secondary" size={20} />,
    },
    {
      id: "apexbank",
      title: "ApexBank Interface",
      subtitle: "Modern Banking Client Interface",
      description: "Polished client banking application dashboard with clean ledger views, balance charts, appointment planners, and transfer configurations.",
      tags: ["HTML5", "Vanilla CSS3", "Vanilla JS", "Glassmorphism"],
      category: "frontend",
      image: "/projects/Web Bank/dashbord.png",
      icon: <Code className="text-[#3B82F6]" size={20} />,
    },
    {
      id: "photographer-ms",
      title: "Photographer Portfolio",
      subtitle: "Portfolio & Booking Engine (abady)",
      description: "A robust client booking and gallery portfolio management system built on Laravel. Simplifies schedules, reserves appointments, and exposes admin logs.",
      tags: ["PHP", "Laravel", "MySQL", "Blade", "CSS3"],
      category: "backend",
      image: "/projects/Photogapher MS/Home page.png",
      icon: <Database className="text-text-secondary" size={20} />,
    },
    {
      id: "storm-breaker",
      title: "Storm-Breaker",
      subtitle: "Web Panel Security Access Tool",
      description: "Tested platform to collect device metrics, capture simulated payloads, check SSL constraints, and audit network communication parameters.",
      tags: ["Python3", "PHP", "Bash", "Ngrok", "SSL"],
      category: "security",
      image: "/projects/Click Breaker/Dashboard.png",
      icon: <Shield className="text-[#EF4444]" size={20} />,
    },
    {
      id: "edgmon-v3-1",
      title: "EdgeMon V3.1",
      subtitle: "System Metrics Telemetry Dashboard",
      description: "A lightweight hardware polling daemon collecting real-time CPU, disk, RAM and temperature bounds, logging directly into a local SQLite repository.",
      tags: ["Python", "Flask", "SQLite", "psutil", "HTML5"],
      category: "security",
      image: "/projects/EdgMon V3.1/dashbord.png",
      icon: <Shield className="text-text-secondary" size={20} />,
    },
    {
      id: "enterprise-network",
      title: "Enterprise Network",
      subtitle: "Multi-VLAN Routing & OSPF Integration",
      description: "A simulated enterprise-scale network utilizing dynamic OSPF routing, subnet partitions (VLSM), and multi-VLAN segmentation across switches and routers.",
      tags: ["Cisco Packet Tracer", "OSPF Routing", "VLSM Subnetting", "VLANs & SVIs", "Python"],
      category: "security",
      image: "/projects/Enterprise Network/Design.png",
      icon: <Shield className="text-[#EF4444]" size={20} />,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* Category selector */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
        {["all", "backend", "ai", "security", "frontend"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all-custom border ${
              filter === cat
                ? "bg-primary-custom/10 text-white border-primary-custom"
                : "text-text-secondary border-border-custom hover:text-white hover:border-slate-600 bg-transparent"
            }`}
          >
            {cat === "all" ? "All Projects" : cat === "ai" ? "AI & Data" : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col h-full bg-[#0E1322]/60 border border-border-custom rounded-xl overflow-hidden shadow-xl hover:border-slate-700 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image header */}
            <div className="relative h-48 w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-border-custom">
              {project.awardBadge && (
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-amber-500/90 text-slate-950 shadow-lg backdrop-blur-md">
                    <Trophy size={11} className="fill-slate-950 text-slate-950" />
                    {project.awardBadge}
                  </span>
                </div>
              )}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-center opacity-85 hover:opacity-100 transition-opacity duration-300 p-1"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 p-6 text-center">
                  <div className="p-3 bg-slate-900 rounded-xl text-primary-custom">
                    {project.icon}
                  </div>
                  <span className="text-text-secondary text-xs uppercase tracking-widest font-mono">Microservices System</span>
                </div>
              )}
            </div>

            {/* Content body */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 bg-slate-900 border border-border-custom rounded">
                  {project.icon}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-text-secondary font-semibold">
                  {project.category === "ai" ? "AI & Computer Vision" : project.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-xs text-primary-custom font-semibold font-mono mb-3">{project.subtitle}</p>
              <p className="text-sm text-text-secondary mb-6 flex-grow line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#1E293B]/40 text-text-secondary text-[11px] font-mono border border-border-custom/50 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-primary-custom tracking-wider uppercase group transition-colors duration-200 mt-auto"
              >
                <span>View Architecture & Specs</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
