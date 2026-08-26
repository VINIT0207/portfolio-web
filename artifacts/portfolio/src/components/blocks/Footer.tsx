import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-10 border-t border-white/5 bg-black">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 cursor-pointer mb-6 inline-flex">
              <div className="w-8 h-8 rounded bg-gradient-flow flex items-center justify-center font-display font-bold text-black">
                V
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">Vinit Sharma</span>
            </Link>
            <p className="text-white/50 max-w-sm">
              Independent Mobile Software Architect & On-Device Edge-AI Engineer based in Mumbai, India. Engineering client-side optimization and zero-cloud systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Socials</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="https://github.com/VINIT0207" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vinit-sharma-87113b37b/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-neon-cyan transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://portfolio-web-sigma-six.vercel.app/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-neon-violet transition-colors">
                  Live Portfolio
                </a>
              </li>
              <li>
                <a href="mailto:sharma.vinit.2007@gmail.com" className="text-white/50 hover:text-neon-pink transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#work" className="text-white/50 hover:text-white transition-colors">Architectures</a></li>
              <li><a href="#services" className="text-white/50 hover:text-white transition-colors">Competencies</a></li>
              <li><a href="#architecture" className="text-white/50 hover:text-white transition-colors">System Skills</a></li>
              <li>
                <a
                  href="mailto:sharma.vinit.2007@gmail.com"
                  className="text-white/50 hover:text-neon-pink transition-colors"
                >
                  Direct Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Vinit Sharma. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}