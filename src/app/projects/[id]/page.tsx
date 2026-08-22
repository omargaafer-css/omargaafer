import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe, Check, AlertTriangle, Lightbulb, Settings, Cpu, Shield, Database, Code, Trophy, Award, ExternalLink } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

export interface RecognitionInfo {
  title: string;
  badge1: string;
  badge2: string;
  description: string;
  certificateImage?: string;
}

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  techStack: string[];
  decisions: string[];
  challenges: string;
  lessons: string;
  future: string[];
  github: string;
  demo?: string;
  image?: string;
  screenshots?: string[];
  iconType: "ai" | "security" | "backend" | "frontend";
  recognition?: RecognitionInfo;
}

const projectsData: Record<string, ProjectDetail> = {
  "specsense-ai": {
    id: "specsense-ai",
    title: "SpecSense AI",
    subtitle: "Intelligent Cable Specification & Inspection Control System",
    description: "State-of-the-art computer vision & NLP system for automated datasheet analysis, cable segmentation (YOLOv8), and feeder validation calculations.",
    overview: "SpecSense AI is a dual-tier computer vision and natural language processing system built to automate cable specification extraction, datasheet analysis, and structural cross-section inspection. Officially recognized as a Top 3 Graduation Project presented to Elsewedy Electric & SUTech, it features a React & FastAPI enterprise console and a Streamlit console for single-spec parsing.",
    recognition: {
      title: "Top 3 Industry Project",
      badge1: "Top 3 Industry Project",
      badge2: "Certified by Elsewedy Electric & SUTech",
      description: "SpecSense AI was officially recognized as one of the Top 3 graduation projects presented to Elsewedy Electric. The project also received an official Certificate of Accomplishment from Elsewedy Electric and Elsewedy University of Technology (SUTech) for its successful completion, technical excellence, innovation, and real-world engineering impact.",
      certificateImage: "/certifications/SpecSense AI Certificate.png"
    },
    problem: "Electrical engineers spend substantial manual time parsing PDF sheets for cables, checking dimensions, running voltage drop calculations, and validating compliance. Manually checking inner layer boundaries of cable cross-sections is prone to measurement errors.",
    solution: "The system integrates YOLOv8 to segment outer and inner insulation boundaries from cable section photographs, automatically extracting diameters. A SpaCy-based NLP pipeline parses text extracted via OCR from PDF sheets to structure ratings (Voltage, Current, Armour). The FastAPI server operates with a dual-database fallback system.",
    features: [
      "Top 3 Industry Awarded Graduation Project (Certified by Elsewedy Electric & SUTech)",
      "Vision Cable Inspection (YOLOv8 segmentations of circular layers)",
      "Technical Datasheet Parser (OCR text processing & SpaCy tokenizers)",
      "Intelligent Wiring & Feeder Sizer (voltage drops, sizing calculations)",
      "Dual Database Manager (PostgreSQL fallback to local SQLite database)"
    ],
    architecture: "PDF Datasheet / Cable Section Image -> OCR & YOLOv8 Vision Inspector -> FastAPI Parsing Engine -> Sizing Calculations -> Postgres/SQLite DB -> React Client Frontend Dashboard",
    techStack: ["FastAPI (Python)", "React (Vite + TypeScript)", "YOLOv8", "SpaCy NLP", "PostgreSQL", "SQLite", "Tailwind CSS"],
    decisions: [
      "Custom Resilient Dual-Database Engine (PostgreSQL & SQLite): Built a transparent DB fallback driver that dynamically pings PostgreSQL availability and routes queries to local SQLite without developer intervention or Docker runtime prerequisites.",
      "Decoupled Vision & NLP Inference Execution Threads: Isolated heavy YOLOv8 segmentation loops and SpaCy NLP parsing onto async worker processes, preventing high-latency CPU tensor computations from blocking main FastAPI REST endpoints.",
      "Contrast-Augmented Dataset Pipeline for Cable Cross-Sections: Engineered custom data augmentation pipelines with adaptive contrast and brightness adjustments to ensure high-precision segmentation of inner insulation boundaries across varied industrial lighting.",
      "Modular Rule-Based Electrical Calculation Engine: Decoupled technical specification parsing from cable feeder sizing (voltage drop, current rating capacity, and armour structural integrity) into pure functional calculation modules, ensuring instant, zero-side-effect verification across diverse industrial cable profiles."
    ],
    challenges: "YOLOv8 model required robust segmentations on varying cable backgrounds and custom cable colors. This was solved by expanding the training dataset with contrast-adjusted augments and annotating inner insulations precisely.",
    lessons: "Leading a multi-disciplinary project highlights the value of defining clean schemas and REST API borders early. Separating the model inference loops from the main web server threads keeps the interface responsive.",
    future: [
      "Incorporate 3D model renderings of cable runs",
      "Expand compliant checking configurations for regional IEC / NEC standard codes",
      "Build real-time streaming calculation graphs"
    ],
    github: "https://github.com/omar-gaafer/SpecSense-AI",
    image: "/projects/SpecSense AI/specsense_ai_preview.jpg",
    screenshots: [
      "/projects/SpecSense AI/specsense_ai_preview.jpg",
      "/projects/SpecSense AI/Dashboard.png",
      "/projects/SpecSense AI/Vision Inspection.png",
      "/projects/SpecSense AI/ocr.png",
      "/projects/SpecSense AI/tech assistant.png",
      "/projects/SpecSense AI/assistant result.png"
    ],
    iconType: "ai"
  },
  "foodverse": {
    id: "foodverse",
    title: "FoodVerse",
    subtitle: "Enterprise Multi-Role Food Delivery & ERP Platform",
    description: "A 4-tier desktop Food Delivery & Resource Management (ERP) platform featuring fine-grained RBAC, atomic SQLite inventory persistence, receipt generation, and live order status management.",
    overview: "FoodVerse is a desktop food delivery and enterprise resource planning (ERP) system engineered in Java 21 with Swing GUI and an embedded SQLite database (talabat.db). Built with pure 4-tier architecture, it provides dedicated role-based access portals for Customers, Restaurant Managers, Kitchen Staff, Delivery Drivers, and Super Admins.",
    problem: "Legacy food delivery software and desktop ordering systems frequently rely on unstructured text files or un-synchronized modules, leading to race conditions during simultaneous inventory deductions, zero multi-branch isolation for store managers, and lack of transaction safety.",
    solution: "FoodVerse implements a relational SQLite database architecture (users, restaurants, products, orders, order_items) using PreparedStatements and WAL mode (PRAGMA journal_mode = WAL;). It enforces strict Role-Based Access Control (RBAC), automatic real-time stock deduction with cart validation, receipt printing, and custom Graphics2D analytics bar charts.",
    features: [
      "4-Tier Role-Based Access Control (Customer, Restaurant Manager, Kitchen Staff, Delivery Driver, Super Admin)",
      "Real-Time Stock Deduction & Cart Persistence (Validates availability to prevent over-ordering)",
      "Relational SQLite Database Architecture (talabat.db with PreparedStatements & WAL Mode)",
      "Scoped Multi-Branch Management (Managers isolated strictly to assigned restaurant entities e.g., KFC, Al Sultan Grill, Pizza Hut)",
      "Modern Dark Swing UI & Graphics2D Charts (Vibrant Talabat Orange #FF5A00 design system and bar chart graphics)",
      "Printable Receipts & Live Order Status Tracking (Placed -> Preparing -> On the Way -> Delivered)"
    ],
    architecture: "Desktop Swing GUI (Multi-Role Portals) -> Service Layer (OrderService, MenuService, UserService) -> DAO Layer (UserDao, RestaurantDao, ProductDao, OrderDao) -> Embedded SQLite Database (talabat.db)",
    techStack: ["Java 21", "Java Swing GUI", "SQLite JDBC", "DAO Pattern", "Graphics2D", "RBAC Security"],
    decisions: [
      "Replaced legacy text file persistence with normalized SQL tables and WAL mode (PRAGMA journal_mode = WAL;) for concurrent read/write throughput and resource safety.",
      "Decoupled Presentation (Swing GUI) from Data Access via strict DAO and Service layers, ensuring clean enterprise modularity.",
      "Implemented scoped role-based access control so restaurant managers can only inspect and edit menus/inventory belonging strictly to their assigned restaurant ID.",
      "Engineered real-time stock deduction verification during cart population and checkout to eliminate inventory depletion edge cases."
    ],
    challenges: "Preventing UI freeze frames and thread contention during SQLite database transactions while updating live Swing Graphics2D components and rendering custom order Receipts.",
    lessons: "Applying strict DAO abstractions with parameterized PreparedStatements and SQLite WAL mode in Java desktop applications provides fast, resilient transactional performance while keeping user interfaces smooth.",
    future: [
      "Integrate asynchronous WebSocket notification server for instantaneous order dispatch alerts",
      "Add Stripe/PayPal API payment gateway integration",
      "Support PDF and Excel analytical inventory reports export"
    ],
    github: "https://github.com/omar-gaafer/FoodVerse",
    image: "/projects/FoodVerse/foodverse_preview.jpg",
    screenshots: [
      "/projects/FoodVerse/foodverse_preview.jpg",
      "/projects/FoodVerse/order.png",
      "/projects/FoodVerse/inventory management.png",
      "/projects/FoodVerse/admin hub.png",
      "/projects/FoodVerse/view order.png",
      "/projects/FoodVerse/registration management.png",
      "/projects/FoodVerse/login page.png"
    ],
    iconType: "backend"
  },
  "edgmon-v4": {
    id: "edgmon-v4",
    title: "EdgeMon V4.0",
    subtitle: "Intelligent Threat & System Monitor",
    description: "A hybrid system monitoring and Layer 2/4 intrusion detection system (IDS) utilizing Machine Learning (Scikit-Learn) and raw Scapy packet analysis.",
    overview: "EdgeMon V4.0 is a self-hosted system telemetry and network Intrusion Detection System (IDS). It logs hardware metrics and captures packet flows, predicting threat indicators using a Random Forest classifier in real-time.",
    problem: "Traditional system monitoring tools ignore security vulnerabilities in packet payloads. Security tools, conversely, ignore system performance indicators (such as local CPU temp spikes) that could correlate with active attacks.",
    solution: "EdgeMon combines hardware performance polling with a Scapy packet sniffer thread. The packet flow features are parsed by a Scikit-Learn trained ML model (Random Forest / Decision Tree) to classify threat environments, and alert metrics are persisted inside distinct local databases.",
    features: [
      "Multi-Layer Telemetry Poller (hardware metrics, temperatures, network)",
      "Layer 2/4 Network Sniffer (detached Scapy thread capturing streams)",
      "ML-Powered IDS (Random Forest classifier predicting intrusions)",
      "Dual Database Logs (system telemetry in metrics.db, alerts in agent.db)",
      "Excel Exporter (dynamic openpyxl metrics reporting compiler)"
    ],
    architecture: "Host Hardware (CPU/RAM/Temp) + Network Sockets (Scapy sniffer) -> Threat Correlator Engine (ML evaluation) -> SQLite DB Loggers -> Flask Web Dashboard UI + Openpyxl Excel Export",
    techStack: ["Flask (Python)", "Scikit-Learn", "Scapy Engine", "SQLite", "openpyxl", "Tailwind CSS"],
    decisions: [
      "Separated system performance telemetry database from security alerts. This prevents heavy logging loops from locking tables during critical security evaluations.",
      "Generated audio alerts programmatically to notify host administrators immediately when high-risk intrusion signatures are flagged."
    ],
    challenges: "Running Scapy packet capture in python on active windows networks caused CPU spikes and packet loss due to thread blocking.",
    lessons: "Using deque buffers and running the sniffer in a detached background daemon decoupled from the Flask event loop minimized CPU overhead and eliminated packet loss.",
    future: [
      "Implement deep packet inspection (DPI) parser for Layer 7 applications",
      "Add container orchestration logs to trace docker metrics",
      "Integrate automated firewall rule blocks for identified malicious IP inputs"
    ],
    github: "https://github.com/omar-gaafer/EdgMon_V4.0",
    image: "/projects/EdgMon V4.0/edgmon_v4_preview.jpg",
    screenshots: [
      "/projects/EdgMon V4.0/edgmon_v4_preview.jpg",
      "/projects/EdgMon V4.0/dashbord.png",
      "/projects/EdgMon V4.0/cpu.png",
      "/projects/EdgMon V4.0/disk.png",
      "/projects/EdgMon V4.0/memory.png",
      "/projects/EdgMon V4.0/network.png",
      "/projects/EdgMon V4.0/system info.png",
      "/projects/EdgMon V4.0/temp.png"
    ],
    iconType: "security"
  },
  "ecommerce-microservices": {
    id: "ecommerce-microservices",
    title: "Docker E-Commerce System",
    subtitle: "Microservices Catalog & Order Ecosystem",
    description: "A containerized shopping API framework separating catalog, cart, order and payment into autonomous FastAPI servers prepared for Kubernetes orchestration.",
    overview: "This is a containerized microservices platform containing four autonomous Python backend services and a central React administration control dashboard. The architecture is ready for local Kubernetes orchestration.",
    problem: "Monolithic e-commerce setups are difficult to scale. A peak in checkout payment requests can throttle catalog updates, causing system-wide performance degradation.",
    solution: "The system decouples logic into four independent backend services (Catalog, Cart, Order, Payment) running on FastAPI. Services communicate via HTTP REST. Each component is dockerized, and deployment files are configured for Kubernetes.",
    features: [
      "Autonomous Backend Services (Catalog, Cart, Order, Payment)",
      "React Order Dashboard UI (visualizing sales, stock statuses)",
      "Containerized Ecosystem (Docker-Compose configurations)",
      "Kubernetes Deployment Manifests (pods, services, configurations)",
      "Interactive Swagger API Documentation for all backend services"
    ],
    architecture: "React Web Dashboard Client -> Gateway Router -> [Catalog Service (8000), Cart Service (8001), Order Service (8002), Payment Service (8003)] -> Independent In-Memory Datastores",
    techStack: ["FastAPI (Python)", "React (JavaScript)", "Docker", "Docker-Compose", "Kubernetes", "Swagger UI"],
    decisions: [
      "Configured in-memory data structures inside each service to guarantee rapid development iteration without external DB hosting prerequisites.",
      "Configured independent Kubernetes manifest files (services, deployments) inside k8s/ to allow local clusters (Kind/Minikube) to manage replicas."
    ],
    challenges: "Handling port mapping conflicts and communication routing across multiple local Docker containers during initial boots.",
    lessons: "Writing custom PowerShell (`start_dev.ps1`) and batch (`start.bat`) files to orchestrate the build sequence ensures consistent local deployment environments.",
    future: [
      "Integrate Redis caches to manage cart session states",
      "Configure RabbitMQ messaging bus to handle asynchronous order dispatches",
      "Implement PostgreSQL data layer for permanent order records"
    ],
    github: "https://github.com/omar-gaafer/e-commerce-microservices",
    image: "/projects/E-Commerce App/ecommerce_preview.jpg",
    screenshots: [
      "/projects/E-Commerce App/ecommerce_preview.jpg",
      "/projects/E-Commerce App/dashboard.png",
      "/projects/E-Commerce App/cluster status.png",
      "/projects/E-Commerce App/orders.png",
      "/projects/E-Commerce App/products.png"
    ],
    iconType: "backend"
  },
  "huffman-compressor": {
    id: "huffman-compressor",
    title: "Huffman Compressor",
    subtitle: "Lossless Coding & Decompression Tool",
    description: "A desktop and terminal compiler deploying the Huffman prefix algorithm. Integrates Shannon Entropy verification limits for files.",
    overview: "This tool implements the Huffman Coding Algorithm for lossless data compression and decompression. It features an interactive Tkinter graphical interface and a command-line interface, providing exact telemetry logs of savings.",
    problem: "Developers need to optimize data payloads, but understanding how close an encoded file gets to the theoretical limits of lossless compression is rarely visualized.",
    solution: "The tool structures custom binary headers, compiles the frequency mapping of input payloads, constructs the prefix tree, and writes compressed `.huff` output files. It integrates Shannon Entropy formulas to display theoretical compression limits.",
    features: [
      "Lossless Compression (safely handles text, images, PDFs, media)",
      "Extension Metadata Preservation (retains original format inside header)",
      "Interactive GUI Dashboard (Tkinter browse, compression, output logger)",
      "Shannon Entropy calculations (theoretical limits of lossless coding)"
    ],
    architecture: "Input File -> Frequency Mapping -> Huffman Tree Compiler -> Bitstream Encoder -> Custom Headers (.huff output) -> Bitstream Parser -> Tree-based Decoder -> Restored File",
    techStack: ["Python", "Tkinter", "CLI Parsing", "Mathematical Telemetry"],
    decisions: [
      "Preserved the original file extensions by appending a metadata block directly to the binary header of the compressed `.huff` file.",
      "Designed a CLI validator that compresses a target file, performs decompression immediately, and runs byte verification to ensure zero data loss."
    ],
    challenges: "Handling bitstream boundaries when output file bytes do not line up on perfect 8-bit limits.",
    lessons: "Using a byte-padding header allows the decoder to identify and ignore trailing bit offsets, avoiding payload corruption during file restoration.",
    future: [
      "Implement dynamic adaptive Huffman algorithms for streaming data",
      "Port the core compression logic to C++ to optimize execution times",
      "Add folder-level archive zipping support"
    ],
    github: "https://github.com/omar-gaafer/Huffman_Compressor",
    image: "/projects/Huffman Compression/huffman_preview.jpg",
    screenshots: [
      "/projects/Huffman Compression/huffman_preview.jpg",
      "/projects/Huffman Compression/Dashbord.png"
    ],
    iconType: "backend"
  },
  "apexbank": {
    id: "apexbank",
    title: "ApexBank Interface",
    subtitle: "Modern Banking Client Interface",
    description: "Polished client banking application dashboard with clean ledger views, balance charts, appointment planners, and transfer configurations.",
    overview: "ApexBank is a static web interface modeling a retail banking system. It includes client panels, appointment scheduling calendars, ledger screens, transaction transfer logs, and administrator consoles.",
    problem: "Recruiters and frontend developers need reference designs for secure-looking, responsive financial dashboards that avoid heavy framework payloads.",
    solution: "Designed and built a static interface utilizing semantic HTML5, custom properties (CSS variables) for strict design grids, and pure JavaScript to handle simulated database updates.",
    features: [
      "Interactive Landing Page (responsive reviews, product calculators)",
      "Secure Authentication gates (validated login and registration)",
      "Customer Dashboard (account ledger, balance metrics, transfer paths)",
      "Branch Locator and Meeting Booking calendars",
      "Admin Control Panel (audit logs, user registrations, transfer approvals)"
    ],
    architecture: "Static HTML5 pages -> Custom CSS layout variables -> Vanilla JavaScript Event Handlers -> LocalStorage (State synchronization)",
    techStack: ["HTML5", "Vanilla CSS3 (Variables, Grids, Glassmorphism)", "Vanilla JavaScript"],
    decisions: [
      "Utilized pure CSS variables for consistent palettes, enabling smooth light/dark mode transitions without heavy external frameworks.",
      "Used LocalStorage to persist balance updates, transaction histories, and scheduled meetings across separate static page boundaries."
    ],
    challenges: "Maintaining state (balance calculations, transactions) across separate HTML pages without a database backend.",
    lessons: "Leveraging the HTML5 LocalStorage API with structured JSON schemas allows for mock databases, creating responsive user flows.",
    future: [
      "Integrate real-time charts using Chart.js",
      "Build serverless functions to simulate live security authorization pins",
      "Add CSV ledger export options"
    ],
    github: "https://github.com/omar-gaafer/Bank_Web_FrontEnd",
    image: "/projects/Web Bank/dashbord.png",
    screenshots: [
      "/projects/Web Bank/dashbord.png"
    ],
    iconType: "frontend"
  },
  "photographer-ms": {
    id: "photographer-ms",
    title: "Photographer Portfolio",
    subtitle: "Portfolio & Booking Engine (abady)",
    description: "A robust client booking and gallery portfolio management system built on Laravel. Simplifies schedules, reserves appointments, and exposes admin logs.",
    overview: "Photographer Portfolio (abady) is a full-stack content and reservation management platform built with Laravel. It integrates booking schedules, database schema migrations, and administrator logs.",
    problem: "Photographers require portfolios that do not just display images, but also coordinate client reservations, lock booked calendar slots, and log audit data.",
    solution: "Implemented a Laravel web application utilizing Eloquent ORM to manage models (Clients, Bookings, Gallery). The dashboard allows admins to confirm bookings and manage the portfolio.",
    features: [
      "Dynamic Schedule Selector (booking calendars for client schedules)",
      "Responsive Image Portfolios (lazy-loaded display grids)",
      "Admin Console (booking audit logs, verification flags)",
      "Secure Authentication gates (auth middleware limits for dashboards)"
    ],
    architecture: "Client Web Browser -> Laravel Router -> Middleware Filter -> Controllers & Eloquent ORM Models -> MySQL Database",
    techStack: ["PHP", "Laravel Framework", "MySQL Database", "Blade Templates", "HTML5 & CSS3"],
    decisions: [
      "Configured robust Eloquent relationships (HasMany / BelongsTo) to ensure child bookings are cascade-deleted if a client profile is removed.",
      "Integrated secure authentication middleware for all administrative routes to protect booking metrics."
    ],
    challenges: "Preventing double-booking of identical time slots during concurrent client checkouts.",
    lessons: "Enforcing unique index constraints across both the DB schema migrations and Eloquent validation rules handles concurrent transactions reliably.",
    future: [
      "Add automated email notifications using Laravel Mailables",
      "Integrate Stripe payment gateways",
      "Expose public API endpoints for client integrations"
    ],
    github: "https://github.com/omar-gaafer/abady",
    image: "/projects/Photogapher MS/Home page.png",
    screenshots: [
      "/projects/Photogapher MS/Home page.png",
      "/projects/Photogapher MS/home 2.png",
      "/projects/Photogapher MS/Admin Dashboard.png",
      "/projects/Photogapher MS/admin add vid.png",
      "/projects/Photogapher MS/alboms.png",
      "/projects/Photogapher MS/booking portal.png",
      "/projects/Photogapher MS/booking.png",
      "/projects/Photogapher MS/contant.png",
      "/projects/Photogapher MS/manage booking.png",
      "/projects/Photogapher MS/profile settings.png"
    ],
    iconType: "backend"
  },
  "click-breaker": {
    id: "click-breaker",
    title: "Click Breaker v2.0",
    subtitle: "Next-Gen Telemetry & Cyber Security Operations Platform",
    description: "Advanced security telemetry, live audit operations, and real-time monitoring platform featuring a high-performance Python control core, glassmorphism web panel, HMAC-SHA256 JWT security, and multi-channel webhook dispatching (Telegram, Discord, Slack).",
    overview: "Click Breaker v2.0 is an enterprise-grade cyber security operations platform built with a Python 3 control core (cb.py) and a modern glassmorphism PHP web panel. It features real-time telemetry streaming, interactive Chart.js analytics, dynamic plugin engines, HMAC-SHA256 signed tokens, and instant webhook dispatches to Discord, Telegram, and Slack.",
    problem: "Security operational teams and penetration testers need real-time telemetry streaming and payload auditing without complex SIEM infrastructure, fragmented log files, or unauthenticated control endpoints.",
    solution: "Click Breaker provides an integrated control framework (cb.py) managing an embedded PHP server. It features async telemetry receivers, HMAC-SHA256 JWT security, dynamic plugin scanners (click-web/plugins/), interactive Chart.js donut/line analytics, and multi-channel webhook alerts (Telegram, Discord, Slack).",
    features: [
      "Real-Time Telemetry Listener (live streaming terminal log viewer with state control)",
      "Interactive Chart.js Analytics Dashboard (capture rates & module breakdown visualizer)",
      "Multi-Channel Webhook Dispatcher (instant alerts to Discord, Telegram, and Slack)",
      "HMAC-SHA256 JWT Security (signed API tokens & bearer authorization for API routes)",
      "Dynamic Plugin Engine (modular payload engine loading plugins from click-web/plugins/)",
      "Glassmorphism Control Panel (modern dark-mode design system with Outfit typography)",
      "Tunnel Integration (Cloudflare Tunnel cloudflared & Ngrok support for remote ops)"
    ],
    architecture: "Client Web Payload -> Async Receiver API -> HMAC-SHA256 Token Auth -> Webhook Engine (Discord/Telegram/Slack) -> Chart.js Analytics API -> Live Glassmorphic Dashboard",
    techStack: ["Python 3", "PHP 8", "Glassmorphism CSS", "Chart.js", "HMAC-SHA256", "Webhooks API", "Cloudflare Tunnel", "Bash"],
    decisions: [
      "Engineered a decoupled Python controller (cb.py) that manages local server lifecycle, system dependencies checks, and log file handlers independently from the web layer.",
      "Implemented HMAC-SHA256 JWT security signatures on telemetry API endpoints to prevent tampered or unauthorized payload submissions.",
      "Integrated multi-channel webhook dispatching (Telegram, Discord, Slack) into click-web/webhooks.php for instant security alert notifications.",
      "Designed a dynamic plugin payload architecture scanning click-web/plugins/ dynamically, allowing instant deployment of new security modules without modifying core server logic."
    ],
    challenges: "Eliminating thread contention and race conditions during high-volume async telemetry logging while maintaining zero latency on live Chart.js dashboard polls.",
    lessons: "Using non-blocking file streaming and structured JSON endpoints for metric APIs guarantees fluid UI updates even during high-throughput security capture sequences.",
    future: [
      "Implement WebSockets for sub-millisecond bidirectional log updates",
      "Add Docker Compose single-command deployment pipeline",
      "Integrate automated YARA rule matching on incoming payload buffers"
    ],
    github: "https://github.com/omar-gaafer/Click-Breaker",
    image: "/projects/Click Breaker/clickbreaker_preview.jpg",
    screenshots: [
      "/projects/Click Breaker/clickbreaker_preview.jpg",
      "/projects/Click Breaker/Dashboard.png",
      "/projects/Click Breaker/login.png",
      "/projects/Click Breaker/modules.png",
      "/projects/Click Breaker/banner.png"
    ],
    iconType: "security"
  },
  "edgmon-v3-1": {
    id: "edgmon-v3-1",
    title: "EdgeMon V3.1",
    subtitle: "System Metrics Telemetry Dashboard",
    description: "A lightweight hardware polling daemon collecting real-time CPU, disk, RAM and temperature bounds, logging directly into a local SQLite repository.",
    overview: "EdgeMon V3.1 is a lightweight system telemetry tool that monitors hardware resource indicators in real-time and logs history records into a local SQLite database.",
    problem: "Most system monitoring utilities are heavy, difficult to install, or lack native CPU temperature polling on Windows platforms.",
    solution: "A lightweight Python daemon polls system indicators (CPU utilization, temperatures, RAM, and Disk space) using psutil and WMI bindings, and serves a Flask interface.",
    features: [
      "Real-time Telemetry Dashboard (CPU utilization, RAM, network streams)",
      "Persistent History Logger (background thread daemon updating metrics.db)",
      "Cross-platform Temperature Poller (WMI/GPUtil on Windows, /sys on Linux)",
      "Threshold Alert Alerts (CPU, memory, temperature warnings)",
      "CSV Report Exports (history log downloads)"
    ],
    architecture: "Background Poller (psutil/WMI threads) -> SQLite Database Log -> Flask REST API Backend -> CSS-styled Dashboard UI",
    techStack: ["Python", "Flask", "SQLite Database", "psutil & GPUtil", "HTML5 & CSS3"],
    decisions: [
      "Coded a custom Windows temperature poller using GPUtil and WMI namespace queries to bypass hardware access limitations.",
      "Configured automated CSV compilations to dump SQLite records directly for administrative exports."
    ],
    challenges: "Reducing CPU overhead caused by high-frequency hardware queries inside the telemetry collection loop.",
    lessons: "Throttling background collector intervals to 5 seconds and index-optimizing time-series columns in SQLite reduced daemon CPU usage to below 1%.",
    future: [
      "Implement real-time WebSocket metric pushes",
      "Add email-based warning alerts for server status thresholds",
      "Support customized telemetry polling dashboards"
    ],
    github: "https://github.com/omar-gaafer/Automated_Server_Monitorin-Linux-Windows-",
    image: "/projects/EdgMon V3.1/edgmon_v3_1_preview.jpg",
    screenshots: [
      "/projects/EdgMon V3.1/edgmon_v3_1_preview.jpg",
      "/projects/EdgMon V3.1/dashbord.png",
      "/projects/EdgMon V3.1/alerts.png",
      "/projects/EdgMon V3.1/metrics.png",
      "/projects/EdgMon V3.1/system info.png"
    ],
    iconType: "security"
  },
  "enterprise-network": {
    id: "enterprise-network",
    title: "Multi-VLAN Enterprise Network",
    subtitle: "Secure Multi-VLAN Routing & OSPF Integration",
    description: "A hands-on implementation demonstrating network planning, dynamic OSPF routing, subnet partitions (VLSM), and multi-VLAN segmentation across switches and routers.",
    overview: "This project implements a secure, scalable, and dynamic enterprise network topology. It spans 22 VLANs, 44 endpoints, 5 routers, and 5 switches to simulate a realistic department-based enterprise structure. Dynamic OSPF routing handles convergence and routing, while VLSM subnetting optimizes IP address distribution.",
    problem: "Modern enterprise departments require isolated broadcast domains to prevent broadcast storms, limit security exposure, and structure access. Dynamic, fault-tolerant routing must connect these subnets without exhausting the IP address space.",
    solution: "Segmented the topology into 22 distinct VLANs across 5 switches to enforce security policies and manage traffic. Connected the networks through 5 Cisco routers running OSPF dynamic routing for automatic route propagation and fast convergence. Configured subinterfaces (Router-on-a-Stick) and SVIs, verified via automated pings and custom VLSM calculator scripts.",
    features: [
      "Dynamic OSPF Routing (automatic route discovery and convergence across 5 routers)",
      "VLAN Segmentation (22 VLAN subnets and 44 endpoints isolating broadcast domains)",
      "VLSM Addressing (custom Python subnetting calculator preventing IP address waste)",
      "Verification and Pings (fully tested connection paths and routing states)"
    ],
    architecture: "22 VLAN Endpoints -> Local Cisco Switches -> Router-on-a-Stick (subinterfaces) -> 5 OSPF Core Routers -> Dynamic Routing Backbone",
    techStack: ["Cisco Packet Tracer", "OSPF Routing", "VLANs & SVIs", "VLSM Subnetting", "Python (ipaddress)"],
    decisions: [
      "Utilized Router-on-a-Stick (subinterfaces) to enable inter-VLAN routing without deploying expensive dedicated physical cabling for each VLAN.",
      "Configured dynamic OSPF routing instead of static routing to build automated route convergence and load balancing across WAN links."
    ],
    challenges: "Aligning and managing 22 distinct IP subnets over 5 separate routers can lead to route mismatching or IP overlap during Cisco configuration CLI stages.",
    lessons: "Designing all IP allocations beforehand using a custom Python VLSM subnetting calculator prevents collision and guarantees network statements map correctly to OSPF areas.",
    future: [
      "Incorporate access control list (ACL) traffic firewalls between departments",
      "Deploy localized DHCP servers to automate endpoint IP assignment",
      "Integrate redundant gateway paths with HSRP or VRRP protocols"
    ],
    github: "https://github.com/omar-gaafer/Enterprise-Network",
    image: "/projects/Enterprise Network/enterprise_network_preview.jpg",
    screenshots: [
      "/projects/Enterprise Network/enterprise_network_preview.jpg",
      "/projects/Enterprise Network/Design.png"
    ],
    iconType: "security"
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Command Center</span>
        </Link>

        {/* Title Block */}
        <div className="border border-border-custom bg-[#0E1322]/60 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2 bg-slate-900 border border-border-custom rounded-lg text-primary-custom">
              {project.iconType === "ai" && <Cpu size={24} />}
              {project.iconType === "security" && <Shield size={24} />}
              {project.iconType === "backend" && <Database size={24} />}
              {project.iconType === "frontend" && <Code size={24} />}
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">
              {project.iconType === "ai" ? "AI & Computer Vision" : project.iconType} System
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{project.title}</h1>
          <p className="text-sm sm:text-base font-semibold text-primary-custom font-mono mb-4">{project.subtitle}</p>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border-custom rounded-lg text-xs font-bold text-white bg-slate-900 hover:border-slate-600 transition-colors"
            >
              <Github size={14} />
              <span>SOURCE CODE</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary-custom/40 rounded-lg text-xs font-bold text-white bg-primary-custom/10 hover:bg-primary-custom/25 transition-colors"
              >
                <Globe size={14} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        {/* Industry Recognition Card */}
        {project.recognition && (
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-950/40 via-[#0E1322]/85 to-yellow-950/30 border border-amber-500/40 rounded-2xl p-6 sm:p-8 mb-8 shadow-[0_0_30px_rgba(245,158,11,0.15)] group transition-all duration-300">
            {/* Ambient Background Glow Accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                {/* Header with Trophy Icon */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-400 shadow-inner shrink-0">
                    <Trophy size={22} className="text-amber-400" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Industry Recognition
                  </h2>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                    <Trophy size={13} className="text-amber-400" />
                    {project.recognition.badge1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-500/15 text-amber-200 border border-amber-500/30 shadow-sm">
                    <Award size={13} className="text-amber-400" />
                    {project.recognition.badge2}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-text-secondary leading-relaxed font-normal">
                  {project.recognition.description}
                </p>
              </div>

              {/* Certificate Action Button */}
              {project.recognition.certificateImage && (
                <div className="shrink-0 w-full md:w-auto">
                  <a
                    href={project.recognition.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full md:w-auto px-5 py-3 rounded-xl font-bold text-xs font-mono uppercase tracking-wider text-amber-100 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 hover:border-amber-400 transition-all duration-300 shadow-md group/btn"
                  >
                    <Award size={16} className="text-amber-400 group-hover/btn:scale-110 transition-transform" />
                    <span>View Certificate</span>
                    <ExternalLink size={14} className="opacity-70 group-hover/btn:opacity-100" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Project Image Gallery */}
        <ProjectGallery
          screenshots={project.screenshots}
          title={project.title}
          iconType={project.iconType}
        />

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">System Overview</h2>
            <p className="text-sm text-text-secondary leading-relaxed">{project.overview}</p>
          </section>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-red-400">
                <AlertTriangle size={18} />
                <h2 className="text-base sm:text-lg font-bold text-white">The Problem</h2>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">{project.problem}</p>
            </div>
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <Lightbulb size={18} />
                <h2 className="text-base sm:text-lg font-bold text-white">The Solution</h2>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">{project.solution}</p>
            </div>
          </div>

          {/* System Architecture */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">System Architecture</h2>
            <div className="p-4 bg-slate-950 rounded-lg border border-border-custom mb-3 font-mono text-xs text-text-secondary overflow-x-auto leading-relaxed">
              {project.architecture}
            </div>
            <p className="text-xs text-text-secondary/70 italic">Visual flow representation mapping core communication boundaries.</p>
          </section>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Core Specifications</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                    <span className="text-emerald-400 mt-1 shrink-0"><Check size={14} /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Technologies Leveraged</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-950 text-text-secondary border border-border-custom rounded-md text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Engineering Decisions */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4 text-primary-custom">
              <Settings size={18} />
              <h2 className="text-base sm:text-lg font-bold text-white">Engineering Decisions</h2>
            </div>
            <ul className="space-y-4">
              {project.decisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="px-2 py-0.5 bg-slate-950 border border-border-custom text-primary-custom text-xs font-mono rounded shrink-0">DEC-{idx + 1}</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-3">Key Challenge</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{project.challenges}</p>
            </div>
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-3">Lessons Learned</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{project.lessons}</p>
            </div>
          </div>

          {/* Future Improvements */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-4">Future Improvements</h2>
            <ul className="space-y-3">
              {project.future.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                  <span className="text-primary-custom mt-1.5 shrink-0 select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Back Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-custom rounded-lg text-sm font-bold text-white bg-slate-900 hover:border-slate-600 transition-colors shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Return to Command Center</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
