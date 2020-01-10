import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { sessionContext } from './session'

const Toggle = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    & > svg.svg-inline--fa.fa-w-16 {
        width: 100%;
        height: 100%;
    }
`

export default function ThemeToggle() {

    const session = useContext(sessionContext)

    const onClick = () => {

        session.toggleTheme()
    }

    return <Toggle onClick={onClick}><FontAwesomeIcon icon={session.theme.name === 'light' ? faMoon : faSun} /></Toggle>
}