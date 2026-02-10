import Image from "next/image";
import Link from "next/link";
import { PhenomenaRegular } from "@/app/lib/fonts";
import decor from "@/public/decor-2.png";

export default function MainButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <div className="flex items-center">
      <Link
        href={href}
        className="px-5 py-2 border-y border-l border-[#222927] text-xl md:text-2xl"
      >
        <span className={`${PhenomenaRegular.className} `}>{text}</span>
      </Link>
      <Image src={decor} alt="Decor" className="w-10 h-2" />
    </div>
  );
}
