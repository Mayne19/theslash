"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, ThumbsUp } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  date: string;
  text: string;
  initials: string;
  avatarColor: string;
  likes: number;
}

const defaultComments: Comment[] = [
  {
    id: 1,
    name: "Sophie M.",
    date: "il y a 3 jours",
    text: "Article très utile, merci ! J'étais justement en train de me poser cette question pour mon projet. Le paragraphe sur le SEO intégré m'a particulièrement aidé.",
    initials: "SM",
    avatarColor: "#F3C709",
    likes: 4,
  },
  {
    id: 2,
    name: "Thomas L.",
    date: "il y a 1 semaine",
    text: "Bonne synthèse, claire et sans jargon inutile. Je recommande à quiconque débute dans la création de site.",
    initials: "TL",
    avatarColor: "#3B82F6",
    likes: 7,
  },
];

export default function CommentsSection({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<Comment[]>(defaultComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      date: "à l'instant",
      text: text.trim(),
      initials: name.trim().split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase(),
      avatarColor: "#22C55E",
      likes: 0,
    };
    setComments((prev) => [newComment, ...prev]);
    setName("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleLike = (id: number) => {
    if (liked.has(id)) return;
    setLiked((prev) => new Set([...prev, id]));
    setComments((prev) => prev.map((c) => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "72px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <MessageSquare size={20} style={{ color: "#F3C709" }} />
          <div>
            <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "4px" }}>
              Discussion
            </p>
            <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.32rem, 2.85vw, 1.8rem)", color: "#1A1A1A", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
              {comments.length} commentaire{comments.length !== 1 ? "s" : ""}
            </h2>
          </div>
        </div>

        {/* Comment form */}
        <div style={{ backgroundColor: "#F5F0E8", borderRadius: "20px", padding: "28px", marginBottom: "40px" }}>
          <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "20px" }}>
            Laisser un commentaire
          </p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input
              type="text"
              placeholder="Votre prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.9rem",
                padding: "13px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff",
                color: "#1A1A1A",
                outline: "none",
                width: "100%",
              }}
            />
            <textarea
              placeholder="Votre commentaire..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              rows={4}
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.9rem",
                padding: "13px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff",
                color: "#1A1A1A",
                outline: "none",
                width: "100%",
                resize: "vertical",
                lineHeight: 1.7,
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "space-between", flexWrap: "wrap" }}>
              <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.78rem", color: "#9CA3AF" }}>
                Votre commentaire sera visible immédiatement.
              </p>
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  padding: "12px 24px",
                  backgroundColor: "#1A1A1A",
                  color: "#ffffff",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "background-color 200ms",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F3C709"; (e.currentTarget as HTMLButtonElement).style.color = "#1A1A1A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A1A"; (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; }}
              >
                Publier <Send size={14} />
              </button>
            </div>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ marginTop: "16px", padding: "12px 16px", backgroundColor: "#D1FAE5", borderRadius: "10px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.85rem", color: "#065F46", fontWeight: 600 }}
              >
                ✓ Commentaire publié, merci !
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Comments list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <AnimatePresence initial={false}>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "22px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: comment.avatarColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      color: "#1A1A1A",
                      flexShrink: 0,
                    }}>
                      {comment.initials}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1A1A1A" }}>{comment.name}</p>
                      <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.75rem", color: "#9CA3AF" }}>{comment.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(comment.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: liked.has(comment.id) ? "#F3C709" : "#9CA3AF",
                      background: "none",
                      border: "none",
                      cursor: liked.has(comment.id) ? "default" : "pointer",
                      padding: "4px 8px",
                      borderRadius: "8px",
                      transition: "color 150ms",
                    }}
                  >
                    <ThumbsUp size={13} />
                    {comment.likes > 0 && comment.likes}
                  </button>
                </div>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.75 }}>
                  {comment.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
