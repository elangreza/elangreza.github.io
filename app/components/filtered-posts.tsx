'use client'

import { formatDate } from 'app/blog/date-utils'
import { type Post } from 'app/blog/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function FilteredPosts({
    posts,
    tags,
}: {
    posts: Post[]
    tags: string[]
}) {
    const searchParams = useSearchParams()
    const tagParam = searchParams.get('tag')
    const [selectedTag, setSelectedTag] = useState<string | null>(tagParam)

    // Sync state with URL param on initial load or navigation
    if (tagParam !== selectedTag) {
        setSelectedTag(tagParam)
    }

    const filteredPosts = selectedTag
        ? posts.filter((post) => post.metadata.tags?.includes(selectedTag))
        : posts

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-8">
                <Link
                    href="/blog"
                    className={twMerge(`px-3 py-1 rounded-full text-sm  `, !selectedTag
                        ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
                        : 'bg-gray-100   text-gray-100 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700')}
                >
                    All
                </Link>
                {tags.map((tag) => (
                    <Link
                        key={tag}
                        href={selectedTag === tag ? '/blog' : `/blog?tag=${tag}`}
                        className={twMerge(`px-3 py-1 rounded-full text-sm  `, selectedTag === tag
                            ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
                            : 'bg-gray-100   text-gray-100 dark:bg-neutral-800   dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700')}
                    >
                        {tag}
                    </Link>
                ))}
            </div>

            {selectedTag && (
                <p className="mb-8 text-neutral-600 dark:text-neutral-400">
                    Viewing posts tagged: <span className="font-semibold">{selectedTag}</span>
                </p>
            )}

            {filteredPosts
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
                        className="flex flex-col space-y-1 mb-4 hover:underline"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                            <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                                {formatDate(post.metadata.publishedAt, false)}
                            </p>
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {post.metadata.title}
                            </p>
                        </div>
                    </Link>
                ))}
            {filteredPosts.length === 0 && (
                <p className="text-neutral-600 dark:text-neutral-400">No posts found.</p>
            )}
        </div>
    )
}
