import type { Metadata } from "next";
import Link from "next/link";
import { MousePointer, Pencil, Settings, Zap, RefreshCw, Shield, ArrowRight, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Création site Webflow / No-code",
  description: "Création de sites Webflow et no-code pour entrepreneurs. Design visuel, gestion autonome, rapide à lancer. Studio web theslash.",
  openGraph: { url: "https://theslash.fr/services/site-no-code" },
};

const faqItems = [
  { question: "Quelle est la différence entre Webflow et WordPress ?", answer: "Webflow est un outil no-code visuel où le design et le développement se font simultanément dans une interface graphique. WordPress repose sur des thèmes et plugins. Webflow permet des designs plus personnalisés sans code, mais avec une courbe d'apprentissage différente pour la gestion du contenu." },
  { question: "Puis-je modifier mon site Webflow moi-même après livraison ?", answer: "Oui, c'est l'un des principaux avantages. Webflow inclut un CMS visuel intuitif qui vous permet de modifier vos textes, images, ajouter des articles et mettre à jour les pages sans toucher au code. Une formation est incluse à la livraison." },
  { question: "Combien coûte un site Webflow ?", answer: "Un site Webflow vitrine complet commence autour de 800€. À cela s'ajoute un abonnement mensuel Webflow (à partir de 14$/mois) pour l'hébergement et la gestion du contenu. Nous vous accompagnons dans le choix du plan adapté." },
  { question: "Est-ce que Webflow est bien référencé sur Google ?", answer: "Oui, Webflow génère un code propre et optimisé. Il offre un contrôle complet sur les balises meta, les redirections, la vitesse de chargement et la structure sémantique. Bien configuré, un site Webflow se référence très bien." },
];

const benefits = [
  { icon: <MousePointer className="w-5 h-5" />, title: "Gestion autonome totale", text: "Modifiez votre site vous-même après la livraison, sans développeur. Ajoutez des pages, des articles, des images, directement depuis l'interface Webflow." },
  { icon: <Pencil className="w-5 h-5" />, title: "Design sur mesure sans code", text: "Webflow permet un contrôle pixel-perfect sur le design, sans les contraintes d'un thème. Le résultat est unique et à votre image." },
  { icon: <Zap className="w-5 h-5" />, title: "Performance et vitesse", text: "Les sites Webflow sont hébergés sur un CDN mondial et optimisés pour la vitesse. Excellent pour les Core Web Vitals Google." },
  { icon: <Settings className="w-5 h-5" />, title: "CMS intégré et intuitif", text: "Le CMS Webflow est pensé pour les non-développeurs. Interface claire, collections de contenu, tout est accessible sans formation technique poussée." },
];

const useCases = [
  { icon: <RefreshCw className="w-5 h-5" />, title: "Site vitrine évolutif", text: "Votre site vitrine avec la possibilité de gérer vous-même votre contenu, vos offres et vos pages en toute autonomie." },
  { icon: <Shield className="w-5 h-5" />, title: "Portfolio ou agence créative", text: "Un portfolio dynamique où vous ajoutez vos projets, vos études de cas et vos références sans passer par un développeur." },
  { icon: <MousePointer className="w-5 h-5" />, title: "Blog ou média en ligne", text: "Publiez des articles, gérez vos catégories et construisez votre audience avec un CMS visuel agréable à utiliser." },
  { icon: <Pencil className="w-5 h-5" />, title: "Landing page avec A/B test", text: "Créez et modifiez facilement vos landing pages pour tester des variantes et optimiser vos taux de conversion." },
];

const included = [
  "Design Webflow sur mesure (non-template)",
  "CMS configuré pour votre type de contenu",
  "Structure SEO complète et optimisée",
  "Responsive mobile / tablette / desktop",
  "Formation à la gestion du contenu",
  "Mise en ligne et configuration DNS",
  "Intégrations tierces si nécessaire (Mailchimp, etc.)",
  "30 jours de support post-livraison",
];

export default function SiteNoCodeService() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Site Webflow / No-code" }]} />
          <AnimatedSection>
            <div style={{ maxWidth: "720px", marginTop: "24px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Autonomie totale
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.45rem, 4.8vw, 4.25rem)", color: "#1A1A1A", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1 }}>
                Création de site Webflow / No-code
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "32px", maxWidth: "560px" }}>
                Un site designé visuellement, sans code, que vous pouvez gérer en totale autonomie après la livraison. La puissance du design sur mesure, avec la liberté du no-code.
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

      {/* Pourquoi Webflow */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="pourquoi choisir" black="Webflow / no-code ?" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
            {benefits.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="pour quel" black="type de projet ?" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
            {useCases.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#F5F0E8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
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

      <FAQSplit items={faqItems} grayTitle="questions sur" blackTitle="Webflow / no-code" imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" imageCaption="Un site Webflow vous donne l'indépendance sans sacrifier la qualité du design." />
      <CTASection title="Prêt à lancer votre site no-code ?" cta="Demander un devis" ctaHref="/contact" />
    </>
  );
}
