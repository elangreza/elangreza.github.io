"use client"

import { formatDate } from 'app/blog/date-utils'
import { Metadata } from 'app/blog/utils'
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// TODO add a show more and show less if more than 7 posts

interface propsType {
  allBlogs: {
    metadata: Metadata;
    slug: string;
    content: string;
  }[]
  maxShowMore: number
}

export function RecentPosts({ allBlogs, maxShowMore = 7 }: propsType) {
  const [openShowMore, setOpenShowMore] = useState(false)

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
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .slice(0, openShowMore ? allBlogs.length : maxShowMore)
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

        <div className="mt-3 flex items-center justify-between">
          <section className='flex items-center gap-2 text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors group'>
            {allBlogs.length > maxShowMore && (openShowMore ?
              <ArrowUpIcon className='group-hover:-translate-y-1 transition-transform' size={16} /> :
              <ArrowDownIcon className='group-hover:translate-y-1 transition-transform' size={16} />)}
            {" "}
            {allBlogs.length > maxShowMore && (openShowMore ?
              <button onClick={() => setOpenShowMore(false)} className='cursor-pointer'>
                Show less
              </button> :
              <button onClick={() => setOpenShowMore(true)} className='cursor-pointer'>
                Show ({allBlogs.length - maxShowMore}) more posts
              </button>
            )}
          </section>
          <Link
            href='/blog'
            className=" text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors flex items-center gap-2 group"
          >
            <ArrowRightIcon className='group-hover:translate-x-1 transition-transform' size={16} />{" "}Show all ({allBlogs.length} blog posts)
          </Link>
        </div>
      </div>
    </section>
  )
}
