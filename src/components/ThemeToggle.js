import React, { useContext } from 'react'
import styled from 'styled-components'
import { SessionContext } from '../hooks/session'
import Moon from '../svg/moon.svg'
import Sun from '../svg/sun.svg'
import { getColor } from '../lib/theme'

const Toggle = styled.div`
    cursor: pointer;
    width: 24px;
    height: 24px;
`

const Icon = styled.div`
    width: 24px;
    height: 24px;
    svg {
        fill: ${getColor('foreground')};
    }
`

function ThemeToggle({ className }) {

    const session = useContext(SessionContext)

    const onClick = () => {
        session.toggleTheme()
    }

    return <Toggle className={className} onClick={onClick}> {{
        dark: <Icon><Sun /></Icon>,
        light: <Icon><Moon /></Icon>
    }[session.theme.mode]}
    </Toggle>
}

export default styled(ThemeToggle)``