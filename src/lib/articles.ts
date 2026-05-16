import { marked } from "marked";
import {
  fetchPublishedArticles,
  fetchArticleBySlug,
  type IdeasStudioArticle,
} from "./ideasStudio";

export interface Article {
  id?: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt: string | null;
  author: string;
  readingTime: number;
  category: string;
  coverImage: string | null;
  content?: string;
  _source?: "ideas-studio";
}

const categoryLabels: Record<string, string> = {
  "seo": "SEO",
  "web-design": "Web Design",
  "performance": "Performance",
  "site-web": "Site web",
  "marketing": "Marketing",
  "e-commerce": "E-commerce",
  "tech": "Tech",
  "analytics": "Analytics",
  "copywriting": "Copywriting",
  "local-business": "Local Business",
};

const categoryColors: Record<string, string> = {
  "seo": "#2563eb",
  "web-design": "#9333ea",
  "performance": "#059669",
  "site-web": "#dc2626",
  "marketing": "#ea580c",
  "e-commerce": "#0891b2",
  "tech": "#4f46e5",
  "analytics": "#ca8a04",
  "copywriting": "#db2777",
  "local-business": "#65a30d",
};

export function getCategoryLabel(value: string) {
  return categoryLabels[value] ?? value;
}

export function getCategoryLabels() {
  return { ...categoryLabels };
}

export function getCategoryColor(value: string): string {
  return categoryColors[value] ?? "#6b7280";
}

export function getCategories(): { slug: string; name: string; color: string }[] {
  return Object.entries(categoryLabels).map(([slug, name]) => ({
    slug,
    name,
    color: categoryColors[slug] ?? "#6b7280",
  }));
}

function estimateReadingTime(html: string | null): number {
  if (!html) return 5;
  const text = html.replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 200));
}

function ideasStudioToArticle(isa: IdeasStudioArticle): Article {
  return {
    id: isa.id,
    slug: isa.slug,
    title: isa.title,
    description: isa.excerpt || isa.meta_description || "",
    date: isa.published_at ? new Date(isa.published_at).toISOString().split("T")[0] : "",
    updatedAt: isa.updated_at ? new Date(isa.updated_at).toISOString().split("T")[0] : null,
    author: "/ theslash",
    readingTime: estimateReadingTime(isa.content),
    category: isa.category?.slug || "",
    coverImage: isa.cover_image_url,
    content: isa.content || undefined,
    _source: "ideas-studio",
  };
}

async function fetchIdeasStudioArticles(): Promise<Article[]> {
  try {
    const items = await fetchPublishedArticles();
    return items.map(ideasStudioToArticle);
  } catch {
    return [];
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const ideasArticles = await fetchIdeasStudioArticles();
  return ideasArticles.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const isa = await fetchArticleBySlug(slug);
    if (isa) {
      return { ...ideasStudioToArticle(isa), _source: "ideas-studio" as const };
    }
  } catch {
    // Not found in Ideas Studio
  }

  return null;
}

const renderer = new marked.Renderer();
renderer.table = ({ header, rows }) => {
  const thead = `<thead><tr>${header.map((h) => `<th>${h.text}</th>`).join("")}</tr></thead>`;
  const tbody = `<tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell.text}</td>`).join("")}</tr>`).join("")}</tbody>`;
  return `<div class="table-wrapper"><table>${thead}${tbody}</table></div>`;
};

export async function renderMarkdown(content: string): Promise<string> {
  return await marked.parse(content, { renderer });
}
