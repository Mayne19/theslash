import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import {
  fetchPublishedArticles,
  fetchArticleBySlug,
  type IdeasStudioArticle,
} from "./ideasStudio";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: number | null;
  category: string;
  coverImage: string | null;
  faq?: { question: string; answer: string }[];
  content?: string;
  /** Identifies source for slug dedup */
  _source?: "static" | "ideas-studio";
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

function parseTitle(raw: unknown): string {
  // Keystatic fields.slug stores { name, slug } or a plain string
  if (typeof raw === "string") return raw;
  if (raw && typeof raw === "object" && "name" in raw) return String((raw as { name: unknown }).name);
  return "";
}

function parseArticle(slug: string, raw: string): Article {
  const { data, content } = matter(raw);
  return {
    slug: slug.normalize("NFC"),
    title: parseTitle(data.title),
    description: data.description ?? "",
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    author: data.author ?? "/ theslash",
    readingTime: data.readingTime ?? null,
    category: data.category ?? "web-design",
    coverImage: data.coverImage ?? null,
    faq: Array.isArray(data.faq) ? data.faq : [],
    content,
  };
}

function ideasStudioToArticle(isa: IdeasStudioArticle): Article {
  return {
    slug: isa.slug,
    title: isa.title,
    description: isa.excerpt || isa.meta_description || "",
    date: isa.published_at ? new Date(isa.published_at).toISOString().split("T")[0] : "",
    author: "/ theslash",
    readingTime: null,
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
  let staticArticles: Article[] = [];
  try {
    if (fs.existsSync(POSTS_DIR)) {
      const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
      staticArticles = files.map((file) => {
        const slug = file.replace(/\.(mdx?|yaml)$/, "");
        const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
        return { ...parseArticle(slug, raw), _source: "static" as const };
      });
    }
  } catch {
    // No static posts
  }

  const ideasArticles = await fetchIdeasStudioArticles();

  // Merge: Ideas Studio articles take precedence for same slug
  const slugSet = new Set(ideasArticles.map((a) => a.slug));
  const uniqueStatic = staticArticles.filter((a) => !slugSet.has(a.slug));

  return [...ideasArticles, ...uniqueStatic].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Try static files first
  try {
    const normalizedSlug = slug.normalize("NFC");
    const candidates = [
      path.join(POSTS_DIR, `${normalizedSlug}.mdx`),
      path.join(POSTS_DIR, `${normalizedSlug}.md`),
    ];
    let filePath = candidates.find((p) => fs.existsSync(p));

    if (!filePath) {
      try {
        const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
        filePath = files.find((f) => {
          const fileSlug = f.replace(/\.(mdx?|yaml)$/, "").normalize("NFC");
          return fileSlug === normalizedSlug;
        });
        if (filePath) {
          filePath = path.join(POSTS_DIR, filePath);
        }
      } catch {
        // Ignore
      }
    }

    if (filePath) {
      const raw = fs.readFileSync(filePath, "utf8");
      return { ...parseArticle(slug, raw), _source: "static" as const };
    }
  } catch {
    // Not found locally
  }

  // Try Ideas Studio public API
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
