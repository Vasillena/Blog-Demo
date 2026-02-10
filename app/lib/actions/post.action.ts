"use server";

import { Category, Comment, Post } from "@/app/types";

import { client } from "@/sanity/client";
import { commentClient } from "@/sanity/commentClient";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { writeClient } from "@/sanity/writeClient";

function sortPostsByTitleNumber(
  posts: Post[],
  descending: boolean = false
): Post[] {
  return posts.sort((a, b) => {
    const numA = parseInt(a.title.split(".")[0], 10);
    const numB = parseInt(b.title.split(".")[0], 10);

    return descending ? numB - numA : numA - numB;
  });
}

const ALL_POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current)
]{
  _id,
  title,
  "slug": slug.current,
  date,
  body,
  "category": category->slug.current,
  views
}`;

const CATEGORIES_QUERY = `*[
  _type == "category" &&
  defined(slug.current)
] | order(title asc){
  _id,
  title,
  "slug": slug.current
}`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    date,
    body,
    "category": category->slug.current,
    views
  }`;

const COMMENTS_BY_POST_SLUG_QUERY = `*[
    _type == "comment" &&
    post->slug.current == $slug
  ] | order(createdAt asc){
    _id,
    user,
    desc,
    createdAt
  }`;

export async function getAllPosts() {
  const posts: Post[] = await client.fetch(
    ALL_POSTS_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  return sortPostsByTitleNumber(posts);
}

export async function getLatestPosts(limit: number = 3) {
  const posts: Post[] = await client.fetch(ALL_POSTS_QUERY);

  const sortedPosts = sortPostsByTitleNumber(posts, true);

  return sortedPosts.slice(0, limit);
}

export async function getAllCategories() {
  const categories: Category[] = await client.fetch(
    CATEGORIES_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  return categories;
}

export async function getPostBySlug(slug: string) {
  const post: Post | null = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  return post;
}

export async function getAdjacentPosts(slug: string) {
  const posts: Post[] = await getAllPosts(); // вече сортирани по дата

  const index = posts.findIndex((p) => p.slug === slug);

  return {
    previousPost: posts[index - 1] ?? null,
    nextPost: posts[index + 1] ?? null,
  };
}

export async function getCommentsByPostSlug(slug: string): Promise<Comment[]> {
  const comments: Comment[] = await commentClient.fetch(
    COMMENTS_BY_POST_SLUG_QUERY,
    { slug },
    { cache: "no-store" }
  );

  return comments;
}

export async function createComment(data: {
  user: string;
  desc: string;
  postSlug: string;
}) {
  try {
    const post = await client.fetch(
      `*[_type=="post" && slug.current==$slug][0]{_id}`,
      { slug: data.postSlug }
    );

    if (!post?._id) {
      return { error: "Постът не е намерен." };
    }

    await writeClient.create({
      _type: "comment",
      post: { _type: "reference", _ref: post._id },
      user: data.user,
      desc: data.desc,
      createdAt: new Date().toISOString(),
    });

    revalidatePath(`/posts/${data.postSlug}`);

    return { success: true };
  } catch (error) {
    console.error("Create comment error:", error);
    return { error: "Грешка при запис на коментара." };
  }
}
