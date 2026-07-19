# NetPilot AI — Design System

**Version:** 1.0
**Status:** Canonical design standard
**Theme model:** Light-first (default). Dark theme fully supported. All components consume **semantic tokens** — never hard-coded colors. Theme can be switched without touching component code.

---

## 0. Design Principles

NetPilot AI is a modern Infrastructure Operations Platform for Network, Cloud, Platform, and DevOps engineers, and SREs.

The product must feel: **Professional · Minimal · Enterprise · Operational · Clean · High-density · Trustworthy · Calm.**

**Hard prohibitions**
- No cyberpunk or neon aesthetics
- No purple gradients
- No glassmorphism
- No "AI startup" visual tropes
- No emojis in UI
- No decorative motion

**Status semantics (non-negotiable)**
- Blue = brand / informational
- Green = healthy
- Orange = warning
- Red = critical
- **Blue is never used to signify health.**

---

## 1. Color System

Both themes are derived from the Tailwind **Slate** neutral family for cohesion. Status hues are fixed across themes; neutrals invert between light and dark.

### 1.1 Light Theme (Default)

| Token | Value | Usage |
|---|---|---|
| `background` | `#F8FAFC` | App canvas (slate-50) |
| `surface` | `#FFFFFF` | Sidebar, top bar, panels |
| `card` | `#FFFFFF` | Data containers (primary work surface) |
| `elevated` | `#FFFFFF` + `shadow-md` | Popovers, dropdowns, modals |
| `border-subtle` | `#E2E8F0` | Default dividers (slate-200) |
| `border-strong` | `#CBD5E1` | Emphasized dividers, focus pre-state (slate-300) |
| `text` | `#0F172A` | Primary text (slate-900) |
| `text-secondary` | `#475569` | Secondary text (slate-600) |
| `text-muted` | `#94A3B8` | Tertiary / placeholder (slate-400) |

### 1.2 Dark Theme

Same design language, inverted neutrals. Status hues slightly brightened to preserve contrast on dark surfaces. Dark is **not** optimized over light.

| Token | Value | Usage |
|---|---|---|
| `background` | `#0F172A` | App canvas (slate-900) |
| `surface` | `#1E293B` | Sidebar, top bar, panels (slate-800) |
| `card` | `#1E293B` | Data containers |
| `elevated` | `#334155` + `shadow-lg` | Popovers, dropdowns, modals (slate-700) |
| `border-subtle` | `#334155` | Default dividers (slate-700) |
| `border-strong` | `#475569` | Emphasized dividers (slate-600) |
| `text` | `#F1F5F9` | Primary text (slate-100) |
| `text-secondary` | `#94A3B8` | Secondary text (slate-400) |
| `text-muted` | `#64748B` | Tertiary / placeholder (slate-500) |

### 1.3 Brand

| Token | Light | Dark | Usage |
|---|---|---|---|
| `primary` | `#2563EB` | `#3B82F6` | Brand accent, default action (blue-600 / blue-500) |
| `primary-hover` | `#1D4ED8` | `#2563EB` | Hover state (blue-700 / blue-600) |
| `primary-active` | `#1E40AF` | `#1D4ED8` | Pressed state (blue-800 / blue-700) |
| `primary-subtle` | `rgba(37,99,235,0.10)` | `rgba(59,130,246,0.16)` | Selected row, active nav, AI card tint |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icon on primary fills |

### 1.4 Interaction

| Token | Light | Dark |
|---|---|---|
| `hover-overlay` | `rgba(15,23,42,0.04)` | `rgba(255,255,255,0.06)` |
| `selected-overlay` | `primary-subtle` + 2px `primary` left accent | same |
| `focus-ring` | `#2563EB`, 2px, offset 2px | `#3B82F6`, 2px, offset 2px |

### 1.5 Status (semantic — fixed hue family, never decorative)

