import Image from "next/image";
import Link from "next/link";
import { PhenomenaRegular } from "@/app/lib/fonts";
import decor from "@/public/decor-2.png";

interface SecondaryButtonProps {
  text: string;
  href: string;
  reverse?: boolean;
}

export default function SecondaryButton({
  text,
  href,
  reverse,
}: SecondaryButtonProps) {
  return (
    <div className="flex items-center">
      <Link
        href={href}
        className="px-5 py-1 border-y border-l border-[#222927] text-base"
      >
        <div className={`${reverse ? "scale-x-[-1]" : ""}`}>
          <span className={`${PhenomenaRegular.className} `}>{text}</span>
        </div>
      </Link>
      <Image src={decor} alt="Decor" className="w-8 h-2" />
    </div>
  );
}
