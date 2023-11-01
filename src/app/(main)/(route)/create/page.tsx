import { CreateBlog } from "@/components/blog/create-blog";

const CreatePage = () => {
  return (
    <div className="h-full w-full ">
      <div className="">
        <h1 className="font-semibold text-2xl ">Create a new Blog</h1>
      </div>

      <div className="mt-8 md:max-w-[70%]  mx-auto p-6 rounded-lg shadow-sm border border-zinc-200">
        <CreateBlog />
      </div>
    </div>
  );
};

export default CreatePage;
