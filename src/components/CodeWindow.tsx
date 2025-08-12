'use client';

import React, { useContext } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import vsLight from 'prism-react-renderer/themes/vsLight'
import { SessionContext } from "../hooks/session"
import defaultTheme from '../lib/theme'
import useIsClient from '../hooks/useIsClient'

const Dot = ({ color }: { color: string }) => (
  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="h-4">
    <circle cx="9" cy="9" r="9" fill={color} />
  </svg>
)

const darkTheme = { 
  ...vsDark, 
  plain: { 
    ...vsDark.plain, 
    backgroundColor: defaultTheme.colors.background.dark 
  } 
}

const lightTheme = { 
  ...vsLight, 
  plain: { 
    ...vsLight.plain, 
    backgroundColor: defaultTheme.colors.background.light 
  } 
}

interface CodeWindowProps {
  className?: string;
  title: string;
  language?: Language;
  source: string;
}

function CodeWindow({ className, title, language = "javascript" as Language, source }: CodeWindowProps) {
  const { theme } = useContext(SessionContext)
  const isClient = useIsClient()
  const editorTheme = theme.mode === 'dark' ? darkTheme : lightTheme

  return (
    <div className={`neumorphism overflow-hidden rounded-md ${className || ''}`}>
      {title && (
        <div className="flex p-[18px_14px] bg-gray-200 dark:bg-gray-800">
          <div className="w-[70px] flex justify-between">
            <Dot color="#FF5F56" />
            <Dot color="#FFBD2E" />
            <Dot color="#27C93F" />
          </div>
          <div className="text-center flex-[0.9]">{title}</div>
        </div>
      )}
      <div 
        className={`overflow-auto transition-opacity duration-200 ${
          isClient ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Highlight {...defaultProps} theme={editorTheme} code={source} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre 
              className={`${className} m-0 text-left font-mono`} 
              style={{ ...style, padding: '20px' }}
            >
              {tokens.map((line, i) => (
                <div 
                  key={i} 
                  {...getLineProps({ line, key: i })}
                  className={i === tokens.length - 1 ? 'hidden' : ''}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default CodeWindow