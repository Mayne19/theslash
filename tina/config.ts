import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/articles",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description (meta)",
            ui: { component: "textarea" },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
          },
          {
            type: "string",
            name: "author",
            label: "Auteur",
            options: ["/ theslash"],
          },
          {
            type: "number",
            name: "readingTime",
            label: "Temps de lecture (minutes)",
          },
          {
            type: "string",
            name: "category",
            label: "Catégorie",
            options: [
              { label: "Web Design", value: "web-design" },
              { label: "SEO", value: "seo" },
              { label: "Intelligence Artificielle", value: "ia" },
              { label: "Création de site", value: "creation-site" },
              { label: "Stratégie digitale", value: "strategie" },
            ],
          },
          {
            type: "image",
            name: "coverImage",
            label: "Image de couverture",
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ (optionnel)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.question || "Question" }),
            },
            fields: [
              { type: "string", name: "question", label: "Question" },
              {
                type: "string",
                name: "answer",
                label: "Réponse",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
    ],
  },
});
