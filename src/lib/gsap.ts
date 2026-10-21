import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';
import { CustomEase } from 'gsap/CustomEase';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins once at app level
if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    SplitText,
    ScrambleTextPlugin,
    MorphSVGPlugin,
    DrawSVGPlugin,
    MotionPathPlugin,
    Flip,
    Observer,
    CustomEase,
    TextPlugin,
    ScrollToPlugin
  );

  // Define signature branded custom eases
  CustomEase.create("snappyUI", "0.22, 1, 0.36, 1");
  CustomEase.create("editorialSmooth", "0.16, 1, 0.3, 1");
  CustomEase.create("circuitSnap", "0.77, 0, 0.175, 1");
}

export const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export {
  gsap,
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrambleTextPlugin,
  MorphSVGPlugin,
  DrawSVGPlugin,
  MotionPathPlugin,
  Flip,
  Observer,
  CustomEase,
  TextPlugin,
  ScrollToPlugin
};
