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
      yPercent: -50,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: "#evaSection",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse", // Ajout pour gérer l'effet boomerang
      },
    });

    gsap.to("#bannerdesign", {
      scale: 1.1,
      rotate: 1,
      ease: "back.out(3)", // Effet de retour subtil, ajuste le paramètre (1.7)
      scrollTrigger: {
        trigger: "#bannerdesign",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse", // Gestion de l'effet boomerang
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

    // Animation GSAP pour la description
    gsap.to("#transipop", {
      yPercent: -100,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: "#heroImage",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    gsap.to("main", {
      yPercent: -10,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: "main",
        start: "top 90%",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });


  }, []);





  return null;
}
