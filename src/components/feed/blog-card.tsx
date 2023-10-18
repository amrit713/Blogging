import { Button } from "@/components/ui/button";
import BlogContent from "./blog-content";
import { UserInfo } from "./user-info";
import { MessagesSquare } from "lucide-react";

export const BlogCard = () => {
  return (
    <div className="max-w-[720px] mx-auto p-6 border  rounded-md my-8 flex flex-col gap-6 ">
      <UserInfo />
      <BlogContent />
      <div className=" flex items-center">
        <Button variant="ghost" className="text-zinc-600">
          <MessagesSquare className="w-4 h-4 mr-2" />
          discuss
        </Button>
        <p className="text-zinc-600"> | 40 likes</p>
      </div>
    </div>
  );
};
