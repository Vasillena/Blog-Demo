import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/writeClient";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    await writeClient
      .patch(slug)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Views error:", error);
    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 }
    );
  }
}
