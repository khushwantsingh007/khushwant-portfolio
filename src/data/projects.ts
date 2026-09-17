import type { Project } from '../types/project';

export const featuredProject: Project = {
  id: "smart-cctv-analytics",
  name: "smart-cctv-analytics",
  title: "Smart CCTV Analytics Platform",
  description: "AI-powered real-time automated video surveillance, spatial intrusion detection, and threat telemetry pipeline with zero cloud dependencies.",
  longDescription: "An enterprise-grade, edge-first automated video surveillance and threat detection platform built with YOLOv8, OpenCV, Python FastAPI, MongoDB, and React. Transforms standard camera streams into an active security intelligence matrix with sub-second alert broadcasting.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "OpenCV",
    "YOLOv8",
    "MongoDB",
    "WebSockets"
  ],
  category: "AI / ML",
  github: "https://github.com/khushwantsingh007/smart-cctv-analytics",
  demo: undefined, // Honest: no live deployment claim
  featured: true,
  image: "/projects/cctv-dashboard.svg",
  highlights: [
    "100% Local Inference • Zero Cloud API Costs",
    "Polygon Restricted Zone Ray-Casting (cv2.pointPolygonTest)",
    "2D Vector Cross-Product Tripwire Line Crossing (IN / OUT)",
    "Sub-Second Real-Time Threat Broadcasting via WebSockets",
    "Automated ReportLab PDF Audit & CSV Export Engine"
  ],
  caseStudy: {
    problem: "Traditional CCTV infrastructure is purely reactive, requiring humans to manually watch hours of monitors or search through recorded footage only after security breaches occur. Commercial cloud-based AI vision solutions suffer from severe recurring API subscription costs, high latency, and privacy compliance risks when streaming sensitive video feeds to external servers.",
    solution: "Smart CCTV Analytics Platform provides an edge-first, 100% local computer vision intelligence pipeline. It continuously ingests camera streams (RTSP, webcams, or uploaded videos), detects persons and vehicles using local YOLOv8, maintains object trajectories, and calculates spatial geometric rules in real-time. Security personnel receive instantaneous WebSocket alerts with snapshot evidence and can auto-generate formal PDF compliance audits.",
    architectureSummary: "Camera / Video Source → OpenCV Threaded Worker → YOLOv8 Object Detection → ByteTrack/IoU Trajectory Tracker → Rule Engine (Polygon Intrusion, Tripwire Cross-Product, Crowd Density) → Cooldown Deduplication Engine → FastAPI Backend (REST & WebSockets) → React Dashboard & MongoDB Persistent Storage.",
    features: [
      "Real-Time Deep Learning Detection: Local YOLOv8 inference detecting persons, bicycles, cars, motorcycles, buses, and trucks.",
      "Interactive Polygon Restricted Zones: Security admins can draw custom polygon boundary coordinates directly over video feeds. Ground-contact point ray casting evaluates whether bounding box centroids cross protected perimeters.",
      "Directional Tripwire Virtual Lines: Vector math detects whether moving objects cross virtual tripwires in an IN or OUT direction, maintaining continuous footfall telemetry.",
      "Crowd Density Threshold Alarms: Evaluates spatial cluster density and triggers alerts when room or zone capacities exceed defined limits.",
      "Multi-Source Ingestion: Compatible with laptop webcams, RTSP IP cameras, mobile streaming cameras (DroidCam/Iriun), and uploaded MP4 test files, plus a synthetic demo stream.",
      "Instant WebSocket Telemetry: Audio alarms and high-resolution JPEG evidence snapshot cards delivered directly to the browser within milliseconds of a rule violation.",
      "Automated PDF Audit Generation: Compiles daily threat logs, violation timestamps, and camera IDs into formal compliance audit reports using Python ReportLab."
    ],
    technologies: [
      "FastAPI & Uvicorn (Asynchronous Python REST and WebSocket gateway)",
      "OpenCV (cv2 threaded frame acquisition and geometric computations)",
      "Ultralytics YOLOv8 (Local hardware-accelerated target identification)",
      "ByteTrack / IoU Algorithm (Cross-frame trajectory persistence)",
      "React 18 & TypeScript (Type-safe responsive frontend)",
      "Tailwind CSS (High-contrast dark security matrix UI)",
      "MongoDB (Persistent incident storage and camera configuration)",
      "ReportLab (Automated PDF security audit document synthesizer)"
    ],
    challenges: [
      "Concurrency & GIL in Python: Solved video capture bottlenecks by decoupling OpenCV frame ingestion into dedicated worker threads, ensuring FastAPI event loops remain responsive.",
      "False Positive Reduction: Implemented a smart cooldown deduplication engine so a lingering person in a restricted zone triggers a single initial alert rather than flooding the database every frame.",
      "Ground-Contact Ray-Casting: Rather than checking the center of bounding boxes (which causes false triggers when tall people stand outside a fence), mapped intrusion calculations specifically to ground-contact base points."
    ],
    screenshots: [
      {
        title: "Multi-Feed Security Matrix",
        url: "/projects/cctv-dashboard.svg",
        caption: "Central dashboard displaying 4 live camera feeds, GPU latency telemetry, and real-time incident notifications."
      },
      {
        title: "Polygon Breach & Detection Feed",
        url: "/projects/cctv-detection.svg",
        caption: "High-resolution YOLOv8 detection overlay showing polygon restricted zone ray-casting and tripwire crossing vectors."
      },
      {
        title: "Real-Time Threat Incident Center",
        url: "/projects/cctv-alerts.svg",
        caption: "Sub-second WebSocket notification center with severity classification, timestamped evidence logs, and PDF audit triggers."
      },
      {
        title: "Passage Flow & Density Analytics",
        url: "/projects/cctv-analytics.svg",
        caption: "24-hour footfall line charts, peak congestion indicators, and target class distribution charts."
      }
    ]
  }
};

