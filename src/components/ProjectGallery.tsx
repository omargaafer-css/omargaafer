"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight, Maximize2, Loader2 } from "lucide-react";

// Human-readable caption mapping helper
const getCaption = (path: string, projectTitle: string): string => {
  const fileNameWithExt = path.split("/").pop() || "";
  const name = fileNameWithExt.split(".")[0].trim().toLowerCase();

  switch (name) {
    case "dashboard":
    case "dashbord":
      return `${projectTitle} - Main System Dashboard`;
    case "vision inspection":
      return `${projectTitle} - Automated Vision Inspection (YOLOv8)`;
    case "ocr":
    case "ocr ":
      return `${projectTitle} - OCR Text Extraction & Structuring`;
    case "tech assistant":
      return `${projectTitle} - AI Technical Assistant Console`;
    case "assistant result":
      return `${projectTitle} - AI Assistant Response Metrics`;
    case "cpu":
      return `${projectTitle} - Live CPU Telemetry & Utilization Charts`;
    case "disk":
      return `${projectTitle} - Disk Storage & Read/Write Telemetry`;
    case "memory":
      return `${projectTitle} - RAM Utilization & Allocation Monitoring`;
    case "network":
      return `${projectTitle} - Layer 2/4 Network Sniffer Socket Telemetry`;
    case "system info":
      return `${projectTitle} - System Diagnostics & Hardware Specifications`;
    case "temp":
      return `${projectTitle} - Hardware Core Temperatures & Thermal Thresholds`;
    case "alerts":
      return `${projectTitle} - Real-time Intrusion Warnings & Event Logs`;
    case "metrics":
      return `${projectTitle} - Historical Performance Metric Ledger`;
    case "cluster status":
      return `${projectTitle} - Kubernetes Local Cluster Node Deployments`;
    case "orders":
      return `${projectTitle} - Microservices Order Ledger Database Admin`;
    case "products":
      return `${projectTitle} - Catalog Inventory & Stock Control Dashboard`;
    case "admin add vid":
      return `${projectTitle} - Admin Video Album Management Control`;
    case "admin dashboard":
      return `${projectTitle} - Portfolio Administrative Workspace`;
    case "alboms":
      return `${projectTitle} - Client Media Album Grid & Storage`;
    case "booking portal":
      return `${projectTitle} - Client Scheduling & Reservation Portal`;
    case "booking":
      return `${projectTitle} - Booking Details Planner Sheet`;
    case "contant":
      return `${projectTitle} - Client Contact Form & Inbox Records`;
    case "home 2":
      return `${projectTitle} - Alternative Home Page Theme Showcase`;
    case "home page":
      return `${projectTitle} - Public Landing Page & Interactive Booking`;
    case "manage booking":
      return `${projectTitle} - Booking Approvals & Calendar Management`;
    case "profile settings":
      return `${projectTitle} - Photographer Profile Configuration Panel`;
    case "clickbreaker_preview":
      return `${projectTitle} - Operations Platform v2.0 Overview`;
    case "specsense_ai_preview":
      return `${projectTitle} - System Architecture & Inspection Console Overview`;
    case "foodverse_preview":
      return `${projectTitle} - 4-Tier Enterprise ERP & Delivery Platform Overview`;
    case "edgmon_v4_preview":
      return `${projectTitle} - ML Intrusion Detection & Telemetry Console Overview`;
    case "ecommerce_preview":
      return `${projectTitle} - Docker Microservices & Kubernetes Pods Overview`;
    case "huffman_preview":
      return `${projectTitle} - Lossless Coding & Shannon Entropy Console Overview`;
    case "edgmon_v3_1_preview":
      return `${projectTitle} - Hardware Polling & Telemetry Ledger Overview`;
    case "enterprise_network_preview":
      return `${projectTitle} - Multi-VLAN Topology & OSPF Core Overview`;
    case "banner":
      return `${projectTitle} - CLI Controller & Launch Engine`;
    case "login":
      return `${projectTitle} - Glassmorphism Authentication Portal`;
    case "modules":
      return `${projectTitle} - Dynamic Plugin Payload Directory`;
    default:
      // Format file name capitalization nicely as default
      return `${projectTitle} - ${fileNameWithExt
        .split(".")[0]
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}`;
  }
};

