import { motion } from "framer-motion";
import { Cpu, Smartphone, Database, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Edge-AI & Embedded ML",
    description: "Cross-compiling local llama.cpp inference engines, GGUF 4-bit quantization (Q4_K_M), JNI platform channels, and low-bit KV cache bounding (<1.2GB RAM).",
    icon: Cpu,
    color: "var(--neon-cyan)",
    glow: "glow-cyan"
  },
  {
    title: "Polyglot Mobile Development",
    description: "Architecting high-performance mobile systems across Flutter Core (Dart 3 Sound Null Safety) and Native Android (Kotlin 2.1.0 & Jetpack Compose) using BLoC & Cubit patterns.",
    icon: Smartphone,
    color: "var(--neon-violet)",
    glow: "glow-violet"
  },
  {
    title: "Database Engines & Local I/O",
    description: "Engineering ACID-compliant relational schemas in SQLite & Room with Write-Ahead Logging (WAL), FTS5 full-text indexing, and high-speed JSON/Excel serialization engines.",
    icon: Database,
    color: "var(--neon-pink)",
    glow: "glow-pink"
  },
  {
    title: "DevOps & System Hardening",
    description: "Implementing ProGuard/R8 compiler bytecode obfuscation, MultiDex keep rules, ABI split matrices (arm64-v8a), and reboot-persistent OS Exact Alarm orchestration.",
    icon: ShieldCheck,
    color: "var(--neon-cyan)",
    glow: "glow-cyan"
  }
];


export default function Services() {
  return (
    <section id="services" className="py-32 relative z-10 border-t border-white/5 bg-black/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-neon-pink font-bold tracking-widest text-sm uppercase mb-4 block">Core Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Technical Competencies</h2>
          <p className="text-white/50 text-lg">
            Engineering robust client-side optimization, zero-cloud runtime paradigms, and extreme memory efficiency on physical hardware.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
              >
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-full bg-black/80 backdrop-blur-xl p-8 rounded-[15px] border border-white/5 group-hover:border-white/10 transition-colors z-10">
                  <div 
                    className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                    style={{ color: service.color }}
                  >
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}