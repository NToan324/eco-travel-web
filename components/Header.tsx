"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TbLocation } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import ContactDialog from "./contact/ContactDialog";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/transparency", label: "Minh bạch" },
  { href: "profile", label: "Trang cá nhân" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-black py-4 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-sm sm:text-lg text-primary font-semibold">
            Eco Travel
          </h1>
          <Image
            src="/logo.png"
            alt="Eco Travel Logo"
            width={200}
            height={40}
          />
        </div>
        {/* Desktop nav */}
        <nav className="hidden lg:flex font-semibold items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Desktop button */}
        <div className="lg:block hidden">
          <ContactDialog />
        </div>
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
                className="hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="block lg:hidden">
              <ContactDialog />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
