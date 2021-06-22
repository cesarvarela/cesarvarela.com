import React from 'react'
import styled, { css } from 'styled-components'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import './prism-dark.css'

Refractor.registerLanguage(js)

const Header = styled.div`
    display: flex;
    padding: 18px 14px;
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
    > pre {
        margin: 0;
        height: 400px;
        overflow-y: scroll;
    }
`

const Window = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow};
    overflow: hidden;
    border-radius: 6px;
`

function Codewindow({ className, name, code }) {

    return <Window className={className}>

        <Header>
            <Controls>
                <Dot color="#FF5F56" />
                <Dot color="#FFBD2E" />
                <Dot color="#27C93F" />
            </Controls>

            <Name>{name}</Name>

        </Header>
        <Content>
            <Refractor language="js" value={code} markers="" />
        </Content>
    </Window>
}

export default styled(Codewindow)``