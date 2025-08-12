import React, { ReactNode } from 'react'

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children?: ReactNode;
    className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
    const sectionClasses = `relative mt-60 text-center before:content-[''] before:w-2 before:h-30 before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:-top-36 before:-bottom-5 before:bg-[url('/images/thing.svg')] before:bg-no-repeat ${className || ''}`;
    
    return (
        <section id={id} className={sectionClasses}>
            {title && (
                <h1 className="text-[var(--color-foreground)] pt-3 px-6 pb-0 inline-block m-auto font-bold tracking-tight text-5xl">
                    {title}
                </h1>
            )}
            {subtitle && (
                <h2 className="text-[var(--color-foreground)] pt-3 px-6 pb-0 inline-block m-auto font-bold tracking-tight text-4xl">
                    {subtitle}
                </h2>
            )}
            <div className="content pt-3 mx-1.5 md:max-w-3xl md:mx-auto">
                {children}
            </div>
        </section>
    );
}