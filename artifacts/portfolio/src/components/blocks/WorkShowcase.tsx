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
              className={`group ${i % 2 !== 0 ? "md:mt-16" : ""}`}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

