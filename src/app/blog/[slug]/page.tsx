import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ArticleCard from "@/components/ArticleCard";
import ArticleSidebarLeft from "@/components/ArticleSidebarLeft";
import ArticleSidebarRight from "@/components/ArticleSidebarRight";
import ArticleReactions from "@/components/ArticleReactions";
import ArticleFAQ from "@/components/ArticleFAQ";
import { getAllArticles, getArticleBySlug, getCategoryLabel } from "@/lib/articles";
import { Clock, Calendar, RefreshCw } from "lucide-react";
import SocialEmbedLoader from "@/components/SocialEmbedLoader";

interface Props {
  params: Promise<{ slug: string }>;
}

const PLACEHOLDER_SLUGS = [
  "comment-choisir-son-cms-2026",
  "erreurs-seo-debutant",
  "landing-page-ne-convertit-pas",
  "creer-site-web-professionnel-guide",
];

export async function generateStaticParams() {
  const articles = await getAllArticles();
  const cmsslugs = articles.map((a) => a.slug);
  const all = Array.from(new Set([...cmsslugs, ...PLACEHOLDER_SLUGS]));
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description ?? undefined,
    openGraph: { url: `https://theslash.fr/blog/${slug}` },
  };
}

const placeholderContent: Record<string, { title: string; description: string; content: string; category: string; readingTime: number; date: string; updatedDate?: string; faq?: { q: string; a: string }[] }> = {
  "comment-choisir-son-cms-2026": {
    title: "Comment choisir le bon CMS pour votre site en 2026",
    description: "WordPress, Webflow, headless CMS ou Next.js ? On décortique chaque option pour vous aider à faire le bon choix selon votre projet et votre budget.",
    category: "Création de site",
    readingTime: 7,
    date: "15 mars 2026",
    content: `
      <h2>Introduction</h2>
      <p>Choisir un CMS est l'une des premières décisions à prendre quand on crée un site web. Et c'est souvent l'une des moins bien informées.</p>
      <p>WordPress ? Webflow ? Notion exporté ? Un CMS headless ? Chaque option a ses avantages et ses limites — mais les commerciaux vous vendront toujours la leur comme la meilleure.</p>
      <h2>WordPress : toujours pertinent, mais pas pour tout le monde</h2>
      <p>WordPress représente encore environ 40% des sites web dans le monde. C'est dire si l'écosystème est mature. Facile à prendre en main, des milliers de plugins, une communauté énorme. Mais performance médiocre par défaut, sécurité à surveiller et maintenance régulière nécessaire.</p>
      <h2>Next.js + CMS headless : la solution performante</h2>
      <p>C'est notre stack principal chez / theslash. Next.js génère des sites ultra-rapides, et on connecte un CMS headless (Keystatic, Sanity, Contentful) pour la gestion du contenu. Performance maximale, SEO parfaitement contrôlé, design totalement libre.</p>
      <h2>Notre recommandation</h2>
      <p>Il n'existe pas de CMS universel. La bonne question n'est pas "quel est le meilleur CMS ?" mais "quel CMS est adapté à mon projet, mon budget et mes compétences ?"</p>
    `,
  },
  "erreurs-seo-debutant": {
    title: "Les 5 erreurs SEO qui ruinent votre référencement dès le départ",
    description: "Balises title en double, aucun maillage interne, images non optimisées — voici les pièges les plus courants et comment les corriger rapidement.",
    category: "SEO",
    readingTime: 5,
    date: "8 mars 2026",
    content: `
      <h2>Introduction</h2>
      <p>Le SEO est souvent présenté comme une discipline complexe et mystérieuse. En réalité, la majorité des erreurs que font les débutants sont simples à identifier — et à corriger.</p>
      <h2>Erreur 1 : Des balises title identiques sur toutes les pages</h2>
      <p>Chaque page doit avoir une balise title unique, descriptive et contenant le mot-clé principal. C'est la base.</p>
      <h2>Erreur 2 : Aucun maillage interne</h2>
      <p>Les liens entre vos pages aident Google à comprendre la structure de votre site et à distribuer l'autorité. Un site sans liens internes, c'est un labyrinthe sans signalétique.</p>
      <h2>Erreur 3 : Des images non optimisées</h2>
      <p>Des images trop lourdes ralentissent votre site. Un site lent est pénalisé par Google. Compressez vos images, ajoutez des textes alternatifs.</p>
    `,
  },
  "landing-page-ne-convertit-pas": {
    title: "Pourquoi votre landing page ne convertit pas (et comment y remédier)",
    description: "Titre trop vague, CTA invisible, trop d'options — les raisons sont souvent simples mais coûtent cher. Voici comment diagnostiquer et corriger.",
    category: "Web Design",
    readingTime: 6,
    date: "1 mars 2026",
    content: `
      <h2>Introduction</h2>
      <p>Vous avez créé une landing page. Vous avez du trafic. Mais personne ne clique sur votre bouton d'action. Voici les raisons les plus courantes — et les solutions.</p>
      <h2>Problème 1 : Un titre trop vague</h2>
      <p>Votre titre doit dire précisément ce que vous offrez et à qui. "Je vous aide à transformer votre vie" ne dit rien. "J'accompagne les freelances à doubler leur tarif journalier en 90 jours" — c'est concret.</p>
      <h2>Problème 2 : Le CTA est invisible</h2>
      <p>Votre bouton doit être visible immédiatement, sans scroller. Il doit dire ce que le visiteur va obtenir, pas ce qu'il doit faire. "Accéder à la formation" > "S'inscrire".</p>
    `,
  },
  "creer-site-web-professionnel-guide": {
    title: "Créer un site web professionnel en 2026 : le guide complet",
    description: "De la définition de l'objectif au choix de la technologie, voici la méthode complète pour créer un site web professionnel qui attire et convertit.",
    category: "Création de site",
    readingTime: 8,
    date: "11 avril 2026",
    updatedDate: "11 avril 2026",
    faq: [
      { q: "Combien de temps faut-il pour créer un site web professionnel ?", a: "En général : 2 à 3 semaines pour un site vitrine, 1 à 2 semaines pour une landing page, 4 à 8 semaines pour une refonte complète. Tout dépend de la complexité et de votre réactivité dans la validation des étapes." },
      { q: "Quelle est la différence entre un site vitrine et une landing page ?", a: "Un site vitrine présente votre activité globale sur plusieurs pages. Une landing page est une page unique, pensée pour un seul objectif : vendre une offre, récupérer un email, inscrire à un événement." },
      { q: "Pourquoi faire appel à un studio web plutôt qu'à un freelance ?", a: "Un studio comme / theslash combine les compétences d'un designer, d'un développeur et d'un consultant SEO. Vous avez un interlocuteur unique mais une équipe derrière. Moins de coordination, plus de cohérence." },
    ],
    content: `
      <p>Créer un site web professionnel en 2026 n'est plus réservé aux grandes entreprises. Avec les bons outils et la bonne méthode, un entrepreneur peut aujourd'hui avoir une présence en ligne sérieuse, rapide et bien référencée. Ce guide vous explique tout.</p>

      <div style="position:relative;background:#DBEAFE;border:2px solid #3B82F6;border-radius:16px;padding:24px 24px 24px 28px;margin:32px 0;font-family:var(--font-inter),-apple-system,sans-serif">
        <div style="position:absolute;top:-14px;left:20px;background:#3B82F6;color:#fff;font-weight:800;font-size:0.78rem;padding:4px 12px;border-radius:6px;white-space:nowrap">Chiffre à connaître</div>
        <div style="font-size:0.92rem;color:#1A1A1A;line-height:1.8;margin-top:6px">75% des internautes jugent la crédibilité d'une entreprise sur la base de son site web. <em>(Source : Stanford Web Credibility Research)</em></div>
      </div>

      <h2>1. Pourquoi votre site web est votre actif digital le plus important</h2>
      <p>Contrairement aux réseaux sociaux, votre site web vous appartient. Instagram peut modifier son algorithme du jour au lendemain. TikTok peut être banni dans certains pays. Votre site, lui, reste.</p>
      <p>Voici ce qu'un bon site web fait pour vous :</p>
      <ul><li>Il génère du trafic organique via Google 24h/24</li><li>Il présente votre offre de façon structurée</li><li>Il convertit les visiteurs en clients potentiels</li><li>Il renforce votre crédibilité immédiatement</li><li>Il vous différencie de la concurrence</li></ul>
      <p>Un site bien construit est un commercial qui travaille pour vous sans jamais s'arrêter.</p>

      <div style="position:relative;background:#FFF9C4;border:2px solid #F3C709;border-radius:16px;padding:24px 24px 24px 28px;margin:32px 0;font-family:var(--font-inter),-apple-system,sans-serif">
        <div style="position:absolute;top:-14px;left:20px;background:#F3C709;color:#1A1A1A;font-weight:800;font-size:0.78rem;padding:4px 12px;border-radius:6px;white-space:nowrap">À retenir</div>
        <div style="font-size:0.92rem;color:#1A1A1A;line-height:1.8;margin-top:6px">Un site web n'est pas une dépense. C'est un investissement qui génère des retours sur le long terme via le référencement naturel.</div>
      </div>

      <h2>2. Les différents types de sites : lequel vous correspond ?</h2>
      <p>Avant de créer votre site, vous devez choisir le bon type selon votre activité et vos objectifs.</p>

      <div style="overflow:hidden;border-radius:12px;border:1px solid #E5E7EB;margin:24px 0">
        <table style="width:100%;border-collapse:collapse;font-family:var(--font-inter),-apple-system,sans-serif;font-size:0.88rem">
          <thead>
            <tr style="background:#F3C709">
              <th style="padding:12px 16px;text-align:left;font-weight:700;color:#000;border-bottom:1px solid #E5E7EB">Type de site</th>
              <th style="padding:12px 16px;text-align:left;font-weight:700;color:#000;border-bottom:1px solid #E5E7EB">Pour qui</th>
              <th style="padding:12px 16px;text-align:left;font-weight:700;color:#000;border-bottom:1px solid #E5E7EB">Coût moyen</th>
              <th style="padding:12px 16px;text-align:left;font-weight:700;color:#000;border-bottom:1px solid #E5E7EB">Délai</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#ffffff"><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Site vitrine</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Freelances, artisans, PME</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">600€ – 1 500€</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">2–3 semaines</td></tr>
            <tr style="background:#FAFAFA"><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Landing page</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Lancement d'offre, formation</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">500€ – 1 200€</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">1–2 semaines</td></tr>
            <tr style="background:#ffffff"><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Blog SEO</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Créateurs de contenu, agences</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">800€ – 2 000€</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">3–4 semaines</td></tr>
            <tr style="background:#FAFAFA"><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">Application web</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">SaaS, outils métier</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">2 000€ – 15 000€</td><td style="padding:12px 16px;color:#4B5563;border-bottom:1px solid #E5E7EB">4–16 semaines</td></tr>
            <tr style="background:#ffffff"><td style="padding:12px 16px;color:#4B5563">Refonte</td><td style="padding:12px 16px;color:#4B5563">Site existant à moderniser</td><td style="padding:12px 16px;color:#4B5563">1 000€ – 4 000€</td><td style="padding:12px 16px;color:#4B5563">3–6 semaines</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. WordPress ou site codé sur mesure ?</h2>
      <p>C'est la question que tout le monde se pose. La réponse dépend de votre situation.</p>
      <h3>WordPress : la solution accessible</h3>
      <p>WordPress propulse 43% des sites web mondiaux. La plateforme est mature, bien documentée et dispose d'un écosystème immense de plugins et de thèmes.</p>
      <h3>Site codé sur mesure : la solution premium</h3>
      <p>Un site codé from scratch avec Next.js offre une liberté totale sur le design, des performances optimales et une image plus premium.</p>

      <div style="position:relative;background:#FEE2E2;border:2px solid #EF4444;border-radius:16px;padding:24px 24px 24px 28px;margin:32px 0;font-family:var(--font-inter),-apple-system,sans-serif">
        <div style="position:absolute;top:-14px;left:20px;background:#EF4444;color:#fff;font-weight:800;font-size:0.78rem;padding:4px 12px;border-radius:6px;white-space:nowrap">Erreur fréquente</div>
        <div style="font-size:0.92rem;color:#1A1A1A;line-height:1.8;margin-top:6px">Beaucoup d'entrepreneurs choisissent WordPress uniquement parce que c'est "ce que tout le monde utilise". Demandez-vous d'abord ce dont vous avez réellement besoin avant de choisir un outil.</div>
      </div>

      <div style="margin:32px 0 32px 20px;display:flex;align-items:stretch;gap:0">
        <div style="width:4px;background:#F3C709;border-radius:2px;flex-shrink:0;margin-right:20px"></div>
        <div>
          <p style="font-style:italic;font-size:1rem;color:#4B5563;line-height:1.75;margin:0 0 8px;font-family:var(--font-inter),-apple-system,sans-serif">Un site lent perd 53% de ses visiteurs avant même qu'ils aient vu votre offre. La performance n'est pas un détail technique, c'est un enjeu business.</p>
          <cite style="font-style:normal;font-size:0.8rem;color:#9CA3AF;font-weight:600;font-family:var(--font-inter),-apple-system,sans-serif">— Google / SOASTA Research</cite>
        </div>
      </div>

      <div style="margin:32px 0">
        <blockquote class="reddit-embed-bq" style="height:500px" data-embed-height="546"><a href="https://www.reddit.com/r/microsaas/comments/1sifwpb/we_made_it/">We Made It</a><br> by <a href="https://www.reddit.com/user/EnvironmentHumble228/">u/EnvironmentHumble228</a> in <a href="https://www.reddit.com/r/microsaas/">microsaas</a></blockquote>
      </div>

      <h2>4. Les 5 étapes pour créer un site web professionnel qui convertit</h2>
      <div style="margin:24px 0;border-radius:14px;overflow:hidden;max-height:420px">
        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=90" alt="Méthode de création de site web" style="width:100%;height:100%;object-fit:cover;display:block" />
      </div>
      <p>Voici la méthode que nous appliquons chez / theslash sur chaque projet :</p>
      <ol>
        <li><strong>Définir l'objectif principal</strong> : que doit accomplir votre site ? Générer des leads, vendre un produit, présenter votre portfolio ?</li>
        <li><strong>Structurer l'architecture</strong> : quelles pages, dans quel ordre, avec quel contenu ? Cette étape est souvent négligée et c'est une erreur coûteuse.</li>
        <li><strong>Optimiser pour le SEO dès le départ</strong> : choisir les bons mots-clés, structurer les titres H1/H2/H3, écrire des meta descriptions pertinentes.</li>
        <li><strong>Designer avec l'objectif en tête</strong> : chaque élément visuel doit guider le visiteur vers une action précise. Beau ne suffit pas.</li>
        <li><strong>Mesurer et itérer</strong> : Google Search Console, Analytics, heatmaps. Un site qui ne se mesure pas ne s'améliore pas.</li>
      </ol>

      <h2>En résumé</h2>
      <p>Créer un site web professionnel en 2026 ne se résume pas à choisir un template et y coller ses textes. C'est un projet stratégique qui demande une réflexion sur vos objectifs, vos cibles, votre message et les outils adaptés. Un bon site web est un investissement qui travaille pour vous 24h/24 — à condition d'être bien conçu, bien référencé et bien suivi. Si vous voulez aller plus vite et éviter les erreurs, faites-vous accompagner par des professionnels qui font ça tous les jours.</p>
    `,
  },
};

