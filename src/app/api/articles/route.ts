import { NextResponse } from "next/server"
import { getAllArticles, getCategoryLabel, getCategoryColor } from "@/lib/articles"

export async function GET() {
  const articles = await getAllArticles()

  const data = articles.map((a) => ({
    title: a.title,
    slug: a.slug,
    excerpt: a.description,
    category: {
      name: getCategoryLabel(a.category),
      slug: a.category,
      color: getCategoryColor(a.category),
    },
    publishedAt: a.date,
    url: `https://www.theslash.fr/blog/${a.slug}`,
  }))

  return NextResponse.json(data)
}
