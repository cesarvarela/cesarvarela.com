import React from 'react'
import { ListItem } from '../types/data'

interface ListCardProps {
    title: string;
    items: ListItem[];
}

export default function ListCard({ title, items }: ListCardProps) {
    return (
        <div className="list-card border border-[#c4c4c4]">
            <h4 className="text-lg m-0 p-3">{title}</h4>
            <ul className="list-none p-0 pb-3 m-0">
                {items.map((item, i) => (
                    <li key={i} className="text-[var(--color-foreground)] text-xs">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}