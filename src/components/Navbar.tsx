'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import MenuIcon from "../assests/icons/menu.svg";
import logoImage from "../assests/images/logo.png";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Product", href: "#product" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" }
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'fixed bg-black/95 backdrop-blur-sm' : 'bg-black'
    }`}>
      <div className="px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => scrollToSection(e, '#')}>
            <Image src={logoImage} alt="scoperival" className="h-12 w-auto" />
          </a>

          {/* Hamburger icon (mobile only) */}
          <button 
            className="h-10 w-10 flex justify-center items-center rounded-lg sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon className={`text-white cursor-pointer transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`} />
          </button>

          {/* Nav links (desktop only) */}
          <nav className="hidden sm:flex gap-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="opacity-60 hover:opacity-100 transition duration-300 text-white"
              >
                {item.name}
              </a>
            ))}
            <button className="py-3 px-5 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
              Sign In
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="opacity-60 hover:opacity-100 transition duration-300 text-white"
              >
                {item.name}
              </a>
            ))}
            <button className="py-3 px-5 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors w-full">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
