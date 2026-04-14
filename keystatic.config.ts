import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "Mayne19/theslash",
  },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        description: fields.text({
          label: "Description (meta)",
          description: "150-160 caractères pour Google",
          multiline: false,
        }),
        date: fields.date({ label: "Date de publication" }),
        author: fields.text({ label: "Auteur", defaultValue: "Yuzzu" }),
        readingTime: fields.number({ label: "Temps de lecture (minutes)" }),
        coverImage: fields.image({
          label: "Image de couverture",
          directory: "public/images/articles",
          publicPath: "/images/articles",
        }),
        category: fields.select({
          label: "Catégorie",
          defaultValue: "web-design",
          options: [
            { label: "Web Design", value: "web-design" },
            { label: "SEO", value: "seo" },
            { label: "Intelligence Artificielle", value: "ia" },
            { label: "Création de site", value: "creation-site" },
            { label: "Stratégie digitale", value: "strategie" },
          ],
        }),
        content: fields.mdx({ label: "Contenu" }),
        faq: fields.array(
          fields.object({
            question: fields.text({ label: "Question" }),
            answer: fields.text({ label: "Réponse", multiline: true }),
          }),
          {
            label: "FAQ (optionnel)",
            description: "Questions fréquentes spécifiques à cet article. Laissez vide si pas de FAQ.",
            itemLabel: (props) => props.fields.question.value || "Question",
          }
        ),
      },
    }),
  },
});
