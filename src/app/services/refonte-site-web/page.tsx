import type { Metadata } from "next";
import Link from "next/link";
import { Timer, Smartphone, Palette, Search, TrendingDown, Zap, TrendingUp, Briefcase, Target, Globe, ArrowRight, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Refonte site web professionnel | / theslash",
  description: "Refonte complète de votre site web : design modernisé, performance améliorée, SEO optimisé. Transformez un site qui sous-performe en machine à convertir.",
  openGraph: { url: "https://theslash.fr/services/refonte-site-web" },
};

const faqItems = [
  { question: "Quelle est la différence entre une refonte et une mise à jour ?", answer: "Une mise à jour, c'est ajuster du contenu, corriger des bugs, changer quelques visuels. Une refonte, c'est repenser le site de zéro : structure, design, code, contenu. Si votre site a des problèmes fondamentaux, une refonte complète est la seule vraie solution." },
  { question: "Est-ce que je perds mon référencement lors d'une refonte ?", answer: "Si elle est mal faite, oui. C'est pourquoi nous gérons la refonte avec une attention particulière aux redirections 301, à la conservation des URLs importantes et à la continuité SEO. Bien faite, une refonte améliore généralement le référencement." },
  { question: "Combien coûte une refonte de site web ?", answer: "Cela dépend de la taille du site existant et des améliorations souhaitées. Une refonte d'un site vitrine simple commence autour de 1 000€. Contactez-nous pour une estimation précise." },
  { question: "Conservez-vous le contenu existant ?", answer: "Oui. Nous effectuons un audit de votre contenu actuel, conservons ce qui fonctionne et optimisons le reste. Vous ne repartez pas de zéro, vous repartez sur des bases solides." },
];

const signals = [
  { icon: <Timer className="w-5 h-5" />, title: "Il est lent", text: "Un score PageSpeed sous 70, des temps de chargement dépassant 3 secondes. Vous perdez des visiteurs avant même qu'ils voient votre contenu." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Il n'est pas responsive", text: "Votre site n'est pas adapté au mobile. En 2026, c'est rédhibitoire, tant pour vos visiteurs que pour Google." },
  { icon: <Palette className="w-5 h-5" />, title: "Le design date", text: "Le web a beaucoup évolué en 5 ans. Un design vieillissant envoie le signal que votre entreprise est en retard." },
  { icon: <Search className="w-5 h-5" />, title: "Il n'est pas référencé", text: "Vous n'apparaissez pas sur Google pour vos mots-clés cibles. La structure SEO n'a pas été pensée dès le départ." },
  { icon: <TrendingDown className="w-5 h-5" />, title: "Il ne convertit pas", text: "Des visiteurs arrivent mais personne ne vous contacte. Le problème est dans le parcours utilisateur, le contenu ou les CTA." },
];

const results = [
  { icon: <Zap className="w-5 h-5" />, title: "Performance x3 à x10", text: "Un site Next.js bien optimisé charge en moins d'une seconde. Google vous récompense, vos visiteurs restent." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Meilleur référencement", text: "Structure SEO repensée, redirections gérées, contenu optimisé. Votre refonte peut significativement améliorer vos positions." },
  { icon: <Briefcase className="w-5 h-5" />, title: "Image professionnelle", text: "Un design moderne, cohérent avec votre identité. Vos prospects ont confiance avant même de vous contacter." },
  { icon: <Target className="w-5 h-5" />, title: "Plus de conversions", text: "Parcours utilisateur optimisé, CTA clairs, formulaires qui inspirent confiance. Chaque visiteur est mieux guidé vers l'action." },
];

export default function RefonteService() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Refonte de site web" }]} />
          <AnimatedSection>
            <div style={{ maxWidth: "720px", marginTop: "24px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Modernisation complète
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.5rem)", color: "#1A1A1A", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1 }}>
                Refonte de site web professionnel
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "32px", maxWidth: "560px" }}>
                Votre site existe déjà mais il est lent, vieillissant ou ne convertit pas ? Nous le repensons de zéro, structure, design, performance et SEO. Sans repartir de rien : en s&apos;appuyant sur ce qui fonctionne déjà.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 32px", backgroundColor: "#1A1A1A", color: "#ffffff", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                  Analyser mon site <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Signaux d'alerte */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="5 signes qu'il faut" black="refondre votre site" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" baseDelay={0.08}>
            {signals.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "24px", borderLeft: "3px solid #F3C709" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Ce que ça change */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="ce que ça" black="change concrètement" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
            {results.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#F5F0E8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Notre processus */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="notre processus" black="de refonte" as="h3" fontSize="clamp(1.8rem, 3vw, 2.4rem)" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { n: "01", title: "Audit complet de l'existant", text: "Analyse de vos performances actuelles, de votre SEO, de votre contenu et de votre taux de conversion. On part de ce qui existe." },
              { n: "02", title: "Stratégie et architecture", text: "Nouvelle structure de navigation, hiérarchie des pages, définition des objectifs de conversion pour chaque page." },
              { n: "03", title: "Design et maquettes", text: "Maquettes haute fidélité validées avec vous avant le développement. Zéro surprise à la livraison." },
              { n: "04", title: "Développement et migration", text: "Développement propre, gestion des redirections SEO, migration du contenu existant." },
              { n: "05", title: "Tests et mise en ligne", text: "Tests cross-navigateurs, vérification mobile, audit de performance. Mise en ligne sans interruption de service." },
            ].map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.06}>
                <div style={{ backgroundColor: "#F5F0E8", borderRadius: "14px", padding: "18px 22px", display: "flex", gap: "16px", alignItems: "flex-start", border: "1px solid rgba(0,0,0,0.04)" }}>
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

      <FAQSplit items={faqItems} grayTitle="questions sur" blackTitle="la refonte" imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" imageCaption="Une refonte bien menée améliore simultanément votre image, vos performances et votre SEO." />
      <CTASection title="Votre site mérite mieux" cta="Obtenir un audit gratuit" ctaHref="/contact" />
    </>
  );
}
