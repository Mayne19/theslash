import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Home, Target, RefreshCw, Code2, Layers, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import NumberedServiceCard from "@/components/NumberedServiceCard";
import ServiceAccordion from "@/components/ServiceAccordion";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services web, Création, design et développement | / theslash",
  description: "Création de sites web, landing pages, refontes et applications web sur mesure pour entrepreneurs. Studio web francophone, solutions pensées pour convertir.",
  openGraph: { url: "https://theslash.fr/services" },
};

const numberedServices = [
  { num: "01", icon: <Globe className="w-7 h-7" />, title: "Création de site web professionnel", description: "De la stratégie au lancement : structure SEO, design sur mesure, développement performant. Pour les entrepreneurs qui veulent un site qui travaille pour eux.", href: "/services/creation-site-web-professionnel" },
  { num: "02", icon: <Home className="w-7 h-7" />, title: "Création de site vitrine", description: "Pour présenter votre activité de façon claire et professionnelle. Simple, efficace, orienté contact.", href: "/services/site-vitrine" },
  { num: "03", icon: <Target className="w-7 h-7" />, title: "Création de landing page", description: "Une page pensée pour une seule chose : convertir. Copywriting, design et structure optimisés pour le taux de conversion.", href: "/services/landing-page" },
  { num: "04", icon: <RefreshCw className="w-7 h-7" />, title: "Refonte de site web", description: "Votre site existe déjà mais ne convertit pas ? On le repense de zéro, design, performance et SEO.", href: "/services/refonte-site-web" },
  { num: "05", icon: <Code2 className="w-7 h-7" />, title: "Application web sur mesure", description: "Pour les projets ambitieux : SaaS, espaces membres, outils métier. Développement sur mesure.", href: "/services/app-web-sur-mesure" },
  { num: "06", icon: <Layers className="w-7 h-7" />, title: "Site Webflow / No-code", description: "Sites designés visuellement, sans code. Pour les clients qui veulent gérer leur site en totale autonomie après livraison.", href: "/services/site-no-code" },
];

const accordionServices = [
  { icon: <Globe className="w-4 h-4" />, title: "Création de site web professionnel", description: "Un site complet, pensé stratégiquement pour votre activité, structure SEO, design sur mesure, performance Core Web Vitals. De la maquette au lancement.", tags: ["Stratégie", "Design", "SEO", "Livraison"], href: "/services/creation-site-web-professionnel" },
  { icon: <Home className="w-4 h-4" />, title: "Création de site vitrine", description: "Pour les freelances, coachs, consultants et PME qui veulent présenter leur activité de façon claire et professionnelle.", tags: ["Vitrine", "Contact", "Mobile-first"], href: "/services/site-vitrine" },
  { icon: <Target className="w-4 h-4" />, title: "Création de landing page", description: "Une page, un objectif. Copywriting, design et structure optimisés pour convertir les visiteurs en clients, abonnés ou prospects.", tags: ["Conversion", "Copywriting", "A/B test"], href: "/services/landing-page" },
  { icon: <RefreshCw className="w-4 h-4" />, title: "Refonte de site web", description: "Votre site existe mais est lent, vieillissant ou ne convertit pas. On le repense de zéro avec une approche stratégique.", tags: ["Audit", "Redesign", "Performance"], href: "/services/refonte-site-web" },
  { icon: <Code2 className="w-4 h-4" />, title: "Application web sur mesure", description: "Pour les projets ambitieux : SaaS, espaces membres, outils métier. Du développement adapté à votre besoin exact.", tags: ["SaaS", "Next.js", "API", "Scalable"], href: "/services/app-web-sur-mesure" },
  { icon: <Layers className="w-4 h-4" />, title: "Site Webflow / No-code", description: "Sites designés visuellement, sans code. Pour les clients qui veulent gérer leur site en totale autonomie après livraison.", tags: ["Webflow", "No-code", "Autonomie", "CMS"], href: "/services/site-no-code" },
];

const faqItems = [
  { question: "Comment savoir quel service choisir ?", answer: "Tout dépend de votre objectif. Si vous lancez votre activité, un site vitrine est la base. Si vous avez une offre précise à vendre, une landing page est plus efficace. Si vous avez déjà un site mais qu'il ne performe pas, une refonte est la bonne option. En cas de doute, contactez-nous, on vous orientera honnêtement." },
  { question: "Quels sont vos délais de livraison ?", answer: "Cela dépend de la complexité du projet. Un site vitrine peut être livré en 2 à 3 semaines. Une landing page en 1 à 2 semaines. Une refonte complète ou une application web demande généralement 4 à 8 semaines. Nous définissons ensemble un planning au début du projet." },
  { question: "Proposez-vous des forfaits mensuels ?", answer: "Non, nous travaillons principalement sur des projets au forfait. Vous payez pour un livrable précis, pas un abonnement. Des services de maintenance et de suivi peuvent être proposés après la livraison." },
  { question: "Puis-je gérer le contenu de mon site moi-même ?", answer: "Oui, tous les sites que nous créons sont livrés avec un CMS simple à utiliser. Vous pouvez modifier vos textes, images et articles sans toucher au code. Une documentation vous est également fournie." },
  { question: "Travaillez-vous avec des clients hors de France ?", answer: "Oui. Nous travaillons avec des entrepreneurs francophones partout dans le monde, France, Belgique, Suisse, Canada, Maghreb. Le travail se fait à distance, sans contrainte de localisation." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "80px 0 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ maxWidth: "900px" }}>
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
                Studio web francophone
              </div>
              <h1 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                color: "#1A1A1A",
                letterSpacing: "-0.035em",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}>
                Services web : création,<br />
                <span style={{ color: "#F3C709" }}>design et développement</span><br />
                sur mesure
              </h1>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1.1rem",
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: "36px",
                maxWidth: "580px",
              }}>
                Nous ne vendons pas des packages identiques. Nous analysons votre situation, comprenons votre objectif, et construisons la solution qui correspond.
              </p>
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
                Parler de mon projet
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Numbered service cards */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "48px" }}>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#9CA3AF",
                marginBottom: "8px",
              }}>
                Top-Notch Services
              </p>
              <SlashTitle gray="pour entrepreneurs" black="& indépendants" />
            </div>
          </AnimatedSection>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="services-grid"
          >
            {numberedServices.map((s, i) => (
              <NumberedServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .services-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Service accordion */}
      <ServiceAccordion items={accordionServices} />

      {/* FAQ split */}
      <FAQSplit
        items={faqItems}
        grayTitle="questions"
        blackTitle="fréquentes"
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
        imageCaption="Des questions ? On vous répond honnêtement, sans jargon ni vente forcée."
      />

      <CTASection cta="Démarrer un projet" ctaHref="/contact" />
    </>
  );
}
