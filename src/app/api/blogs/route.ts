import { db } from "@/lib/db";
import getCurrentUser from "@/lib/getCurrentUser";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    const values: Blog = await req.json();

    if (!currentUser) {
      return new NextResponse("unauthorized", {
        status: 401,
      });
    }

    if (!values) {
      return new NextResponse("Not found", { status: 400 });
    }

    const blog = await db.blog.create({
      data: {
        ...values,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.log("   [BLOG_POST_ERRROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