| Token | Light | Dark | Soft BG (light / dark) | Meaning |
|---|---|---|---|---|
| `healthy` | `#16A34A` | `#22C55E` | `rgba(22,163,74,0.12)` / `rgba(34,197,94,0.16)` | Operational, within SLO |
| `warning` | `#F59E0B` | `#FBBF24` | `rgba(245,158,11,0.12)` / `rgba(251,191,36,0.16)` | Degraded, approaching threshold |
| `critical` | `#DC2626` | `#EF4444` | `rgba(220,38,38,0.12)` / `rgba(239,68,68,0.16)` | Down, SLO breach, error |
| `info` | `#2563EB` | `#3B82F6` | `rgba(37,99,235,0.12)` / `rgba(59,130,246,0.16)` | Informational |
| `unknown` | `#94A3B8` | `#64748B` | `rgba(148,163,184,0.12)` / `rgba(100,116,139,0.16)` | No data / not reporting |

> **Healthy vs Running:** Healthy is a *service state* (green). A job/process that is executing uses a neutral **Running** treatment — **never green** — to avoid implying health. Running uses the `info` token with the label "Running".

### 1.6 Chart Palette

Professional, restrained, anchored on blue. No neon, no magenta. Ordered for series distinction. Status breakdowns (e.g. donut of healthy/warning/critical) use the **status tokens** above, not this palette.

| # | Token | Light | Dark | Default use |
|---|---|---|---|---|
| 1 | `chart-1` | `#2563EB` | `#3B82F6` | Primary series (blue) |
| 2 | `chart-2` | `#16A34A` | `#22C55E` | Secondary (green) |
| 3 | `chart-3` | `#F59E0B` | `#FBBF24` | Tertiary (amber) |
| 4 | `chart-4` | `#DC2626` | `#EF4444` | Quaternary (red) |
| 5 | `chart-5` | `#0EA5E9` | `#38BDF8` | Quinary (sky) |
| 6 | `chart-6` | `#14B8A6` | `#2DD4BF` | Senary (teal) |
| 7 | `chart-7` | `#6366F1` | `#818CF8` | Septenary (indigo — use sparingly) |
| 8 | `chart-8` | `#475569` | `#94A3B8` | Octonary (neutral slate) |

---

## 2. Typography

**Primary font:** Geist (Sans) — loaded via `next/font`.
**Monospace font:** Geist Mono — metrics, IDs, IPs, timestamps, code.
**No system fallback as primary.** Geist is the product voice.

| Role | Size | Weight | Line height | Tracking | Font | Notes |
|---|---|---|---|---|---|---|
| Display | 32px | 700 | 1.15 | -0.02em | Geist | Marketing only — rare in-app |
| Page Title | 24px | 600 | 1.3 | -0.01em | Geist | Top of every page |
| Section Title | 18px | 600 | 1.4 | 0 | Geist | Section heading |
| Card Title | 15px | 600 | 1.4 | 0 | Geist | Card header |
| Body | 14px | 400 | 1.5 | 0 | Geist | Default — dense-app standard |
| Caption | 12px | 500 | 1.4 | 0 | Geist | Helper / secondary |
| Metadata | 12px | 400 | 1.4 | 0 | Geist Mono | Values: timestamps, IDs, IPs |
| Overline | 11px | 600 | 1.4 | +0.06em | Geist | Uppercase labels / tags |
| Metric | 28px | 600 | 1.1 | 0 | Geist Mono | KPI numbers |

**Weights in use:** 400, 500, 600, 700. (No 300 — too light for data density.)

**Numeric rule:** All metrics, table numbers, and counters use **`tabular-nums`** + Geist Mono so columns align.

---

## 3. Spacing System

Base unit: **4px**. Scale is fixed — no off-scale values permitted.

| Token | Value | Canonical use |
|---|---|---|
| `space-1` | 4px | Icon↔text, tight inline |
| `space-2` | 8px | Default component gap, badge padding |
| `space-3` | 12px | Cell horizontal padding, list gaps |
| `space-4` | 16px | Card inner padding (compact), control padding |
| `space-6` | 24px | Card inner padding (default), section gutter |
| `space-8` | 32px | Section gap, sidebar padding |
| `space-12` | 48px | Empty-state padding, major section gap |
| `space-16` | 64px | Page-level layout gap |

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 4px | Badges, small chips |
| `radius-md` | 6px | Buttons, inputs, controls (default) |
| `radius-lg` | 8px | Cards, panels |
| `radius-xl` | 12px | Modals, large containers |
| `radius-full` | 9999px | Pills, status dots |

