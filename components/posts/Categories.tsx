"use client";

import { use, useState } from "react";

import Image from "next/image";
import Posts from "./Posts";
import arrow from "@/public/accordion.svg";
import { useCategories } from "@/app/lib/providers/categoriesProvider";

export default function Categories() {
  const { categoriesPromise } = useCategories();
  const categories = use(categoriesPromise);

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleAccordion = (catSlug: string) => {
    setExpandedCategory((prev) => (prev === catSlug ? null : catSlug));
  };

  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category._id}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleAccordion(category.slug)}
            >
              <h3>{category.title}</h3>
              <Image
                src={arrow}
                alt="Arrow"
                className={`w-6 h-6 mt-2 transition-transform duration-300 ${
                  expandedCategory === category.slug ? "rotate-180" : ""
                }`}
              />
            </div>

            {expandedCategory === category.slug && (
              <Posts categorySlug={category.slug} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
