import React from 'react'

export function Section({ id, title, subtitle, children }) {

    return <section id={id}>
        {
            title &&
            <h1>{title}</h1>
        }

        {
            subtitle &&
            <h2>{subtitle}</h2>
        }

        <div className="content">
            {children}
        </div>
    </section>
}