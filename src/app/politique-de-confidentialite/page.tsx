import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "120px 0 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(243,199,9,0.12)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", marginBottom: "28px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#1A1A1A" }}>
            Vos données personnelles
          </div>
          <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(2.05rem, 4.3vw, 3.8rem)", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "20px" }}>
            <span style={{ color: "#A0A0A0" }}>/ politique de</span>{" "}
            <span style={{ color: "#1A1A1A" }}>confidentialité</span>
          </h1>
          <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.75, maxWidth: "520px" }}>
            Comment nous collectons, utilisons et protégeons vos données personnelles sur <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>theslash.fr</strong>.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#ffffff", padding: "72px 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "12px" }}>

            <LegalSection title="Responsable du traitement">
              <P>Le responsable du traitement des données collectées sur <strong>theslash.fr</strong> est <strong>/ theslash</strong>, studio web indépendant.</P>
              <P>Contact : <a href="mailto:hello@theslash.fr">hello@theslash.fr</a></P>
            </LegalSection>

            <LegalSection title="Données collectées">
              <P>Nous collectons uniquement les données que vous nous transmettez volontairement :</P>
              <ul style={{ listStyle: "none", margin: "8px 0 10px", padding: 0 }}>
                <Li>Via le <strong>formulaire de contact</strong> : nom, adresse email, message</Li>
                <Li>Via le <strong>formulaire de newsletter</strong> : adresse email</Li>
              </ul>
              <P>Nous n&apos;utilisons pas de cookies de traçage ni d&apos;outils d&apos;analyse comportementale tiers.</P>
            </LegalSection>

            <LegalSection title="Finalité du traitement">
              <P>Vos données sont utilisées exclusivement pour :</P>
              <ul style={{ listStyle: "none", margin: "8px 0 10px", padding: 0 }}>
                <Li>Répondre à vos demandes de contact ou de devis</Li>
                <Li>Vous envoyer la newsletter si vous y avez souscrit</Li>
                <Li>Améliorer notre service et notre communication</Li>
              </ul>
              <P>Vos données ne sont jamais vendues, louées ou transmises à des tiers.</P>
            </LegalSection>

            <LegalSection title="Durée de conservation">
              <P>Les données issues du formulaire de contact sont conservées le temps nécessaire au traitement de votre demande, puis supprimées ou archivées dans un délai de 3 ans.</P>
              <P>Les données de newsletter sont conservées jusqu&apos;à votre désinscription.</P>
            </LegalSection>

            <LegalSection title="Vos droits (RGPD)">
              <P>Conformément au Règlement UE 2016/679, vous disposez des droits suivants :</P>
              <ul style={{ listStyle: "none", margin: "8px 0 10px", padding: 0 }}>
                <Li><strong>Accès</strong> — obtenir une copie de vos données</Li>
                <Li><strong>Rectification</strong> — corriger des données inexactes</Li>
                <Li><strong>Effacement</strong> — demander la suppression de vos données</Li>
                <Li><strong>Portabilité</strong> — recevoir vos données dans un format structuré</Li>
                <Li><strong>Opposition</strong> — vous opposer au traitement de vos données</Li>
              </ul>
              <P>Pour exercer ces droits : <a href="mailto:hello@theslash.fr">hello@theslash.fr</a>. Réponse sous 30 jours.</P>
              <P>Vous pouvez également déposer une réclamation auprès de la <strong>CNIL</strong> (cnil.fr).</P>
            </LegalSection>

            <LegalSection title="Sécurité">
              <P>Des mesures techniques et organisationnelles appropriées protègent vos données. Le site est hébergé sur l&apos;infrastructure sécurisée de Vercel Inc.</P>
            </LegalSection>

            <LegalSection title="Cookies">
              <P>Ce site n&apos;utilise pas de cookies tiers publicitaires ou de traçage. Des cookies techniques essentiels peuvent être utilisés pour le bon fonctionnement du site.</P>
            </LegalSection>

            <LegalSection title="Liens externes">
              <P>Notre site peut contenir des liens vers des sites tiers. Nous n&apos;avons aucun contrôle sur leur politique de confidentialité.</P>
            </LegalSection>

            <LegalSection title="Modifications">
              <P>Cette politique peut être modifiée à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page.</P>
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

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.8, marginBottom: "6px", paddingLeft: "16px", position: "relative" }}>
      <span style={{ position: "absolute", left: 0, color: "#F3C709", fontWeight: 700 }}>·</span>
      {children}
    </li>
  );
}
