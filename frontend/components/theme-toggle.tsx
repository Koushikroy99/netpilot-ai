"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Theme toggle — cycles Light → Dark → System.
 *
 * UI only: persists the choice via next-themes (localStorage). No app-level
 * state, no business logic.
 *
 * Hydration: next-themes resolves the theme on the client, so the resolved
 * icon cannot be known during SSR. `useSyncExternalStore` returns a stable
 * `false` on the server and during hydration, then `true` once mounted —
 * this is the React-blessed way to read client-only state without a
 * hydration mismatch.
 *
 * Icons: Lucide only. Colors: tokens only (no raw values).
 */
const ORDER = ["light", "dark", "system"] as const;
type Resolved = (typeof ORDER)[number];

const LABELS: Record<Resolved, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

// A trivial external store whose only purpose is to report "has the client
// mounted yet" — server snapshot is false, client snapshot becomes true.
const emptySubscribe = () => () => {};
const getMounted = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, getMounted, getServerSnapshot);

  // Until mounted on the client, render a stable placeholder to avoid
  // hydration mismatch. The button keeps its size and semantics.
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center",
          "rounded-md text-text-muted",
          "hover:bg-hover-overlay hover:text-text",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "transition-colors duration-100",
        )}
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
      </button>
    );
  }

  const current = (ORDER.includes(theme as Resolved) ? theme : "light") as Resolved;
  const nextIndex = (ORDER.indexOf(current) + 1) % ORDER.length;
  const next = ORDER[nextIndex];

  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      aria-label={`Toggle theme — current: ${LABELS[current]}, switching to ${LABELS[next]}`}
      title={`Theme: ${LABELS[current]}`}
      onClick={() => setTheme(next)}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center",
        "rounded-md text-text-muted",
        "hover:bg-hover-overlay hover:text-text",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-colors duration-100",
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
