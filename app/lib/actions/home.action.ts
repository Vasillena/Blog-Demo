"use server";

import { About, Hero, Summary } from "@/app/types";

import { client } from "@/sanity/client";
import { notFound } from "next/navigation";

const HERO_QUERY = `*[_type == "hero"] | order(_createdAt desc)[0]{
  _id,
  image,
  title,
  subtitle,
  body,
  button
}`;

export async function getHero() {
  const hero: Hero = await client.fetch(
    HERO_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  if (!hero) notFound();
  return hero;
}

const ABOUT_QUERY = `*[_type == "about"] | order(_createdAt desc)[0]{
  _id,
  nameField,
  nameText,
  ageField,
  ageText,
  locationField,
  locationText,
  aboutBody,
    storyTitle,
  storyBody,
  button
}`;

export async function getAbout() {
  const about: About = await client.fetch(
    ABOUT_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  if (!about) notFound();
  return about;
}

const SUMMARY_QUERY = `*[_type == "summary"][0]{
  _id,
  title,
  body1,
  body2,
  expenses[]{
    _key,
    description,
    price
  }
}`;

export async function getSummary() {
  const summary: Summary = await client.fetch(
    SUMMARY_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  if (!summary) notFound();
  return summary;
}
