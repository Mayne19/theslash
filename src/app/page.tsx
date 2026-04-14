import type { Metadata } from "next";
import Link from "next/link";
import {
  Home, Target, RefreshCw, Code2, PenTool, Layers,
  ArrowRight, CheckCircle, Zap, Lock, TrendingUp, Gem,
} from "lucide-react";
import NumberedServiceCard from "@/components/NumberedServiceCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";
import HeroHome from "@/components/HeroHome";
import StatsBanner from "@/components/StatsBanner";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import NewsletterSection from "@/components/NewsletterSection";
import GrowthChart from "@/components/ui/GrowthChart";
import SeoWidget from "@/components/ui/SeoWidget";

export const metadata: Metadata = {
  title: { absolute: "theslash — Création de sites web professionnels pour entrepreneurs | Studio web francophone" },
  description:
    "theslash crée des sites web modernes, performants et optimisés pour Google. Sites vitrines, landing pages, refontes et applications web sur mesure pour entrepreneurs francophones.",
};

const numberedServices = [
  {
    num: "01",
    icon: <Home className="w-7 h-7" />,
    title: "Site vitrine",
    description: "Pour les freelances, coachs, consultants et PME qui veulent présenter leur activité de façon claire et professionnelle.",
    href: "/services/site-vitrine",
  },
  {
    num: "02",
    icon: <Target className="w-7 h-7" />,
    title: "Landing page",
    description: "Pour vendre une offre précise, promouvoir un événement ou lancer un produit. Chaque élément est pensé pour convertir.",
    href: "/services/landing-page",
  },
  {
    num: "03",
    icon: <RefreshCw className="w-7 h-7" />,
    title: "Refonte de site web",
    description: "Votre site existe déjà mais est lent ou ne convertit pas ? Nous le repensons de zéro, design, performance et SEO.",
    href: "/services/refonte-site-web",
  },
  {
    num: "04",
    icon: <Code2 className="w-7 h-7" />,
    title: "Application web sur mesure",
    description: "Pour les projets ambitieux : SaaS, espaces membres, outils métier. Du développement adapté à votre besoin exact.",
    href: "/services/app-web-sur-mesure",
  },
  {
    num: "05",
    icon: <PenTool className="w-7 h-7" />,
    title: "Blog & stratégie SEO",
    description: "Pour construire une audience durable et attirer des clients via Google sur le long terme.",
    href: "/services/creation-site-web-professionnel",
  },
  {
    num: "06",
    icon: <Layers className="w-7 h-7" />,
    title: "Site Webflow / No-code",
    description: "Sites designés visuellement, sans code. Pour les clients qui veulent gérer leur site en totale autonomie après livraison.",
    href: "/services/site-no-code",
  },
];

const method = [
  { num: "01", title: "Cadrage du besoin", text: "On comprend votre activité, vos clients cibles, vos objectifs et ce que votre site doit accomplir concrètement." },
  { num: "02", title: "Architecture des pages", text: "On définit ensemble la structure du site, quelles pages, dans quel ordre, avec quelle logique de navigation." },
  { num: "03", title: "Wireframe & structure SEO", text: "Avant le design, on pose la structure éditoriale : titres, sections, maillage interne, intention de chaque page." },
  { num: "04", title: "Design sur mesure", text: "Un design pensé pour votre image, votre cible et vos objectifs, pas un thème modifié à la va-vite." },
  { num: "05", title: "Développement", text: "Code propre, site rapide, responsive sur tous les écrans, optimisé pour les Core Web Vitals de Google." },
  { num: "06", title: "SEO on-page de base", text: "Balises, structure Hn, meta descriptions, images optimisées, sitemap, tout est en place avant la mise en ligne." },
  { num: "07", title: "Livraison & accompagnement", text: "Vous recevez un site fonctionnel, documenté, et nous restons disponibles pour les ajustements." },
];