const allArticlesMeta = [
  { title: "Comment choisir le bon CMS pour votre site en 2026", excerpt: "WordPress, Webflow, Next.js + Keystatic, on décortique les options pour vous aider à faire le bon choix.", slug: "comment-choisir-son-cms-2026", category: "Création de site", readingTime: 7, date: "15 mars 2026" },
  { title: "Les 5 erreurs SEO qui ruinent votre référencement dès le départ", excerpt: "Des balises title manquantes aux pages orphelines, voici les pièges les plus courants, et comment les éviter.", slug: "erreurs-seo-debutant", category: "SEO", readingTime: 5, date: "8 mars 2026" },
  { title: "Pourquoi votre landing page ne convertit pas (et comment y remédier)", excerpt: "Copywriting flou, CTA enterré, trop d'options, les raisons sont souvent simples mais coûtent cher.", slug: "landing-page-ne-convertit-pas", category: "Web Design", readingTime: 6, date: "1 mars 2026" },
  { title: "Vitesse de chargement : pourquoi votre site perd des clients chaque seconde", excerpt: "Un site lent coûte cher. On vous explique comment mesurer, diagnostiquer et corriger les problèmes de performance.", slug: "vitesse-chargement-site-web", category: "Web Design", readingTime: 6, date: "22 fév. 2026" },
  { title: "Créer un site web professionnel en 2026 : le guide complet", excerpt: "De la définition de l'objectif au choix de la technologie, voici la méthode complète pour créer un site qui convertit.", slug: "creer-site-web-professionnel-guide", category: "Création de site", readingTime: 8, date: "11 avril 2026" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

function extractTOC(html: string): { id: string; text: string; level: "h2" | "h3" }[] {
  const headingRegex = /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi;
  const items: { id: string; text: string; level: "h2" | "h3" }[] = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = match[1].toLowerCase() as "h2" | "h3";
    const raw = match[2].replace(/<[^>]+>/g, "").trim().replace(/^\d+\.\s*/, "");
    if (raw.toLowerCase() === "introduction") continue;
    const id = slugify(raw);
    items.push({ id, text: raw, level });
  }
  return items;
}

function addIDsToHeadings(html: string): string {
  let result = html.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_match, inner) => {
    const clean = inner.replace(/<[^>]+>/g, "").trim().replace(/^\d+\.\s*/, "");
    const id = slugify(clean);
    const cleanInner = inner.replace(/^\d+\.\s*/, "");
    return `<h2 id="${id}">${cleanInner}</h2>`;
  });
  result = result.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_match, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugify(text);
    return `<h3 id="${id}">${inner}</h3>`;
  });
  return result;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  const placeholder = placeholderContent[slug];

  if (!article && !placeholder) {
    notFound();
  }

  const title = article?.title ?? placeholder?.title ?? "";
  const description = article?.description ?? placeholder?.description ?? "";
  const category = article ? getCategoryLabel(article.category) : placeholder?.category ?? "";
  const readingTime = article?.readingTime ?? placeholder?.readingTime ?? 5;
  const date = article?.date
    ? new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
    : placeholder?.date ?? "";
  const updatedDate = placeholder?.updatedDate ?? null;

  const coverImages = [
    "photo-1499750310107-5fef28a66643",
    "photo-1542744173-8e7e53415bb0",
    "photo-1497366216548-37526070297c",
    "photo-1551434678-e076c223a692",
    "photo-1498050108023-c5249f4df085",
  ];
  const coverImg = article?.coverImage ?? coverImages[slug.charCodeAt(0) % coverImages.length];

  const rawContent = placeholder?.content ?? "";
  const processedContent = addIDsToHeadings(rawContent);
  const tocItems = extractTOC(rawContent);

  const articleUrl = `https://theslash.fr/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: "/ theslash", url: "https://theslash.fr" },
    publisher: { "@type": "Organization", name: "/ theslash", url: "https://theslash.fr" },
    datePublished: article?.date ?? "",
    url: articleUrl,
  };

  const related = allArticlesMeta
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (b.category === category && a.category !== category) return 1;
      return 0;
    })
    .slice(0, 4)
    .slice(0, 3);

  const metaStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), -apple-system, sans-serif",
    fontSize: "0.8rem",
    color: "#9CA3AF",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  // FAQ : priorité au champ Keystatic, sinon FAQ du placeholder, sinon vide
  const keystakFaq = article?.faq ?? [];
  const placeholderFaq = placeholder?.faq ?? [];
  const faqItems = (
    keystakFaq.length > 0
      ? keystakFaq.map((f) => ({ q: f.question, a: f.answer }))
      : placeholderFaq
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── HERO : fond coloré, s'arrête après la meta-description ── */}
      <section style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)", padding: "100px 0 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: title }]} />

          <div
            className="article-hero-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 210px",
              gap: "clamp(24px, 4vw, 56px)",
              alignItems: "flex-start",
              marginTop: "28px",
            }}
          >
            <div>
              {category && (
                <span style={{ display: "inline-block", padding: "5px 14px", backgroundColor: "rgba(243,199,9,0.15)", border: "1px solid rgba(243,199,9,0.3)", borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "#1A1A1A", marginBottom: "16px" }}>
                  {category}
                </span>
              )}
              <h1 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1A1A1A", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px" }}>
                {title}
              </h1>
              {description && (
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.75 }}>
                  {description}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingTop: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="/icon.svg" alt="/ theslash" style={{ height: "32px", width: "32px", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#1A1A1A" }}>/ theslash</span>
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(0,0,0,0.08)" }} />
              {readingTime && (
                <div style={metaStyle}><Clock size={13} /><span>{readingTime} min de lecture</span></div>
              )}
              {date && (
                <div style={metaStyle}><Calendar size={13} /><span>Publié le {date}</span></div>
              )}
              {updatedDate && (
                <div style={metaStyle}><RefreshCw size={13} /><span>Mis à jour le {updatedDate}</span></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE — fond blanc, pleine largeur ── */}
      <div style={{ backgroundColor: "#ffffff", padding: "40px 0 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div className="article-cover" style={{ borderRadius: "16px", overflow: "hidden", height: "640px" }}>
            <img
              src={coverImg.startsWith("http") ? coverImg : `https://images.unsplash.com/${coverImg}?w=1200&q=90`}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* ── 3 COLONNES sous l'image ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "40px 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div
            className="article-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 52px",
              gap: "clamp(40px, 4vw, 60px)",
            }}
          >

            {/* LEFT SIDEBAR */}
            <div className="article-sidebar-left">
              <ArticleSidebarLeft items={tocItems} />
            </div>

            {/* MAIN CONTENT */}
            <main>
              <div
                style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif" }}
                className="article-body"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              <ArticleReactions slug={slug} />
            </main>

            {/* RIGHT SIDEBAR */}
            <div className="article-sidebar-right">
              <ArticleSidebarRight url={articleUrl} title={title} />
            </div>

          </div>
        </div>
      </section>

      {/* ── ARTICLES LIÉS ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "72px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1A1A1A", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
              <span style={{ color: "#A0A0A0", fontWeight: 700 }}>encore plus d&apos;articles sur</span>{" "}
              <span style={{ color: "#1A1A1A", fontWeight: 800 }}>{category.toLowerCase()}</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="related-grid">
            {related.map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                excerpt={a.excerpt}
                slug={a.slug}
                category={a.category}
                readingTime={a.readingTime}
                date={a.date}
              />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .related-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .related-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── FAQ ── */}
      <ArticleFAQ items={faqItems} />

      <CTASection />

      <SocialEmbedLoader />

      <style>{`
        .article-body h2#introduction { display: none; }
        .article-body h2 {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #1A1A1A;
          letter-spacing: -0.025em;
          margin-top: 44px;
          margin-bottom: 14px;
          line-height: 1.25;
          scroll-margin-top: 112px;
        }
        .article-body h3 {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #1A1A1A;
          letter-spacing: -0.015em;
          margin-top: 28px;
          margin-bottom: 12px;
          line-height: 1.3;
          scroll-margin-top: 112px;
        }
        .article-body p {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.85;
          margin-bottom: 18px;
        }
        .article-body ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 24px;
        }
        .article-body ul li {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.7;
          padding: 3px 0 3px 24px;
          position: relative;
        }
        .article-body ul li::before {
          content: "•";
          color: #F3C709;
          font-weight: 900;
          font-size: 1.1em;
          position: absolute;
          left: 4px;
          top: 3px;
          line-height: 1.7;
        }
        .article-body ol {
          list-style: none;
          counter-reset: article-ol;
          padding: 0;
          margin: 0 0 20px 24px;
        }
        .article-body ol li {
          font-family: var(--font-inter), -apple-system, sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.7;
          padding: 3px 0 3px 28px;
          position: relative;
          counter-increment: article-ol;
        }
        .article-body ol li::before {
          content: counter(article-ol) ".";
          color: #F3C709;
          font-weight: 800;
          font-size: 0.9rem;
          position: absolute;
          left: 0;
          top: 4px;
          line-height: 1.7;
          min-width: 20px;
        }
        .article-body table tbody tr {
          transition: background-color 120ms ease;
        }
        .article-body table tbody tr:hover {
          background-color: rgba(243, 199, 9, 0.07) !important;
        }
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .article-sidebar-left { display: none !important; }
          .article-sidebar-right { display: none !important; }
          .article-hero-cols { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .article-hero-cols > div:last-child { display: none !important; }
          .article-cover { height: 240px !important; }
        }
      `}</style>
    </>
  );
}
