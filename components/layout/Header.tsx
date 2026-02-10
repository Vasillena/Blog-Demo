"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import decor from "@/public/decor-1.png";
import logo from "@/public/logo.svg";
import menu from "@/public/menu.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <header className=" max-w-[1440px] block fixed top-0 left-0 right-0 mx-auto z-50 border-b bg-[#eeeeed] border-[#222927]">
      <div className="w-full flex py-4 px-4 justify-between items-center">
        <div className="w-8 h-auto flex justify-center items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              priority
              style={{
                width: "28px",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className="w-6 h-6 flex justify-center items-center">
          <Image
            src={decor}
            alt="Decor element"
            priority
            className="w-2 h-auto pt-16 -ml-2"
          />
        </div>
        <div className="w-6 h-6 flex justify-center items-center">
          <button aria-label="Open sidebar" onClick={() => setOpen(!open)}>
            <Image
              src={menu}
              alt="Menu image"
              loading="eager"
              style={{
                width: "24px",
                height: "auto",
              }}
            />
          </button>
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} menuRef={menuRef} />
    </header>
  );
}
