import { formatDate } from 'app/blog/date-utils'
import { getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

// TODO add a show more and show less if more than 7 posts

export function RecentPosts() {
  // only three latest posts
  let allBlogs = getBlogPosts()
  let recentBlogs = allBlogs.slice(0, 3)

  return (
    <section className='py-4'>
      <div className='flex items-center justify-between'>
        <h1 className="mb-3 text-base tracking-tighter">
          Recent posts ( {allBlogs.length} )
        </h1>
        <Link href='/blog' className="mb-3 text-base tracking-tighter transition-all text-blue-600 dark:text-blue-500 duration-300 hover:text-blue-600 hover:dark:text-blue-400 hover:underline flex align-middle relative py-1 cursor-pointer">
          See all
        </Link>
      </div>

      <div className="grid gap-1 text-sm">
        {recentBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col mb-4 hover:underline"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
