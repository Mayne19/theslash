import type { Metadata } from "next";
import { Target, Search, Zap, MessageSquare, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import DashboardWidgets from "@/components/DashboardWidgets";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SlashTitle from "@/components/SlashTitle";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "À propos — Studio web francophone",
  description: "Qui sommes-nous ? / theslash est un studio web francophone qui crée des sites performants pour les entrepreneurs. Notre mission, notre approche, notre stack.",
  openGraph: { url: "https://theslash.fr/a-propos" },
};


const approach = [
  { icon: <Target className="w-5 h-5" />, title: "Stratégie avant esthétique", text: "On commence par comprendre votre activité, vos clients et vos objectifs. Le design n'est qu'un outil, pas la fin en soi." },
  { icon: <Search className="w-5 h-5" />, title: "SEO intégré dès le départ", text: "On ne fait pas du SEO après. On construit des sites pensés pour Google depuis la première ligne de code." },
  { icon: <Zap className="w-5 h-5" />, title: "Performance non négociable", text: "Un site lent perd des clients. On optimise systématiquement les Core Web Vitals. Performance = chiffre d'affaires." },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Honnêteté totale", text: "On vous dit ce dont vous avez besoin, pas ce qui nous arrange le plus. Si votre projet ne nécessite pas ce que vous pensez vouloir, on vous le dit." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "/ theslash",
  url: "https://theslash.fr",
  description: "Studio web francophone, création de sites web professionnels pour entrepreneurs",
  foundingDate: "2024",
};

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ maxWidth: "760px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Studio web francophone
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.5rem)", color: "#1A1A1A", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1 }}>
                À propos<br />de <span style={{ color: "#A0A0A0", fontWeight: 800 }}>/</span><span style={{ color: "#A0A0A0", fontWeight: 800 }}> the</span><span style={{ color: "#F3C709", fontWeight: 800 }}>slash</span>
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.8, maxWidth: "580px" }}>
                On crée des sites web pour les entrepreneurs qui veulent une vraie présence digitale. Pas des templates. Pas du code bâclé. Du travail pensé pour durer.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pourquoi Yuzzu */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 6vw, 80px)", alignItems: "center" }} className="about-why-grid">
            <AnimatedSection>
              <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "1/1" }}>
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80"
                  alt="Studio / theslash"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "20px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Notre histoire
              </div>
              <SlashTitle gray="pourquoi" black="theslash ?" style={{ marginBottom: "24px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.8 }}>
                  Le slash, c&apos;est la barre oblique qu&apos;on met avant ce qui compte vraiment. Un symbole de clarté, de structure, de précision.
                </p>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.8 }}>
                  On a lancé / theslash parce qu&apos;on voyait trop d&apos;entrepreneurs avec des sites qui ne les représentaient pas. Des templates achetés 30€, mal configurés, lents, mal référencés. Des sites qui existent mais ne travaillent pas.
                </p>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.8, fontWeight: 600 }}>
                  Notre conviction : un site web professionnel peut et doit être un actif commercial réel, pas une case cochée.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-why-grid { grid-template-columns: 1fr !important; }
            .about-why-grid > *:first-child { display: none !important; }
          }
        `}</style>
      </section>

      {/* Notre approche */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="notre" black="approche" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
            {approach.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#F5F0E8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Ce en quoi on croit */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="ce en quoi" black="on croit" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Un site doit générer de la valeur, pas juste exister.",
              "Le code propre et la maintenance facilitée sont des respects envers le client.",
              "Le SEO n'est pas une magie noire, c'est de la rigueur et de la cohérence.",
              "Un design mémorable se construit sur une stratégie solide.",
              "La transparence sur les tarifs et les délais est la base d'une bonne relation.",
              "Le travail en français ne devrait pas rimer avec travail au rabais.",
            ].map((principle, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 18px", backgroundColor: "#F5F0E8", borderRadius: "12px" }}>
                  <CheckCircle size={16} style={{ color: "#1A1A1A", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#1A1A1A" }}>{principle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Widgets */}
      <DashboardWidgets />

      {/* Témoignages */}
      <TestimonialsCarousel />

      {/* Notre stack technique */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "20px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Technologies
              </div>
              <SlashTitle gray="notre stack" black="technique" style={{ marginBottom: "12px" }} />
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
                Des outils modernes, éprouvés en production. Maintenables, scalables, conçus pour durer.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Row 1 — scrolls left. 10 unique tools × 2 copies = seamless loop.
            Each item: width 64px + marginRight 120px = 184px footprint.
            10 items × 184px = 1840px per copy. translateX(-50%) = -1840px = exactly 1 copy. */}
        <div style={{
          overflow: "hidden",
          marginBottom: "48px",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <div
            className="marquee-left"
            style={{ display: "flex", willChange: "transform" }}
            aria-hidden="true"
          >
            {[
              { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/6B7280" },
              { name: "React", src: "https://cdn.simpleicons.org/react/6B7280" },
              { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/6B7280" },
              { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/6B7280" },
              { name: "Figma", src: "https://cdn.simpleicons.org/figma/6B7280" },
              { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/6B7280" },
              { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
              { name: "Framer Motion", src: "https://cdn.simpleicons.org/framer/6B7280" },
              { name: "ChatGPT", src: "https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT-Logo.svg" },
              { name: "Prisma", src: "https://cdn.simpleicons.org/prisma/6B7280" },
              /* duplicate */
              { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/6B7280" },
              { name: "React", src: "https://cdn.simpleicons.org/react/6B7280" },
              { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/6B7280" },
              { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/6B7280" },
              { name: "Figma", src: "https://cdn.simpleicons.org/figma/6B7280" },
              { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/6B7280" },
              { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
              { name: "Framer Motion", src: "https://cdn.simpleicons.org/framer/6B7280" },
              { name: "ChatGPT", src: "https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT-Logo.svg" },
              { name: "Prisma", src: "https://cdn.simpleicons.org/prisma/6B7280" },
            ].map((logo, i) => (
              <div
                key={`r1-${i}`}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "12px",
                  width: "64px",
                  marginRight: "120px",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={64}
                  height={64}
                  style={{ width: "64px", height: "64px", objectFit: "contain", filter: "brightness(0) opacity(0.45)" }}
                />
                <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.8rem", color: "#9CA3AF", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right. Same logic. */}
        <div style={{
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <div
            className="marquee-right"
            style={{ display: "flex", willChange: "transform", transform: "translateX(-50%)" }}
            aria-hidden="true"
          >
            {[
              { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/6B7280" },
              { name: "GitHub", src: "https://cdn.simpleicons.org/github/6B7280" },
              { name: "Python", src: "https://cdn.simpleicons.org/python/6B7280" },
              { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/6B7280" },
              { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/6B7280" },
              { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/6B7280" },
              { name: "Docker", src: "https://cdn.simpleicons.org/docker/6B7280" },
              { name: "Claude", src: "https://cdn.simpleicons.org/anthropic/6B7280" },
              { name: "Perplexity", src: "https://cdn.simpleicons.org/perplexity/6B7280" },
              { name: "n8n", src: "https://cdn.simpleicons.org/n8n/6B7280" },
              /* duplicate */
              { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/6B7280" },
              { name: "GitHub", src: "https://cdn.simpleicons.org/github/6B7280" },
              { name: "Python", src: "https://cdn.simpleicons.org/python/6B7280" },
              { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/6B7280" },
              { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/6B7280" },
              { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/6B7280" },
              { name: "Docker", src: "https://cdn.simpleicons.org/docker/6B7280" },
              { name: "Claude", src: "https://cdn.simpleicons.org/anthropic/6B7280" },
              { name: "Perplexity", src: "https://cdn.simpleicons.org/perplexity/6B7280" },
              { name: "n8n", src: "https://cdn.simpleicons.org/n8n/6B7280" },
            ].map((logo, i) => (
              <div
                key={`r2-${i}`}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "12px",
                  width: "64px",
                  marginRight: "120px",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={64}
                  height={64}
                  style={{ width: "64px", height: "64px", objectFit: "contain", filter: "brightness(0) opacity(0.45)" }}
                />
                <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.8rem", color: "#9CA3AF", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee-scroll-left {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes marquee-scroll-right {
            from { transform: translateX(-50%); }
            to   { transform: translateX(0); }
          }
          .marquee-left {
            animation: marquee-scroll-left 40s linear infinite;
          }
          .marquee-right {
            animation: marquee-scroll-right 40s linear infinite;
          }
        `}</style>
      </section>

      <CTASection title="Travaillons ensemble" cta="Démarrer un projet" ctaHref="/contact" />
    </>
  );
}
