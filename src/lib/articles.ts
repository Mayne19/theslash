import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

export const reader = createReader(process.cwd(), config);

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: number | null;
  category: string;
  coverImage: string | null;
}

const categoryLabels: Record<string, string> = {
  "web-design": "Web Design",
  "seo": "SEO",
  "ia": "Intelligence Artificielle",
  "creation-site": "Création de site",
  "strategie": "Stratégie digitale",
};

export function getCategoryLabel(value: string) {
  return categoryLabels[value] ?? value;
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const articles = await reader.collections.articles.all();
    return articles
      .map((a) => ({
        slug: a.slug,
        title: a.entry.title,
        description: a.entry.description ?? "",
        date: a.entry.date ?? "",
        author: a.entry.author ?? "/ theslash",
        readingTime: a.entry.readingTime ?? null,
        category: a.entry.category ?? "web-design",
        coverImage: a.entry.coverImage ?? null,
      }))
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const article = await reader.collections.articles.read(slug, {
      resolveLinkedFiles: true,
    });
    return article;
  } catch {
    return null;
  }
}
