"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrainScene } from "./BrainScene";
import type { RegionKey } from "./InteractiveBrain";

export default function BrainViewer({
  onRegionSelect,
  activeRegions = [],
  labHighlight = true,
  isolationOpacity = 0.12,
  regionColorsOverride,
  colorCycle = true,
  disassemble = false,
  
  showLabelsSmall = false,
}: {
  onRegionSelect?: (region: RegionKey | null) => void;
  activeRegions?: RegionKey[];
  labHighlight?: boolean;
  isolationOpacity?: number;
  regionColorsOverride?: Partial<Record<RegionKey, number>>;
  colorCycle?: boolean;
  disassemble?: boolean;
  autoSelect?: boolean;
  showLabelsSmall?: boolean;
}) {
  return (
    <div className="relative mx-auto h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl" />
      
      {/* Main container */}
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} className="absolute inset-0">
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 5]} intensity={0.8} />
          <pointLight position={[-3, -2, 2]} intensity={0.6} />
          <Suspense fallback={null}>
            <BrainScene
              autoRotate
              labHighlight={labHighlight}
              isolationOpacity={isolationOpacity}
              onRegionSelect={onRegionSelect}
              activeRegions={activeRegions}
              regionColorsOverride={regionColorsOverride}
              colorCycle={colorCycle}
              disassemble={disassemble}
              showLabelsSmall={showLabelsSmall}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-white/10 rounded-tl-full" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 border-r-2 border-b-2 border-white/10 rounded-br-full" />
    </div>
  );
}