interface ProjectGalleryProps {
  screenshots?: string[];
  title: string;
  iconType: "ai" | "security" | "backend" | "frontend";
}

// Fallback SVG Architecture Diagrams
const ArchitectureSVG = ({ iconType, title }: { iconType: string; title: string }) => {
  const renderContent = () => {
    switch (iconType) {
      case "ai":
        return (
          <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#064E3B" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#083344" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Background */}
            <rect width="800" height="450" rx="16" fill="#0A0F1D" />
            <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 0,400 L 800,400" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M 100,0 L 100,450 M 200,0 L 200,450 M 300,0 L 300,450 M 400,0 L 400,450 M 500,0 L 500,450 M 600,0 L 600,450 M 700,0 L 700,450" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.3" />

            {/* Title */}
            <text x="30" y="40" fill="#94A3B8" fontSize="12" fontFamily="monospace" letterSpacing="2">SYSTEM SPECIFICATION BLUEPRINT</text>
            <text x="30" y="70" fill="#FFFFFF" fontSize="20" fontWeight="bold" fontFamily="sans-serif">{title} Pipeline</text>

            {/* Flow Paths with animated dash arrays */}
            <path d="M 170,225 L 250,225" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" strokeDashoffset="0" className="animate-[dash_10s_linear_infinite]" />
            <path d="M 390,225 L 470,225" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" strokeDashoffset="0" className="animate-[dash_10s_linear_infinite]" />
            <path d="M 610,225 L 690,225" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" strokeDashoffset="0" className="animate-[dash_10s_linear_infinite]" />
            
            {/* Input Node */}
            <rect x="50" y="175" width="120" height="100" rx="8" fill="url(#gradient-blue)" stroke="#3B82F6" strokeWidth="1" />
            <text x="110" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Input Data</text>
            <text x="110" y="235" fill="#93C5FD" fontSize="10" fontFamily="monospace" textAnchor="middle">Datasheets / Images</text>
            <circle cx="110" cy="255" r="5" fill="#3B82F6" filter="url(#glow)" />

            {/* Vision / NLP Segmentation Node */}
            <rect x="250" y="175" width="140" height="100" rx="8" fill="url(#gradient-emerald)" stroke="#10B981" strokeWidth="1" />
            <text x="320" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">YOLOv8 & SpaCy</text>
            <text x="320" y="235" fill="#A7F3D0" fontSize="10" fontFamily="monospace" textAnchor="middle">AI Engine Segments</text>
            <circle cx="320" cy="255" r="5" fill="#10B981" filter="url(#glow)" />

            {/* Processing Engine Node */}
            <rect x="470" y="175" width="140" height="100" rx="8" fill="url(#gradient-cyan)" stroke="#06B6D4" strokeWidth="1" />
            <text x="540" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FastAPI Service</text>
            <text x="540" y="235" fill="#CFFAFE" fontSize="10" fontFamily="monospace" textAnchor="middle">Validation Engine</text>
            <circle cx="540" cy="255" r="5" fill="#06B6D4" filter="url(#glow)" />

            {/* Output Node */}
            <rect x="690" y="195" width="80" height="60" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <text x="730" y="225" fill="#94A3B8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">React Client</text>
            <text x="730" y="240" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">Dashboard</text>
          </svg>
        );
      case "security":
        return (
          <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient-red" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#78350F" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Background */}
            <rect width="800" height="450" rx="16" fill="#070A13" />
            <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 0,400 L 800,400" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.2" />
            <path d="M 100,0 L 100,450 M 200,0 L 200,450 M 300,0 L 300,450 M 400,0 L 400,450 M 500,0 L 500,450 M 600,0 L 600,450 M 700,0 L 700,450" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.2" />

            {/* Title */}
            <text x="30" y="40" fill="#64748B" fontSize="12" fontFamily="monospace" letterSpacing="2">INTRUSION DETECTION & TELEMETRY LAYOUT</text>
            <text x="30" y="70" fill="#FFFFFF" fontSize="20" fontWeight="bold" fontFamily="sans-serif">{title} Node Map</text>

            {/* Lines */}
            <path d="M 180,225 H 280 M 400,225 H 500 M 620,225 H 700" stroke="#EF4444" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_12s_linear_infinite]" />
            <path d="M 560,275 V 325 H 340 V 275" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Hardware Tap */}
            <rect x="50" y="175" width="130" height="100" rx="8" fill="url(#gradient-red)" stroke="#EF4444" strokeWidth="1" />
            <text x="115" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">System Telemetry</text>
            <text x="115" y="235" fill="#FCA5A5" fontSize="10" fontFamily="monospace" textAnchor="middle">WMI / GPUtil Daemon</text>
            <circle cx="115" cy="255" r="4" fill="#EF4444" filter="url(#glow)" />

            {/* Network Sniffer */}
            <rect x="280" y="175" width="120" height="100" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <text x="340" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Scapy Sniffer</text>
            <text x="340" y="235" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">L2/L4 Decap Thread</text>
            <circle cx="340" cy="255" r="4" fill="#64748B" />

            {/* AI Engine */}
            <rect x="500" y="175" width="120" height="100" rx="8" fill="url(#gradient-amber)" stroke="#F59E0B" strokeWidth="1" />
            <text x="560" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ML IDS Core</text>
            <text x="560" y="235" fill="#FDE68A" fontSize="10" fontFamily="monospace" textAnchor="middle">RandomForest Threat</text>
            <circle cx="560" cy="255" r="4" fill="#F59E0B" filter="url(#glow)" />

            {/* Local DB */}
            <rect x="700" y="195" width="70" height="60" rx="8" fill="#111827" stroke="#374151" strokeWidth="1" />
            <text x="735" y="225" fill="#94A3B8" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQLite</text>
            <text x="735" y="240" fill="#4B5563" fontSize="9" fontFamily="monospace" textAnchor="middle">Telemetry DB</text>
          </svg>
        );
      case "backend":
        return (
          <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#581C87" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Background */}
            <rect width="800" height="450" rx="16" fill="#09090B" />
            <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 0,400 L 800,400" stroke="#27272A" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M 100,0 L 100,450 M 200,0 L 200,450 M 300,0 L 300,450 M 400,0 L 400,450 M 500,0 L 500,450 M 600,0 L 600,450 M 700,0 L 700,450" stroke="#27272A" strokeWidth="1" strokeOpacity="0.3" />

            {/* Title */}
            <text x="30" y="40" fill="#71717A" fontSize="12" fontFamily="monospace" letterSpacing="2">MICROSERVICES & CONTAINER SCHEMA</text>
            <text x="30" y="70" fill="#FFFFFF" fontSize="20" fontWeight="bold" fontFamily="sans-serif">{title} Pod Hierarchy</text>

            {/* Docker Router Lines */}
            <path d="M 150,225 H 250 M 370,225 H 480" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_8s_linear_infinite]" />
            <path d="M 480,225 L 530,150 H 600" stroke="#A855F7" strokeWidth="1.5" />
            <path d="M 480,225 L 530,300 H 600" stroke="#A855F7" strokeWidth="1.5" />

            {/* Gateway */}
            <rect x="50" y="175" width="100" height="100" rx="8" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
            <text x="100" y="225" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">React Client</text>
            <text x="100" y="240" fill="#A1A1AA" fontSize="10" fontFamily="monospace" textAnchor="middle">Gateway Portal</text>

            {/* API Router */}
            <rect x="250" y="175" width="120" height="100" rx="8" fill="url(#gradient-purple)" stroke="#A855F7" strokeWidth="1" />
            <text x="310" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Docker Net</text>
            <text x="310" y="235" fill="#F3E8FF" fontSize="10" fontFamily="monospace" textAnchor="middle">Port Decouplers</text>
            <circle cx="310" cy="255" r="4" fill="#A855F7" filter="url(#glow)" />

            {/* Services Nodes */}
            <rect x="600" y="115" width="150" height="70" rx="6" fill="#1E1B4B" stroke="#4338CA" strokeWidth="1" />
            <text x="675" y="150" fill="#E0E7FF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FastAPI Catalogue</text>
            <text x="675" y="165" fill="#6366F1" fontSize="9" fontFamily="monospace" textAnchor="middle">Port 8000 · In-Mem</text>

            <rect x="600" y="265" width="150" height="70" rx="6" fill="#1E1B4B" stroke="#4338CA" strokeWidth="1" />
            <text x="675" y="300" fill="#E0E7FF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FastAPI checkout</text>
            <text x="675" y="315" fill="#6366F1" fontSize="9" fontFamily="monospace" textAnchor="middle">Port 8002 · Order</text>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#115E59" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Background */}
            <rect width="800" height="450" rx="16" fill="#022C22" fillOpacity="0.2" />
            <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 0,400 L 800,400" stroke="#115E59" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M 100,0 L 100,450 M 200,0 L 200,450 M 300,0 L 300,450 M 400,0 L 400,450 M 500,0 L 500,450 M 600,0 L 600,450 M 700,0 L 700,450" stroke="#115E59" strokeWidth="1" strokeOpacity="0.1" />

            {/* Title */}
            <text x="30" y="40" fill="#14B8A6" fillOpacity="0.6" fontSize="12" fontFamily="monospace" letterSpacing="2">FRONTEND CLIENT GRAPH SCHEMA</text>
            <text x="30" y="70" fill="#FFFFFF" fontSize="20" fontWeight="bold" fontFamily="sans-serif">{title} Layout Flow</text>

            <path d="M 150,225 H 250 M 390,225 H 490 M 630,225 H 710" stroke="#0D9488" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_10s_linear_infinite]" />

            {/* Web Layout */}
            <rect x="50" y="175" width="100" height="100" rx="8" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
            <text x="100" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Semantic HTML</text>
            <text x="100" y="235" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">DOM Template</text>

            {/* CSS styling */}
            <rect x="250" y="175" width="140" height="100" rx="8" fill="url(#gradient-teal)" stroke="#0D9488" strokeWidth="1" />
            <text x="320" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Vanilla CSS3</text>
            <text x="320" y="235" fill="#CCFBF1" fontSize="10" fontFamily="monospace" textAnchor="middle">Theme Variables</text>
            <circle cx="320" cy="255" r="4" fill="#0D9488" filter="url(#glow)" />

            {/* JavaScript Engine */}
            <rect x="490" y="175" width="140" height="100" rx="8" fill="#111827" stroke="#374151" strokeWidth="1" />
            <text x="560" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JS Handlers</text>
            <text x="560" y="235" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">LocalStorage Sync</text>

            {/* Client View */}
            <rect x="710" y="195" width="60" height="60" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <text x="740" y="230" fill="#94A3B8" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DOM</text>
          </svg>
        );
    }
  };

  return (
    <div className="w-full aspect-video border border-border-custom bg-slate-950 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center mb-8 relative group">
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
      {renderContent()}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-text-secondary bg-slate-900/80 px-2 py-1 rounded border border-border-custom backdrop-blur">
        Interactive Fallback Schematic
      </div>
    </div>
  );
};

