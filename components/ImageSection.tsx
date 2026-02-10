import Image from "next/image";
import image from "@/public/middle-image.png";

export default function ImageSection() {
  return (
    <section className="max-w-7xl mx-auto border border-[#222927]">
      <Image src={image} alt="Decor" className="px-6 md:px-24 lg:px-16 py-16" />
    </section>
  );
}