const whyItems = [
  { icon: <Zap className="w-5 h-5" />, title: "La crédibilité se joue en 3 secondes", text: "Avant de vous appeler, votre futur client cherche votre nom sur Google. Un site professionnel, c'est votre première impression." },
  { icon: <Lock className="w-5 h-5" />, title: "Vous ne pouvez pas dépendre des réseaux", text: "Instagram peut vous suspendre. L'algorithme peut changer du jour au lendemain. Votre site, lui, vous appartient." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Un site bien construit acquiert des clients", text: "Chaque article publié, chaque page bien structurée est une porte d'entrée supplémentaire, sans payer de publicité." },
  { icon: <Gem className="w-5 h-5" />, title: "Votre image mérite mieux qu'un Linktree", text: "Vous avez travaillé sur votre offre et votre expertise. Votre vitrine digitale doit être à la hauteur." },
];

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "/ theslash",
    url: "https://theslash.fr",
    logo: "https://theslash.fr/logo-icone.png",
    description: "Studio web francophone, création de sites web professionnels pour entrepreneurs",
    contactPoint: { "@type": "ContactPoint", email: "hello@theslash.fr" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* 1. HERO */}
      <HeroHome />

      {/* 2. STATS BANNER */}
      <StatsBanner />

      {/* 3. POURQUOI NOUS CHOISIR */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
          className="two-col-grid"
          >
            <AnimatedSection>
              <div>
                <div style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  backgroundColor: "rgba(243,199,9,0.12)",
                  border: "1px solid rgba(243,199,9,0.3)",
                  borderRadius: "50px",
                  marginBottom: "20px",
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  color: "#1A1A1A",
                }}>
                  pourquoi / theslash
                </div>
                <h2 style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                  lineHeight: 1.15,
                }}>
                  <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                  <span style={{ color: "#A0A0A0", fontWeight: 700 }}>pourquoi créer un site web</span>{" "}
                  <span style={{ color: "#1A1A1A", fontWeight: 800 }}>professionnel aujourd&apos;hui</span>
                </h2>
                <p style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontSize: "1rem",
                  color: "#6B7280",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                }}>
                  Votre site web n&apos;est pas un luxe. C&apos;est votre actif digital le plus important, et le seul que personne ne peut vous retirer.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {whyItems.map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "10px",
                        backgroundColor: "rgba(243,199,9,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#1A1A1A", flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1A1A1A", marginBottom: "3px" }}>{item.title}</p>
                        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.65 }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <div className="seowidget-col" style={{ display: "flex", justifyContent: "center" }}>
              <SeoWidget />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .two-col-grid { grid-template-columns: 1fr !important; }
            .seowidget-col { display: none !important; }
          }
        `}</style>
      </section>

      {/* 4. NOS SERVICES */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "64px" }}>
              <div style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "rgba(243,199,9,0.12)",
                border: "1px solid rgba(243,199,9,0.3)",
                borderRadius: "50px",
                marginBottom: "20px",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#1A1A1A",
              }}>
                Nos services
              </div>
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                marginBottom: "12px",
              }}>
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>les sites web</span>{" "}
                <span style={{ color: "#1A1A1A", fontWeight: 800 }}>que nous créons</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.05rem",
                color: "#6B7280",
                maxWidth: "520px",
                lineHeight: 1.7,
              }}>
                Chaque projet est unique. Nous construisons la solution qui correspond à vos objectifs.
              </p>
            </div>
          </AnimatedSection>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="services-grid-home"
          >
            {numberedServices.map((s) => (
              <NumberedServiceCard key={s.href} {...s} />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link
                href="/services"
                className="hover:bg-[#1A1A1A] hover:text-white"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 30px",
                  border: "2px solid #1A1A1A",
                  color: "#1A1A1A",
                  borderRadius: "50px",
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 200ms",
                }}
              >
                Découvrir tous nos services
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <style>{`
          @media (max-width: 900px) { .services-grid-home { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .services-grid-home { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* 5. MÉTHODE */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "rgba(243,199,9,0.12)",
                border: "1px solid rgba(243,199,9,0.3)",
                borderRadius: "50px",
                marginBottom: "20px",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#1A1A1A",
              }}>
                Notre méthode
              </div>
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}>
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>comment nous</span>{" "}
                <span style={{ color: "#1A1A1A", fontWeight: 800 }}>créons votre site</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.05rem",
                color: "#6B7280",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                Nous ne livrons pas des templates. Chaque projet est construit à partir de zéro.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {method.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.07}>
                <div style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(243,199,9,0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                    color: "#1A1A1A",
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#1A1A1A",
                      marginBottom: "4px",
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontSize: "0.85rem",
                      color: "#6B7280",
                      lineHeight: 1.7,
                    }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GRAPHE DE CROISSANCE */}
      <section style={{ backgroundColor: "#111111", padding: "96px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "rgba(243,199,9,0.15)",
                border: "1px solid rgba(243,199,9,0.3)",
                borderRadius: "50px",
                marginBottom: "20px",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#F3C709",
              }}>
                Résultats mesurables
              </div>
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}>
                <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>/</span>{" "}
                <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>croissance du trafic client moyen</span>{" "}
                <span style={{ color: "#ffffff", fontWeight: 800 }}>+340%</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                La moyenne observée chez nos clients dans les 12 premiers mois suivant la mise en ligne.
              </p>
            </div>
          </AnimatedSection>
          <GrowthChart />
          <AnimatedSection delay={0.4}>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 64px)", marginTop: "48px", flexWrap: "wrap" }}>
              {[
                { label: "Trafic organique moyen", value: "+340%" },
                { label: "Durée projet moyenne", value: "4-6 sem." },
                { label: "Satisfaction client", value: "4.9 / 5" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#F3C709", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. BLOG */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "rgba(243,199,9,0.12)",
                border: "1px solid rgba(243,199,9,0.3)",
                borderRadius: "50px",
                marginBottom: "20px",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#1A1A1A",
              }}>
                Ressources gratuites
              </div>
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}>
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>derniers articles</span>{" "}
                <span style={{ color: "#1A1A1A", fontWeight: 800 }}>du blog</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.05rem",
                color: "#6B7280",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                Conseils pratiques sur le web design, le SEO et la création de sites.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6" baseDelay={0.08}>
            {[
              { title: "Comment choisir le bon CMS pour votre site en 2026", excerpt: "WordPress, Webflow, Next.js + Keystatic, on décortique les options pour vous aider à faire le bon choix.", slug: "comment-choisir-son-cms-2026", category: "Création de site", readingTime: 7 },
              { title: "Les 5 erreurs SEO qui ruinent votre référencement dès le départ", excerpt: "Des balises title manquantes aux pages orphelines, voici les pièges les plus courants, et comment les éviter.", slug: "erreurs-seo-debutant", category: "SEO", readingTime: 5 },
              { title: "Pourquoi votre landing page ne convertit pas (et comment y remédier)", excerpt: "Copywriting flou, CTA enterré, trop d'options, les raisons sont souvent simples mais coûtent cher.", slug: "landing-page-ne-convertit-pas", category: "Web Design", readingTime: 6 },
            ].map((article) => <ArticleCard key={article.slug} {...article} />)}
          </AnimatedGrid>
          <AnimatedSection delay={0.3}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link
                href="/blog"
                className="hover:bg-[#1A1A1A] hover:text-white"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 30px",
                  border: "2px solid #1A1A1A",
                  color: "#1A1A1A",
                  borderRadius: "50px",
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 200ms",
                }}
              >
                Voir tous les articles
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. TÉMOIGNAGES */}
      <TestimonialsCarousel />

      {/* 9. NEWSLETTER */}
      <NewsletterSection />

      {/* 10. CTA FINAL */}
      <CTASection />
    </>
  );
}
