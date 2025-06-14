"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const isDashboard = pathname === "/dashboard";
  const isHome = pathname === "/";

  const wrapperStyle = "w-full fixed top-0 z-50 font-geist"; // fixed top
  const ovalStyle =
    "hidden md:flex justify-between items-center backdrop-blur-md bg-[#1d1f2f]/70 rounded-full px-10 py-4 mx-auto mt-4 w-fit shadow-md border border-[#32214c]";

  const fullStyle =
    "flex md:hidden justify-between items-center px-6 py-4 bg-[#12032f]/95 shadow-lg";

  const linkStyle =
    "hover:text-[#b364ff] transition duration-300 text-sm md:text-base";

  return (
    <div className={wrapperStyle}>
      {/* Oval Navbar for md+ screens */}
      <header className="hidden md:flex justify-center">
        <div className={ovalStyle}>
          <Link href="/">
            <div className="text-xl font-extrabold text-[#7e30e1] cursor-pointer">
              Obscurix
            </div>
          </Link>
          <nav className="flex gap-6 text-white font-medium ml-10">
            <button onClick={() => handleScroll("hero")} className={linkStyle}>
              Home
            </button>
            <button onClick={() => handleScroll("news")} className={linkStyle}>
              About
            </button>
            <Link href="/redactify">
              <button className={linkStyle}>Redactify</button>
            </Link>
            <Link href="/dashboard">
              <button className={linkStyle}>Dashboard</button>
            </Link>
            <button onClick={() => handleScroll("footer")} className={linkStyle}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Full-width Navbar for small screens */}
      <header className={fullStyle}>
        <Link href="/">
          <div className="text-xl font-bold text-[#7e30e1]">Obscurix</div>
        </Link>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f0f1a]/95 text-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#32214c] font-geist">
          <h2 className="text-xl font-bold text-[#7e30e1]">Menu</h2>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 py-10 text-lg font-medium font-geist">
          <button onClick={() => handleScroll("hero")}>Home</button>
          <button onClick={() => handleScroll("news")}>About</button>
          <Link href="/redactify">
            <button className="text-left">Redactify</button>
          </Link>
          <Link href="/dashboard">
            <button className="text-left">Dashboard</button>
          </Link>
          <button onClick={() => handleScroll("footer")}>Contact</button>
        </nav>
      </div>
    </div>
  );
}
