export type RegionKey =
  | "frontal"
  | "parietal"
  | "temporal"
  | "occipital"
  | "cerebellum"
  | "brainstem";

export const REGION_COLORS: Record<RegionKey, number> = {
  frontal: 0x00ff88,
  parietal: 0x00d4ff,
  temporal: 0x00aaff,
  occipital: 0x0088ff,
  cerebellum: 0x00ffcc,
  brainstem: 0xff00ff,
};
