import React, { useContext } from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import vsLight from 'prism-react-renderer/themes/vsLight'
import { SessionContext } from "../hooks/session"
import defaultTheme from '../lib/theme'
import useIsClient from '../hooks/useIsClient'

const Header = styled.div`
    display: flex;
    padding: 18px 14px;
    background: var(--color-window-header);
`

const Name = styled.div`
    text-align: center;
    flex: .9;
`

const Controls = styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;
    svg {
        height: 16px;
    }
`

const Dot = ({ color }) => <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="9" fill={color} />
</svg>

const Content = styled.div`
    overflow: auto;
    opacity: ${({ isClient }) => isClient ? '1' : '0'};
    transition: opacity .2s;
    > pre {
        margin: 0;
        text-align: initial;
        font-family: "Inconsolata";
        .token-line:last-child {
            display: none;
        }
    }
`

const Window = styled.div`
    box-shadow: var(--boxShadow);
    overflow: hidden;
    border-radius: 6px;
`

const darkTheme = { ...vsDark, plain: { ...vsDark.plain, backgroundColor: defaultTheme.colors.background.dark } }
const lightTheme = { ...vsLight, plain: { ...vsLight.plain, backgroundColor: defaultTheme.colors.background.light } }

function CodeWindow({ className, title, language = "javascript", source }) {

    const { theme } = useContext(SessionContext)
    const isClient = useIsClient()
    const editorTheme = theme.mode === 'dark' ? darkTheme : lightTheme

    return <Window className={className}>
        {title && <Header>
            <Controls>
                <Dot color="#FF5F56" />
                <Dot color="#FFBD2E" />
                <Dot color="#27C93F" />
            </Controls>
            <Name>{title}</Name>
        </Header>}
        <Content isClient={isClient}>
            <Highlight {...defaultProps} theme={editorTheme} code={source} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, padding: '20px' }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </Content>
    </Window>
}

export default CodeWindow