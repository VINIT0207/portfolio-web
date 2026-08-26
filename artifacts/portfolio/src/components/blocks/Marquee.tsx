const ITEMS = [
  "ON-DEVICE EDGE-AI",
  "LLAMA.CPP ENGINE",
  "FLUTTER & DART 3",
  "KOTLIN 2.1 & JETPACK COMPOSE",
  "NATIVE C++ / JNI",
  "SQLITE & ENCRYPTED ROOM",
  "BLOC / CUBIT ARCHITECTURE",
  "GGUF 4-BIT QUANTIZATION",
  "PROGUARD / R8 HARDENING",
];


export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section className="relative z-10 py-10 border-y border-white/10 bg-black/60 backdrop-blur-md overflow-hidden">
      <div className="marquee-track flex gap-16 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight inline-flex items-center gap-16 text-white/80"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-neon-pink via-neon-violet to-neon-cyan shadow-[0_0_12px_rgba(255,43,214,0.8)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
