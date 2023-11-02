import { db } from "@/lib/db";
import getCurrentUser from "@/lib/getCurrentUser";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { blogId: string } }
) {
  try {
    const currentUser = await getCurrentUser();
    const values = await req.json();

    if (!params.blogId) {
      return new NextResponse("Not found", { status: 400 });
    }

    if (!currentUser) {
      return new NextResponse("unauthorized", {
        status: 401,
      });
    }

    if (!values) {
      return new NextResponse("Not found", { status: 400 });
    }

    const currentBlog = await db.blog.findFirst({
      where: {
        id: params.blogId as string,
        userId: currentUser.id,
      },
    });

    if (!currentBlog) {
      return new NextResponse("Not found", { status: 400 });
    }

    const blog = await db.blog.update({
      where: {
        id: params.blogId,
        userId: currentUser.id,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.log("   [BLOG_UPDATE_ERRROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
