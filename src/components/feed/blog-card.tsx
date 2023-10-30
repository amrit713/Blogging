"use client";

import { Button } from "@/components/ui/button";
import BlogContent from "./blog-content";
import { UserInfo } from "./user-info";
import { MessagesSquare } from "lucide-react";
import { Tag } from "@/components/tag";
import SaveForLater from "../save-for-later";

export const BlogCard = () => {
  return (
    <div className="max-w-[720px] mx-auto p-6 border  rounded-md my-8 flex flex-col gap-6 ">
      <UserInfo />
      <BlogContent />
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" className="text-zinc-600">
            <MessagesSquare className="w-4 h-4 mr-2" />
            discuss
          </Button>
          <p className="text-zinc-600"> | 40 likes</p>
        </div>
        {/* tags */}
        <div className="flex gap-2 items-center">
          <div className="flex gap-x-2">
            <Tag name="React" />
            <Tag name="Docker" />
            <Tag name="Node js" />
          </div>
          <div className="flex items-center gap-x-1 ">
            <div className="h-4  border-r border-zinc-300" />
            <SaveForLater />
          </div>
        </div>
      </div>
    </div>
  );
};
