/* eslint-disable @typescript-eslint/no-explicit-any */
import MainButton from "../common/MainButton";
import type { Post } from "@/app/types";
import { dancePartner } from "@/app/lib/fonts";

type PostProps = {
  post: {
    title: string;
    date: string;
    body: Post["body"];
    slug: string;
  };
};

function getFirstTwoSentences(blocks: any[]): string {
  if (!blocks || blocks.length === 0) return "";

  const fullText = blocks
    .map((block: any) => {
      if (block._type === "block" && block.children) {
        return block.children.map((child: any) => child.text).join("");
      }
      return "";
    })
    .join(" ");

  const sentences = fullText.split(". ").slice(0, 2).join(". ") + ".";
  return fullText.length > sentences.length ? sentences + "..." : sentences;
}

export default function LatestBlogsCard({ post }: PostProps) {
  const previewText = getFirstTwoSentences(post.body);

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className={`text-4xl ${dancePartner.className}`}>{post.title}</h2>
        <p className="text-xl md:text-2xl mb-4">{post.date}</p>
        <p className="text-xl md:text-2xl mb-20">{previewText}</p>
      </div>
      <div>
        <MainButton text="Read more" href={`/posts/${post.slug}`} />
      </div>
    </div>
  );
}
