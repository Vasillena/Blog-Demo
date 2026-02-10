import ContactForm from "./ContactForm";
import Image from "next/image";
import contact1 from "@/public/contact-1.png";
import contact2 from "@/public/contact-2.png";
import { dancePartner } from "@/app/lib/fonts";

export default function Contact() {
  return (
    <section className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 border-x border-[#222927]">
      <div className="col-span-2 flex flex-col justify-center lg:border-r border-[#222927] py-16 px-20 ">
        <h2
          className={`text-5xl md:text-6xl text-center lg:text-left ${dancePartner.className} mb-10`}
        >
          Свържи се с мен
        </h2>
        <ContactForm />
      </div>
      <div className="flex flex-col justify-center items-center py-16 gap-20 px-16">
        <Image src={contact1} alt="Envelope" width={298} className="h-auto" />
        <Image src={contact2} alt="Pencil" width={335} className="h-auto" />
      </div>
    </section>
  );
}
