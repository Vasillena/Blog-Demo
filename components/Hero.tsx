import { PhenomenaRegular, dancePartner } from "@/app/lib/fonts";

import HeroButton from "./common/HeroButton";
import { Hero as HeroType } from "@/app/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { getHero } from "@/app/lib/actions/home.action";
import { client } from "@/sanity/client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default async function Hero() {
  const heroText: HeroType | null = await getHero();

  return (
    <section className="max-w-7xl mx-auto h-screen flex flex-col justify-center items-center border-x border-[#222927]">
      <div>
        <h1
          className={`text-5xl sm:text-7xl md:text-8xl xl:text-9xl text-center mt-20 ${dancePartner.className}`}
        >
          {heroText.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 xl:mt-20 items-center px-6">
        <div className="xl:col-span-2 xl:max-w-2xl md:px-8 xl:px-0 order-2 xl:order-1 text-center lg:text-left">
          <h2 className={`text-2xl md:text-4xl  ${PhenomenaRegular.className}`}>
            {heroText.subtitle}
          </h2>
          <div className="text-xl md:text-2xl mt-2 sm:mt-5 mb-5 sm:mb-20">
            {heroText.body && <PortableText value={heroText.body} />}
          </div>
          <div className="flex justify-center lg:justify-start">
            <HeroButton text={heroText.button} />
          </div>
        </div>
        <div className="hidden lg:block justify-self-center order-1 xl:order-2">
          <Image
            src={urlFor(heroText.image).width(420).height(410).url()}
            alt={heroText.image.alt || "Hero image"}
            width={420}
            height={410}
            className="h-auto w-85 xl:w-105"
          />
        </div>
      </div>
    </section>
  );
}
