import { motion } from "framer-motion";
import { Cpu, Gauge, GitBranch, Lock } from "lucide-react";

const ARCHITECTURE_SKILLS = [
  {
    title: "Zero-Cloud Local Inference (llama.cpp)",
    description: "Cross-compiling C++ execution engines to run quantized SLMs natively on device silicon with zero network latency and total data privacy.",
    icon: Cpu,
    color: "var(--neon-cyan)",
    glow: "glow-cyan"
  },
  {
    title: "Memory-Bounded Systems (<1.2GB RAM)",
    description: "Deploying custom low-bit KV cache memory bounds and Dart isolate streaming threads to prevent OS Out-Of-Memory (OOM) kernel terminations.",
    icon: Gauge,
    color: "var(--neon-pink)",
    glow: "glow-pink"
  },
  {
    title: "Decoupled State Boundaries (BLoC/Cubit)",
    description: "Isolating asynchronous database transaction loops into ViewModels, eliminating UI thread lockups and concurrent lifecycle crashes.",
    icon: GitBranch,
    color: "var(--neon-violet)",
    glow: "glow-violet"
  },
  {
    title: "Zero-Trust Vaulting & Cryptographic Keys",
    description: "Engineering volatile RAM key derivation (AES-256 GCM), Encrypted Room databases, and hardware Biometric Prompt hooks with auto-lock lifecycles.",
    icon: Lock,
    color: "var(--neon-cyan)",
    glow: "glow-cyan"
  }
];

export default function AdvancedArchitectureSkills() {
  return (
    <section id="architecture" className="py-32 relative z-10 border-t border-white/5 bg-black/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-neon-violet font-bold tracking-widest text-sm uppercase mb-4 block">System Engineering</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Advanced Architecture Skills</h2>
          <p className="text-white/50 text-lg">
            Deep technical control over memory boundaries, native runtime compilation, reactive state streams, and cryptographic security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARCHITECTURE_SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-full bg-black/80 backdrop-blur-xl p-8 rounded-[15px] border border-white/5 group-hover:border-white/10 transition-colors z-10">
                  <div 
                    className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                    style={{ color: skill.color }}
                  >
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                    {skill.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {skill.description}
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
