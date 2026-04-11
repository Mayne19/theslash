import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQSplit from "@/components/FAQSplit";
import ContactAnimatedWidget from "@/components/ContactAnimatedWidget";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Démarrer un projet web",
  description: "Parlez-nous de votre projet web. Réponse garantie sous 24 heures. Création de site, landing page, refonte ou application web.",
  openGraph: { url: "https://theslash.fr/contact" },
};

const faqItems = [
  { question: "Comment se passe le premier échange ?", answer: "Vous remplissez le formulaire, on vous répond sous 24h pour comprendre votre projet. On organise ensuite un appel de 30 minutes pour affiner les besoins et vous proposer un devis sans engagement." },
  { question: "Quels délais pour un projet ?", answer: "Site vitrine : 2 à 3 semaines. Landing page : 1 à 2 semaines. Refonte complète : 4 à 8 semaines. Application web : selon complexité. Nous définissons un planning détaillé au début du projet." },
  { question: "Travaillez-vous à l'international ?", answer: "Oui. Nous travaillons avec des entrepreneurs francophones partout dans le monde, France, Belgique, Suisse, Canada, Maghreb. Le travail se fait entièrement à distance." },
  { question: "Comment se passe le paiement ?", answer: "Nous fonctionnons en deux ou trois échéances selon le projet : un acompte au démarrage, une ou deux tranches intermédiaires, et le solde à la livraison." },
];

const serviceLinks = [
  { label: "Site vitrine", href: "/services/site-vitrine" },
  { label: "Landing page", href: "/services/landing-page" },
  { label: "Refonte", href: "/services/refonte-site-web" },
  { label: "Application web", href: "/services/app-web-sur-mesure" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <AnimatedSection>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "24px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
                Réponse sous 24h
              </div>
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.5rem)", letterSpacing: "-0.035em", marginBottom: "20px", lineHeight: 1.1, color: "#1A1A1A" }}>
                Parlons de votre projet
              </h1>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.8 }}>
                Vous avez une idée, un site à créer ou à refondre, un projet ambitieux. Remplissez le formulaire et on vous répond sous 24 heures, sans jargon, sans engagement.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section id="contact-form" style={{ backgroundColor: "#ffffff", padding: "80px 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(32px, 6vw, 80px)", alignItems: "flex-start" }} className="contact-grid">

            {/* Left: Info */}
            <AnimatedSection>
              <div style={{ position: "sticky", top: "104px" }}>
                <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#1A1A1A", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "24px" }}>
                  <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                  <span style={{ color: "#A0A0A0", fontWeight: 700 }}>informations de</span>{" "}
                  <span style={{ color: "#1A1A1A", fontWeight: 800 }}>contact</span>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                  {[
                    { icon: <Mail size={17} color="#1A1A1A" />, label: "Email", value: "hello@theslash.fr" },
                    { icon: <Clock size={17} color="#1A1A1A" />, label: "Délai de réponse", value: "Sous 24 heures" },
                    { icon: <Globe size={17} color="#1A1A1A" />, label: "Disponibilité", value: "Toute la francophonie" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", backgroundColor: "#F5F0E8", borderRadius: "14px" }}>
                      <div style={{ width: "38px", height: "38px", backgroundColor: "#ffffff", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9CA3AF", marginBottom: "2px" }}>{item.label}</p>
                        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#1A1A1A" }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "10px" }}>
                    Nos services
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} style={{ display: "inline-flex", alignItems: "center", padding: "7px 14px", backgroundColor: "#F5F0E8", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.82rem", fontWeight: 500, color: "#1A1A1A", textDecoration: "none" }}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.12}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <FAQSplit
        items={faqItems}
        grayTitle="questions"
        blackTitle="fréquentes"
        imageComponent={<ContactAnimatedWidget />}
        imageCaption="On répond honnêtement. Pas de jargon, pas de vente forcée."
        contactHref="#contact-form"
      />
    </>
  );
}
