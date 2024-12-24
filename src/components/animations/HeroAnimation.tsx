"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  useEffect(() => {
    // Animation GSAP avec ScrollTrigger pour l'image principale
    gsap.to("#heroImage", {
      yPercent: -15, // Déplace l'image vers le haut à 30% du viewport
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: "#heroImage",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    // Animation GSAP pour le bouton "Me contacter"
    gsap.to("#contactButton", {
      yPercent: -500,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: "#heroImage",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    // Animation GSAP pour la description
    gsap.to("#heroDesc", {
      yPercent: -200,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: "#heroImage",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return null;
}