---

## 5. Shadows

Light theme is shadow-driven. Dark theme relies primarily on **borders + elevation tint**; shadows are used sparingly and only at higher elevations.

| Token | Light | Dark |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(15,23,42,0.06)` | none (border only) |
| `shadow-md` | `0 4px 12px rgba(15,23,42,0.08), 0 2px 4px rgba(15,23,42,0.06)` | `0 4px 12px rgba(0,0,0,0.3)` |
| `shadow-lg` | `0 16px 48px rgba(15,23,42,0.16), 0 4px 12px rgba(15,23,42,0.08)` | `0 16px 48px rgba(0,0,0,0.5)` |
| `shadow-focus` | `0 0 0 3px rgba(37,99,235,0.35)` | `0 0 0 3px rgba(59,130,246,0.45)` |

| Surface | Shadow | Used for |
|---|---|---|
| Card | none / `shadow-sm` | Default card |
| Popover / Dropdown | `shadow-md` | Floating content |
| Modal / Dialog | `shadow-lg` | Top-layer overlays |
| Focus | `shadow-focus` | Glow-style focus where desired |

---

## 6. Icon System

- **Library:** Lucide only. Consistent 24×24 grid, 2px stroke.
- **Stroke width:** 1.5px in dense UI (default), 2px for standalone/large icons.
- **Sizes:** 12, 14, 16 (inline with text), 20, 24 (standalone). No off-sizes.
- **Color:** `currentColor` — inherits parent text token. Never hard-coded.
- **Alignment:** optically centered in 16/20/24px containers.
- **Vendor logos** (AWS, Azure, GCP, Kubernetes, etc.): **official source SVGs, unchanged**. Stored in a dedicated asset set. Rendered at 16/20/24. Never recolored except where the vendor's brand guidelines explicitly permit monochrome.

---

## 7. Status Badges

Soft-style by default: **dot (6px) + label (Caption 12px medium) + optional count**. Soft (tinted bg) is default; solid and outline variants available for emphasis.

| Status | Dot | Soft BG | Text | Label examples |
|---|---|---|---|---|
| Healthy | `healthy` | `healthy` soft | `healthy` | "Healthy", "Operational", "OK" |
| Warning | `warning` | `warning` soft | `warning` | "Warning", "Degraded" |
| Critical | `critical` | `critical` soft | `critical` | "Critical", "Down", "Error" |
| Running | `info` | `info` soft | `info` | "Running", "Active" |
| Pending | `unknown` | `unknown` soft | `unknown` | "Pending", "Queued" |
| Unknown | `unknown` (dashed ring) | `unknown` soft | `unknown` | "Unknown", "N/A" |

**Optional states:**
- **Pulse** (escalating/active): dot has a 2s looping pulse — used *only* for Critical/active incidents. Respects `prefers-reduced-motion`.
- **Count badge:** trailing pill with numeric count (mono, tabular).

---

## 8. Buttons

| Variant | BG | Text | Border | Use |
|---|---|---|---|---|
| **Primary** | `primary` / hover `primary-hover` | `on-primary` | none | Default action — one per view |
| **Secondary** | `surface` | `text` | `border-subtle` | Common action |
| **Outline** | transparent | `primary` | `primary` | Alt action on dense surfaces |
| **Ghost** | transparent → `hover-overlay` | `text-secondary` → `text` | none | Toolbar, icon buttons |
| **Danger** | `critical` / hover darker | `#FFFFFF` | none | Destructive (with confirm) |

**Sizes**

| Size | Height | Padding (x) | Font | Icon |
|---|---|---|---|---|
| `sm` | 32px | 12px | Caption 12 | 14px |
| `md` (default) | 36px | 16px | Body 14 | 16px |
| `lg` | 40px | 20px | Body 14 | 16px |
| `icon` | 36×36 (matches md) | 0 | — | 16px |

**Anatomy:** radius `md` (6px) · icon↔text gap 8px · focus ring on all · **loading state** = leading spinner replaces icon, label persists, button non-interactive · **disabled** = 50% opacity, no pointer.

---

## 9. Cards

All cards: radius `lg` (8px), border `border-subtle`, bg `card`, padding 24px (default) or 16px (compact).

