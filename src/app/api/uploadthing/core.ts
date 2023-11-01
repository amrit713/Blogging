import getCurrentUser from "@/lib/getCurrentUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes

const auth = async () => {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("unauthorized");
  }

  if (!user.id) {
    throw new Error("unauthorized");
  }

  return { userId: user.id };
};

export const ourFileRouter = {
  blogImage: f({ image: { maxFileSize: "4MB" } })
    .middleware(() => auth())
    .onUploadComplete((data) => {
      console.log("blog url", data);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
