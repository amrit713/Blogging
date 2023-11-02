import { EditBlog } from "@/components/blog/edit-blog";
import { db } from "@/lib/db";
import getCurrentUser from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";

const EditPage = async ({ params }: { params: { blogId: string } }) => {
  const user = await getCurrentUser();
  if (!user) {
    return redirect("/");
  }

  const blog = await db.blog.findFirst({
    where: {
      id: params.blogId as string,
      userId: user.id,
    },
  });

  if (!blog) {
    return redirect("/");
  }

  return (
    <div className="h-full w-full ">
      <div className="">
        <h1 className="font-semibold text-2xl ">Edit Blog</h1>
      </div>

      <div className="mt-8 md:max-w-[70%]  mx-auto p-6 rounded-lg shadow-sm border border-zinc-200">
        <EditBlog blog={blog} />
      </div>
    </div>
  );
};

export default EditPage;
