import { getBlogPosts, getBlogPostTags } from 'app/blog/utils'
import { FilteredPosts } from 'app/components/filtered-posts'
import { baseUrl } from 'app/url'
import { Suspense } from 'react'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
  openGraph: {
    title: 'Blog',
    description: 'Read my blog.',
    type: 'website',
    url: `${baseUrl}/blog`,
    siteName: 'Elang Reza',
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/blog/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Elang Reza',
      },
    ],
  },
}

export default function Page() {
  let allBlogs = getBlogPosts().filter(post => post.metadata.showOnList !== true)
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
