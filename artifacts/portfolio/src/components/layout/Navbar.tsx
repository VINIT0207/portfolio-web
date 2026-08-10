import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "#work", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#architecture", label: "Architecture" },
  { href: "#contact", label: "Contact" },
];

function MagneticLink({
  href,
  label,
  isActive,
  onHover,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onHover: (rect: DOMRect | null) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleEnter = () => {
    if (ref.current) onHover(ref.current.getBoundingClientRect());
  };

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      href={href}
      ref={ref as any}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative inline-block px-1 text-sm font-medium transition-colors duration-300 will-change-transform ${
        isActive ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLDivElement>(null);
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);
  const [navRect, setNavRect] = useState<DOMRect | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.7)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.08)"]
  );

  useEffect(() => {
    const updateNav = () => {
      if (navRef.current) setNavRect(navRef.current.getBoundingClientRect());
    };
    updateNav();
    window.addEventListener("resize", updateNav);
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => {
      window.removeEventListener("resize", updateNav);
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  const indicator = hoverRect && navRect
    ? {
        x: hoverRect.left - navRect.left,
        y: hoverRect.top - navRect.top,
        width: hoverRect.width,
        height: hoverRect.height,
      }
    : null;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{ background, backdropFilter, borderBottom }}
    >
      {/* Animated top progress bar */}
      <motion.div
        className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-neon-pink via-neon-violet to-neon-cyan origin-left"
        style={{ scaleX: useTransform(scrollY, [0, 3000], [0, 1]), width: "100%" }}
      />

      <Link href="/" className="flex items-center gap-2 cursor-pointer z-10 group">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-9 h-9 rounded-lg bg-gradient-flow flex items-center justify-center font-display font-bold text-black shadow-[0_0_20px_rgba(255,43,214,0.4)]"
        >
          V
        </motion.div>
        <span className="font-display font-bold text-xl tracking-tight text-white">
          Vinit Sharma
        </span>
      </Link>

      <div
        ref={navRef}
        onMouseLeave={() => setHoverRect(null)}
        className="hidden md:flex relative items-center gap-2 px-3 py-2 rounded-full glass-panel absolute left-1/2 -translate-x-1/2 backdrop-blur-xl border border-white/10"
      >
        <AnimatePresence>
          {indicator && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: indicator.x,
                y: indicator.y,
                width: indicator.width,
                height: indicator.height,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute top-0 left-0 rounded-full bg-white/10 border border-white/15 shadow-[0_0_24px_rgba(0,229,255,0.25)] pointer-events-none"
            />
          )}
        </AnimatePresence>

        {NAV_ITEMS.map((item, i) => (
          <span key={item.href} className="relative px-4 py-2 z-10">
            <MagneticLink
              href={item.href}
              label={item.label}
              isActive={i === 0}
              onHover={setHoverRect}
            />
          </span>
        ))}
      </div>

      <div className="z-10 flex items-center gap-3">
        <button className="hidden md:inline-flex relative px-6 py-2.5 rounded-full overflow-hidden group">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink via-neon-violet to-neon-cyan opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-[1.5px] rounded-full bg-black" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink/0 via-white/30 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          <span className="relative z-10 text-sm font-semibold text-white flex items-center gap-2">
            Let's Talk
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,229,255,0.9)]"
            />
          </span>
        </button>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-3 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl p-4 flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/5 hover:text-white text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
