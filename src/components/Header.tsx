"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Loca.hu"
            width={120}
            height={40}
            className="h-10 md:h-8 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#product"
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          <a href="#benefits" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground border-b border-border">Benefits</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground border-b border-border">Reviews</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground">FAQ</a>
          <a
            href="#product"
            onClick={() => setMenuOpen(false)}
            className="mt-1 w-full text-center bg-accent text-accent-foreground font-semibold text-sm px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
}
