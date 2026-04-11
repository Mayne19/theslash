import type { Metadata } from "next";
import Link from "next/link";
import { Target, Search, Zap, Globe, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Création site web professionnel sur mesure",
  description: "Création de site web professionnel sur mesure pour entrepreneurs. Design, SEO, performance, tout inclus. Studio web francophone theslash.",
  openGraph: { url: "https://theslash.fr/services/creation-site-web-professionnel" },
};

const faqItems = [
  { question: "Quelle est la différence entre un site vitrine et un site web professionnel ?", answer: "Un site vitrine est un type de site professionnel. Un site web professionnel, c'est le terme général qui désigne tout site créé avec une intention business : vitrine, e-commerce, blog, application. Chez / theslash, on parle d'un site complet, pensé stratégiquement pour votre activité." },
  { question: "Combien coûte la création d'un site web professionnel ?", answer: "Cela dépend de la complexité de votre projet. Un site vitrine simple commence autour de 800€. Un site avec plusieurs pages, un blog et une structure SEO avancée peut aller jusqu'à 3 000€. Contactez-nous pour une estimation précise." },
  { question: "En combien de temps mon site sera-t-il prêt ?", answer: "Entre 2 et 6 semaines selon la complexité. Un site vitrine 5 pages peut être livré en 2 à 3 semaines. Un site avec blog et structure SEO complexe prendra 4 à 6 semaines." },
  { question: "Est-ce que mon site sera optimisé pour Google ?", answer: "Oui, systématiquement. SEO technique, structure Hn, balises meta, sitemap, performance Core Web Vitals, tout est pensé pour le référencement dès le départ, pas ajouté après coup." },
  { question: "Puis-je modifier le contenu de mon site moi-même ?", answer: "Oui. Nous intégrons un CMS simple qui vous permet de gérer vos textes, images et articles sans toucher au code. Une documentation est fournie à la livraison." },
  { question: "Que se passe-t-il après la livraison ?", answer: "Vous recevez un site fonctionnel, documenté, avec accès au CMS. Nous restons disponibles pendant 30 jours pour les ajustements mineurs." },
  { question: "Travaillez-vous avec des clients hors de France ?", answer: "Oui. France, Belgique, Suisse, Canada, Maghreb. Le travail se fait à distance, sans contrainte de localisation." },
];

const inclus = [
  "Design sur mesure (pas de template)",
  "Développement Next.js ou adapté au projet",
  "Structure SEO complète (Hn, balises, sitemap)",
  "Responsive mobile / tablette / desktop",
  "CMS pour gérer votre contenu",
  "Optimisation des images et performance",
  "Formulaire de contact",
  "Google Analytics ou équivalent",
  "Documentation de livraison",
  "30 jours de support post-livraison",
];

const reasons = [
  { icon: <Target className="w-5 h-5" />, title: "Stratégie avant design", text: "Avant de créer une seule maquette, on comprend votre activité, votre cible et vos objectifs. Le design vient ensuite, pas l'inverse." },
  { icon: <Search className="w-5 h-5" />, title: "SEO pensé dès la structure", text: "Chaque page est construite avec une intention de recherche précise. Les titres, les sections, les mots-clés, tout est pensé pour Google." },
  { icon: <Zap className="w-5 h-5" />, title: "Performance maximale", text: "Sites Next.js ultra-rapides, optimisés pour les Core Web Vitals. Un site lent, c'est du chiffre d'affaires perdu." },
  { icon: <Globe className="w-5 h-5" />, title: "Accompagnement francophone", text: "Vous êtes servi en français, sans jargon, avec un interlocuteur unique du début à la fin." },
  { icon: <Smartphone className="w-5 h-5" />, title: "100% responsive", text: "Chaque site est testé sur mobile, tablette et desktop. Plus de 70% de votre trafic vient du mobile." },
];

export default function CreationSiteWebPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Création site web professionnel" }]} />
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
                Service phare
              </div>
              <h1 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 5vw, 4.5rem)",
                color: "#1A1A1A",
                letterSpacing: "-0.035em",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}>
                Création de site web professionnel sur mesure
              </h1>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.1rem",
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: "28px",
                maxWidth: "580px",
              }}>
                Pas un template. Pas un thème modifié. Un site construit de zéro, pensé pour votre activité, votre cible et vos objectifs, avec le SEO intégré dès la structure.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {["SEO intégré", "Design unique", "Code propre", "Livraison documentée"].map((tag) => (
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
                Demander un devis
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is it */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
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
                <SlashTitle gray="c'est quoi," black="un site web professionnel ?" as="h3" fontSize="clamp(1.8rem, 3vw, 2.4rem)" style={{ marginBottom: "16px" }} />
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "16px" }}>
                  Un site web professionnel, ce n&apos;est pas juste un site &ldquo;beau&rdquo;. C&apos;est un site conçu pour atteindre un objectif business précis : générer des leads, vendre une offre, asseoir une crédibilité.
                </p>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.75 }}>
                  Ça implique une réflexion stratégique sur la structure des pages, le contenu, le parcours utilisateur, l&apos;optimisation pour Google, et bien sûr, un design à la hauteur de votre image.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Création site web professionnel"
                  style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .two-col-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Pourquoi Yuzzu */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="pourquoi confier" black="votre site à / theslash ?" />
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
              <SlashTitle gray="notre méthode" black="en 7 étapes" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { n: "01", title: "Cadrage", text: "On comprend votre activité, vos clients cibles et vos objectifs." },
              { n: "02", title: "Architecture", text: "Quelles pages, dans quel ordre, avec quelle logique de navigation." },
              { n: "03", title: "Structure SEO", text: "Titres, sections, maillage interne, intention de chaque page." },
              { n: "04", title: "Design", text: "Maquettes sur mesure, validées avec vous avant développement." },
              { n: "05", title: "Développement", text: "Code propre, rapide, optimisé Core Web Vitals." },
              { n: "06", title: "SEO on-page", text: "Balises, images optimisées, sitemap, prêt avant mise en ligne." },
              { n: "07", title: "Livraison", text: "Site fonctionnel, documenté, avec formation CMS si besoin." },
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
        imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
        imageCaption="Chaque projet commence par une vraie conversation, pas un formulaire."
      />
      <CTASection title="Prêt à créer votre site web professionnel ?" cta="Demander un devis" ctaHref="/contact" />
    </>
  );
}
