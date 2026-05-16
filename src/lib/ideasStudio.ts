export const IDEAS_STUDIO_PROJECT_ID =
  process.env.NEXT_PUBLIC_IDEAS_STUDIO_PROJECT_ID;
export const IDEAS_STUDIO_TRACKING_KEY =
  process.env.NEXT_PUBLIC_IDEAS_STUDIO_TRACKING_KEY;
export const IDEAS_STUDIO_TRACKING_JS_URL =
  process.env.NEXT_PUBLIC_IDEAS_STUDIO_TRACKING_JS_URL;

const API_BASE = "https://ideas-studio.onrender.com/api/public";
const PROJECT_ID = process.env.NEXT_PUBLIC_IDEAS_STUDIO_PROJECT_ID;

export interface IdeasStudioArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: { id: string; name: string; slug: string } | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_url: string | null;
  published_at: string;
  updated_at: string;
  author_name?: string | null;
  reading_time_minutes?: number | null;
  faq_json?: string | null;
}

export async function fetchPublishedArticles(): Promise<IdeasStudioArticle[]> {
  if (!PROJECT_ID) return [];
  try {
    const res = await fetch(`${API_BASE}/projects/${PROJECT_ID}/articles?limit=50`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchArticleBySlug(slug: string): Promise<IdeasStudioArticle | null> {
  if (!PROJECT_ID) return null;
  try {
    const raw = decodeURIComponent(slug).normalize("NFC");
    const res = await fetch(
      `${API_BASE}/projects/${PROJECT_ID}/articles/${encodeURIComponent(raw)}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchCategories(): Promise<{ name: string; slug: string }[]> {
  if (!PROJECT_ID) return [];
  try {
    const res = await fetch(`${API_BASE}/projects/${PROJECT_ID}/categories`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
