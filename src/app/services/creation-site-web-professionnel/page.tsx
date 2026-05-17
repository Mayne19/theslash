import type { Metadata } from "next";
import Link from "next/link";
import { Search, TrendingUp, PenTool, Target, BarChart2, CheckCircle, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog & stratégie SEO — Attirer des clients via Google",
  description: "Créez un blog qui génère du trafic organique durable. Stratégie de contenu, SEO on-page, rédaction et structure pensée pour Google. Studio theslash.",
  openGraph: { url: "https://theslash.fr/services/creation-site-web-professionnel" },
};

const faqItems = [
  { question: "En combien de temps un blog commence à générer du trafic ?", answer: "En général, les premiers résultats SEO significatifs apparaissent entre 3 et 6 mois. C'est un investissement sur le long terme : le contenu travaille pour vous 24h/24, contrairement à la publicité qui s'arrête dès que vous coupez le budget." },
  { question: "Faut-il écrire beaucoup d'articles pour que ça fonctionne ?", answer: "Non. Mieux vaut 10 articles bien ciblés et bien rédigés que 100 articles génériques. Nous privilégions la qualité et la pertinence des sujets en fonction des mots-clés que cherchent vraiment vos clients potentiels." },
  { question: "Est-ce que vous rédigez les articles ou je dois le faire moi-même ?", answer: "Les deux options sont possibles. Nous pouvons rédiger les articles pour vous à partir d'un brief, ou structurer les articles et vous laisser les rédiger. Dans les deux cas, nous assurons l'optimisation SEO." },
  { question: "Quelle différence entre un blog SEO et un blog classique ?", answer: "Un blog classique publie ce qui vous intéresse. Un blog SEO publie ce que vos clients cherchent sur Google. Chaque article cible une intention de recherche précise, avec une structure pensée pour remonter dans les résultats." },
  { question: "Peut-on intégrer un blog à mon site existant ?", answer: "Oui. Si vous avez déjà un site, nous intégrons une section blog cohérente avec votre design et votre CMS. Si vous partez de zéro, nous créons un site complet avec le blog intégré." },
  { question: "Travaillez-vous avec des clients hors de France ?", answer: "Oui. France, Belgique, Suisse, Canada, Maghreb. Le travail se fait entièrement à distance." },
];

const inclus = [
  "Audit de mots-clés ciblés pour votre activité",
  "Calendrier éditorial structuré",
  "Rédaction ou optimisation des articles",
  "Structure SEO on-page (Hn, balises, meta)",
  "Maillage interne entre les articles",
  "Optimisation des images et temps de chargement",
  "Intégration au CMS de votre site",
  "Suivi des positions Google (Search Console)",
];

