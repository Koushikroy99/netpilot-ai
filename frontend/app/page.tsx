import { Breadcrumbs, type Crumb } from "@/components/shell/breadcrumbs";

const BREADCRUMBS: Crumb[] = [{ label: "Dashboard" }];

export default function Home() {
  return (
    <div className="flex flex-col gap-6 px-6 py-6 sm:px-8 sm:py-8">
      <Breadcrumbs items={BREADCRUMBS} />
      <h1 className="text-2xl font-semibold leading-tight tracking-tight text-text">
        Dashboard
      </h1>
      {/* Content intentionally empty — the Dashboard ships in the next phase. */}
    </div>
  );
}
