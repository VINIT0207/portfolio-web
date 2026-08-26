import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Constraint & Threat Modeling",
    desc: "I establish physical memory boundaries (<1.2GB RAM budgets), analyze compute pipelines, and construct zero-cloud offline security models."
  },
  {
    num: "02",
    title: "Decoupled Architecture & State",
    desc: "I design strict BLoC / Cubit state boundaries, isolate background worker threads from the main UI, and construct native JNI platform channels."
  },
  {
    num: "03",
    title: "Native Engineering & Storage Layers",
    desc: "I cross-compile local C++ inference engines (llama.cpp), construct SQLite WAL & FTS5 indexes, and craft responsive Jetpack Compose & Flutter UIs."
  },
  {
    num: "04",
    title: "Bytecode Hardening & Matrix Builds",
    desc: "I enforce ProGuard/R8 compiler obfuscation, resolve MultiDex keep rules, generate target ABI split binaries, and configure reboot-safe OS exact alarms."
  }
];


export default function Process() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] md:h-[500px] -translate-y-1/2 bg-neon-cyan/5 blur-[60px] md:blur-[150px] pointer-events-none" />
      
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Engineering Methodology</h2>
            <p className="text-white/50 text-lg mb-8">
              A systematic approach to architecting resilient, memory-bounded, and production-hardened software systems.
            </p>

            <div className="w-full h-[1px] bg-gradient-to-r from-neon-pink to-transparent opacity-50" />
          </motion.div>
          
          <div className="lg:w-2/3 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10" />
            
            <div className="flex flex-col gap-12 relative z-10">
              {STEPS.map((step, i) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-8 group"
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-black border-2 border-white/20 flex items-center justify-center text-white/50 font-display font-bold group-hover:border-neon-cyan group-hover:text-neon-cyan group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-500 z-10 relative bg-background">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}