import { motion } from "framer-motion";
import { Monitor, Cpu, Hexagon, Wand2 } from "lucide-react";

const SERVICES = [
  {
    title: "Cross-Platform Mobile Dev",
    description: "Crafting fluid, native-feeling applications for iOS and Android using Flutter and Dart.",
    icon: Monitor,
    color: "var(--neon-cyan)",
    glow: "glow-cyan"
  },
  {
    title: "Backend Engineering",
    description: "Designing secure, scalable server-side architectures and APIs using Python and Java.",
    icon: Hexagon,
    color: "var(--neon-violet)",
    glow: "glow-violet"
  },
  {
    title: "State Management",
    description: "Architecting clean, maintainable app states using Provider, Riverpod, and MVVM patterns.",
    icon: Cpu,
    color: "var(--neon-pink)",
    glow: "glow-pink"
  },
  {
    title: "UI/UX Implementation",
    description: "Translating complex designs into responsive, pixel-perfect, and animated user interfaces.",
    icon: Wand2,
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
          viewport={{ once: false, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-neon-pink font-bold tracking-widest text-sm uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Core Competencies</h2>
          <p className="text-white/50 text-lg">
            I don't just write code. I craft immersive applications that make users feel something.
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
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
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