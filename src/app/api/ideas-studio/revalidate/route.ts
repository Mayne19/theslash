import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

const SECRET = process.env.IDEAS_STUDIO_REVALIDATE_SECRET;

interface RevalidateBody {
  secret: string;
  slug?: string;
  projectId?: string;
  type?: string;
}

export async function POST(request: NextRequest) {
  if (!SECRET) {
    return Response.json({ ok: false, error: "Revalidation secret not configured" }, { status: 500 });
  }

  let body: RevalidateBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.secret !== SECRET) {
    return Response.json({ ok: false, error: "Invalid secret" }, { status: 401 });
  }

  const paths: string[] = [];

  revalidatePath("/blog");
  paths.push("/blog");

  if (body.slug) {
    const slug = decodeURIComponent(body.slug).normalize("NFC");
    revalidatePath(`/blog/${slug}`);
    paths.push(`/blog/${slug}`);
  }

  revalidatePath("/sitemap.xml");
  paths.push("/sitemap.xml");

  return Response.json({ ok: true, revalidated: paths });
}
