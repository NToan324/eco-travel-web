"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TbLocation } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/transparency", label: "Minh bạch" },
  { href: "/campaign", label: "Chiến dịch" },
  { href: "/impact", label: "Tác động" },
  { href: "/about", label: "Về chúng tôi" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-black py-4 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-semibold">Eco Travel</h1>

        {/* Desktop nav */}
        <nav className="hidden lg:flex font-semibold items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop button */}
        <Button variant="default" className="hidden lg:flex w-32 h-10">
          Liên hệ
          <TbLocation />
        </Button>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ?
            <HiX />
          : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <nav className="flex flex-col font-semibold px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" className="w-32 h-10 mt-2">
              Liên hệ
              <TbLocation />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
