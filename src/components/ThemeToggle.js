import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { sessionContext } from './session'

const Toggle = styled.div`
    cursor: pointer;
`

export default function ThemeToggle() {

    const session = useContext(sessionContext)

    const onClick = () => {

        session.toggleTheme()
    }

    return <Toggle onClick={onClick}><FontAwesomeIcon icon={session.theme.name === 'light' ? faMoon : faSun} /></Toggle>
}