import React, { useContext } from 'react'
import styled from 'styled-components'
import { sessionContext } from '../hooks/session'
import { Moon, Sun } from 'grommet-icons';

const Toggle = styled.div`
    cursor: pointer;
    width: 24px;
    height: 24px;
`
function ThemeToggle({ className }) {

    const session = useContext(sessionContext)

    const onClick = () => {

        session.toggleTheme()
    }

    return <Toggle className={className} onClick={onClick}> {session.theme.name === 'light' ? <Moon /> : <Sun />}</Toggle>
}

export default styled(ThemeToggle)``