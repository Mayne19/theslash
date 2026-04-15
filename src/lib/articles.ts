import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

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

export function getCategoryLabel(value: string) {
  return categoryLabels[value] ?? value;
}

function parseArticle(slug: string, raw: string): Article {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
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

export async function getAllArticles(): Promise<Article[]> {
  try {
    if (!fs.existsSync(POSTS_DIR)) return [];
    const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
    return files
      .map((file) => {
        const slug = file.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
        return parseArticle(slug, raw);
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf8");
    return parseArticle(slug, raw);
  } catch {
    return null;
  }
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
