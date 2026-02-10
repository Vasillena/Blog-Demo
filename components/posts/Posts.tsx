import Link from "next/link";
import { Post } from "@/app/types";
import { use } from "react";
import { usePosts } from "@/app/lib/providers/postsProvider";

export default function Posts({ categorySlug }: { categorySlug: string }) {
  const { postsPromise } = usePosts();
  const posts = use(postsPromise);

  const filteredPosts = posts.filter(
    (post: Post) => post.category === categorySlug
  );

  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-2">
        {filteredPosts.map((post) => (
          <li key={post._id}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl text-gray-600 hover:text-black"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
