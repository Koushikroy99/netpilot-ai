/**
 * Tiny className joiner.
 *
 * Joins truthy class strings with a single space. Intentionally minimal —
 * no tailwind-merge, no variant system — to keep Phase 3 dependencies to
 * next-themes only. Replace with a fuller utility when the design system
 * primitives land in a later phase.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
