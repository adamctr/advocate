"use client";

import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null); // Suivi de l'élément survolé
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null); // Timer pour fermeture retardée

  const subMenuItems = {
    business: [
      { label: "Cession de fonds", href: "/services/cession-fonds" },
      { label: "Rédaction de contrats", href: "/services/contrats" },
    ],
    society: [
      { label: "Création de société", href: "/services/creation-societe" },
      { label: "Restructuration", href: "/services/restructuration" },
    ],
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setHovered(menu);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setHovered(null), 50);
    setTimeoutId(id);
  };

  useEffect(() => {
    // Nettoyage des timers au démontage
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`fixed z-20 right-0 h-screen w-[320px] bgmorphism text-text transition-transform duration-300 ease-in-out ${
          opened ? "block translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 px-8 py-16 font-bold cursor-pointer">
          <li>
            <a href="/contact" className="link link-animated">Contact</a>
          </li>
          <li>
            <a href="/services" className="link link-animated">Droits des affaires</a>
          </li>
          <li>
            <a href="/services" className="link link-animated">Droits des sociétés</a>
          </li>
          <li>
            <a href="/actualites" className="link link-animated">Actualités</a>
          </li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className="fixed z-10 h-16 left-1/2 w-[90vw] -translate-x-1/2 top-4 text-text bgmorphism">
        <nav className="flex justify-between w-full px-8 py-4">
          <div className="flex gap-4 items-center">
            <a href="/"><img src="logoeva.png" className="w-10 " alt="logo" /></a>
            <a href="/"><h1 className="font-bold uppercase hidden sm:block">Eva Nizard Dahan</h1></a>
          </div>
          <ul className="hidden font-semibold xl:flex gap-8 relative">
            {/* DROITS DES AFFAIRES */}
            <DropdownMenu
              title="Droits des affaires"
              items={subMenuItems.business}
            />

            {/* DROITS DES SOCIÉTÉS */}
            <DropdownMenu
              title="Droits des sociétés"
              items={subMenuItems.society}
            />

            <p>|</p>
            <li>
              <a href="/articles">Articles</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* BURGER */}
      <div
        className={`burger fixed right-12 md:right-[6vw] text-text top-[2.35rem] z-50 xl:hidden tham tham-e-squeeze tham-w-8 ${
          opened ? "tham-active" : ""
        }`}
        onClick={() => setOpened(!opened)}
      >
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>

      {/* FOOTER MOBILE */}
      <div className="fixed sm:hidden text-text z-40 bgmorphism !rounded-none bottom-0 w-full flex flex-col px-4 py-2">
        <div className="flex gap-4">
          <img src="/mail.svg" alt="mail" />
          eva.nizard.dahan@gmail.com
        </div>
        <div className="flex gap-4">
          <img src="/phone.svg" alt="phone" />
          <a href="tel:0481728391">04 81 72 83 91</a>
        </div>
      </div>
    </>
  );
}
