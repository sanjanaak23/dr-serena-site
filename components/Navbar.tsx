"use client";
import Link from "next/link";
import React from "react";
/** @jsxImportSource react */

export default function Navbar() {
  return (
    <nav className="w-full bg-[#fdf7f3] border-b border-[#e2cfc0] shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo / Name */}
        <h1 className="text-2xl font-playfair text-[#3d2f2f]">Dr. Serena Blake</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[16px] font-medium text-[#5e4d3a]">
          <li><a href="#home" className="hover:text-[#b48e70] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#b48e70] transition">About</a></li>
          <li><a href="#services" className="hover:text-[#b48e70] transition">Services</a></li>
          <li><a href="#rates" className="hover:text-[#b48e70] transition">Rates</a></li>
          <li><a href="#approach" className="hover:text-[#b48e70] transition">Approach</a></li>
          <li><a href="#contact" className="hover:text-[#b48e70] transition">Contact</a></li>
        </ul>

        {/* Mobile Dropdown Menu Toggle */}
        <div className="md:hidden relative">
          <details className="group">
            <summary className="text-[20px] text-[#5e4d3a] cursor-pointer">Menu ▾</summary>
            <ul className="absolute right-0 mt-2 w-48 bg-[#fdf7f3] border border-[#e2cfc0] rounded-lg shadow-lg p-8 space-y-2 z-50 text-[18px] text-center">
              <li><a href="#home" className="block hover:text-[#b48e70]">Home</a></li>
              <li><a href="#about" className="block hover:text-[#b48e70]">About</a></li>
              <li><a href="#services" className="block hover:text-[#b48e70]">Services</a></li>
              <li><a href="#rates" className="block hover:text-[#b48e70]">Rates</a></li>
              <li><a href="#approach" className="block hover:text-[#b48e70]">Approach</a></li>
              <li><a href="#contact" className="block hover:text-[#b48e70]">Contact</a></li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
}
