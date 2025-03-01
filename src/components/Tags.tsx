import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`

const Tag = styled.li`
    display: inline-block;
    padding: 3px 6px;
    font-style: italic;
    opacity: 0.6;
    &:first-child {
        padding-left: 0;
    }
`

const Wrapper = styled.ul`
    padding: 0;
`

export default function Tags({ className, tags = "" }: { className?: string; tags: string; }) {
    if (!tags) {
        return null
    }

    return <Wrapper className={className}>
        {tags.split(",")
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0)
            .map(tag => (
                <Tag key={tag}>
                    <Link href={`/blog/tags/${tag}`} passHref>
                        <StyledLink>{tag}</StyledLink>
                    </Link>
                </Tag>
            ))}
    </Wrapper>
}