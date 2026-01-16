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

    // Parse initial tags from comma-separated string
    const initialTags = tagParam ? tagParam.split(',') : []
    const [selectedTags, setSelectedTags] = useState<string[]>(initialTags)

    // Sync state with URL param on navigation
    if (tagParam && tagParam !== selectedTags.join(',')) {
        setSelectedTags(tagParam.split(','))
    } else if (!tagParam && selectedTags.length > 0) {
        setSelectedTags([])
    }

    const filteredPosts = selectedTags.length > 0
        ? posts.filter((post) => selectedTags.some((tag) => post.metadata.tags?.includes(tag)))
        : posts

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            return selectedTags.filter((t) => t !== tag)
        } else {
            return [...selectedTags, tag]
        }
    }

    return (
        <section className='text-sm'>
            <div className="flex flex-wrap gap-2 mb-8">
                <Link
                    href="/blog"
                    className={twMerge(`px-3 py-1 rounded-full  transition-colors`, selectedTags.length === 0
                        ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
                        : 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700')}
                >
                    All
                </Link>
                {tags.map((tag) => {
                    const newTags = toggleTag(tag)
                    const href = newTags.length > 0 ? `/blog?tag=${newTags.join(',')}` : '/blog'
                    const isActive = selectedTags.includes(tag)

                    return (
                        <Link
                            key={tag}
                            href={href}
                            className={twMerge(`px-3 py-1 rounded-full  transition-colors`, isActive
                                ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
                                : 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700')}
                        >
                            {tag}
                        </Link>
                    )
                })}
            </div>

            {selectedTags.length > 0 && (
                <p className="mb-8 text-neutral-600 dark:text-neutral-400">
                    Viewing posts tagged: <span className="font-semibold">{selectedTags.join(', ')}</span>
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
                            <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
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
        </section>
    )
}
