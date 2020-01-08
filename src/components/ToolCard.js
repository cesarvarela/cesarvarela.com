import React from 'react'

export default function ToolCard({ title, items }) {

    return <div className="tool-card">
        <h4>{title}</h4>
        <ul>
            {
                items.map((item, i) => <li key={i}>{item.name}</li>)
            }
        </ul>
    </div>
}