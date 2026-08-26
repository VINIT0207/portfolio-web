import { motion } from "framer-motion";
import { memo } from "react";

const TAGS = [
  'EDGE-AI',
  'LLAMA.CPP',
  'FLUTTER',
  'KOTLIN 2.1',
  'JETPACK COMPOSE',
  'C++ NDK',
  'SQLITE',
  'DART 3'
];


const TagItem = memo(({ tag, i }: { tag: string; i: number }) => (
  <motion.span
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
    className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/80 backdrop-blur-sm"
  >
    {tag}
  </motion.span>
));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-start pt-20 pb-16 overflow-hidden">
      <div className="starfield" />

      {/* Background soft glows (optimized for mobile) */}
      <div className="absolute top-1/4 left-1/4 w-[260px] md:w-[500px] h-[260px] md:h-[500px] bg-neon-pink/10 rounded-full blur-[50px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] md:w-[600px] h-[280px] md:h-[600px] bg-neon-violet/10 rounded-full blur-[60px] md:blur-[150px] pointer-events-none" />

      <div className="container relative z-10 px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <div className="flex flex-wrap gap-2 mb-2">
            {TAGS.map((tag, i) => (
              <TagItem key={tag} tag={tag} i={i} />
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight glow-text text-white">
            Mobile Architect<br />
            <span className="text-gradient">& Edge-AI Engineer</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light mt-4 leading-relaxed">
            Specializing in client-side optimization, zero-cloud runtime paradigms, and extreme memory efficiency. Cross-compiling local ML inference (<span className="text-neon-cyan font-mono text-lg">llama.cpp</span>) and engineering production-hardened mobile systems.
          </p>

          <div className="flex items-center gap-4 mt-8 pointer-events-auto">
            <a
              href="#work"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
