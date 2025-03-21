import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeWindow from './CodeWindow'

interface MdxContentProps {
  children: React.ReactNode;
}

// Style components similar to the ones in the original post.tsx
const StyledP = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p style={{ margin: '36px auto 0', fontSize: '18px', lineHeight: 1.9 }} {...props} />
)

const StyledH1 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 style={{ fontSize: '60px', margin: '30px auto 0', fontWeight: 900, lineHeight: 1 }} {...props} />
)

const StyledH2 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h2 style={{ fontSize: '30px', margin: '127px auto 0', position: 'relative' }} {...props} />
)

function MDXCodeBlock({ children }: { children: any }) {
  const source = children?.props?.children || ''
  const classLanguage = children?.props?.className || ''
  const title = children?.props?.title || ''
  const language = classLanguage ? classLanguage.replace(/language-/, '') : ''

  return <CodeWindow language={language} source={source} title={title} />
}

const components = {
  p: StyledP,
  h1: StyledH1,
  h2: StyledH2,
  pre: (props: any) => <MDXCodeBlock {...props} />,
}

const MdxContent = ({ children }: MdxContentProps) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

export default MdxContent 