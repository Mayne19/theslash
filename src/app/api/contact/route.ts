import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Formulaire theslash <onboarding@resend.dev>",
      to: "hello@theslash.fr",
      replyTo: email,
      subject: `Nouveau projet — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9">
          <h2 style="color:#1A1A1A;margin-bottom:8px">Nouveau message de contact</h2>
          <p style="color:#6B7280;font-size:0.9rem;margin-bottom:24px">Reçu via le formulaire theslash.fr</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#9CA3AF;font-size:0.85rem;width:140px">Nom</td><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#1A1A1A;font-weight:600">${name}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#9CA3AF;font-size:0.85rem">Email</td><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#1A1A1A;font-weight:600"><a href="mailto:${email}" style="color:#F3C709">${email}</a></td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#9CA3AF;font-size:0.85rem">Type de projet</td><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#1A1A1A">${projectType || "Non précisé"}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#9CA3AF;font-size:0.85rem">Budget</td><td style="padding:12px 0;border-bottom:1px solid #E5E7EB;color:#1A1A1A">${budget || "Non précisé"}</td></tr>
            <tr><td style="padding:12px 0;color:#9CA3AF;font-size:0.85rem;vertical-align:top">Message</td><td style="padding:12px 0;color:#1A1A1A;line-height:1.7">${message.replace(/\n/g, "<br>")}</td></tr>
          </table>
          <div style="margin-top:32px;padding:16px;background:#F3C709;border-radius:8px;text-align:center">
            <a href="mailto:${email}" style="color:#1A1A1A;font-weight:700;text-decoration:none">Répondre à ${name}</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
