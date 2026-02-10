import { getAdjacentPosts, getPostBySlug } from "@/app/lib/actions/post.action";

import Comments from "./Comments";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Post as PostType } from "@/app/types";
import SecondaryButton from "../common/SecondaryButton";
import ViewCounter from "./ViewCounter";
import arrow from "@/public/decor-3.png";
import { dancePartner } from "@/app/lib/fonts";
import image from "@/public/middle-image-2.png";

export default async function Post({ slug }: { slug: string }) {
  const currentPost: PostType | null = await getPostBySlug(slug);
  if (!currentPost) return <p>Постът не съществува</p>;

  const { previousPost, nextPost } = await getAdjacentPosts(slug);

  return (
    <section className="w-full max-w-7xl mx-auto my-14">
      <ViewCounter postId={currentPost._id} />
      <div
        className="h-[345px] flex justify-center items-center border-b border-x border-[#222927]"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link href="/">
          <div className="flex justify-center items-center gap-1 sm:gap-5 px-4">
            <Image
              src={arrow}
              alt="Arrow image"
              className="w-8 sm:w-16 h-2 sm:h-3"
            />
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl text-center ${dancePartner.className}`}
            >
              {currentPost.title}
            </h1>
          </div>
        </Link>
      </div>

      <div className="relative -top-28 w-full md:w-3/4 xl:w-2/3 h-auto bg-[#F1EFED] mx-auto py-8 px-4 sm:px-12 xl:px-24 shadow-md text-xl">
        <div className="flex justify-between mb-2 sm:mb-10">
          <p>{currentPost.date}</p>
          <p>Общо показвания {currentPost.views || 0}</p>
        </div>

        <article>
          {currentPost.body && <PortableText value={currentPost.body} />}
        </article>

        <div className="flex justify-between mt-20">
          {previousPost && (
            <div className="scale-x-[-1]">
              <SecondaryButton
                text="Предишен пост"
                href={`/posts/${previousPost.slug}`}
                reverse
              />
            </div>
          )}
          {nextPost && (
            <SecondaryButton
              text="Следващ пост"
              href={`/posts/${nextPost.slug}`}
            />
          )}
        </div>
      </div>
      <Comments slug={slug} />
    </section>
  );
}
