import React from 'react'
import { Section } from '../Section'
import LatestPosts from '../LatestPosts'
import { Post } from '@/lib/blog'

interface FromTheBlogProps {
    posts: Post[]
}

export function FromTheBlog({ posts }: FromTheBlogProps) {
    return <Section id="contact" subtitle="From the Blog">
        <LatestPosts posts={posts} />
    </Section>
}