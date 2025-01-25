"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  useEffect(() => {
    // Animation GSAP avec ScrollTrigger pour l'image principale
    gsap.to("#heroImage", {
      yPercent: -30,
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
      scrollTrigger: {
        trigger: "#heroImage",
        start: "top top",
        end: "bottom top",
        scrub: 1,
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
        scrub: 1,
        markers: false,
        toggleActions: "play reverse play reverse", // Gestion de l'effet boomerang
      },
    });
    

    // Animation GSAP pour la description
    gsap.to("#heroDesc", {
      yPercent: -200,
      scrollTrigger: {
        trigger: "#heroImage",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to("main", {
      yPercent: -10,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
      },
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("bg-accent");

    return () => {
      // Nettoyer la classe lorsqu'on quitte la page
      document.body.classList.remove("bg-accent");
    };
  }, []);

  return null;
}
