import { PhenomenaRegular, dancePartner } from "@/app/lib/fonts";

import { About as AboutType } from "@/app/types";
import Image from "next/image";
import MainButton from "./common/MainButton";
import { PortableText } from "@portabletext/react";
import { getAbout } from "@/app/lib/actions/home.action";
import me from "@/public/me.png";

export default async function About() {
  const aboutText: AboutType | null = await getAbout();

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="px-6 md:px-24 py-24 border border-[#222927]">
        <div className="mb-12 flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between items-center md:items-start xl:items-end gap-6 xl:gap-0">
          <div className="w-52 h-auto border border-[#222927] rounded-t-full flex items-end pt-6">
            <Image src={me} alt="Profile image" />
          </div>
          <div className="text-xl">
            <p>
              <span className={`${PhenomenaRegular.className}`}>
                {aboutText.nameField}{" "}
              </span>{" "}
              {aboutText.nameText}
            </p>
            <p>
              <span className={`${PhenomenaRegular.className}`}>
                {aboutText.ageField}{" "}
              </span>{" "}
              {aboutText.ageText}
            </p>
            <p>
              <span className={`${PhenomenaRegular.className}`}>
                {aboutText.locationField}
              </span>{" "}
              {aboutText.locationText}
            </p>
          </div>
        </div>
        <div>
          <div className="text-xl md:text-2xl mt-5">
            {aboutText.aboutBody && (
              <PortableText value={aboutText.aboutBody} />
            )}
          </div>
        </div>
      </div>
      <div className="px-6 md:px-24 py-24 border-y border-x lg:border-l-0 border-t-0 lg:border-t border-[#222927]">
        <h2
          className={`text-5xl md:text-6xl text-center lg:text-left ${dancePartner.className}`}
        >
          {aboutText.storyTitle}
        </h2>
        <div className="text-xl md:text-2xl mt-12 mb-5 sm:mb-20">
          {aboutText.storyBody && <PortableText value={aboutText.storyBody} />}
        </div>
        <div className="flex justify-center lg:justify-start">
          <MainButton
            text={aboutText.button}
            href={"https://ivf-journey.site/posts/1-izvnmatochna-bremennost"}
          />
        </div>
      </div>
    </section>
  );
}
