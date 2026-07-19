"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Theme provider for NetPilot AI.
 *
 * - Class strategy: next-themes toggles a `.dark` class on <html>, which
 *   swaps the token values defined in globals.css. Components are untouched.
 * - Light is the default; Dark and System are both supported.
 * - `disableTransitionOnChange` avoids the color flash on theme switch.
 *
 * See DESIGN_SYSTEM.md §13 (Token Consumption Rules).
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
