import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/blog')

export interface Post {
  slug: string
  frontmatter: {
    title: string
    date: string
    tags?: string
  }
}

export function getAllPosts(): Post[] {
  // Get file names under /blog
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames
    .filter(fileName => {
      // Filter out directories and non-mdx files
      const fullPath = path.join(postsDirectory, fileName)
      return fs.statSync(fullPath).isFile() && 
             (fileName.endsWith('.mdx') || fileName.endsWith('.md')) &&
             !fileName.includes('wip')
    })
    .map(fileName => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$|\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)

      // Ensure date is a string
      const date = data.date instanceof Date 
        ? data.date.toISOString().split('T')[0] 
        : data.date

      // Combine the data with the slug
      return {
        slug,
        frontmatter: {
          title: data.title,
          date: date,
          tags: data.tags
        }
      }
    })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents)
    
    // Ensure date is a string
    const date = data.date instanceof Date 
      ? data.date.toISOString().split('T')[0] 
      : data.date
    
    // Combine the data with the slug
    return {
      slug,
      frontmatter: {
        title: data.title,
        date: date,
        tags: data.tags
      }
    }
  } catch (error) {
    return null
  }
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  
  return allPosts.filter(post => {
    if (!post.frontmatter.tags) return false
    
    const tags = post.frontmatter.tags.split(',').map(t => t.trim())
    return tags.includes(tag)
  })
} 