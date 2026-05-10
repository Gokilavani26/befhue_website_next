"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const pathname = usePathname();

  const menuLinks = [
    { name: "Homepage", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Brand & Design",
      path: "/branding-and-designing-company-in-coimbatore",
    },
    {
      name: "Productions & Editing",
      path: "/productions-and-editing-company-in-coimbatore",
    },
    {
      name: "Digital Marketing",
      path: "/digital-marketing-company-in-coimbatore",
    },
    {
      name: "Software Development",
      path: "/software-development-company-in-coimbatore",
    },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let logoElement: HTMLElement | null = null;

    const checkDarkBackground = () => {
      if (!logoElement) {
        logoElement = document.getElementById("navbar-logo-link");
      }

      if (!logoElement) return;

      const logoRect = logoElement.getBoundingClientRect();
      const logoCenterY = logoRect.top + logoRect.height / 2;

      let isDark = false;

      // Body background check
      const bodyComputedStyle = window.getComputedStyle(document.body);
      const bodyBg = bodyComputedStyle.backgroundColor;

      if (
        bodyBg === "rgb(13, 27, 30)" ||
        bodyBg.includes("rgb(0, 0, 0)") ||
        bodyBg === "rgba(0, 0, 0, 0)"
      ) {
        isDark = true;
      }

      const darkBodyClasses = [
        "bg-black",
        "bef-bg-dark",
        "bg-[#0d1b1e]",
      ];

      if (
        darkBodyClasses.some((c) =>
          document.body.classList.contains(c)
        )
      ) {
        isDark = true;
      }

      const darkClasses = [
        "bg-black",
        "bef-bg-dark",
        "bg-[#0d1b1e]",
        "bg-[#0D1B1E]",
        "bg-[#050505]",
        "bg-gray-950",
        "bg-gray-900",
        "bg-zinc-900",
        "bg-zinc-950",
      ];

      const lightClasses = [
        "bg-white",
        "bef-bg-white",
        "bg-gray-50",
        "bg-gray-100",
        "bg-slate-50",
      ];

      const checkElements = document.querySelectorAll(
        'section, main, .min-h-screen, [class*="bg-"], [class*="bef-bg-"]'
      );

      checkElements.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (logoCenterY >= rect.top && logoCenterY <= rect.bottom) {
          const hasDarkClass = darkClasses.some((cls) =>
            section.classList.contains(cls)
          );

          const hasLightClass = lightClasses.some((cls) =>
            section.classList.contains(cls)
          );

          if (hasDarkClass) {
            isDark = true;
          } else if (hasLightClass) {
            isDark = false;
          }
        }
      });

      const darkRoutes = [
        "/branding-and-designing-company-in-coimbatore",
        "/productions-and-editing-company-in-coimbatore",
      ];

      if (
        pathname &&
        darkRoutes.includes(pathname) &&
        window.scrollY < window.innerHeight
      ) {
        isDark = true;
      }

      setIsDarkBackground(isDark);
    };

    const handleScroll = () => {
      requestAnimationFrame(checkDarkBackground);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    const observer = new MutationObserver(handleScroll);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    setTimeout(checkDarkBackground, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const currentLogo =
    isOpen || isDarkBackground
      ? "/imgs/befhue-white-logo.png"
      : "/imgs/befhue.png";

  return (
    <div className="font-sf-pro">
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full h-0 z-[110] pointer-events-none">
        <div className="sticky top-0 flex justify-start items-center px-8 py-8 md:px-12">
          <Link
            href="/"
            id="navbar-logo-link"
            className="w-40 h-16 md:w-50 md:h-20 cursor-pointer group pointer-events-auto"
          >
            <Image
              src={currentLogo}
              alt="Befhue logo"
              width={200}
              height={80}
              className="w-full h-full object-contain transition-opacity duration-300"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Menu Button */}
      <div className="fixed top-0 right-0 z-[110] flex justify-end items-center px-8 py-8 md:px-12 pointer-events-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`px-8 py-2.5 rounded-full font-sf-pro font-medium text-sm transition-all duration-300 pointer-events-auto border ${isOpen
            ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
            : "bg-white border-transparent text-black shadow-lg"
            }`}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 z-[80] ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Card */}
      <div
        className={`fixed top-24 right-6 md:right-12 w-[320px] md:w-[380px] bg-[#0d1b1e] rounded-[30px] shadow-2xl z-[90] transition-all duration-500 ease-out transform origin-top-right ${isOpen
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <div className="p-8 pt-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-denton font-light italic bef-red">
              Menu
            </h2>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="font-sf-pro border border-white/40 rounded-full px-5 py-1 text-xs uppercase tracking-widest hover:bg-white hover:text-[#0d1b1e] transition-colors"
            >
              Connect
            </Link>
          </div>

          {/* Links */}
          <ul className="space-y-0">
            {menuLinks.map((link, index) => (
              <li key={index} className="group">
                <Link
                  href={link.path}
                  onClick={handleLinkClick}
                  className="block py-4 text-xl font-sf-pro text-white/90 group-hover:text-white transition-colors border-b border-white/10"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;