"use client";
import { useEffect } from "react";

export default function TwitterWidgetLoader() {
  useEffect(() => {
    const w = window as Window & { twttr?: { widgets: { load: () => void } } };
    if (w.twttr?.widgets) {
      w.twttr.widgets.load();
      return;
    }
    if (!document.querySelector('script[src*="platform.twitter.com/widgets.js"]')) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.head.appendChild(script);
    }
  }, []);
  return null;
}
