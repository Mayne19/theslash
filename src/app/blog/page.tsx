import type { Metadata } from "next";
import Link from "next/link";
import BlogFilter from "@/components/BlogFilter";
import NewsletterSection from "@/components/NewsletterSection";
import SlashTitle from "@/components/SlashTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getAllArticles, getCategoryLabel } from "@/lib/articles";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog web design, IA et création de sites",
  description: "Ressources pratiques pour les entrepreneurs : web design, SEO, intelligence artificielle et création de sites. Articles de fond par le studio theslash.",
  openGraph: { url: "https://theslash.fr/blog" },
};

const fallbackArticles = [
  { title: "Créer un site web professionnel en 2026 : le guide complet", excerpt: "De la définition de l'objectif au choix de la technologie, voici la méthode complète pour créer un site qui convertit.", slug: "creer-site-web-professionnel-guide", category: "Création de site", readingTime: 8, date: "11 avr. 2026" },
  { title: "Comment choisir le bon CMS pour votre site en 2026", excerpt: "WordPress, Webflow, Next.js + Keystatic, on décortique les options pour vous aider à faire le bon choix selon votre projet.", slug: "comment-choisir-son-cms-2026", category: "Création de site", readingTime: 7, date: "15 mars 2026" },
  { title: "Les 5 erreurs SEO qui ruinent votre référencement dès le départ", excerpt: "Des balises title manquantes aux pages orphelines, voici les pièges les plus courants, et comment les éviter.", slug: "erreurs-seo-debutant", category: "SEO", readingTime: 5, date: "8 mars 2026" },
  { title: "Pourquoi votre landing page ne convertit pas (et comment y remédier)", excerpt: "Copywriting flou, CTA enterré, trop d'options, les raisons sont souvent simples mais coûtent cher.", slug: "landing-page-ne-convertit-pas", category: "Web Design", readingTime: 6, date: "1 mars 2026" },
  { title: "Next.js vs WordPress en 2026 : lequel choisir pour votre projet ?", excerpt: "Performance, SEO, coût, facilité d'utilisation, le comparatif complet pour faire le bon choix.", slug: "nextjs-vs-wordpress-2026", category: "Création de site", readingTime: 8, date: "22 fév. 2026" },
  { title: "Comment rédiger une page 'À propos' qui convainc vraiment", excerpt: "La page à propos est souvent la plus visitée, et la plus mal rédigée. Voici comment en faire un atout commercial.", slug: "page-a-propos-qui-convainc", category: "Web Design", readingTime: 5, date: "15 fév. 2026" },
  { title: "Google Core Web Vitals : le guide pratique pour les non-développeurs", excerpt: "LCP, FID, CLS, c'est quoi exactement et pourquoi ça compte pour votre référencement ?", slug: "core-web-vitals-guide", category: "SEO", readingTime: 6, date: "8 fév. 2026" },
];

const mostConsulted = [
  { title: "Créer un site web professionnel en 2026 : le guide complet", slug: "creer-site-web-professionnel-guide", date: "11 avr. 2026", readingTime: 8 },
  { title: "Les 5 erreurs SEO qui ruinent votre référencement dès le départ", slug: "erreurs-seo-debutant", date: "8 mars 2026", readingTime: 5 },
  { title: "Pourquoi votre landing page ne convertit pas (et comment y remédier)", slug: "landing-page-ne-convertit-pas", date: "1 mars 2026", readingTime: 6 },
];

