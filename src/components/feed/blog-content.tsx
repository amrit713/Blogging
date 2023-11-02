/* eslint-disable react/no-unescaped-entities */
"use client";

import { Blog } from "@prisma/client";
import Image from "next/image";

interface BlogContentProps {
  blog: Blog;
}

const BlogContent = ({ blog }: BlogContentProps) => {
  return (
    <div className=" w-full flex items-center gap-6">
      <div className="w-[75%] flex flex-col gap-y-4 ">
        <h1 className="text-xl font-semibold cursor-pointer ">{blog.title}</h1>
        <p className="line-clamp-2  text-zinc-500 cursor-pointer">
          {blog.description}
        </p>
      </div>

      <div className="cursor-pointer">
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt="image"
            width={240}
            height={240}
            className="w-full rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default BlogContent;
