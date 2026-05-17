import type { Metadata } from "next";
import Link from "next/link";
import { Megaphone, GraduationCap, Mail, MousePointer, Rocket, Target, PenTool, Palette, Zap, ArrowRight, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Création landing page professionnelle",
  description: "Création de landing page optimisée pour la conversion. Copywriting, design et structure pensés pour transformer vos visiteurs en clients. Studio web theslash.",
  openGraph: { url: "https://theslash.fr/services/landing-page" },
};

const faqItems = [
  { question: "Quelle est la différence entre une landing page et un site web ?", answer: "Un site web a plusieurs pages avec des objectifs variés. Une landing page est une page unique conçue pour un seul objectif : convertir le visiteur. Pas de menu, pas de distraction. Chaque élément existe pour amener le visiteur à cliquer sur le bouton d'action." },
  { question: "Pour quoi peut servir une landing page ?", answer: "Vente d'une offre ou d'un service, inscription à une newsletter ou une formation, pré-lancement d'un produit, capture de leads pour une campagne publicitaire, promotion d'un événement. Dès que vous avez un objectif de conversion précis, une landing page est l'outil adapté." },
  { question: "Combien coûte une landing page ?", answer: "Une landing page professionnelle est généralement moins coûteuse qu'un site complet. Comptez entre 400€ et 1 500€ selon la complexité, le copywriting inclus ou non, et les intégrations nécessaires." },
  { question: "Rédigez-vous le texte de la landing page ?", answer: "Nous pouvons vous accompagner sur le copywriting en option, ou travailler à partir de vos éléments. Dans tous les cas, nous structurons votre contenu pour maximiser la conversion." },
];

const useCases = [
  { icon: <Megaphone className="w-5 h-5" />, title: "Lancer une offre", text: "Vous avez une nouvelle prestation, un programme ou un produit à vendre. Une landing page dédiée est 3x plus efficace qu'une page de site classique." },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Promouvoir une formation", text: "Webinaire, masterclass, programme en ligne, la landing page capte l'inscription en éliminant toutes les frictions." },
  { icon: <Mail className="w-5 h-5" />, title: "Capturer des emails", text: "Construire votre liste avec un lead magnet, un guide gratuit ou une offre d'essai. La landing page est l'outil numéro 1 pour cela." },
  { icon: <MousePointer className="w-5 h-5" />, title: "Campagne publicitaire", text: "Vos publicités Meta ou Google méritent une page d'atterrissage dédiée, pas votre page d'accueil." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pré-lancement produit", text: "Validez l'intérêt avant de tout construire. Collectez des inscriptions ou pré-commandes avec une landing page efficace." },
];

const method = [
  { icon: <Target className="w-5 h-5" />, title: "Analyse de l'objectif", text: "On commence par comprendre précisément ce que vous voulez que le visiteur fasse, et pourquoi il hésiterait." },
  { icon: <PenTool className="w-5 h-5" />, title: "Copywriting orienté conversion", text: "Les mots vendent avant le design. On structure un message clair, honnête et convaincant." },
  { icon: <Palette className="w-5 h-5" />, title: "Design au service de la conversion", text: "Hiérarchie visuelle claire, couleurs qui guident l'œil, CTA mis en valeur. Chaque pixel a une raison d'être." },
  { icon: <Zap className="w-5 h-5" />, title: "Performance et tests", text: "Page rapide, mobile-first, testée sur plusieurs appareils. Prête pour vos campagnes publicitaires." },
];

export default function LandingPageService() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Landing page" }]} />
          <AnimatedSection>
            <div style={{ maxWidth: "720px", marginTop: "24px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Conversion maximale
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem, 4.8vw, 4.25rem)", color: "#1A1A1A", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1 }}>
                Création de landing page professionnelle
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "32px", maxWidth: "560px" }}>
                Une page. Un objectif. Zéro distraction. Chaque élément est pensé pour transformer vos visiteurs en clients, abonnés ou prospects qualifiés.
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

      {/* Use cases */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="pour qui," black="pour quoi ?" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" baseDelay={0.08}>
            {useCases.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Structure d'une LP */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="structure d'une" black="landing page qui convertit" as="h3" fontSize="clamp(1.7rem, 2.85vw, 2.25rem)" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { n: "01", title: "Le héros", text: "Titre percutant, sous-titre clair, CTA visible above the fold. Votre visiteur doit comprendre en 3 secondes ce que vous proposez et pourquoi c'est pour lui." },
              { n: "02", title: "Le problème / la douleur", text: "Vous montrez que vous comprenez le problème de votre visiteur. Cette section crée la connexion émotionnelle et le maintient en lecture." },
              { n: "03", title: "La solution et la promesse", text: "Votre offre, ses bénéfices concrets, le résultat attendu. Pas les fonctionnalités, les transformations." },
              { n: "04", title: "La preuve sociale", text: "Témoignages, résultats clients, chiffres. La preuve réduit la friction et augmente la confiance." },
              { n: "05", title: "L'appel à l'action", text: "Un bouton clair, une friction minimale. Le CTA final récapitule la promesse et invite à passer à l'action." },
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

      {/* Méthode */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="notre" black="méthode" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
            {method.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "11px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", color: "#1A1A1A", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <FAQSplit items={faqItems} grayTitle="questions sur" blackTitle="la landing page" imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" imageCaption="Une landing page efficace commence par une bonne compréhension de votre objectif." />
      <CTASection title="Prêt à lancer votre landing page ?" cta="Discutons de votre projet" ctaHref="/contact" />
    </>
  );
}
