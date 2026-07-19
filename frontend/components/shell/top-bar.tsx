import { Bell, Menu, Search, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

/**
 * Top navigation bar.
 *
 * Phase 3: UI only. No functionality is wired:
 *  - Search: input with placeholder, no behavior
 *  - Notifications: bell icon, no badge, no panel
 *  - User: generic profile icon, no name, no menu
 *  - Theme toggle: functional (Light/Dark/System)
 *
 * The mobile menu trigger renders below the md breakpoint but has no
 * handler — the responsive slide-over is deferred to a later phase.
 *
 * Styling is token-only (DESIGN_SYSTEM.md §1, §2, §5, §8 button anatomy).
 */
export function TopBar() {
  return (
    <header
      className={cn(
        "flex h-14 items-center gap-2 px-4 sm:px-6",
        "bg-surface border-b border-border",
      )}
    >
      {/* Mobile menu trigger — no handler yet (slide-over deferred). */}
      <button
        type="button"
        aria-label="Open menu"
        className={cn(
          "md:hidden inline-flex h-9 w-9 items-center justify-center",
          "rounded-md text-text-muted",
          "hover:bg-hover-overlay hover:text-text",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          "transition-colors duration-100",
        )}
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>

      {/* Global search — placeholder only, hidden on small screens. */}
      <div className="hidden sm:flex sm:flex-1 sm:max-w-md">
        <label className="relative w-full">
          <span className="sr-only">Search</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            name="global-search"
            placeholder="Search..."
            className={cn(
              "h-9 w-full rounded-md pl-9 pr-3",
              "bg-background border border-border",
              "text-sm text-text placeholder:text-text-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary",
              "transition-colors duration-100",
            )}
          />
        </label>
      </div>

      {/* Spacer pushes the right cluster to the edge on every breakpoint. */}
      <div className="flex-1 sm:flex-none" />

      {/* Right cluster */}
      <div className="flex items-center gap-1">
        <ThemeToggle />

        {/* Notifications — bell icon only. */}
        <button
          type="button"
          aria-label="Notifications"
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center",
            "rounded-md text-text-muted",
            "hover:bg-hover-overlay hover:text-text",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "transition-colors duration-100",
          )}
        >
          <Bell className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* User — generic profile icon only. */}
        <button
          type="button"
          aria-label="Account"
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center",
            "rounded-md text-text-muted",
            "hover:bg-hover-overlay hover:text-text",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "transition-colors duration-100",
          )}
        >
          <User className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
