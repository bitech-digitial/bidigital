import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const token = formData.get("token") as string | null;
  const type = (formData.get("type") as string) ?? "file";

  if (!file || !token) {
    return NextResponse.json({ error: "Fichier ou token manquant." }, { status: 400 });
  }

  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "Fichier trop lourd (max 10 Mo)." }, { status: 400 });
  }

  const ext = file.name.split(".").pop() ?? "bin";
  const filename = `onboarding/${token}/${type}-${Date.now()}.${ext}`;

  const blob = await put(filename, file, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return NextResponse.json({ url: blob.url });
}
