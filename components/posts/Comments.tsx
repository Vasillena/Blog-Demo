// "use client";

// import { useEffect, useState } from "react";

import CommentsForm from "./CommentsForm";
import Image from "next/image";
import commentIcon from "@/public/comment.png";
import { dancePartner } from "@/app/lib/fonts";
import { getCommentsByPostSlug } from "@/app/lib/actions/post.action";

// import { DateTime } from "next-auth/providers/kakao";

// interface Comments {
//   id: string;
//   createdAt: string;
//   user: string;
//   desc: string;
// }

interface CommentsProps {
  slug: string;
}

export default async function Comments({ slug }: CommentsProps) {
  // const [comments, setComments] = useState<Comments[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // const addNewComment = (newComment: Comments) => {
  //   setComments((prevComments) => [newComment, ...prevComments]);
  // };

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const res = await fetch(`/api/comments?postSlug=${postSlug}`);
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch comments");
  //       }
  //       const data = await res.json();
  //       setComments(data);
  //       setLoading(false);
  //     } catch (err: unknown) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError("An unknown error occurred");
  //       }
  //       setLoading(false);
  //     }
  //   };

  //   fetchComments();
  // }, [postSlug]);

  // if (loading) return <p>Loading comments...</p>;
  // if (error) return <p>{error}</p>;

  const comments = await getCommentsByPostSlug(slug);

  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h2 className={`text-6xl mb-4 ${dancePartner.className}`}>Коментари</h2>
      <CommentsForm
        slug={slug}
        // addNewComment={addNewComment}
      />
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
                {/* <span>{comment.createdAt}</span> */}
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
