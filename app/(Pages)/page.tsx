import { Posts } from "@/app/_components/Posts";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/queries/blogQueries";

export default async function Page() {

  const posts = await sanityFetch({
    query: BLOGS_QUERY,
  });
  console.log({posts})

  return (
    <>
    <Posts posts={posts} />
    </>
  );
}