| Type | Anatomy |
|---|---|
| **Primary Card** | Header (Card Title + optional action) + body. The default container. |
| **Metric Card** | Overline label + Metric number (mono) + delta (▲▼ + %, colored healthy/critical) + optional sparkline (60×24). Compact padding. |
| **Table Card** | Header with title + actions; body = table with 0 padding (table fills card). Sticky header inside. |
| **AI Card** | `primary-subtle` tinted bg + 1px primary-tinted border + sparkles icon + "AI" overline label. Visually distinct — signals generated insight. Uses brand blue tint, not purple. |
| **Empty State** | Centered 40px muted icon + Page Title + body description + optional Primary CTA. Padding 48px. |
| **Loading State** | Skeleton shimmer — gray placeholder blocks matching the intended content layout. No text. 1.5s shimmer loop. |

---

## 10. Tables

Dense, scannable, ops-grade.

| Property | Spec |
|---|---|
| Header | Sticky, bg `surface`, border-bottom `border-strong`, caption-weight labels, sort caret on sortable columns |
| Row height | 40px default / 32px compact |
| Cell padding | 12px horizontal |
| Hover | Row bg → `hover-overlay` |
| Selected | Row bg → `selected-overlay` + checkbox checked + 2px `primary` left accent |
| Status column | Status badge (section 7) |
| Actions column | Right-aligned ghost icon buttons; reveal on row hover (always visible on touch) |
| Zebra striping | **Off** by default — hover/selected only |
| Numeric cells | Right-aligned, Geist Mono, tabular-nums |
| Sort indicator | Caret icon, muted → primary on active sort |

---

## 11. Charts

Palette = chart tokens (section 1.6). Status breakdowns use status tokens (section 1.5).

| Type | Spec |
|---|---|
| **Area** | 2px line, gradient fill (series color → transparent), time-series (CPU, latency, throughput). Subtle grid lines, muted axis labels. |
| **Bar** | Solid fill, top radius 2px. Grouped or stacked. Discrete counts (events, deployments). |
| **Donut** | 4px gap between segments, center shows total (Metric, mono) + label. Status breakdown uses status tokens; category breakdown uses chart palette. |
| **Gauge** | 270° arc, color shifts by threshold (healthy → warning → critical). Single value (utilization %, saturation). |
| **Sparkline** | 1.5px line, no axes, no labels. Inline in Metric Cards. Single series color. |

**Shared chart chrome:** Tooltip = elevated card (radius `lg`, `shadow-md`); axis/grid = `text-muted` at low opacity; legend = caption text + 8px dot.

---

## 12. Animations

**Hard limit: 150ms** for all transitions. Motion clarifies state, never decorates.

| Token | Duration | Easing | Used for |
|---|---|---|---|
| `fast` | 100ms | ease-out | Hover, focus, color/bg changes |
| `base` | 150ms | ease-out | Expand/collapse, menu open, panel slide |
| `shimmer` | 1500ms (loop) | linear | Skeleton loading |
| `pulse` | 2000ms (loop) | ease-in-out | Critical-status dot only |

**Rules:**
- No page-transition animations (instant navigation = perceived performance).
- No bounce / elastic / spring.
- Loading spinners: 800ms linear loop.
- **`prefers-reduced-motion`:** shimmer → static gray; pulse → solid dot; all transitions → 0ms. Non-negotiable accessibility requirement.

---

## 13. Token Consumption Rules (implementation contract)

These rules govern how the spec becomes code. They apply when implementation begins — not yet enacted.

1. **Semantic tokens only.** Components reference tokens like `bg-card`, `text-secondary`, `border-subtle`, `text-healthy`. Raw hex values appear in exactly **one** place: the token definition file.
2. **Both themes mandatory.** Every token above has a light and dark value. No token may exist for one theme only.
3. **Theme switching is token-level.** Switching themes swaps the token map. Component code is untouched.
4. **Status colors are semantic.** `text-healthy` / `bg-warning-soft` — never `text-green-600`. This is what guarantees "blue is never used for health."
5. **Brand = blue.** Primary actions, focus rings, links, and AI tints all derive from the `primary` token family.
