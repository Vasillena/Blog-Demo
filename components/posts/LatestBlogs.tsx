import LatestBlogsCard from "./LatestBlogsCard";
import { getLatestPosts } from "@/app/lib/actions/post.action";

export default async function LatestBlogs() {
  const latestPosts = await getLatestPosts(3);

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
      {latestPosts.map((post, index) => (
        <div
          key={post._id}
          className={`px-6 md:px-24 lg:px-16 py-16 ${
            index === 1
              ? "border border-[#222927] lg:border-none"
              : "border-x border-[#222927]"
          }`}
        >
          <LatestBlogsCard post={post} />
        </div>
      ))}
    </section>
  );
}
