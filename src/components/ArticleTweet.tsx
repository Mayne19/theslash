"use client";
import { useEffect, useRef } from "react";

interface ArticleTweetProps {
  url: string;
}

export default function ArticleTweet({ url }: ArticleTweetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tryLoad = () => {
      const w = window as Window & { twttr?: { widgets: { load: (el?: HTMLElement | null) => void } } };
      w.twttr?.widgets?.load(containerRef.current);
    };

    const existing = document.querySelector('script[src*="platform.twitter.com/widgets.js"]');
    if ((window as { twttr?: unknown }).twttr) {
      tryLoad();
    } else if (existing) {
      existing.addEventListener("load", tryLoad);
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = tryLoad;
      document.head.appendChild(script);
    }
  }, [url]);

  return (
    <div ref={containerRef} style={{ maxWidth: "550px", margin: "32px auto" }}>
      <blockquote className="twitter-tweet" data-lang="fr">
        <a href={url}></a>
      </blockquote>
    </div>
  );
}
