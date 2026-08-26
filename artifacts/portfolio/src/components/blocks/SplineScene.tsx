import { Suspense, lazy, useEffect, useRef, useState, memo } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene?: string;
  className?: string;
  badgeText?: string;
  disableOnMobile?: boolean;
}

const ROBOT_QUESTIONS = [
  "do you ever wonder if pixels dream?",
  "what color is the sound of silence?",
  "is the cursor following you, or are you following it?",
  "if I blink, will the universe restart?",
  "do humans feel gravity, or just remember it?",
  "have you ever seen a thought up close?",
];

function MobileNebulaFallback({ badgeText }: { badgeText?: string }) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center">
      {/* High performance, GPU-accelerated CSS glowing nebula */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-neon-pink/20 via-neon-violet/15 to-transparent blur-[50px] animate-pulse-slow will-change-transform" />
      <div
        className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-violet/10 to-transparent blur-[40px] animate-pulse will-change-transform"
        style={{ animationDuration: "5s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-violet/10 via-transparent to-transparent" />

      {badgeText !== undefined && (
        <div className="robot-bubble">
          <span className="robot-bubble-dot" />
          <span className="robot-bubble-text">{badgeText || "Edge-AI System Online"}</span>
        </div>
      )}
    </div>
  );
}

function SplineSceneInner({
  scene = "https://prod.spline.design/TXpGSG5LzpfsObtV/scene.splinecode",
  className = "absolute inset-0 w-full h-full",
  badgeText,
  disableOnMobile = false,
}: SplineSceneProps) {
  const [isLowPower, setIsLowPower] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const questionRef = useRef<string>(
    badgeText && badgeText.length > 0
      ? badgeText
      : ROBOT_QUESTIONS[Math.floor(Math.random() * ROBOT_QUESTIONS.length)]
  );

  useEffect(() => {
    // Detect mobile or low-spec hardware to prevent lag
    const checkLowPower = () => {
      const isMobileScreen = window.innerWidth < 768;
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1;
      const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

      if (disableOnMobile || isMobileScreen || (isTouch && isMobileScreen) || lowMemory || lowCores) {
        setIsLowPower(true);
      } else {
        setIsLowPower(false);
      }
    };

    checkLowPower();
    window.addEventListener("resize", checkLowPower, { passive: true });
    return () => window.removeEventListener("resize", checkLowPower);
  }, [disableOnMobile]);

  useEffect(() => {
    if (isLowPower) return;
    const container = containerRef.current;
    if (!container) return;

    // Pause WebGL rendering when out of viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    io.observe(container);

    const hideBadge = () => {
      container.querySelectorAll("a").forEach((a) => {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href.includes("spline")) a.style.display = "none";
      });
      container.querySelectorAll("[id*='logo'], [class*='logo']").forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });
    };

    hideBadge();
    const observer = new MutationObserver(hideBadge);
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, [isLowPower]);

  if (isLowPower) {
    return (
      <div className={`spline-container ${className}`}>
        <MobileNebulaFallback badgeText={questionRef.current} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`spline-container ${className}`}>
      {isVisible ? (
        <Suspense fallback={<div className="w-full h-full" />}>
          <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-transparent" />
      )}
      {badgeText !== undefined && (
        <div className="robot-bubble">
          <span className="robot-bubble-dot" />
          <span className="robot-bubble-text">{questionRef.current}</span>
        </div>
      )}
    </div>
  );
}

const SplineScene = memo(SplineSceneInner);
export default SplineScene;
