"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/components/editor";
import { FileUpload } from "@/components/file-upload";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Blog } from "@prisma/client";

interface EditBlogProps {
  blog: Blog;
}

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  content: z.string(),
  imageUrl: z.string(),
  isComment: z.boolean(),
  isPublished: z.boolean(),
});

export const EditBlog = ({ blog }: EditBlogProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog.title,
      description: blog.description,
      content: blog.content ? blog.content : "",
      imageUrl: blog.imageUrl ? blog.imageUrl : "",
      isComment: blog.isComment ? true : blog.isComment,
      isPublished: blog.isPublished ? blog.isPublished : false,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.patch(`/api/blogs/${blog.id}`, values);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log("Post Error", error);
    }
  };

  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full  relative">
          <div className="flex flex-col items-center justify-center gap-y-6 ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="capitalize font-semibold text-zinc-700 ">
                    title
                  </FormLabel>

                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="border-zinc-100 border-2 focus-visible:border-primary   focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder=" Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className=" capitalize font-semibold text-zinc-700 ">
                    description
                  </FormLabel>

                  <FormControl>
                    <Textarea
                      disabled={isLoading}
                      className="border-zinc-100 border-2 focus-visible:border-primary h-14  focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder=" Short Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className=" capitalize font-semibold text-zinc-700 ">
                    content
                  </FormLabel>

                  <FormControl>
                    <Editor {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-y-4 justify-center  text-center  w-full">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <FileUpload
                        endpoint="blogImage"
                        value={field.value ? field.value : ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isComment"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-x-4 text-zinc-700">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />

                        <Label className="font-semibold">
                          {" "}
                          Enable comments
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator />
            <div className="w-full">
              <FormField
                control={form.control}
                name="isPublished"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-x-4 text-zinc-700">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label className="font-semibold"> Publish</Label>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-6  flex justify-end ">
          <Button
            size="lg"
            type="submit"
            className="font-semibold"
            disabled={isLoading}
          >
            Edit post
            {isLoading && <Loader className="w-4 h-4 ml-2 animate-spin" />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
