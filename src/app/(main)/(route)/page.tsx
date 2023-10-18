import { BlogCard } from "@/components/feed/blog-card";
import { SearchFeed } from "@/components/feed/search-feed";

export default function Home() {
  return (
    <div className=" ">
      <SearchFeed />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
