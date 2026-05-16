import { articleCalloutConfigs, type ArticleCalloutType } from "@/lib/articleCallouts";

export interface IdeasStudioCalloutConfig {
  id: ArticleCalloutType;
  key: ArticleCalloutType;
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
}

export const ideasStudioCallouts: IdeasStudioCalloutConfig[] = Object.values(articleCalloutConfigs).map((callout) => ({
  id: callout.type,
  key: callout.type,
  label:
    callout.type === "important" ? "Important"
    : callout.type === "erreur" ? "Erreur"
    : "Chiffre",
  defaultTitle: callout.label,
  className: callout.className,
  colors: {
    background: callout.bg,
    border: callout.border,
    text: callout.textColor,
    badgeBackground: callout.labelBg,
    badgeText: callout.labelColor,
  },
}));

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
