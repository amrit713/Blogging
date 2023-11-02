import { BlogCard } from "@/components/feed/blog-card";
import { SearchFeed } from "@/components/feed/search-feed";
import { db } from "@/lib/db";

export default async function Home() {
  const blogs = await db.blog.findMany({
    include: {
      user: true,
    },
  });
  console.log(blogs);

  return (
    <div className=" ">
      <SearchFeed />

      <div className="">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
