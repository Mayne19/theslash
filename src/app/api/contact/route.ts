import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: `Nouveau projet — ${name}`,
        from_name: "Formulaire theslash.fr",
        name,
        email,
        "Type de projet": projectType || "Non précisé",
        "Budget estimé": budget || "Non précisé",
        message,
        botcheck: "",
      }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Erreur Web3Forms");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
