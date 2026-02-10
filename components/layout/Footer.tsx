import Image from "next/image";
import Link from "next/link";
import logoSavy from "@/public/savy.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-360 w-full mx-auto border-t border-[#222927] flex justify-between">
      <p className="text-center font-light my-10">
        Copyright © {currentYear} - All rights reserved
      </p>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-center font-light my-10">Design & Build by</p>
        <Link href="https://savy-creations.vercel.app/bg" target="blank">
          <Image
            src={logoSavy}
            alt="Savy logo"
            className="w-12 mb-0.5 h-auto"
          />
        </Link>
      </div>
    </footer>
  );
}
