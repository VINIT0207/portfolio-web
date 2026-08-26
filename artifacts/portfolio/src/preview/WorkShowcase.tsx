import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "FinPulse - Smart Expense Tracker",
    category: "Flutter • Mobile Analytics",
    description:
      "A premium Flutter app with dark-mode UI, interactive analytics, and dynamic local database management.",
    image: "/images/case-web3.png",
    color: "cyan",
    repoUrl: "https://github.com/VINIT0207/flutter-expense-tracker",
  },
  {
    id: 2,
    title: "ClassTrack - Smart Attendance App",
    category: "Cross-Platform • Classroom Tools",
    description:
      "A gesture-based classroom management tool with Excel import/export and visual student performance charts.",
    image: "/images/case-ai.png",
    color: "pink",
    repoUrl: "https://github.com/VINIT0207/flutter-teacher-attendance",
  },
  {
    id: 3,
    title: "SubZero ❄️ (v1.0.0)",
    category: "Android • Kotlin • Jetpack Compose",
    tagline: "Privacy-First Subscription Management Vault",
    status: "Production Released (v1.0.0 Stable Build)",
    footprint: "5.17 MB Ultra-Lightweight Production Binary Asset",
    techBadges: ["Kotlin", "Jetpack Compose", "Material 3", "Room DB", "Moshi", "Vertex AI API"],
    achievements: [
      "Mitigated launch-time compilation bottlenecks (classes4.dex errors) by deploying custom Gradle MultiDex keep rules to guarantee root-level entry point resolution.",
      "Compressed production compilation layers down to an ultra-lightweight 5.17 MB binary footprint utilizing optimized ProGuard/R8 code shrinking parameters.",
      "Engineered a secure local vault architecture utilizing hardware-backed Android Biometric APIs and auto-lock engine lifecycles (ON_STOP state management).",
      "Implemented modular data mapping configurations supporting an on-demand AI Advisor loop utilizing Google Gemini 1.5 Flash."
    ],
    image: "/images/case-tech.png",
    color: "cyan",
    repoUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Next Project Commencing... 🤫",
    category: "Upcoming • Suspense Teaser",
    tagline: "Real-time. Full-duplex. Distributed.",
    ecosystem: "Flutter ⇄ FastAPI (Python) ⇄ MySQL",
    description: "Engineering an intensive, high-concurrency data system designed to handle massive data syncs seamlessly. Stay tuned for upcoming updates.",
    actionBadge: "Loading Source Code...",
    image: "/images/case-brand.png",
    color: "violet",
    repoUrl: "#",
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
              My Projects
            </h2>
            <p className="text-white/50 text-lg max-w-md">
              My finest digital experiences, crafted with precision and performance.
            </p>
          </div>
          <a
            href="https://github.com/VINIT0207"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all font-medium inline-flex items-center justify-center"
          >
            View All Work
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
                    <p className="text-neon-violet/80 text-sm font-medium">
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
                <div className="flex flex-col glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-neon-cyan/10 backdrop-blur-md border border-neon-cyan/20 text-neon-cyan">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 z-20">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-white">
                        {project.footprint}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neon-cyan/80 text-sm font-medium mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techBadges?.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-white/70"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.achievements?.map((achievement, idx) => (
                        <p key={idx} className="text-white/60 text-xs leading-relaxed flex items-start gap-2">
                          <span className="text-neon-cyan mt-0.5">›</span>
                          {achievement}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
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
