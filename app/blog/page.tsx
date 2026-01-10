import { getBlogPosts, getBlogPostTags } from 'app/blog/utils'
import { FilteredPosts } from 'app/components/filtered-posts'
import { Suspense } from 'react'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  let allBlogs = getBlogPosts()
  let allTags = getBlogPostTags()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredPosts posts={allBlogs} tags={allTags} />
      </Suspense>
    </section>
  )
}
