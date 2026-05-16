import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ArticleCard from "@/components/ArticleCard";
import ArticleSidebarLeft from "@/components/ArticleSidebarLeft";
import ArticleSidebarRight from "@/components/ArticleSidebarRight";
import ArticleReactions from "@/components/ArticleReactions";
import ArticleFAQ from "@/components/ArticleFAQ";
import { getAllArticles, getArticleBySlug, getCategoryLabel, renderMarkdown } from "@/lib/articles";
import { Clock, Calendar, RefreshCw } from "lucide-react";
import SocialEmbedLoader from "@/components/SocialEmbedLoader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description ?? undefined,
    openGraph: { url: `https://theslash.fr/blog/${slug}` },
  };
}



function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

function extractTOC(html: string): { id: string; text: string; level: "h2" | "h3" }[] {
  const headingRegex = /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi;
  const items: { id: string; text: string; level: "h2" | "h3" }[] = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = match[1].toLowerCase() as "h2" | "h3";
    const raw = match[2].replace(/<[^>]+>/g, "").trim().replace(/^\d+\.\s*/, "");
    if (raw.toLowerCase() === "introduction") continue;
    const id = slugify(raw);
    items.push({ id, text: raw, level });
  }
  return items;
}

function addIDsToHeadings(html: string): string {
  let result = html.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_match, inner) => {
    const clean = inner.replace(/<[^>]+>/g, "").trim().replace(/^\d+\.\s*/, "");
    const id = slugify(clean);
    const cleanInner = inner.replace(/^\d+\.\s*/, "");
    return `<h2 id="${id}">${cleanInner}</h2>`;
  });
  result = result.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_match, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugify(text);
    return `<h3 id="${id}">${inner}</h3>`;
  });
  return result;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const title = article.title ?? "";
  const description = article.description ?? "";
  const category = getCategoryLabel(article.category);
  const readingTime = article.readingTime ?? 5;
  const date = article.date
    ? new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
    : "";
  const updatedDate = null;

  const coverImages = [
    "photo-1499750310107-5fef28a66643",
    "photo-1542744173-8e7e53415bb0",
    "photo-1497366216548-37526070297c",
    "photo-1551434678-e076c223a692",
    "photo-1498050108023-c5249f4df085",
  ];
  const coverImg = article.coverImage ?? coverImages[slug.charCodeAt(0) % coverImages.length];

  const rawContent = article.content ? await renderMarkdown(article.content) : "";
  const processedContent = addIDsToHeadings(rawContent);
  const tocItems = extractTOC(rawContent);

  const articleUrl = `https://theslash.fr/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: "/ theslash", url: "https://theslash.fr" },
    publisher: { "@type": "Organization", name: "/ theslash", url: "https://theslash.fr" },
    datePublished: article.date ?? "",
    url: articleUrl,
  };

  const allArticles = await getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== slug && getCategoryLabel(a.category) === category)
    .slice(0, 3);

  const metaStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), -apple-system, sans-serif",
    fontSize: "0.8rem",
    color: "#9CA3AF",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const faqItems = (article.faq ?? []).map((f) => ({ q: f.question, a: f.answer }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── HERO : fond coloré, s'arrête après la meta-description ── */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "100px 0 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: title }]} />

          <div
            className="article-hero-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 210px",
              gap: "clamp(24px, 4vw, 56px)",
              alignItems: "flex-start",
              marginTop: "28px",
            }}
          >
            <div style={{ minWidth: 0 }}>
              {category && (
                <span style={{ display: "inline-block", padding: "5px 14px", backgroundColor: "rgba(243,199,9,0.15)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "#1A1A1A", marginBottom: "16px" }}>
                  {category}
                </span>
              )}
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1A1A1A", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px" }}>
                {title}
              </h1>
              {description && (
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.75, overflowWrap: "break-word" }}>
                  {description}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingTop: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="/icon.svg" alt="/ theslash" style={{ height: "32px", width: "32px", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#1A1A1A" }}>/ theslash</span>
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(0,0,0,0.08)" }} />
              {readingTime && (
                <div style={metaStyle}><Clock size={13} /><span>{readingTime} min de lecture</span></div>
              )}
              {date && (
                <div style={metaStyle}><Calendar size={13} /><span>Publié le {date}</span></div>
              )}
              {updatedDate && (
                <div style={metaStyle}><RefreshCw size={13} /><span>Mis à jour le {updatedDate}</span></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE — fond blanc, pleine largeur ── */}
      <div style={{ backgroundColor: "#ffffff", padding: "40px 0 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div className="article-cover" style={{ borderRadius: "16px", overflow: "hidden", height: "640px" }}>
            <img
              src={coverImg.startsWith("http") || coverImg.startsWith("/") ? coverImg : `https://images.unsplash.com/${coverImg}?w=1200&q=90`}
              alt={title}
              fetchPriority="high"
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* ── 3 COLONNES sous l'image ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "40px 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div
            className="article-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 52px",
              gap: "clamp(40px, 4vw, 60px)",
            }}
          >

            {/* LEFT SIDEBAR */}
            <div className="article-sidebar-left">
              <ArticleSidebarLeft items={tocItems} />
            </div>

            {/* MAIN CONTENT */}
            <main style={{ minWidth: 0 }}>
              <div
                style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif" }}
                className="article-body"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              <ArticleReactions slug={slug} />
            </main>

            {/* RIGHT SIDEBAR */}
            <div className="article-sidebar-right">
              <ArticleSidebarRight url={articleUrl} title={title} />
            </div>

          </div>
        </div>
      </section>

      {/* ── ARTICLES LIÉS ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "72px 0", overflowX: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1A1A1A", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
              <span style={{ color: "#A0A0A0", fontWeight: 700 }}>encore plus d&apos;articles sur</span>{" "}
              <span style={{ color: "#1A1A1A", fontWeight: 800 }}>{category.toLowerCase()}</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", minWidth: 0 }} className="related-grid">
            {related.map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                excerpt={a.description ?? ""}
                slug={a.slug}
                category={getCategoryLabel(a.category)}
                readingTime={a.readingTime ?? undefined}
                coverImage={a.coverImage ?? undefined}
              />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .related-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .related-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── FAQ ── */}
      <ArticleFAQ items={faqItems} />

      <CTASection />

      <SocialEmbedLoader />

      <style>{`
        .article-body h2#introduction { display: none; }
        .article-body h2 {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #1A1A1A;
          letter-spacing: -0.025em;
          margin-top: 44px;
          margin-bottom: 14px;
          line-height: 1.25;
          scroll-margin-top: 112px;
        }
        .article-body h3 {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #1A1A1A;
          letter-spacing: -0.015em;
          margin-top: 28px;
          margin-bottom: 12px;
          line-height: 1.3;
          scroll-margin-top: 112px;
        }
        .article-body p {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.85;
          margin-bottom: 18px;
        }
        .article-body ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 24px;
        }
        .article-body ul li {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.7;
          padding: 3px 0 3px 24px;
          position: relative;
        }
        .article-body ul li::before {
          content: "•";
          color: #F3C709;
          font-weight: 900;
          font-size: 1.1em;
          position: absolute;
          left: 4px;
          top: 3px;
          line-height: 1.7;
        }
        .article-body ol {
          list-style: none;
          counter-reset: article-ol;
          padding: 0;
          margin: 0 0 20px 24px;
        }
        .article-body ol li {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.7;
          padding: 3px 0 3px 28px;
          position: relative;
          counter-increment: article-ol;
        }
        .article-body ol li::before {
          content: counter(article-ol) ".";
          color: #F3C709;
          font-weight: 800;
          font-size: 0.9rem;
          position: absolute;
          left: 0;
          top: 4px;
          line-height: 1.7;
          min-width: 20px;
        }
        .article-body table tbody tr {
          transition: background-color 120ms ease;
        }
        .article-body table tbody tr:hover {
          background-color: rgba(243, 199, 9, 0.07) !important;
        }
        .article-body {
          overflow-x: hidden;
          max-width: 100%;
        }
        .article-body img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }
        .article-body .table-wrapper {
          overflow-x: auto;
          margin: 24px 0;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          -webkit-overflow-scrolling: touch;
        }
        .article-body .table-wrapper table {
          width: 100%;
          min-width: 480px;
          border-collapse: collapse;
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 0.88rem;
        }
        .article-body .table-wrapper table thead tr {
          background: #F3C709;
        }
        .article-body .table-wrapper table th {
          padding: 12px 16px;
          text-align: left;
          font-weight: 700;
          color: #1A1A1A;
          white-space: nowrap;
        }
        .article-body .table-wrapper table td {
          padding: 12px 16px;
          color: #1A1A1A;
          border-top: 1px solid #F0EDE8;
        }
        .article-body .table-wrapper table tbody tr:nth-child(even) td {
          background: #FAFAF9;
        }
        .article-body pre {
          max-width: 100%;
          overflow-x: auto;
          background: #F5F0E8;
          border-radius: 10px;
          padding: 16px;
          margin: 20px 0;
        }
        .article-body code {
          word-break: break-word;
          font-size: 0.85em;
          background: #F5F0E8;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .article-body pre code {
          background: none;
          padding: 0;
          word-break: normal;
        }
        .article-body div[style] {
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .article-sidebar-left { display: none !important; }
          .article-sidebar-right { display: none !important; }
          .article-hero-cols { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .article-hero-cols > div:last-child { display: none !important; }
          .article-cover { height: 240px !important; }
          .article-body h2 { font-size: 1.25rem !important; }
          .article-body h3 { font-size: 1.1rem !important; }
          .article-body p, .article-body li { font-size: 0.95rem !important; }
        }
      `}</style>
    </>
  );
}
