"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
        <div style={{
          backgroundColor: "#F5F5F3",
          borderRadius: "24px",
          padding: "clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)",
          textAlign: "center",
          overflow: "hidden",
        }}>
          {subscribed ? (
            <div>
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🎉</div>
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.32rem, 2.85vw, 1.9rem)",
                letterSpacing: "-0.03em",
                marginBottom: "8px",
              }}>
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>vous êtes</span>{" "}
                <span style={{ color: "#1A1A1A", fontWeight: 800 }}>inscrit !</span>
              </h2>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem", color: "#6B7280" }}>
                Bienvenue dans la newsletter. On se retrouve dans votre boîte mail.
              </p>
            </div>
          ) : (
            <>
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3.3vw, 2.25rem)",
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                lineHeight: 1.15,
              }}>
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
                <span style={{ color: "#A0A0A0", fontWeight: 700 }}>tendances web</span>{" "}
                <span style={{ color: "#1A1A1A", fontWeight: 800 }}>& SEO chaque semaine</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.95rem",
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "420px",
                margin: "0 auto 28px",
              }}>
                Conseils pratiques, ressources et analyses, livrés chaque semaine. Pas de spam.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "8px",
                  maxWidth: "420px",
                  margin: "0 auto 20px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    padding: "13px 18px",
                    borderRadius: "50px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    backgroundColor: "#ffffff",
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontSize: "0.9rem",
                    color: "#1A1A1A",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "13px 24px",
                    borderRadius: "50px",
                    backgroundColor: "#1A1A1A",
                    color: "#ffffff",
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  S&apos;abonner <ArrowRight size={14} />
                </button>
              </form>

              {/* Social proof with real photos */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <div style={{ display: "flex" }}>
                  {[1, 2, 3, 4].map((n, i) => (
                    <img
                      key={n}
                      src={`https://i.pravatar.cc/40?img=${n}`}
                      alt={`Abonné ${n}`}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "2px solid #F5F5F3",
                        marginLeft: i === 0 ? 0 : "-8px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
                <span style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontSize: "0.82rem",
                  color: "#6B7280",
                  fontWeight: 500,
                }}>
                  500+ entrepreneurs déjà abonnés
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
