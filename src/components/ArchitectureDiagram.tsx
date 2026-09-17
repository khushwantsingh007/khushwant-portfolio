import React, { useState } from 'react';
import { 
  Video, 
  Camera, 
  Cpu, 
  Target, 
  Footprints, 
  ShieldAlert, 
  Zap, 
  Radio, 
  LayoutDashboard, 
  Database,
  ArrowDown,
  Info
} from 'lucide-react';

interface StageInfo {
  id: string;
  name: string;
  sub: string;
  desc: string;
  tech: string;
}

const STAGES: StageInfo[] = [
  {
    id: 'source',
    name: 'Camera & Video Ingestion',
    sub: 'Multi-Source Feeds',
    desc: 'Laptop Webcams (0/1), RTSP IP CCTV, Uploaded MP4 files, and Synthetic simulation streams.',
    tech: 'RTSP / HTTP / USB'
  },
  {
    id: 'opencv',
    name: 'OpenCV Capture Service',
    sub: 'Threaded Worker',
    desc: 'Decoupled threaded worker per camera feed to prevent GIL lock and ensure zero dropped frames.',
    tech: 'cv2.VideoCapture'
  },
  {
    id: 'yolo',
    name: 'YOLOv8 Deep Learning Inference',
    sub: 'Object Identification',
    desc: '100% local edge inference detecting persons, vehicles, bicycles, and trucks with high confidence.',
    tech: 'Ultralytics YOLOv8'
  },
  {
    id: 'tracking',
    name: 'Persistent Object Tracking',
    sub: 'Trajectory History',
    desc: 'Assigns persistent IDs across frames using ByteTrack & IoU matching to eliminate jitter.',
    tech: 'ByteTrack / IoU'
  },
  {
    id: 'rules',
    name: 'Spatial Rule Engine',
    sub: 'Geometric Calculations',
    desc: 'cv2.pointPolygonTest for restricted zone intrusions, 2D vector cross-products for tripwire line crossing, and crowd density counts.',
    tech: 'Vector Math & Ray-Casting'
  },
  {
    id: 'fastapi',
    name: 'FastAPI Event & REST Backend',
    sub: 'Telemetry & Deduplication',
    desc: 'Cooldown deduplication engine prevents alert spam; manages MJPEG video streaming and auth.',
    tech: 'FastAPI • Python 3.11'
  },
  {
    id: 'websockets',
    name: 'Sub-Second WebSockets Stream',
    sub: 'Push Broadcaster',
    desc: 'Instant socket telemetry broadcasting audio alarm triggers and high-res JPEG evidence snapshots.',
    tech: 'ASGI WebSockets'
  },
  {
    id: 'frontend',
    name: 'React 18 Security Matrix',
    sub: 'Operator Dashboard',
    desc: 'Real-time multi-camera viewport grid, interactive polygon zone canvas, and incident timeline.',
    tech: 'React • TypeScript • Tailwind'
  },
  {
    id: 'mongodb',
    name: 'MongoDB Persistent Vault',
    sub: 'Audit & Incident Logs',
    desc: 'Stores cameras, zone geometries, timestamped incident records, and ReportLab PDF reports.',
    tech: 'MongoDB Database'
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<StageInfo>(STAGES[4]); // Default to Rule Engine

  return (
    <div className="w-full rounded-2xl bg-card border border-border/70 p-6 lg:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-border/60 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Architecture Pipeline</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-foreground mt-1">
            Smart CCTV End-to-End Vision Flow
          </h3>
        </div>

        <div className="text-xs font-mono text-foreground-subtle flex items-center gap-1.5 bg-surface-secondary px-3 py-1.5 rounded-lg border border-border/60">
          <Info className="w-3.5 h-3.5 text-accent" />
          <span>Click any block to inspect details</span>
        </div>
      </div>

      {/* Visual Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        
        {/* Step 1 to 3: Ingestion & Vision */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-accent-cyan font-bold uppercase tracking-wider px-1">
            Phase 1: Ingestion &amp; Detection
          </div>

          <div
            onClick={() => setActiveStage(STAGES[0])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'source'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-accent-cyan">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">1. Camera Feeds</h4>
                <p className="text-[11px] text-foreground-muted font-mono">RTSP / Webcams / MP4</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-foreground-subtle">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          <div
            onClick={() => setActiveStage(STAGES[1])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'opencv'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-emerald-400">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">2. OpenCV Ingestion</h4>
                <p className="text-[11px] text-foreground-muted font-mono">Threaded Capture Worker</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-foreground-subtle">
            <ArrowDown className="w-4 h-4" />
          </div>

          <div
            onClick={() => setActiveStage(STAGES[2])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'yolo'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-accent-indigo">
                <Target className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">3. YOLOv8 Deep Learning</h4>
                <p className="text-[11px] text-foreground-muted font-mono">Local Inference (Zero Cloud)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 to 6: Tracking & Spatial Rules */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-accent-indigo font-bold uppercase tracking-wider px-1">
            Phase 2: Tracking &amp; Rule Engine
          </div>

          <div
            onClick={() => setActiveStage(STAGES[3])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'tracking'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-purple-400">
                <Footprints className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">4. Object Tracking</h4>
                <p className="text-[11px] text-foreground-muted font-mono">ByteTrack / IoU Trajectories</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-foreground-subtle">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          {/* Central Rule Engine Box */}
          <div
            onClick={() => setActiveStage(STAGES[4])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'rules'
                ? 'bg-rose-950/20 border-rose-500 shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-rose-400/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-surface border border-border text-rose-400">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">5. Spatial Rule Engine</h4>
                <p className="text-[11px] text-rose-400 font-mono font-medium">Critical Detection Logic</p>
              </div>
            </div>

            {/* Sub-rule chips */}
            <div className="grid grid-cols-3 gap-1 pt-1 text-[10px] font-mono text-center">
              <span className="p-1 rounded bg-surface border border-border/50 text-foreground-muted">
                Polygon Intrusion
              </span>
              <span className="p-1 rounded bg-surface border border-border/50 text-foreground-muted">
                Tripwire Line
              </span>
              <span className="p-1 rounded bg-surface border border-border/50 text-foreground-muted">
                Crowd Spikes
              </span>
            </div>
          </div>

          <div className="flex justify-center text-foreground-subtle">
            <ArrowDown className="w-4 h-4" />
          </div>

          <div
            onClick={() => setActiveStage(STAGES[5])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'fastapi'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-accent">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">6. FastAPI Backend</h4>
                <p className="text-[11px] text-foreground-muted font-mono">Deduplication &amp; Cooldown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 7 to 9: Distribution & UI */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider px-1">
            Phase 3: Real-Time UI &amp; Storage
          </div>

          <div
            onClick={() => setActiveStage(STAGES[6])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'websockets'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-sky-400">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">7. WebSockets Stream</h4>
                <p className="text-[11px] text-foreground-muted font-mono">Sub-second Alert Push</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-foreground-subtle">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          <div
            onClick={() => setActiveStage(STAGES[7])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'frontend'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-accent-cyan">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">8. React Matrix UI</h4>
                <p className="text-[11px] text-foreground-muted font-mono">Live Video &amp; Snapshot Audit</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-foreground-subtle">
            <ArrowDown className="w-4 h-4" />
          </div>

          <div
            onClick={() => setActiveStage(STAGES[8])}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStage.id === 'mongodb'
                ? 'bg-surface-secondary border-accent shadow-glow-sm scale-[1.02]'
                : 'bg-surface/60 border-border/60 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-emerald-400">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">9. MongoDB Vault</h4>
                <p className="text-[11px] text-foreground-muted font-mono">Incident History &amp; PDFs</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stage Detail Callout Panel */}
      <div className="mt-8 p-5 rounded-xl bg-surface-secondary/70 border border-accent/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/15 text-accent font-semibold">
              {activeStage.tech}
            </span>
            <h4 className="font-heading font-bold text-foreground text-base">
              {activeStage.name}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-foreground-muted mt-1.5 leading-relaxed max-w-2xl">
            {activeStage.desc}
          </p>
        </div>

        <div className="shrink-0">
          <span className="text-xs font-mono text-foreground-subtle">
            Status: <strong className="text-emerald-400">100% Local Inference</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
