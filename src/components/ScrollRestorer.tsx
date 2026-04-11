"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Resets scroll to the top on every page navigation.
 * Bypasses CSS scroll-behavior to ensure an instant jump.
 */
export default function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
