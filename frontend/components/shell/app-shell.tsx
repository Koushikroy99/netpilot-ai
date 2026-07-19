import type { ReactNode } from "react";
import { Sidebar } from "@/components/shell/sidebar";
import { TopBar } from "@/components/shell/top-bar";
import { cn } from "@/lib/utils";

/**
 * AppShell — the composition root of the application shell.
 *
 * Mounts the persistent chrome (sidebar + top bar) and renders the page
 * content area. Designed to be reused by every future page: pages only
 * supply their title, breadcrumb trail, and content via slots.
 *
 * Responsive:
 *  - md+ : fixed 256px sidebar + flexible main column
 *  - <md : sidebar hidden; top bar shows a menu trigger (no handler yet —
 *          the responsive slide-over is deferred to a later phase)
 *
 * Spacing and surface colors are token-only (DESIGN_SYSTEM.md §1, §3).
 */
export function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={cn("flex min-h-screen bg-background")}>
      <Sidebar />

      {/* Main column: spans the remaining width on md+; full width on <md. */}
      <div className={cn("flex min-w-0 flex-1 flex-col")}>
        <TopBar />

        <main className={cn("flex-1")}>{children}</main>
      </div>
    </div>
  );
}
