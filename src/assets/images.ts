// Responsive, modern-format image sources (AVIF + WebP, 640/1280/1920 widths).
import portA640 from "@/assets/hero-port-640w.avif";
import portA1280 from "@/assets/hero-port-1280w.avif";
import portA1920 from "@/assets/hero-port-1920w.avif";
import portW640 from "@/assets/hero-port-640w.webp";
import portW1280 from "@/assets/hero-port-1280w.webp";
import portW1920 from "@/assets/hero-port-1920w.webp";

import ictA640 from "@/assets/hero-ict-640w.avif";
import ictA1280 from "@/assets/hero-ict-1280w.avif";
import ictA1920 from "@/assets/hero-ict-1920w.avif";
import ictW640 from "@/assets/hero-ict-640w.webp";
import ictW1280 from "@/assets/hero-ict-1280w.webp";
import ictW1920 from "@/assets/hero-ict-1920w.webp";

import capeA640 from "@/assets/hero-capetown-640w.avif";
import capeA1280 from "@/assets/hero-capetown-1280w.avif";
import capeA1920 from "@/assets/hero-capetown-1920w.avif";
import capeW640 from "@/assets/hero-capetown-640w.webp";
import capeW1280 from "@/assets/hero-capetown-1280w.webp";
import capeW1920 from "@/assets/hero-capetown-1920w.webp";


import petroA640 from "@/assets/hero-petrochem-640w.avif";
import petroA1280 from "@/assets/hero-petrochem-1280w.avif";
import petroA1920 from "@/assets/hero-petrochem-1920w.avif";
import petroW640 from "@/assets/hero-petrochem-640w.webp";
import petroW1280 from "@/assets/hero-petrochem-1280w.webp";
import petroW1920 from "@/assets/hero-petrochem-1920w.webp";

import mineA640 from "@/assets/hero-mining-640w.avif";
import mineA1280 from "@/assets/hero-mining-1280w.avif";
import mineA1920 from "@/assets/hero-mining-1920w.avif";
import mineW640 from "@/assets/hero-mining-640w.webp";
import mineW1280 from "@/assets/hero-mining-1280w.webp";
import mineW1920 from "@/assets/hero-mining-1920w.webp";

import corrA640 from "@/assets/hero-corridor-640w.avif";
import corrA1280 from "@/assets/hero-corridor-1280w.avif";
import corrA1920 from "@/assets/hero-corridor-1920w.avif";
import corrW640 from "@/assets/hero-corridor-640w.webp";
import corrW1280 from "@/assets/hero-corridor-1280w.webp";
import corrW1920 from "@/assets/hero-corridor-1920w.webp";

export interface ImageSource {
  /** Default src (1280w WebP) — safe for background-image and <img src>. */
  src: string;
  avifSrcSet: string;
  webpSrcSet: string;
  /** Smallest variant, useful for LQIP / mobile-only surfaces. */
  small: string;
}

const set = (
  a640: string, a1280: string, a1920: string,
  w640: string, w1280: string, w1920: string,
): ImageSource => ({
  src: w1280,
  small: w640,
  avifSrcSet: `${a640} 640w, ${a1280} 1280w, ${a1920} 1920w`,
  webpSrcSet: `${w640} 640w, ${w1280} 1280w, ${w1920} 1920w`,
});

export const IMAGES = {
  port: set(portA640, portA1280, portA1920, portW640, portW1280, portW1920),
  ict: set(ictA640, ictA1280, ictA1920, ictW640, ictW1280, ictW1920),
  capetown: set(capeA640, capeA1280, capeA1920, capeW640, capeW1280, capeW1920),
  petrochem: set(petroA640, petroA1280, petroA1920, petroW640, petroW1280, petroW1920),
  mining: set(mineA640, mineA1280, mineA1920, mineW640, mineW1280, mineW1920),
  corridor: set(corrA640, corrA1280, corrA1920, corrW640, corrW1280, corrW1920),
} satisfies Record<string, ImageSource>;

export type ImageKey = keyof typeof IMAGES;

/** Backwards-compatible plain URLs (WebP @1280) for CSS background-image usage. */
export const IMG: Record<ImageKey, string> = {
  port: IMAGES.port.src,
  ict: IMAGES.ict.src,
  capetown: IMAGES.capetown.src,
  petrochem: IMAGES.petrochem.src,
  mining: IMAGES.mining.src,
  corridor: IMAGES.corridor.src,
};

/** Find the ImageSource matching a plain URL produced above. */
export const sourceFor = (url: string): ImageSource | undefined =>
  Object.values(IMAGES).find((i) => i.src === url);

// Leadership portrait (400/800 widths)
import ceoA400 from "@/assets/leader-ceo-400w.avif";
import ceoA800 from "@/assets/leader-ceo-800w.avif";
import ceoW400 from "@/assets/leader-ceo-400w.webp";
import ceoW800 from "@/assets/leader-ceo-800w.webp";

export const CEO_IMAGE: ImageSource = {
  src: ceoW800,
  small: ceoW400,
  avifSrcSet: `${ceoA400} 400w, ${ceoA800} 800w`,
  webpSrcSet: `${ceoW400} 400w, ${ceoW800} 800w`,
};
