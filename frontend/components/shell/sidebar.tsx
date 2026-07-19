"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, LayoutDashboard, Server, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Sidebar — primary navigation.
 *
 * Phase 3: UI only. Four items validate the visual hierarchy of the shell.
 * Final information architecture will be defined before feature pages ship.
 *
 * Active state is derived from the current pathname and styled entirely via
 * tokens (primary-subtle background, primary text, primary left accent) per
 * DESIGN_SYSTEM.md §1.4 (selected-overlay).
 */
type NavItem = {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Discovery", href: "/discovery", icon: Compass },
  { label: "Infrastructure", href: "/infrastructure", icon: Server },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden md:flex md:w-64 md:flex-col",
        "bg-surface border-r border-border",
      )}
    >
      {/* Brand */}
      <div className="flex flex-col gap-0.5 px-6 py-6">
        <span className="text-base font-semibold tracking-tight text-text">
          NetPilot AI
        </span>
        <span className="text-xs text-text-muted">Infrastructure Operations Platform</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-3 py-2" aria-label="Primary">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2",
                "text-sm font-medium",
                "border-l-2 border-transparent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                "transition-colors duration-100",
                isActive
                  ? "bg-primary-subtle text-primary border-primary"
                  : "text-text-secondary hover:bg-hover-overlay hover:text-text",
              )}
            >
              <Icon
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
