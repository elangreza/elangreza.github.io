import { ExperienceSummary } from "./components/experiences-summary";
import { Hero } from "./components/hero";
import { RecentPosts } from "./components/recent-posts";

export default function Page() {
  return (
    <section>
      <Hero />
      <RecentPosts />
      <ExperienceSummary />
    </section>
  )
}
