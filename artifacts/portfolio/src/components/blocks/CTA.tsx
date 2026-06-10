import { motion } from "framer-motion";
import SplineScene from "./SplineScene";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative rounded-[2rem] overflow-hidden p-1 bg-gradient-to-br from-white/10 via-white/5 to-white/10"
        >
          <div className="relative bg-black rounded-[calc(2rem-4px)] px-6 py-20 md:py-24 text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                Ready to build <br />
                <span className="text-gradient">impactful software solutions?</span>
              </h2>

              <p className="text-xl text-white/60 mb-10 max-w-xl">
                Let's collaborate to create a digital experience that defies expectations.
              </p>


              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12">
                <a
                  href="https://github.com/VINIT0207"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform inline-flex justify-center"
                >
                  Start a Project
                </a>
                <a
                  href="mailto:vinit.sharma.2007@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-bold text-lg hover:bg-white/10 transition-colors border border-white/20 inline-flex justify-center"
                >
                  vinit.sharma.2007@gmail.com
                </a>

              </div>

              <div className="relative w-full h-[420px] md:h-[600px] lg:h-[720px]">
                <SplineScene
                  scene="https://prod.spline.design/xAJek-ooh6iGJTup/scene.splinecode"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
