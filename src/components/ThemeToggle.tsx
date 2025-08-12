import React, { useContext } from 'react'
import { SessionContext } from '../hooks/session'
import Moon from '../svg/moon.svg'
import Sun from '../svg/sun.svg'

interface ThemeToggleProps {
    className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
    const session = useContext(SessionContext)

    const onClick = () => {
        session.toggleTheme()
    }

    const toggleClasses = `cursor-pointer w-6 h-6 ${className || ''}`;
    const iconClasses = "w-6 h-6 fill-[var(--color-foreground)] transition-colors duration-200";

    return (
        <div className={toggleClasses} onClick={onClick}>
            {session.theme.mode === 'dark' ? (
                <Sun className={iconClasses} />
            ) : (
                <Moon className={iconClasses} />
            )}
        </div>
    );
}

export default ThemeToggle