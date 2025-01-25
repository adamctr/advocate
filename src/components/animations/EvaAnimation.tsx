"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EvaAnimation() {
  useEffect(() => {
    // Vérifier si la largeur de l'écran est supérieure à 768px (exemple pour mobile)
      gsap.to("#dahanphoto", {
        yPercent: -50,
        scrollTrigger: {
          trigger: "#dahanphoto",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          markers: true,
        },
      });
  }, []);

  return null;
}
