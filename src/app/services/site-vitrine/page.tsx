import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Brain, Store, Building2, User, Search, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Création site vitrine professionnel",
  description: "Création de site vitrine professionnel pour freelances, coachs, consultants et PME. Design sur mesure, SEO intégré, responsive. Studio web theslash.",
  openGraph: { url: "https://theslash.fr/services/site-vitrine" },
};

const faqItems = [
  { question: "Qu'est-ce qu'un site vitrine ?", answer: "Un site vitrine est un site web dont l'objectif principal est de présenter votre activité, vos services et votre expertise pour générer des demandes de contact. C'est votre carte de visite digitale, disponible 24h/24, 7j/7." },
  { question: "Combien de pages comprend un site vitrine ?", answer: "Généralement entre 4 et 8 pages : Accueil, Services, À propos, Contact, et parfois Blog, Témoignages ou Réalisations. Nous définissons ensemble la structure la plus adaptée à votre activité." },
  { question: "Combien coûte un site vitrine professionnel ?", answer: "Un site vitrine professionnel sur mesure commence autour de 800€. Le prix varie selon le nombre de pages, la complexité du design et les fonctionnalités demandées." },
  { question: "Est-ce que mon site vitrine sera visible sur Google ?", answer: "Oui, c'est une priorité. Tous nos sites sont livrés avec une structure SEO de base : balises title et description optimisées, structure Hn cohérente, sitemap, images compressées et textes alternatifs." },
];

const audiences = [
  { icon: <Briefcase className="w-5 h-5" />, title: "Freelances et indépendants", text: "Développeur, graphiste, photographe, rédacteur, votre site vitrine est votre premier outil commercial. Il montre qui vous êtes, ce que vous faites, et donne envie de travailler avec vous." },
  { icon: <Brain className="w-5 h-5" />, title: "Coachs et consultants", text: "Dans votre domaine, la crédibilité est tout. Un site professionnel bien structuré, avec vos expertises et vos témoignages clients, est l'outil qui transforme une première impression en prise de contact." },
  { icon: <Store className="w-5 h-5" />, title: "Artisans et prestataires locaux", text: "Plombier, architecte d'intérieur, traiteur, avocat, vos clients cherchent vos services sur Google. Sans site, vous n'existez pas. Avec un bon site, vous capturez cette demande." },
  { icon: <Building2 className="w-5 h-5" />, title: "TPE et PME", text: "Vous avez une structure, une équipe, une offre structurée. Votre site doit refléter votre professionnalisme et votre sérieux, pas ressembler à un template générique." },
];

const included = [
  "Design sur mesure adapté à votre identité",
  "Structure SEO optimisée dès le départ",
  "Responsive mobile-first, rapide sur tous appareils",
  "CMS intégré pour gérer votre contenu seul",
  "Formulaire de contact sécurisé anti-spam",
  "Google Analytics et Search Console configurés",
  "Certificat SSL et hébergement conseillé",
  "Documentation et formation à la prise en main",
];

export default function SiteVitrineService() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Site vitrine" }]} />
          <AnimatedSection>
            <div style={{ maxWidth: "720px", marginTop: "24px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Présence professionnelle
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.5rem)", color: "#1A1A1A", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1 }}>
                Création de site vitrine professionnel
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "32px", maxWidth: "560px" }}>
                Votre vitrine digitale : claire, crédible, orientée contact. Pour les freelances, coachs, consultants et PME qui veulent une présence professionnelle sans se perdre dans la technique.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 32px", backgroundColor: "#1A1A1A", color: "#ffffff", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                  Demander un devis <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pour qui */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="pour qui" black="est-ce fait ?" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
            {audiences.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Structure d'un bon site vitrine */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="ce que contient" black="un bon site vitrine" as="h3" fontSize="clamp(1.8rem, 3vw, 2.4rem)" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { n: "01", title: "Une page d'accueil qui accroche", text: "Votre proposition de valeur en une phrase, un appel à l'action clair, et un aperçu de vos services. Tout ce que le visiteur doit savoir en moins de 10 secondes." },
              { n: "02", title: "Une page services claire", text: "Chaque prestation décrite avec précision : ce que vous faites, pour qui, quel résultat. Pas de vague ni de jargon." },
              { n: "03", title: "Une page à propos qui humanise", text: "Votre parcours, votre approche, votre personnalité. Les clients travaillent avec des personnes, pas des sites." },
              { n: "04", title: "Des preuves sociales", text: "Témoignages, logos clients, exemples de projets. Ce que les autres disent de vous pèse plus que ce que vous dites." },
              { n: "05", title: "Un formulaire de contact optimisé", text: "Simple, rassurant, sans friction. Un formulaire qui donne envie de l'envoyer." },
            ].map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.06}>
                <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "18px 22px", display: "flex", gap: "16px", alignItems: "flex-start", border: "1px solid rgba(0,0,0,0.04)" }}>
                  <div style={{ flexShrink: 0, width: "38px", height: "38px", backgroundColor: "rgba(243,199,9,0.15)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "0.78rem", color: "#1A1A1A" }}>{step.n}</div>
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

      {/* Ce qui est inclus */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="ce qui" black="est inclus" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" baseDelay={0.07}>
            {included.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "16px 20px", backgroundColor: "#F5F0E8", borderRadius: "12px" }}>
                <CheckCircle size={18} style={{ color: "#1A1A1A", flexShrink: 0, marginTop: "1px" }} />
                <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.9rem", color: "#1A1A1A", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <FAQSplit items={faqItems} grayTitle="questions sur" blackTitle="le site vitrine" imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" imageCaption="Un site vitrine professionnel est souvent le premier investissement digital le plus rentable." />
      <CTASection title="Lancez votre site vitrine professionnel" cta="Demander un devis gratuit" ctaHref="/contact" />
    </>
  );
}
