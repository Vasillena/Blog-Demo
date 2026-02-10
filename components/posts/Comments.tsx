import CommentsForm from "./CommentsForm";
import Image from "next/image";
import commentIcon from "@/public/comment.png";
import { dancePartner } from "@/app/lib/fonts";
import { getCommentsByPostSlug } from "@/app/lib/actions/post.action";

interface CommentsProps {
  slug: string;
}

export default async function Comments({ slug }: CommentsProps) {
  const comments = await getCommentsByPostSlug(slug);

  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h2 className={`text-6xl mb-4 ${dancePartner.className}`}>Comments</h2>
      <CommentsForm slug={slug} />
      <div className="mt-4">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="w-[300px] sm:w-[500px] flex justify-left items-center gap-4 mt-16"
          >
            <div>
              <Image
                src={commentIcon}
                alt="Comment balloon"
                className="w-10 h-auto"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <span>{comment.user}</span>
                <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
              </div>

              <span className="text-xl">{comment.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
