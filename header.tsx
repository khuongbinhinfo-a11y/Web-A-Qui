"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Logo - Brand Name Chốt: Q Leather */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-brand-primary">
          Q LEATHER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm">
          <Link href="/danh-muc/nam" className="hover:text-brand-primary transition">Nam</Link>
          <Link href="/danh-muc/nu" className="hover:text-brand-primary transition">Nữ</Link>
          <Link href="/danh-muc/vi-da" className="hover:text-brand-primary transition">Ví Da</Link>
          <Link href="/danh-muc/tui-balo" className="hover:text-brand-primary transition">Balo & Túi</Link>
          <Link href="/danh-muc/qua-tang" className="hover:text-brand-primary transition">Quà Tặng</Link>
        </nav>

        {/* Actions (Search, Cart, Zalo) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-brand-primary hidden sm:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="text-gray-600 hover:text-brand-primary relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <a href="https://zalo.me/YOUR_PHONE" target="_blank" rel="noreferrer" className="hidden md:block bg-[#0068FF] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Chat Zalo
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link href="/danh-muc/nam" className="text-gray-700 hover:text-brand-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Nam</Link>
            <Link href="/danh-muc/nu" className="text-gray-700 hover:text-brand-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Nữ</Link>
            <Link href="/danh-muc/vi-da" className="text-gray-700 hover:text-brand-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Ví Da</Link>
            <Link href="/danh-muc/tui-balo" className="text-gray-700 hover:text-brand-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Balo & Túi</Link>
            <Link href="/danh-muc/qua-tang" className="text-gray-700 hover:text-brand-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Quà Tặng</Link>
            <div className="pt-4 border-t border-gray-100">
              <a href="https://zalo.me/YOUR_PHONE" className="text-[#0068FF] font-semibold flex items-center">
                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.48 5.43 3.8 7.07L5 22l3.4-1.8c1.13.33 2.34.5 3.6.5 5.52 0 10-4.03 10-9s-4.48-9-10-9zm0 16.5c-1.15 0-2.25-.17-3.3-.47l-2.4 1.27.57-2.67C4.9 15.22 3.5 13.23 3.5 11c0-4.14 3.8-7.5 8.5-7.5s8.5 3.36 8.5 7.5-3.8 7.5-8.5 7.5z"/></svg>
                 Hỗ trợ qua Zalo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}