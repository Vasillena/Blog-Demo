"use client";

import Image from "next/image";
import { PhenomenaRegular } from "@/app/lib/fonts";
import decor from "@/public/decor-2.png";

export default function HeroButton({ text }: { text: string }) {
  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleScroll}
        className={`px-5 py-2 border-y border-l border-[#222927] text-xl md:text-2xl ${PhenomenaRegular.className}`}
      >
        {text}
      </button>
      <Image src={decor} alt="Decor" className="w-10 h-2" />
    </div>
  );
}
