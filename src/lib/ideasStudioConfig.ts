export interface IdeasStudioCalloutConfig {
  id: "important" | "erreur" | "chiffre";
  key: "important" | "erreur" | "chiffre";
  label: string;
  defaultTitle: string;
  className: string;
  colors: {
    background: string;
    border: string;
    text: string;
    badgeBackground: string;
    badgeText: string;
  };
  emoji: string;
}

export const ideasStudioCallouts: IdeasStudioCalloutConfig[] = [
  {
    id: "important",
    key: "important",
    label: "Important",
    defaultTitle: "Point important",
    className: "callout-important",
    colors: {
      background: "#FFF9C4",
      border: "#F3C709",
      text: "#1A1A1A",
      badgeBackground: "#F3C709",
      badgeText: "#1A1A1A",
    },
    emoji: "💡",
  },
  {
    id: "erreur",
    key: "erreur",
    label: "Erreur",
    defaultTitle: "L'erreur fatale",
    className: "callout-erreur",
    colors: {
      background: "#FEE2E2",
      border: "#EF4444",
      text: "#1A1A1A",
      badgeBackground: "#EF4444",
      badgeText: "#FFFFFF",
    },
    emoji: "🥊",
  },
  {
    id: "chiffre",
    key: "chiffre",
    label: "Chiffre",
    defaultTitle: "Le chiffre clé",
    className: "callout-chiffre",
    colors: {
      background: "#DBEAFE",
      border: "#3B82F6",
      text: "#1A1A1A",
      badgeBackground: "#3B82F6",
      badgeText: "#FFFFFF",
    },
    emoji: "📊",
  },
];

export const ideasStudioFaqConfig = {
  enabled: true,
  renderMode: "after_article" as const,
};

export const ideasStudioSiteConfig = {
  callouts: ideasStudioCallouts.map((callout) => ({
    id: callout.id,
    key: callout.key,
    label: callout.label,
    defaultTitle: callout.defaultTitle,
    className: callout.className,
    colors: {
      background: callout.colors.background,
      border: callout.colors.border,
      text: callout.colors.text,
    },
  })),
  faq: ideasStudioFaqConfig,
};
