import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Breadcrumbs.
 *
 * Server component — no client state. Pages pass their breadcrumb trail as
 * a prop; future pages extend the list as routes nest.
 *
 * The final item is rendered as plain text in the primary text color;
 * ancestors are links in the secondary text color. Hidden below the sm
 * breakpoint to preserve space on small screens.
 */
export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="hidden sm:flex">
      <ol className="flex items-center gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const Icon = ChevronRight;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {isLast || !item.href ? (
                <span
                  className={cn(
                    "text-text",
                    isLast && "font-medium",
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-text-secondary hover:text-text rounded-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    "transition-colors duration-100",
                  )}
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <Icon
                  className="h-3.5 w-3.5 text-text-muted"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
