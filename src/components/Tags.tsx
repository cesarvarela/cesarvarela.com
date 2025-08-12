import React from 'react'
import Link from 'next/link'

export default function Tags({ className, tags = "" }: { className?: string; tags: string; }) {
    if (!tags) {
        return null
    }

    return <ul className={`p-0 ${className || ''}`}>
        {tags.split(",")
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0)
            .map(tag => (
                <li key={tag} className="inline-block py-1 px-2 italic opacity-60 first:pl-0">
                    <Link href={`/blog/tags/${tag}`} className="no-underline cursor-pointer">
                        {tag}
                    </Link>
                </li>
            ))}
    </ul>
}