export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const key = process.env.WEB3FORMS_KEY;
    if (!key) {
      return Response.json({ error: "Clé manquante." }, { status: 500 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: "Nouveau projet - " + name,
        from_name: "Formulaire theslash.fr",
        name,
        email,
        message: `Type: ${projectType || "Non précisé"}\nBudget: ${budget || "Non précisé"}\n\n${message}`,
        botcheck: "",
      }),
    });

    const data = await res.json();

    if (!data.success) {
      return Response.json({ error: data.message || "Erreur Web3Forms" }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
