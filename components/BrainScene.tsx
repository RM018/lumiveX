"use client";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import type { Object3D, Mesh, MeshStandardMaterial, Color } from "three";
import type { RegionKey } from "./InteractiveBrain";
import { REGION_COLORS } from "./InteractiveBrain";

interface BrainSceneProps {
  autoRotate?: boolean;
  labHighlight?: boolean;
  isolationOpacity?: number;
  onRegionSelect?: (region: RegionKey | null) => void;
  activeRegions?: RegionKey[];
  regionColorsOverride?: Partial<Record<RegionKey, number>>;
  colorCycle?: boolean;
  disassemble?: boolean;
  showLabelsSmall?: boolean;
}

export function BrainScene({
  autoRotate = true,
  labHighlight = true,
  isolationOpacity = 0.12,
  onRegionSelect,
  activeRegions = [],
  
  colorCycle = true,
}: BrainSceneProps) {
  const { scene } = useGLTF("/brain_areas.glb");
  const meshRef = useRef<Object3D | null>(null);
  const colorTimeRef = useRef(0);

  // regionColorsOverride is accepted for future use

  // Apply materials and effects after mount (avoid reading refs during render)
  useEffect(() => {
    scene.traverse((node: Object3D) => {
      const mesh = node as Mesh;
      if ((mesh as Mesh).isMesh && mesh.material) {
        const mat = mesh.material as MeshStandardMaterial;
        mat.transparent = true;
        mat.opacity = 0.85;
        // mesh.material.wireframe = false; // not all material types have this

        // Set base emissive color with cycling effect if enabled
        let emissiveColor = 0x00ff88;

        if (colorCycle && colorTimeRef.current !== undefined) {
          const hue = (colorTimeRef.current % 360) / 360;
          const sat = 1;
          const light = 0.5;

          const c = (1 - Math.abs(2 * light - 1)) * sat;
          const x = c * (1 - Math.abs(((hue * 6) % 2) - 1));
          const m = light - c / 2;

          let r = 0,
            g = 0,
            b = 0;
          if (hue < 1 / 6) {
            r = c;
            g = x;
          } else if (hue < 2 / 6) {
            r = x;
            g = c;
          } else if (hue < 3 / 6) {
            g = c;
            b = x;
          } else if (hue < 4 / 6) {
            g = x;
            b = c;
          } else if (hue < 5 / 6) {
            r = x;
            b = c;
          } else {
            r = c;
            b = x;
          }

          const ir = Math.round((r + m) * 255);
          const ig = Math.round((g + m) * 255);
          const ib = Math.round((b + m) * 255);
          emissiveColor = (ir << 16) | (ig << 8) | ib;
        }

        if (mat.emissive) {
          const emissive = mat.emissive as unknown as Color;
          if (typeof emissive.setHex === "function") {
            emissive.setHex(emissiveColor);
            mat.emissiveIntensity = 0.6;
          }
        }

        if (activeRegions.length > 0 && labHighlight) {
          mat.opacity = isolationOpacity;
        }
      }
    });
  }, [scene, activeRegions, labHighlight, isolationOpacity, colorCycle]);

  // Animation loop for color cycling
  useFrame(() => {
    if (colorCycle) {
      colorTimeRef.current = (colorTimeRef.current + 0.5) % 360;
    }
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (onRegionSelect) {
      const name = e.object.name || e.object.parent?.name;
      if (name && name in REGION_COLORS) {
        onRegionSelect(name as RegionKey);
      }
    }
  };

  return (
    <>
      <primitive
        ref={meshRef}
        object={scene}
        position={[0, 0, 0]}
        scale={2.2}
        onPointerDown={handlePointerDown}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={3}
      />
    </>
  );
}