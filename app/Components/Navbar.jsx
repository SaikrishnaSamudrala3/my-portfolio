"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [mounted, setMounted] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const sidemenuRef = useRef(null);

  const openMenu = () =>
    sidemenuRef.current &&
    (sidemenuRef.current.style.transform = "translateX(-16rem)");
  const closeMenu = () =>
    sidemenuRef.current &&
    (sidemenuRef.current.style.transform = "translateX(16rem)");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Light-only decorative gradient (CSS hides it in dark) */}
      <div
        className="light-gradient fixed top-0 right-0 w-11/12 -z-40 translate-y-[-80%] pointer-events-none"
        aria-hidden
      >
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      {/* NAVBAR — background from CSS var so it always matches theme */}
      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 z-50
                    flex items-center justify-between transition-all
                    ${isScroll ? "backdrop-blur-lg shadow-sm" : ""}`}
        style={{ background: "var(--nav-bg)" }}
      >
        {/* Brand */}
        <a href="#top">
          <Image
            src={assets.sai}
            alt="Logo"
            className="rounded-full w-32 cursor-pointer mr-14 mb-4"
          />
        </a>

        {/* Links pill — uses CSS vars for bg/border/text */}
        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 border transition-colors"
          style={{
            background: "var(--pill-bg)",
            borderColor: "var(--pill-border)",
            color: "var(--nav-text)",
          }}
        >
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4" style={{ color: "var(--nav-text)" }}>
          <button
            onClick={() => setIsDarkMode((p) => !p)}
            aria-label="Toggle theme"
            className="grid place-items-center"
          >
            {mounted ? (
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ) : (
              <span className="w-6 h-6 inline-block" aria-hidden />
            )}
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 cursor-pointer font-serif border"
            style={{
              borderColor: "var(--pill-border)",
              color: "var(--nav-text)",
              background: "var(--pill-bg)",
            }}
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:invert" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu} aria-label="Open menu">
            <Image src={assets.menu_black} alt="" className="w-6 dark:invert" />
          </button>
        </div>

        {/* Mobile menu — matches pill surface */}
        <ul
          ref={sidemenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500"
          style={{ background: "var(--pill-bg)", color: "var(--nav-text)" }}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu} role="button" tabIndex={0}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer dark:invert" />
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
}
