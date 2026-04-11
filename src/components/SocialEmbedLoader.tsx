"use client";
import { useEffect } from "react";

// Loads embed scripts for any social platform detected in the article content.
// Add new platforms here as needed.
const EMBED_SCRIPTS: { selector: string; src: string; id: string }[] = [
  {
    selector: ".twitter-tweet",
    src: "https://platform.twitter.com/widgets.js",
    id: "twitter-widgets-script",
  },
  {
    selector: ".reddit-embed-bq",
    src: "https://embed.reddit.com/widgets.js",
    id: "reddit-widgets-script",
  },
];

export default function SocialEmbedLoader() {
  useEffect(() => {
    EMBED_SCRIPTS.forEach(({ selector, src, id }) => {
      if (!document.querySelector(selector)) return;
      if (document.getElementById(id)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.charset = "UTF-8";
      script.id = id;
      document.head.appendChild(script);
    });
  }, []);

  return null;
}
