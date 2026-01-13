import { ImageResponse } from 'next/og'
import { getBlogPosts } from '../utils'

export const alt = 'Elang Reza'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export async function generateStaticParams() {
    let posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    let post = getBlogPosts().find((post) => post.slug === slug)
    if (!post) {
        return
    }

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 48,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                {post.metadata.title}
            </div>
        ),
        {
            ...size,
        }
    )
}