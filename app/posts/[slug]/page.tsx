import Post from "@/components/posts/Post";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return (
    <>
      <Post slug={slug} />
    </>
  );
}
