import { NextResponse } from "next/server"
import { getCategoryLabels } from "@/lib/articles"

export async function GET() {
  const labels = getCategoryLabels()
  const categories = Object.entries(labels).map(([slug, name]) => ({
    slug,
    name,
  }))
  return NextResponse.json(categories)
}
