import React from 'react'
import Image from 'next/image'
import External from '../svg/external.svg'
import { ImageData } from '../types/data'

interface CardProps {
    src?: string;
    title: string;
    description: string;
    link: string;
    img?: ImageData | string;
}

export default function Card({ src, title, description, link, img }: CardProps) {
    const imageSrc = typeof img === 'string' 
        ? img 
        : img?.src || (img as ImageData)?.childImageSharp?.gatsbyImageData.images.fallback.src || '/placeholder.png'

    return (
        <div className="card text-left neumorphism rounded-md bg-[var(--color-background)] overflow-hidden flex flex-col">
            <div className="border-b border-[var(--color-foreground)] relative w-full h-48">
                {img && (
                    <Image 
                        src={imageSrc} 
                        alt="project image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                )}
            </div>
            <h3 className="pt-4 px-4 pb-0 m-0">{title}</h3>
            <p className="p-4 m-0 flex-1">{description}</p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 m-0 no-underline block text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200"
            >
                View more 
                <External className="w-3 h-3 ml-1.5 align-middle inline fill-[var(--color-foreground)]" />
            </a>
        </div>
    );
}