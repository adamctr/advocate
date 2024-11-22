'use client'

import { useState } from "react"

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    
    return (
        <>
        {/* SIDEBAR */}
        <div className={`fixed right-0 h-screen w-[320px] bg-red-300 ${opened ? 'block translate-x-0' : ' translate-x-full'}
        transition-transform duration-300 ease-in-out
        `}>
            <ul className='flex flex-col gap-8 px-8 py-16 font-bold cursor-pointer'>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/a-propos">À propos</a></li>
                <li><a href="/articles">Articles</a></li>
                <li><a href="/temoignages">Témoignages</a></li>
            </ul>
        </div>

        {/* NAVBAR */}

        <div className="fixed w-full">
            <div className="h-16 flex flex-column w-full px-8 py-4 border ">
                <nav className='flex justify-between w-full cursor-pointer'>
                    <img src="" alt="logo" />
                    <ul className='hidden sm:flex gap-8 cursor-pointer'>
                        <li><a href="/contact">Me Contacter</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/a-propos">À propos</a></li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a href="/temoignages">Témoignages</a></li>
                    </ul>

                    {/* BURGER */}
                    <div className={`burger sm:hidden tham tham-e-squeeze tham-w-8 ${opened ? 'tham-active' : ''}`}
                    onClick={() => setOpened(!opened)}
                    >
                        <div className="tham-box">
                            <div className="tham-inner" />
                        </div>
                    </div>
                </nav>
            </div>

            {/* Barre de Contact */}
            <div className="hidden sm:flex h-16 border px-8 py-4  gap-8 float-right w-fit">
                <div>E-mail : evaavocat@gmail.com</div>
                <div>Téléphone : 06 15 27 83 72</div>
            </div>
        </div>

        <div className="h-16 sm:h-32"></div>

        <div className="fixed sm:hidden bg-red-300 bottom-0 w-full flex px-16 py-8 justify-around">
            <div className="flex gap-4"><img src="" alt="contact" />Contact</div>
            <div className="flex gap-4"><img src="" alt="téléphone" />04 81 72 83 91</div>
        </div>

        </>
    )
};

