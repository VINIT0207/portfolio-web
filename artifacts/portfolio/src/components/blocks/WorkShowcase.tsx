import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "FinPlus ⚡ (v1.0.0)",
    category: "Flutter • Native C++ • Edge-AI",
    tagline: "On-Device SLM Financial Assistant & Zero-Cloud Offline Inference",
    status: "Production Released (v1.0.0 Stable Build)",
    footprint: "100% Offline • <1.2GB RAM Boundary",
    techBadges: ["Flutter", "Dart 3", "C++ (libllama.so)", "GGUF Q4_K_M", "SQLite (WAL)", "JNI / NDK", "BLoC"],
    achievements: [
      "Embedded Local Inference: Integrates a quantized 0.5B Parameter Small Language Model (SLM) executing natively on device silicon via cross-compiled C++ shared libraries (libllama.so).",
      "16K Context Footprint Optimization: Configured custom low-bit KV cache limitations to safely run an expansive 16,384-token context window within a strict 1.2GB available RAM boundary without triggering OS Out-Of-Memory (OOM) process terminations.",
      "Asynchronous Processing: Programmed background worker isolates using Dart threads to stream massive model data files to device storage registers without locking the main UI rendering thread.",
      "Log-Aware Scheduler: Leverages native OS exact alarm layers to inspect the database, automatically suppressing upcoming hourly logs if active user modifications are registered."
    ],
    image: "/images/case-web3.png",
    color: "cyan",
    repoUrl: "https://github.com/VINIT0207/flutter-expense-tracker",
    featured: true
  },
  {
    id: 2,
    title: "ClassTrack 📊 (v2.0.0)",
    category: "Flutter • SQLite (WAL) • EdTech SaaS",
    tagline: "Analytical Classroom Management & Local Data Portability Infrastructure",
    status: "Production Released (v2.0.0 Upgrade)",
    footprint: "Liquid Glassmorphism • Zero-Lag SQL Engine",
    techBadges: ["Flutter", "Dart 3", "SQLite (WAL/FTS5)", "BLoC / Cubit", "Excel/CSV Engine", "AlarmManager", "BootReceiver"],
    achievements: [
      "Decoupled State Boundaries: Implemented a strict BLoC / Cubit architecture pattern, separating relational transaction loops into ViewModels to eliminate concurrent lifecycle crashes.",
      "Advanced Local Analytics: Configured mathematical moving-average aggregations natively inside client memory blocks to output specialized statistics like a Consistency Index (%) and Recent Momentum (% trends).",
      "Data Portability & I/O Engines: Engineered full JSON serialization pipelines enabling 1-tap workspace backup/restoration vectors and formatted Excel (.xlsx) and CSV data exporting.",
      "Task Orchestration: Utilizes Android's AlarmManager and BootReceiver broadcast configurations to register native notification reminders that persist seamlessly across device reboots."
    ],
    image: "/images/case-ai.png",
    color: "pink",
    repoUrl: "https://github.com/VINIT0207/flutter-teacher-attendance",
    featured: true
  },
  {
    id: 3,
    title: "SubZero ❄️ (v1.0.0)",
    category: "Native Android • Kotlin 2.1.0 • Jetpack Compose",
    tagline: "Zero-Telemetry Cryptographic Subscription Security Vault",
    status: "Production Released (v1.0.0 Stable Build)",
    footprint: "5.17 MB Ultra-Lightweight Production Binary",
    techBadges: ["Kotlin 2.1.0", "Jetpack Compose", "Material 3", "Encrypted Room DB", "AES-256 GCM", "Biometrics", "ProGuard/R8"],
    achievements: [
      "Encrypted Storage Vaulting: Houses transactional rows inside a fully encrypted Room Database system to protect local logs against root data extractions.",
      "Biometric & Hardware Lifecycle Locks: Interfaced native Biometric Prompt hooks (Fingerprint / Face ID) with app lifecycle listeners to enforce an immediate app auto-lock the exact moment the software thread moves to the background (ON_STOP).",
      "Volatile RAM Decryption: Programmed native key-derivation algorithms to transform user passcodes into 256-bit AES cryptographic keys held strictly inside volatile memory registers, ensuring zero plain text footprints hit physical disk storage.",
      "Compiler & MultiDex Optimization: Mitigated launch-time compilation bottlenecks (classes4.dex errors) with custom Gradle MultiDex keep rules and compressed the binary down to 5.17 MB via optimized ProGuard/R8 code shrinking."
    ],
    image: "/images/case-tech.png",
    color: "cyan",
    repoUrl: "https://github.com/VINIT0207/SubZero",
    featured: true
  },
  {
    id: 4,
    title: "Distributed Data Engine ⚡",
    category: "Active Engineering Lab • High-Concurrency",
    tagline: "Real-Time Full-Duplex Edge Synchronization System",
    ecosystem: "Flutter ⇄ FastAPI (Python) ⇄ MySQL / WAL",
    description: "Engineering a high-concurrency distributed data system designed to seamlessly bridge local on-device caches with asynchronous backend replication pipelines under heavy throughput.",
    actionBadge: "Engineering Lab Pipeline 🤫",
    image: "/images/case-brand.png",
    color: "violet",
    repoUrl: "https://github.com/VINIT0207",
    upcoming: true
  }
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-32 relative z-10">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Production Architectures
            </h2>
            <p className="text-white/50 text-lg max-w-lg">
              Production-hardened mobile systems, on-device Edge-AI runtimes, and local security vault architectures.
            </p>
          </div>
          <a
            href="https://github.com/VINIT0207"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all font-medium inline-flex items-center justify-center"
          >
            View GitHub Profile
          </a>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className={project.featured || project.upcoming ? "" : `group ${i % 2 !== 0 ? "md:mt-16" : ""}`}
            >
              {project.upcoming ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border-2 border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/5 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-neon-violet/10 border border-neon-violet/20 text-neon-violet animate-pulse">
                      {project.actionBadge}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-neon-violet/90 text-sm font-medium">
                      {project.tagline}
                    </p>
                    <p className="text-white/40 text-xs font-mono">
                      {project.ecosystem}
                    </p>
                    <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ) : project.featured ? (
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col justify-end p-6 z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border ${
                        project.color === 'pink'
                          ? 'bg-neon-pink/10 border-neon-pink/20 text-neon-pink'
                          : project.color === 'violet'
                          ? 'bg-neon-violet/10 border-neon-violet/20 text-neon-violet'
                          : 'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan'
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-white/10 backdrop-blur-md border border-white/20 text-white">
                        {project.footprint}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 ${
                      project.color === 'pink'
                        ? 'text-neon-pink/90'
                        : project.color === 'violet'
                        ? 'text-neon-violet/90'
                        : 'text-neon-cyan/90'
                    }`}>
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techBadges?.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-white/70"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <FeaturedAchievements achievements={project.achievements} color={project.color} />
                  </div>
                </motion.a>
              ) : (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 glass-panel p-2 block"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-white inline-block mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2">
                      {project.description}
                    </p>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedAchievements({ achievements, color }: { achievements?: string[]; color?: string }) {
  const [open, setOpen] = useState(false);

  const bulletColorClass =
    color === "pink"
      ? "text-neon-pink"
      : color === "violet"
      ? "text-neon-violet"
      : "text-neon-cyan";

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v: boolean) => !v);
        }}
        className="inline-flex items-center gap-1 text-[11px] font-bold text-white/70 hover:text-white transition-colors"
      >
        {open ? "Hide details" : "See more"}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2">
          {achievements?.map((achievement, idx) => (
            <p
              key={idx}
              className="text-white/70 text-xs leading-relaxed flex items-start gap-2"
            >
              <span className={`${bulletColorClass} mt-0.5 font-bold`}>›</span>
              {achievement}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
