import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  margin-top: 12px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
const Wrapper = styled.div`
`

// Real slugs based on actual blog post filenames
const realPosts = [
  {
    slug: 'how-to-load-images-in-your-mdx-blog',
    frontmatter: {
      title: 'How to load images in your MDX blog',
      date: '2021-08-16'
    }
  },
  {
    slug: 'how-to-remove-margin-gatsby',
    frontmatter: {
      title: 'How to remove margin in Gatsby',
      date: '2021-08-15'
    }
  },
  {
    slug: 'add-a-sitemap-to-your-gastby-mdx-blog',
    frontmatter: {
      title: 'Add a sitemap to your Gatsby MDX blog',
      date: '2021-08-14'
    }
  }
];

export default function LatestPosts({ className }: { className?: string }) {
  const router = useRouter()
  const currentPath = router.asPath
  
  // In a real app, you would fetch posts from an API endpoint
  const [posts, setPosts] = React.useState<any[]>([])
  
  React.useEffect(() => {
    // This will only run on the client
    // In a production app, you would fetch this data from an API endpoint
    // For now, we'll use the real post data
    const filteredPosts = realPosts.filter(post => !currentPath.includes(post.slug))
    setPosts(filteredPosts)
  }, [currentPath])

  return (
    <Wrapper className={className}>
      <List>
        {posts.map((post) => (
          <Item key={post.slug}>
            <StyledLink href={`/blog/${post.slug}`}>
              {post.frontmatter.title}
            </StyledLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}