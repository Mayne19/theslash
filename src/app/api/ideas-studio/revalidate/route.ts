import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

const SECRET = process.env.IDEAS_STUDIO_REVALIDATE_SECRET;

interface RevalidateBody {
  secret?: string;
  slug?: string;
  projectId?: string;
  type?: string;
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
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

  // Ideas Studio envoie le secret dans l'en-tête x-ideas-studio-secret ; le
  // champ du corps et le paramètre ?secret= restent acceptés pour la
  // compatibilité avec les anciennes versions.
  const provided =
    request.headers.get("x-ideas-studio-secret") ??
    body.secret ??
    request.nextUrl.searchParams.get("secret") ??
    "";

  if (!provided || !safeEqual(provided, SECRET)) {
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
