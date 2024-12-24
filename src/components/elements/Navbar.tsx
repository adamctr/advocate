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
        className={`fixed z-20 right-0 h-screen w-[320px] bgmorphism text-white transition-transform duration-300 ease-in-out ${
          opened ? "block translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 px-8 py-16 font-bold cursor-pointer">
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">Droits des affaires</a>
          </li>
          <li>
            <a href="/services">Droits des sociétés</a>
          </li>
          <li>
            <a href="/a-propos">À propos</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className="fixed z-10 h-16 left-1/2 w-[90%] -translate-x-1/2 top-4 text-white bgmorphism">
        <nav className="flex justify-between w-full px-8 py-4">
          <div className="flex gap-4 items-center">
            <img src="logoeva.png" className="w-10" alt="logo" />
            <h1 className="font-bold uppercase">Eva Nizard Dahan</h1>
          </div>
          <ul className="hidden font-semibold sm:flex gap-8 relative">
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
              <a href="/a-propos">À propos</a>
            </li>
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
        className={`burger fixed right-12 text-white top-9 z-50 sm:hidden tham tham-e-squeeze tham-w-8 ${
          opened ? "tham-active" : ""
        }`}
        onClick={() => setOpened(!opened)}
      >
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>

      {/* FOOTER MOBILE */}
      <div className="fixed sm:hidden text-white z-40 bgmorphism !rounded-none bottom-0 w-full flex flex-col px-4 py-2">
        <div className="flex gap-4">
          <img src="/mail.svg" alt="mail" />
          eva.nizard.dahan@gmail.com
        </div>
        <div className="flex gap-4">
          <img src="/phone.svg" alt="phone" />
          04 81 72 83 91
        </div>
      </div>
    </>
  );
}