export default function ProjectGallery({ screenshots, title, iconType }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Lightbox zoom states
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const lightboxRef = useRef<HTMLDivElement>(null);
  const zoomImageRef = useRef<HTMLDivElement>(null);

  // If no screenshots, render fallback interactive architecture diagram
  if (!screenshots || screenshots.length === 0) {
    return <ArchitectureSVG iconType={iconType} title={title} />;
  }

  // Preload next image dynamically when index changes
  const nextIndex = useMemo(() => (currentIndex + 1) % screenshots.length, [currentIndex, screenshots]);

  // Handle Carousel Navigation
  const handlePrev = () => {
    setIsLoading(true);
    setCurrentIndex(prev => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setIsLoading(true);
    setCurrentIndex(prev => (prev + 1) % screenshots.length);
  };

  const selectIndex = (idx: number) => {
    if (idx === currentIndex) return;
    setIsLoading(true);
    setCurrentIndex(idx);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, currentIndex]);

  // Block scroll on document when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Setup non-passive mouse wheel listener on zoomed image in lightbox
  useEffect(() => {
    const zoomElement = zoomImageRef.current;
    if (!isLightboxOpen || !zoomElement) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Increase/decrease scale depending on scroll direction
      const zoomFactor = -e.deltaY * 0.003;
      setScale(prev => {
        const nextScale = Math.min(Math.max(prev + zoomFactor, 1), 4);
        if (nextScale === 1) setOffset({ x: 0, y: 0 }); // reset offset if zoomed out
        return nextScale;
      });
    };

    zoomElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      zoomElement.removeEventListener("wheel", handleWheel);
    };
  }, [isLightboxOpen, scale]);

  const openLightbox = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  };

  const zoomIn = () => setScale(prev => Math.min(prev + 0.5, 4));
  const zoomOut = () => {
    setScale(prev => {
      const nextScale = Math.max(prev - 0.5, 1);
      if (nextScale === 1) setOffset({ x: 0, y: 0 });
      return nextScale;
    });
  };

  return (
    <div className="mb-8 w-full">
      {/* Main image preview area */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border-custom bg-slate-950/80 shadow-lg group">
        {/* Loading Skeleton */}
        <AnimatePresence mode="popLayout">
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-slate-900/90 animate-pulse flex items-center justify-center z-10"
            >
              <Loader2 className="text-primary-custom animate-spin" size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel Image container */}
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -60) handleNext();
            if (info.offset.x > 60) handlePrev();
          }}
          className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
        >
          <Image
            src={screenshots[currentIndex]}
            alt={getCaption(screenshots[currentIndex], title)}
            fill
            className="object-contain object-center p-2 select-none"
            sizes="(max-width: 1024px) 100vw, 896px"
            onLoad={() => setIsLoading(false)}
            priority={currentIndex === 0}
          />
        </motion.div>

        {/* Overlay Counter Badges */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10 select-none">
          <span className="bg-slate-950/75 backdrop-blur-md border border-border-custom text-[11px] px-2.5 py-1 rounded-md text-text-secondary font-mono">
            {currentIndex + 1} / {screenshots.length}
          </span>
          <button
            onClick={openLightbox}
            className="bg-slate-950/75 hover:bg-slate-900/90 hover:text-white backdrop-blur-md border border-border-custom p-1.5 rounded-md text-text-secondary transition-all cursor-pointer"
            title="Expand Fullscreen"
          >
            <Maximize2 size={14} />
          </button>
        </div>

        {/* Caption Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 pt-10 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
          <p className="text-xs text-white font-semibold tracking-wide drop-shadow-md">
            {getCaption(screenshots[currentIndex], title)}
          </p>
        </div>

        {/* Navigation Arrows for large displays */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-slate-900 border border-border-custom text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md cursor-pointer z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-slate-900 border border-border-custom text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md cursor-pointer z-10"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Horizontal Thumbnails Row */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin mt-3 select-none">
          {screenshots.map((shot, idx) => (
            <button
              key={shot}
              onClick={() => selectIndex(idx)}
              className={`relative h-16 w-28 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer ${
                idx === currentIndex
                  ? "border-primary-custom shadow-md shadow-primary-custom/20 scale-[1.02]"
                  : "border-border-custom hover:border-slate-600 hover:scale-[1.01]"
              }`}
            >
              <Image
                src={shot}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Preload Next Image for instant navigation cache warmups */}
      {screenshots.length > 1 && (
        <div className="hidden pointer-events-none">
          <Image
            src={screenshots[nextIndex]}
            alt="Preloading next project screenshot"
            width={1200}
            height={675}
            priority
          />
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md select-none"
            ref={lightboxRef}
            onClick={(e) => {
              if (e.target === lightboxRef.current) closeLightbox();
            }}
          >
            {/* Header controls */}
            <div className="flex items-center justify-between p-4 bg-slate-950/60 border-b border-border-custom/50 backdrop-blur z-20">
              <div className="flex flex-col text-left">
                <span className="text-xs text-text-secondary uppercase tracking-widest font-mono">
                  {title}
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 truncate max-w-lg">
                  {getCaption(screenshots[currentIndex], title)}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-text-secondary bg-slate-900 border border-border-custom px-2 py-1 rounded">
                  {currentIndex + 1} / {screenshots.length}
                </span>
                
                {/* Zoom buttons */}
                <div className="flex gap-1 border border-border-custom rounded-lg bg-slate-900 p-0.5">
                  <button
                    onClick={zoomOut}
                    disabled={scale === 1}
                    className="p-1 text-text-secondary hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <button
                    onClick={zoomIn}
                    disabled={scale === 4}
                    className="p-1 text-text-secondary hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                <button
                  onClick={closeLightbox}
                  className="p-2 text-text-secondary hover:text-white hover:bg-slate-900 border border-border-custom/80 rounded-lg transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Fullscreen Image Display */}
            <div className="relative flex-grow flex items-center justify-center overflow-hidden p-4 select-none">
              {/* Left Arrow */}
              {screenshots.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-6 z-20 bg-slate-900/80 hover:bg-slate-900 border border-border-custom text-white p-3 rounded-full transition-colors cursor-pointer"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Central Zoomable Image container */}
              <div 
                ref={zoomImageRef}
                className="w-full h-full flex items-center justify-center relative overflow-hidden"
              >
                <motion.div
                  drag={scale > 1}
                  dragElastic={0.15}
                  dragConstraints={
                    scale > 1
                      ? {
                          left: -500 * (scale - 1),
                          right: 500 * (scale - 1),
                          top: -300 * (scale - 1),
                          bottom: 300 * (scale - 1),
                        }
                      : { left: 0, right: 0, top: 0, bottom: 0 }
                  }
                  animate={!isDragging ? { scale, x: offset.x, y: offset.y } : undefined}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(e, info) => {
                    setIsDragging(false);
                    setOffset({ x: info.point.x, y: info.point.y });
                  }}
                  onDoubleClick={handleDoubleClick}
                  className="relative w-full h-full max-w-[90vw] max-h-[75vh]"
                >
                  <Image
                    src={screenshots[currentIndex]}
                    alt={getCaption(screenshots[currentIndex], title)}
                    fill
                    className={`object-contain object-center select-none pointer-events-none transition-all duration-200`}
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </div>

              {/* Right Arrow */}
              {screenshots.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-6 z-20 bg-slate-900/80 hover:bg-slate-900 border border-border-custom text-white p-3 rounded-full transition-colors cursor-pointer"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Bottom Help Bar */}
            <div className="p-3 text-center text-[10px] font-mono text-text-secondary bg-slate-950/60 border-t border-border-custom/50 backdrop-blur z-20 select-none">
              Double-click to toggle zoom · Mouse wheel to zoom in/out · Click and drag to pan when zoomed
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
