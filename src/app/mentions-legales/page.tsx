import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "28px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
            Informations légales
          </div>
          <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.45rem, 4.8vw, 4.25rem)", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "20px" }}>
            <span style={{ color: "#A0A0A0" }}>/ mentions</span>{" "}
            <span style={{ color: "#1A1A1A" }}>légales</span>
          </h1>
          <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.75, maxWidth: "520px" }}>
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#ffffff", padding: "72px 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "12px" }}>

            <LegalSection title="Éditeur du site">
              <P>Le site <strong>theslash.fr</strong> est édité par <strong>/ theslash</strong>, studio web indépendant.</P>
              <P>Email : <a href="mailto:hello@theslash.fr">hello@theslash.fr</a></P>
              <P>Site web : <a href="https://theslash.fr">https://theslash.fr</a></P>
            </LegalSection>

            <LegalSection title="Hébergeur">
              <P><strong>Vercel Inc.</strong></P>
              <P>440 N Barranca Ave #4133, Covina, CA 91723, USA</P>
              <P>Site web : <a href="https://vercel.com">https://vercel.com</a></P>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <P>L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes) sont la propriété exclusive de <strong>/ theslash</strong> ou de leurs auteurs respectifs.</P>
              <P>Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, sans autorisation écrite préalable de <strong>/ theslash</strong> est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de Propriété Intellectuelle.</P>
            </LegalSection>

            <LegalSection title="Données personnelles">
              <P>Le site <strong>theslash.fr</strong> ne collecte aucune donnée personnelle à l&apos;exception des informations volontairement communiquées via le formulaire de contact (nom, email, message).</P>
              <P>Ces données sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais cédées à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression en contactant : <a href="mailto:hello@theslash.fr">hello@theslash.fr</a>.</P>
            </LegalSection>

            <LegalSection title="Cookies">
              <P>Ce site n&apos;utilise pas de cookies de traçage ou de cookies publicitaires. Des cookies techniques essentiels peuvent être utilisés pour le bon fonctionnement du site.</P>
            </LegalSection>

            <LegalSection title="Droit applicable">
              <P>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</P>
            </LegalSection>

            <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.78rem", color: "#C4BBAD", marginTop: "32px", paddingTop: "32px", borderTop: "1px solid #F0EDE8" }}>
              Dernière mise à jour : avril 2026
            </p>

          </div>
        </div>
      </section>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#FAFAF8", borderRadius: "16px", padding: "28px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
      <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 1.9vw, 1.14rem)", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "16px" }}>
        <span style={{ color: "#1A1A1A" }}>{title}</span>
      </h2>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "10px" }}>
      {children}
    </p>
  );
}
