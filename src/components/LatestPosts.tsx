import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Post } from '@/lib/blog'

interface LatestPostsProps {
  className?: string
  posts: Post[]
}

export default function LatestPosts({ className, posts }: LatestPostsProps) {
  const router = useRouter()
  const currentPath = router.asPath
  
  // Filter out the current post if we're on a blog post page
  const filteredPosts = posts.filter(post => !currentPath.includes(post.slug))

  return (
    <div className={className}>
      <ul className="list-none m-0 p-0">
        {filteredPosts.map((post) => (
          <li key={post.slug} className="mt-3">
            <Link href={`/blog/${post.slug}`} className="no-underline cursor-pointer">
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}