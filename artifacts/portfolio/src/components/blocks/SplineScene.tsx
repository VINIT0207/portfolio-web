import { Suspense, lazy, useEffect, useRef, useState, memo } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene?: string;
  className?: string;
  badgeText?: string;
}

const ROBOT_QUESTIONS = [
  "do you ever wonder if pixels dream?",
  "what color is the sound of silence?",
  "is the cursor following you, or are you following it?",
  "if I blink, will the universe restart?",
  "do humans feel gravity, or just remember it?",
  "have you ever seen a thought up close?",
];

function SceneLoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-8 h-8 rounded-full border-2 border-neon-cyan/20 border-t-neon-cyan animate-spin" />
    </div>
  );
}

function SplineSceneInner({
  scene = "https://prod.spline.design/TXpGSG5LzpfsObtV/scene.splinecode",
  className = "absolute inset-0 w-full h-full",
  badgeText,
}: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const questionRef = useRef<string>(
    badgeText && badgeText.length > 0
      ? badgeText
      : ROBOT_QUESTIONS[Math.floor(Math.random() * ROBOT_QUESTIONS.length)]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Pause WebGL rendering when completely out of viewport to preserve performance
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
  }, []);

  return (
    <div ref={containerRef} className={`spline-container ${className}`}>
      {isVisible ? (
        <Suspense fallback={<SceneLoadingFallback />}>
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
