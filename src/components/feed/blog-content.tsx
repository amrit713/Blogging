/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

const BlogContent = () => {
  return (
    <div className=" w-full flex items-center gap-6">
      <div className="w-[75%] flex flex-col gap-y-4 ">
        <h1 className="text-xl font-semibold cursor-pointer ">
          How to set up a websocket connection with Node and React?
        </h1>
        <p className="line-clamp-2  text-zinc-500 cursor-pointer">
          MongoDB offers various installation methods, including Community
          Server, Atlas (MongoDB's hosted database service), and Docker. Here,
          I'll cover the installation of the MongoDB Community Server, which is
          the open-source version of MongoDB that
        </p>
      </div>

      <div className="cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&w=500"
          alt="image"
          width={240}
          height={240}
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default BlogContent;
