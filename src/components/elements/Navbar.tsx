'use client';

import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null); // Suivi de l'élément survolé
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null); // Timer pour fermeture retardée

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

    const handleMouseEnter = (menu : string) => {
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
                className={`fixed z-20 right-0 h-screen w-[320px] bg-red-300 transition-transform duration-300 ease-in-out ${
                    opened ? "block translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col gap-8 px-8 py-16 font-bold cursor-pointer">
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">Droits des affaires</a></li>
                    <li><a href="/services">Droits des sociétés</a></li>
                    <li><a href="/a-propos">À propos</a></li>
                    <li><a href="/articles">Articles</a></li>
                </ul>
            </div>

            {/* NAVBAR */}
            <div className="fixed z-10 h-16 w-full text-white bg-black border-b border-secondary">
                <nav className="flex justify-between w-full px-8 py-4">
                    <img src="" alt="logo" />
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
                        <li><a href="/a-propos">À propos</a></li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className="h-16"></div>

            {/* BURGER */}
            <div
                className={`burger absolute right-8 top-4 z-50 sm:hidden tham tham-e-squeeze tham-w-8 ${
                    opened ? "tham-active" : ""
                }`}
                onClick={() => setOpened(!opened)}
            >
                <div className="tham-box">
                    <div className="tham-inner" />
                </div>
            </div>

            {/* FOOTER MOBILE */}
            <div className="fixed sm:hidden z-40 bg-red-300 bottom-0 w-full flex px-16 py-8 justify-around">
                <div className="flex gap-4"><img src="" alt="contact" />Contact</div>
                <div className="flex gap-4"><img src="" alt="téléphone" />04 81 72 83 91</div>
            </div>
        </>
    );
}