export default async function BlogPage() {
  const dbArticles = await getAllArticles();

  const articles = (dbArticles.length > 0
    ? dbArticles
        .sort((a, b) => {
          const da = a.date ? new Date(a.date).getTime() : 0;
          const db = b.date ? new Date(b.date).getTime() : 0;
          return db - da;
        })
        .map((a) => ({
          title: a.title,
          excerpt: a.description ?? undefined,
          slug: a.slug,
          category: getCategoryLabel(a.category),
          readingTime: a.readingTime ?? undefined,
          date: a.date ? new Date(a.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : undefined,
        }))
    : fallbackArticles);

  // Cap grid at 5 rows × 3 cols = 15 articles (excluding featured)
  const gridArticles = articles.slice(1, 16);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ maxWidth: "900px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Ressources pour entrepreneurs
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.5rem)", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1, color: "#1A1A1A" }}>
                Blog — web design, SEO et création de sites
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "36px", maxWidth: "580px" }}>
                Des articles de fond pour les entrepreneurs qui veulent comprendre le web, le SEO et les outils qui font vraiment la différence. Sans jargon inutile.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured + Les plus consultés */}
      {articles.length > 0 && (
        <section style={{ backgroundColor: "#ffffff", padding: "80px 0 56px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
            <AnimatedSection>
              <div className="featured-top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "28px", alignItems: "stretch" }}>

                {/* Bloc à la une */}
                <Link href={`/blog/${articles[0].slug}`} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", alignItems: "stretch", backgroundColor: "#F5F0E8", borderRadius: "24px", overflow: "hidden", maxHeight: "300px" }} className="featured-grid">
                  <div style={{ padding: "32px" }} className="featured-content">
                    <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                      {articles[0].category && (
                        <span style={{ padding: "3px 10px", backgroundColor: "rgba(243,199,9,0.2)", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#1A1A1A" }}>{articles[0].category}</span>
                      )}
                      <span style={{ padding: "3px 10px", backgroundColor: "rgba(0,0,0,0.06)", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "#6B7280" }}>À la une</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.55rem)", color: "#1A1A1A", letterSpacing: "-0.02em", marginBottom: "10px", lineHeight: 1.3 }}>{articles[0].title}</h2>
                    <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.6, marginBottom: "16px" }}>{articles[0].excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#1A1A1A" }}>
                      Lire l&apos;article <ArrowRight size={12} />
                    </div>
                  </div>
                  <div style={{ height: "100%", overflow: "hidden" }} className="featured-img">
                    <img
                      src={(() => {
                        const ids = ["photo-1499750310107-5fef28a66643","photo-1542744173-8e7e53415bb0","photo-1497366216548-37526070297c","photo-1551434678-e076c223a692","photo-1498050108023-c5249f4df085"];
                        const id = ids[articles[0].slug.charCodeAt(0) % ids.length];
                        return `https://images.unsplash.com/${id}?w=600&q=90`;
                      })()}
                      alt={articles[0].title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </Link>

                {/* Les plus consultés */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#1A1A1A", letterSpacing: "-0.02em" }}>
                      <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/ </span>les plus consultés
                    </p>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    {mostConsulted.map((item, i) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        style={{ textDecoration: "none", display: "flex", gap: "14px", alignItems: "flex-start", padding: "10px 0", borderBottom: i < mostConsulted.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}
                        className="consulted-row"
                      >
                        <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#E5E7EB", letterSpacing: "-0.04em", flexShrink: 0, lineHeight: 1, marginTop: "2px" }} className="consulted-num">
                          {i + 1}
                        </span>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#1A1A1A", lineHeight: 1.45, marginBottom: "6px" }} className="consulted-title">
                            {item.title}
                          </p>
                          <div style={{ display: "flex", gap: "12px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.7rem", color: "#9CA3AF" }}>
                              <Clock size={11} />{item.readingTime} min
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.7rem", color: "#9CA3AF" }}>
                              <Calendar size={11} />{item.date}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>
          <style>{`
            .consulted-row:hover .consulted-title { color: #F3C709 !important; }
          .consulted-row:hover .consulted-num { color: #F3C709 !important; }
            @media (max-width: 900px) {
              .featured-top-grid { grid-template-columns: 1fr !important; }
              .featured-top-grid > a + div { display: none !important; }
            }
            @media (max-width: 640px) {
              .featured-grid { grid-template-columns: 1fr !important; }
              .featured-img { display: none !important; }
              .featured-content { padding: 28px !important; }
            }
          `}</style>
        </section>
      )}

      {/* Article grid with filters */}
      <section style={{ backgroundColor: "#ffffff", padding: "0 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "40px" }}>
              <SlashTitle gray="dernières" black="publications" />
            </div>
          </AnimatedSection>
          <BlogFilter articles={gridArticles} />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