const reasons = [
  { icon: <Search className="w-5 h-5" />, title: "Ciblage par intention de recherche", text: "Chaque article cible une requête précise que tapent vos futurs clients sur Google. On ne publie pas au hasard." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Trafic durable, pas payant", text: "Contrairement aux publicités, le contenu SEO continue d'attirer des visiteurs des mois et des années après publication." },
  { icon: <PenTool className="w-5 h-5" />, title: "Contenu qui convertit", text: "Nos articles ne se contentent pas d'informer : ils guident le lecteur vers une action concrète — contact, achat, inscription." },
  { icon: <Target className="w-5 h-5" />, title: "Stratégie avant rédaction", text: "Avant d'écrire une ligne, on analyse votre marché, vos concurrents et les sujets qui ont du potentiel pour vous." },
  { icon: <BarChart2 className="w-5 h-5" />, title: "Résultats mesurables", text: "Search Console, positions, trafic, clics — tout est suivi et partagé pour mesurer concrètement la progression." },
];

export default function BlogStrategieSeoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Blog & stratégie SEO" }]} />
          <AnimatedSection>
            <div style={{ maxWidth: "760px", marginTop: "24px" }}>
              <div style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "rgba(243,199,9,0.12)",
                border: "1px solid rgba(243,199,9,0.3)",
                borderRadius: "50px",
                marginBottom: "24px",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#1A1A1A",
              }}>
                Contenu & référencement
              </div>
              <h1 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4.8vw, 4.25rem)",
                color: "#1A1A1A",
                letterSpacing: "-0.035em",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}>
                Blog & stratégie SEO pour attirer vos clients via Google
              </h1>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.1rem",
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: "28px",
                maxWidth: "580px",
              }}>
                Un blog bien construit est la machine à leads la plus rentable qui soit. On le conçoit, on le structure et on le remplit de contenu pensé pour Google et pour vos clients.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {["Mots-clés ciblés", "Contenu evergreen", "Trafic organique", "Sans pub payante"].map((tag) => (
                  <span key={tag} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: "50px",
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}>
                    <CheckCircle size={12} style={{ color: "#F3C709" }} />
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "15px 32px",
                  backgroundColor: "#1A1A1A",
                  color: "#ffffff",
                  borderRadius: "50px",
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                Démarrer ma stratégie SEO
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is it */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}
            className="two-col-grid"
          >
            <AnimatedSection>
              <div>
                <SlashTitle gray="pourquoi un blog" black="est votre meilleur commercial ?" as="h3" fontSize="clamp(1.7rem, 2.85vw, 2.25rem)" style={{ marginBottom: "16px" }} />
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "16px" }}>
                  La publicité arrête de fonctionner dès que vous coupez le budget. Un article SEO bien placé sur Google continue d&apos;attirer des visiteurs qualifiés pendant des années, sans coût supplémentaire.
                </p>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.75 }}>
                  Un blog stratégique, c&apos;est la différence entre attendre que les clients vous trouvent par hasard et être visible exactement au moment où ils cherchent ce que vous proposez.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80"
                  alt="Stratégie SEO et blog"
                  loading="lazy"
                  style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .two-col-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Pourquoi theslash */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="notre approche" black="du contenu SEO" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" baseDelay={0.08}>
            {reasons.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "rgba(243,199,9,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="ce qui" black="est inclus" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3" baseDelay={0.05}>
            {inclus.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 18px", backgroundColor: "#F5F0E8", borderRadius: "12px" }}>
                <CheckCircle size={16} style={{ color: "#22C55E", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#1A1A1A" }}>{item}</span>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Méthode */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="notre méthode" black="en 5 étapes" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { n: "01", title: "Audit & recherche de mots-clés", text: "On identifie les requêtes que tapent vos clients potentiels, celles qui ont du volume et peu de concurrence." },
              { n: "02", title: "Calendrier éditorial", text: "On planifie les sujets à couvrir, dans quel ordre, avec quelle priorité selon votre activité et vos objectifs." },
              { n: "03", title: "Rédaction & structuration", text: "Chaque article est construit avec un plan SEO précis : titres Hn, intro, corps, conclusion, liens internes." },
              { n: "04", title: "Optimisation technique", text: "Balises meta, images compressées et alt text, vitesse de chargement, balisage schema.org si pertinent." },
              { n: "05", title: "Suivi & ajustements", text: "Suivi mensuel des positions sur Search Console. Ajustements des articles qui peuvent progresser." },
            ].map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.05}>
                <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "18px 22px", display: "flex", gap: "16px", alignItems: "flex-start", border: "1px solid rgba(0,0,0,0.04)" }}>
                  <div style={{ flexShrink: 0, width: "38px", height: "38px", backgroundColor: "rgba(243,199,9,0.15)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "0.78rem", color: "#1A1A1A" }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1A1A1A", marginBottom: "3px" }}>{step.title}</h3>
                    <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.83rem", color: "#6B7280", lineHeight: 1.65 }}>{step.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQSplit
        items={faqItems}
        grayTitle="vos questions,"
        blackTitle="nos réponses"
        imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80"
        imageCaption="Le SEO, c'est un investissement. On vous explique honnêtement ce que vous pouvez attendre et quand."
      />
      <CTASection title="Prêt à construire votre audience organique ?" cta="Démarrer ma stratégie SEO" ctaHref="/contact" />
    </>
  );
}
