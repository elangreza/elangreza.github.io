import { getBlogPosts } from "./blog/utils";
import { ExperienceSummary } from "./components/experiences-summary";
import { Hero } from "./components/hero";
import { RecentPosts } from "./components/recent-posts";
import { getProjectsSummary } from "./experience/utils";

export default function Page() {
  let allBlogs = getBlogPosts().filter(post => post.metadata.showOnList !== true)
  let projectSummary = getProjectsSummary()

  return (
    <section>
      <Hero />
      <RecentPosts allBlogs={allBlogs} maxShowMore={2} />
      <ExperienceSummary projectSummary={projectSummary} maxShowMore={5} />
    </section>
  )
}
