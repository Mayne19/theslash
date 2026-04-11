import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, UserCheck, Wrench, ArrowLeftRight, Target, Layers, Shield, BookOpen, Code2, Database, Zap, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSplit from "@/components/FAQSplit";
import SlashTitle from "@/components/SlashTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Création application web sur mesure",
  description: "Développement d'applications web sur mesure : SaaS, espaces membres, outils métier. Stack moderne Next.js, TypeScript. Studio web / theslash.",
  openGraph: { url: "https://theslash.fr/services/app-web-sur-mesure" },
};

const faqItems = [
  { question: "Quelle est la différence entre un site web et une application web ?", answer: "Un site web présente de l'information et incite à une action simple. Une application web est un outil interactif où l'utilisateur accomplit des tâches complexes : se connecter, créer du contenu, gérer des données, collaborer. Si vos utilisateurs doivent avoir un compte et réaliser des actions complexes, c'est une app web." },
  { question: "Quels types de projets développez-vous ?", answer: "SaaS, espaces membres, outils de gestion interne, plateformes de mise en relation, dashboards analytics, outils de réservation, tout projet qui nécessite une authentification et une logique métier spécifique." },
  { question: "Quelles technologies utilisez-vous ?", answer: "Notre stack principal : Next.js (React), TypeScript, Tailwind CSS, Prisma (ORM), base de données PostgreSQL ou SQLite selon le projet, authentification NextAuth ou Clerk. Nous pouvons adapter selon les contraintes du projet." },
  { question: "Combien coûte une application web sur mesure ?", answer: "Le coût dépend fortement de la complexité : nombre de rôles utilisateurs, intégrations tierces, volume de données. Un MVP simple démarre autour de 3 000€. Contactez-nous pour une estimation basée sur votre brief." },
];

const useCases = [
  { icon: <Cloud className="w-5 h-5" />, title: "SaaS (Software as a Service)", text: "Vous avez une idée de logiciel en ligne avec abonnement ? On développe le MVP, le système d'authentification, la gestion des plans et le dashboard utilisateur." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Espace membres", text: "Cours en ligne, communauté privée, contenu premium. Un espace sécurisé où vos utilisateurs accèdent à du contenu exclusif après inscription." },
  { icon: <Wrench className="w-5 h-5" />, title: "Outil métier interne", text: "Un outil de gestion, de suivi de projets, de facturation ou d'analyse spécifique à votre processus. Adapté à vos besoins exacts, pas un logiciel générique." },
  { icon: <ArrowLeftRight className="w-5 h-5" />, title: "Plateforme de mise en relation", text: "Un marketplace ou une plateforme biface qui connecte deux types d'utilisateurs (prestataires / clients, vendeurs / acheteurs)." },
];

const approach = [
  { icon: <Target className="w-5 h-5" />, title: "MVP d'abord", text: "On construit la version minimale qui valide votre concept et vous permet de lancer. Inutile de tout développer dès le départ, on itère ensemble." },
  { icon: <Layers className="w-5 h-5" />, title: "Architecture scalable", text: "Un code propre, structuré pour évoluer. Pas de dette technique dès le départ. Vous pourrez faire appel à d'autres développeurs sans reprendre de zéro." },
  { icon: <Shield className="w-5 h-5" />, title: "Sécurité par défaut", text: "Authentification robuste, protection des données, gestion des permissions. La sécurité est intégrée, pas ajoutée après." },
  { icon: <BookOpen className="w-5 h-5" />, title: "Documentation livrée", text: "Documentation technique, guide d'administration, architecture documentée. Vous êtes autonome après la livraison." },
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth", "Vercel"];

export default function AppWebService() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Application web sur mesure" }]} />
          <AnimatedSection>
            <div style={{ maxWidth: "720px", marginTop: "24px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Développement sur mesure
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "#1A1A1A", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1 }}>
                Création d&apos;application web sur mesure
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.1rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "28px", maxWidth: "560px" }}>
                Pour les projets plus complexes qu&apos;un site vitrine : SaaS, espaces membres, outils métier. Du développement sur mesure, avec une stack moderne et un code maintenable.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {techStack.map((tech) => (
                  <span key={tech} style={{ padding: "5px 12px", backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "6px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#6B7280" }}>{tech}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 32px", backgroundColor: "#1A1A1A", color: "#ffffff", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                  Parler de votre projet <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pour quels projets */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <SlashTitle gray="pour quels" black="projets ?" />
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5" baseDelay={0.08}>
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

      {/* Stack technique */}
      <section style={{ backgroundColor: "#111111", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)", textAlign: "center" }}>
          <AnimatedSection>
            <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.15)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#F3C709" }}>
              Stack technique
            </div>
            <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", marginBottom: "16px" }}>
              <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>/</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>des technologies</span>{" "}
              <span style={{ color: "#ffffff", fontWeight: 800 }}>modernes, éprouvées</span>
            </h2>
            <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "40px" }}>
              On ne choisit pas une techno parce qu&apos;elle est à la mode. On choisit des outils qui sont maintenables, scalables, et qui vous donnent le contrôle.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {techStack.map((tech) => (
                <span key={tech} style={{ padding: "8px 18px", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{tech}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
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

      {/* Processus */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SlashTitle gray="de l'idée" black="au lancement" as="h3" fontSize="clamp(1.8rem, 3vw, 2.4rem)" />
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { n: "01", title: "Cadrage et spécifications", text: "On définit ensemble le périmètre exact du projet, les fonctionnalités prioritaires et les critères de succès. Un brief clair évite les malentendus et les dérives de scope." },
              { n: "02", title: "Architecture technique", text: "Choix des technologies, modélisation des données, architecture des APIs. Le temps passé ici évite des mois de refactoring plus tard." },
              { n: "03", title: "Développement itératif", text: "Livraisons régulières, points de validation, ajustements en cours de route. Vous voyez l'avancement réel, pas une boîte noire." },
              { n: "04", title: "Tests et recette", text: "Tests unitaires, tests d'intégration, tests utilisateurs. Chaque fonctionnalité validée avant la mise en production." },
              { n: "05", title: "Déploiement et suivi", text: "Mise en production sans stress, monitoring mis en place, documentation livrée. Et on reste disponibles pour la suite." },
            ].map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.06}>
                <div style={{ backgroundColor: "#F5F0E8", borderRadius: "14px", padding: "18px 22px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
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

      <FAQSplit items={faqItems} grayTitle="questions sur" blackTitle="le développement" imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" imageCaption="Un bon projet web commence par une bonne conversation. Parlez-nous de votre idée." />
      <CTASection title="Vous avez un projet ambitieux ?" cta="Parlons-en" ctaHref="/contact" />
    </>
  );
}
