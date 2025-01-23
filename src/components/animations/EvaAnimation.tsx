"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EvaAnimation() {
  useEffect(() => {
    // Vérifier si la largeur de l'écran est supérieure à 768px (exemple pour mobile)
    if (window.innerWidth > 768) {
      gsap.to("#dahanphoto", {
        yPercent: -35,
        ease: "ease-in-out",
        scrollTrigger: {
          trigger: "#dahanphoto",
          start: "-650 top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });
    }
  }, []);

  return null;
}
