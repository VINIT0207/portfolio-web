import { motion } from "framer-motion";
import SplineScene from "./SplineScene";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden p-1 bg-gradient-to-br from-white/10 via-white/5 to-white/10"
        >
          <div className="relative bg-black rounded-[calc(2rem-4px)] px-6 py-14 md:py-24 text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[600px] h-[320px] md:h-[600px] bg-neon-violet/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                Ready to build <br />
                <span className="text-gradient">production-grade systems?</span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
                Open for independent startup contracts, milestone MVP builds, and on-device Edge-AI architectures.
              </p>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-2xl">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan">
                  ⚡ Edge-AI Integration
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-pink/10 border border-neon-pink/20 text-neon-pink">
                  📱 Mobile MVP Sprints
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-violet/10 border border-neon-violet/20 text-neon-violet">
                  🔒 Cryptographic Vaults
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white">
                  📊 Analytical SaaS
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-8 md:mb-12">
                <a
                  href="mailto:sharma.vinit.2007@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-base md:text-lg hover:scale-105 transition-transform inline-flex justify-center"
                >
                  Initiate Contract
                </a>
                <a
                  href="mailto:sharma.vinit.2007@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-bold text-base md:text-lg hover:bg-white/10 transition-colors border border-white/20 inline-flex justify-center"
                >
                  sharma.vinit.2007@gmail.com
                </a>
              </div>

              <div className="relative w-full h-[320px] md:h-[600px] lg:h-[720px] pointer-events-auto">
                <SplineScene
                  scene="https://prod.spline.design/xAJek-ooh6iGJTup/scene.splinecode"
                  className="absolute inset-0 w-full h-full"
                  disableOnMobile={true}
                  badgeText="Let's Build Systems"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
