import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function IsometricCube() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto perspective-container">
      <motion.div 
        className="w-full h-full relative preserve-3d"
        animate={{ 
          rotateX: [30, 40, 30],
          rotateY: [45, 60, 45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
          <CubeGrid />
        </div>
      </motion.div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-16 bg-neon-cyan/20 blur-[60px] rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-neon-pink/20 blur-[50px] rounded-full animate-pulse-slow delay-1000" />
    </div>
  );
}

function CubeGrid() {
  const cubes = [];
  const size = 3;
  const spacing = 60;
  const offset = ((size - 1) * spacing) / 2;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        // Skip some cubes to make it look like a cluster rather than a solid block
        if ((x + y + z) % 2 === 0 && (x !== 1 || y !== 1 || z !== 1)) {
          cubes.push(
            <Cube 
              key={`${x}-${y}-${z}`} 
              x={x * spacing - offset} 
              y={y * spacing - offset} 
              z={z * spacing - offset} 
            />
          );
        }
      }
    }
  }

  // Always add center cube
  cubes.push(<Cube key="center" x={0} y={0} z={0} isCenter />);

  return <>{cubes}</>;
}

function Cube({ x, y, z, isCenter = false }: { x: number, y: number, z: number, isCenter?: boolean }) {
  const size = 40;
  
  return (
    <motion.div 
      className="absolute top-1/2 left-1/2 preserve-3d"
      style={{
        width: size,
        height: size,
        x: `-50%`,
        y: `-50%`,
        translateZ: z,
        translateX: x,
        translateY: y,
      }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2
      }}
    >
      <div className="absolute inset-0 cube-face border border-neon-cyan/40 bg-neon-cyan/5 backface-hidden" style={{ transform: `translateZ(${size/2}px)` }} />
      <div className="absolute inset-0 cube-face border border-neon-pink/40 bg-neon-pink/5 backface-hidden" style={{ transform: `rotateY(180deg) translateZ(${size/2}px)` }} />
      <div className="absolute inset-0 cube-face border border-neon-violet/40 bg-neon-violet/5 backface-hidden" style={{ transform: `rotateY(90deg) translateZ(${size/2}px)` }} />
      <div className="absolute inset-0 cube-face border border-neon-cyan/40 bg-neon-cyan/5 backface-hidden" style={{ transform: `rotateY(-90deg) translateZ(${size/2}px)` }} />
      <div className="absolute inset-0 cube-face border border-neon-pink/40 bg-neon-pink/5 backface-hidden" style={{ transform: `rotateX(90deg) translateZ(${size/2}px)` }} />
      <div className="absolute inset-0 cube-face border border-neon-violet/40 bg-neon-violet/5 backface-hidden" style={{ transform: `rotateX(-90deg) translateZ(${size/2}px)` }} />
    </motion.div>
  );
}