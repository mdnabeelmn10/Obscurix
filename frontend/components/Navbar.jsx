"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const isDashboard = pathname === "/dashboard";
  const isHome = pathname === "/";

  const headerClass = isDashboard
    ? "w-full fixed top-0 z-50 bg-[#1d1f2f]/60 backdrop-blur-md text-white shadow-md"
    : isHome
    ? "w-full fixed top-0 z-50 bg-[#12032f]/90 backdrop-blur-lg text-white shadow-lg"
    : "w-full fixed top-0 z-50 bg-[#0e0e0e] text-white shadow-md";

  const logoClass = `text-2xl font-extrabold tracking-wider cursor-pointer ${
    isDashboard ? "text-[#00ffa3]" : "text-[#7e30e1]"
  }`;

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
          <div className={logoClass}>Obscurix</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <button
            onClick={() => handleScroll("hero")}
            className="hover:text-[#7e30e1] transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-[#7e30e1] transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-[#7e30e1] transition duration-300"
          >
            Features
          </button>
          <Link href="/dashboard">
            <button className="hover:text-[#7e30e1] transition duration-300">
              Dashboard
            </button>
          </Link>
          <button
            onClick={() => handleScroll("footer")}
            className="hover:text-[#7e30e1] transition duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {!menuOpen && (
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu className="w-6 h-6 text-[#7e30e1]" />
            </button>
          )}
        </div>
      </div>

      {/* Slide-in Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#0f0f1a] text-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#32214c]">
          <h2 className="text-xl font-bold text-[#7e30e1]">Menu</h2>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 py-6 text-lg font-medium animate-slide-down">
          <button onClick={() => handleScroll("hero")}>Home</button>
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("services")}>Services</button>
          <Link href="/dashboard">
            <button className="text-left">Dashboard</button>
          </Link>
          <button onClick={() => handleScroll("footer")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