export const fallbackProjects: Project[] = [
  {
    id: "compiler-design-project-Code-Conversion-",
    name: "compiler-design-project-Code-Conversion-",
    title: "Code Conversion & Compiler Design Engine",
    description: "A compiler design and syntax translation system implementing lexical analysis, tokenization, parse tree generation, and code conversion.",
    technologies: ["JavaScript", "Compiler Design", "Lexical Analysis", "Parsing", "AST"],
    category: "Web",
    github: "https://github.com/khushwantsingh007/compiler-design-project-Code-Conversion-",
    stars: 0,
    forks: 0,
    updatedAt: "2026-04-20",
    highlights: ["Lexical Tokenizer", "Abstract Syntax Trees", "Grammar Rule Validation"]
  },
  {
    id: "stock-analysis-AI-project-",
    name: "stock-analysis-AI-project-",
    title: "AI Stock Analysis & Market Predictor",
    description: "Quantitative financial analysis engine leveraging machine learning models to analyze market trends, price trajectories, and financial indicators.",
    technologies: ["JavaScript", "Machine Learning", "Financial Modeling", "Data Analysis"],
    category: "AI / ML",
    github: "https://github.com/khushwantsingh007/stock-analysis-AI-project-",
    stars: 0,
    forks: 0,
    updatedAt: "2026-04-20",
    highlights: ["Time-Series Evaluation", "Predictive Trend Indicators", "Interactive Financial Charts"]
  },
  {
    id: "stock-buy-sell-Using-Greedy-algo-DAA-project",
    name: "stock-buy-sell-Using-Greedy-algo-DAA-project",
    title: "Stock Profit Maximizer (Greedy Algorithms)",
    description: "Design and Analysis of Algorithms (DAA) project implementing optimal stock buy-and-sell trading window strategies with O(n) greedy time complexity.",
    technologies: ["JavaScript", "Algorithms", "Greedy Approach", "Time Complexity Optimization"],
    category: "Other",
    github: "https://github.com/khushwantsingh007/stock-buy-sell-Using-Greedy-algo-DAA-project",
    stars: 0,
    forks: 0,
    updatedAt: "2026-04-20",
    highlights: ["O(n) Optimal Runtime", "Single & Multi-Transaction Max Profit", "Algorithmic Validation"]
  },
  {
    id: "multithreaded-stock-fetcher-Oprating-System-project-",
    name: "multithreaded-stock-fetcher-Oprating-System-project-",
    title: "Multithreaded Stock Fetcher (Operating Systems)",
    description: "Operating Systems concurrency and threading system utilizing worker thread pools, mutex locks, and asynchronous IO to fetch and aggregate market streams.",
    technologies: ["Python", "Multithreading", "Operating Systems", "Concurrency", "Synchronization"],
    category: "Python",
    github: "https://github.com/khushwantsingh007/multithreaded-stock-fetcher-Oprating-System-project-",
    stars: 0,
    forks: 0,
    updatedAt: "2026-04-20",
    highlights: ["Thread Pool Execution", "Race-Condition Prevention", "High-Throughput IO"]
  },
  {
    id: "stock-exchange-DBMS",
    name: "stock-exchange-DBMS",
    title: "Stock Exchange Database Management System",
    description: "Relational database architecture for financial exchange transactions, covering ACID compliance, order matching schemas, and portfolio management.",
    technologies: ["JavaScript", "SQL", "Database Design", "ACID Transactions", "Schema Modeling"],
    category: "Full Stack",
    github: "https://github.com/khushwantsingh007/stock-exchange-DBMS",
    stars: 0,
    forks: 0,
    updatedAt: "2026-04-20",
    highlights: ["Relational Integrity", "Order Book Execution Schema", "Complex SQL Aggregations"]
  },
  {
    id: "dams-securaty-audit-project-",
    name: "dams-securaty-audit-project-",
    title: "DAMS Security Audit & Compliance System",
    description: "Security auditing application built to assess system vulnerabilities, verify access control policies, and produce defensive compliance reports.",
    technologies: ["JavaScript", "Cybersecurity", "Access Control", "Audit Logging"],
    category: "Web",
    github: "https://github.com/khushwantsingh007/dams-securaty-audit-project-",
    stars: 0,
    forks: 0,
    updatedAt: "2026-04-20",
    highlights: ["Vulnerability Profiling", "Role-Based Access Control", "Defensive Security Checks"]
  }
];
