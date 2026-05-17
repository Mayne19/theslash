export type ArticleCalloutType = "important" | "erreur" | "chiffre";

export interface ArticleCalloutDesign {
  type: ArticleCalloutType;
  label: string;
  bg: string;
  border: string;
  labelBg: string;
  labelColor: string;
  textColor: string;
  emoji: string;
  className: string;
}

export const articleCalloutConfigs: Record<ArticleCalloutType, ArticleCalloutDesign> = {
  important: {
    type: "important",
    label: "Point important",
    bg: "#FFF9C4",
    border: "#F3C709",
    labelBg: "#F3C709",
    labelColor: "#1A1A1A",
    textColor: "#1A1A1A",
    emoji: "💡",
    className: "callout-important",
  },
  erreur: {
    type: "erreur",
    label: "L'erreur fatale",
    bg: "#FEE2E2",
    border: "#EF4444",
    labelBg: "#EF4444",
    labelColor: "#ffffff",
    textColor: "#1A1A1A",
    emoji: "🥊",
    className: "callout-erreur",
  },
  chiffre: {
    type: "chiffre",
    label: "Le chiffre clé",
    bg: "#DBEAFE",
    border: "#3B82F6",
    labelBg: "#3B82F6",
    labelColor: "#ffffff",
    textColor: "#1A1A1A",
    emoji: "📊",
    className: "callout-chiffre",
  },
};

const CALLOUT_BLOCK_REGEX =
  /<div\b(?=[^>]*data-block-type=(["'])callout\1)([^>]*)>\s*(?:<div\b[^>]*class=(["'])[^"']*\bcallout-title\b[^"']*\3[^>]*>([\s\S]*?)<\/div>)?\s*<div\b[^>]*class=(["'])[^"']*\bcallout-body\b[^"']*\5[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;

function getAttribute(attributes: string, name: string): string | null {
  const match = attributes.match(new RegExp(`${name}=(["'])(.*?)\\1`, "i"));
  return match?.[2] ?? null;
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripInlineStyles(html: string): string {
  return html.replace(/\sstyle=(["']).*?\1/gi, "");
}

export function resolveArticleCalloutType(value: string | null | undefined): ArticleCalloutType {
  const normalized = (value ?? "").trim().toLowerCase();

  if (normalized === "important" || normalized === "attention" || normalized === "warning") {
    return "important";
  }
  if (normalized === "erreur" || normalized === "error" || normalized === "danger") {
    return "erreur";
  }
  if (normalized === "chiffre" || normalized === "stat" || normalized === "stats" || normalized === "number") {
    return "chiffre";
  }

  return "important";
}

function getCalloutColors(attributes: string): {
  bg: string | null;
  border: string | null;
  text: string | null;
} {
  return {
    bg: getAttribute(attributes, "data-callout-color-background")
      ?? getAttribute(attributes, "data-color-background"),
    border: getAttribute(attributes, "data-callout-color-border")
      ?? getAttribute(attributes, "data-color-border"),
    text: getAttribute(attributes, "data-callout-color-text")
      ?? getAttribute(attributes, "data-color-text"),
  };
}

function isValidHexColor(value: string | null): value is string {
  return typeof value === "string" && /^#[0-9A-Fa-f]{6}$/.test(value.trim());
}

interface ResolvedCalloutColors {
  bg: string;
  border: string;
  text: string;
  labelBg: string;
  labelColor: string;
}

function resolveCalloutStyle(
  type: ArticleCalloutType,
  attributes: string
): ResolvedCalloutColors {
  const source = getAttribute(attributes, "data-callout-source");
  const isManual = !source || source === "manual";

  if (isManual) {
    const custom = getCalloutColors(attributes);
    if (isValidHexColor(custom.bg) && isValidHexColor(custom.border) && isValidHexColor(custom.text)) {
      return {
        bg: custom.bg!,
        border: custom.border!,
        text: custom.text!,
        labelBg: custom.border!,
        labelColor: custom.text!,
      };
    }
  }

  const config = articleCalloutConfigs[type];
  return {
    bg: config.bg,
    border: config.border,
    text: config.textColor,
    labelBg: config.labelBg,
    labelColor: config.labelColor,
  };
}

export function renderArticleCalloutHtml(
  type: ArticleCalloutType,
  title: string | null | undefined,
  bodyHtml: string,
  attributes: string = ""
): string {
  const config = articleCalloutConfigs[type];
  const colors = resolveCalloutStyle(type, attributes);
  const safeTitle = escapeHtml(title?.trim() || config.label);
  const sanitizedBody = stripInlineStyles(bodyHtml).trim();

  return [
    `<div class="article-callout ${config.className}" data-callout-type="${config.type}" style="position: relative; background-color: ${colors.bg}; border: 2px solid ${colors.border}; border-radius: 16px; padding: 24px 24px 24px 28px; margin: 32px 0; font-family: var(--font-inter), -apple-system, sans-serif;">`,
    `<div class="article-callout-label" style="position: absolute; top: -14px; left: 20px; background-color: ${colors.labelBg}; color: ${colors.labelColor}; font-weight: 800; font-size: 0.78rem; letter-spacing: 0.01em; padding: 4px 12px; border-radius: 6px; font-family: var(--font-inter), -apple-system, sans-serif; white-space: nowrap;">${safeTitle}</div>`,
    `<div class="article-callout-content" style="font-size: 0.92rem; color: ${colors.text}; line-height: 1.8; margin-top: 6px;">${sanitizedBody}</div>`,
    `</div>`,
  ].join("");
}

export function transformIdeasStudioCallouts(html: string): string {
  return html.replace(
    CALLOUT_BLOCK_REGEX,
    (_match, _quote1, attributes: string, _quote2, titleHtml: string | undefined, _quote3, bodyHtml: string) => {
      const type = resolveArticleCalloutType(
        getAttribute(attributes, "data-template-key")
          ?? getAttribute(attributes, "data-callout-style")
          ?? getAttribute(attributes, "data-callout-type")
          ?? getAttribute(attributes, "data-callout-class-name")
      );

      const title =
        getAttribute(attributes, "data-callout-title")
        ?? getAttribute(attributes, "data-callout-label")
        ?? (titleHtml ? stripHtml(titleHtml) : null);

      return renderArticleCalloutHtml(type, title, bodyHtml, attributes);
    }
  );
}
