import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen" style={{ fontFamily: '"Inter", sans-serif' }}>
      <Hero />
      <section className="bg-[#f5f1e8] min-h-[40vh]" aria-hidden />
    </main>
  );
}
