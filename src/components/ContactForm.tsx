"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "12px",
  fontFamily: "var(--font-inter), -apple-system, sans-serif",
  fontSize: "0.9rem",
  color: "#1A1A1A",
  outline: "none",
  transition: "box-shadow 150ms",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter), -apple-system, sans-serif",
  fontWeight: 600,
  fontSize: "0.85rem",
  color: "#1A1A1A",
  marginBottom: "8px",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("project-type") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "Nouveau projet — " + data.name,
          from_name: "Formulaire theslash.fr",
          ...data,
          message: `Type : ${data.projectType || "Non précisé"}\nBudget : ${data.budget || "Non précisé"}\n\n${data.message}`,
          botcheck: "",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Erreur lors de l'envoi");
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erreur inconnue";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "48px 40px", boxShadow: "0 4px 32px rgba(0,0,0,0.07)", textAlign: "center" }}>
        <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(243,199,9,0.15)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "2rem" }}>🎉</div>
        <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#1A1A1A", marginBottom: "10px" }}>Message envoyé !</h2>
        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", color: "#6B7280", fontSize: "0.95rem" }}>Merci pour votre message. Nous vous répondons sous 24 heures.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "40px", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* Nom */}
        <div>
          <label htmlFor="name" style={labelStyle}>
            Nom complet <span style={{ color: "#F3C709" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Marie Dupont"
            style={fieldStyle}
            onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(243,199,9,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email <span style={{ color: "#F3C709" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="marie@exemple.com"
            style={fieldStyle}
            onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(243,199,9,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>

        {/* Type + Budget en 2 colonnes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-two-col">
          <div>
            <label htmlFor="project-type" style={labelStyle}>Type de projet</label>
            <select
              id="project-type"
              name="project-type"
              style={{ ...fieldStyle, appearance: "none" as const, cursor: "pointer" }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(243,199,9,0.4)"; }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <option value="">Choisir...</option>
              <option value="site-vitrine">Site vitrine</option>
              <option value="landing-page">Landing page</option>
              <option value="refonte">Refonte</option>
              <option value="app-web">Application web</option>
              <option value="webflow">Site Webflow / No-code</option>
              <option value="creation-complete">Création complète</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" style={labelStyle}>Budget estimé</label>
            <select
              id="budget"
              name="budget"
              style={{ ...fieldStyle, appearance: "none" as const, cursor: "pointer" }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(243,199,9,0.4)"; }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <option value="">Je ne sais pas encore</option>
              <option value="moins-500">Moins de 500€</option>
              <option value="500-1500">500€ – 1 500€</option>
              <option value="1500-3000">1 500€ – 3 000€</option>
              <option value="plus-3000">Plus de 3 000€</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" style={labelStyle}>
            Décrivez votre projet <span style={{ color: "#F3C709" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Parlez-moi de votre activité, de ce que vous voulez accomplir avec votre site, de vos contraintes ou délais..."
            style={{ ...fieldStyle, resize: "none", minHeight: "120px" }}
            onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(243,199,9,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>

        {/* Submit */}
        {error && (
          <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#EF4444", textAlign: "center" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            height: "56px",
            backgroundColor: loading ? "#D1A400" : "#F3C709",
            color: "#1A1A1A",
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "transform 150ms, box-shadow 150ms",
            opacity: loading ? 0.8 : 1,
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(243,199,9,0.45)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {loading ? "Envoi en cours…" : "Envoyer ma demande →"}
        </button>

        <p style={{ textAlign: "center", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.8rem", color: "#9CA3AF" }}>
          Réponse garantie sous 24 heures · Sans engagement
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
