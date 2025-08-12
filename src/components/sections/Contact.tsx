import React from 'react'
import { Section } from '../Section'
import Image from 'next/image'

export function Contact(): JSX.Element {
	return (
		<Section id="contact" subtitle="Contact">
			<div className="max-w-60 mt-12 mx-auto relative">
				<Image 
					src="/images/MECard.png" 
					alt="QR code for contact info" 
					width={240}
					height={240}
					className="w-full h-auto rounded-md neumorphism"
				/>
				<p>Scan this to get my contact info on your smartphone.</p>
			</div>
			<ul className="mt-9 mx-auto list-none">
				<li className="inline-block px-1.5">
					<a 
						href="mailto:mail@cesarvarela.com" 
						className="no-underline text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200"
					>
						mail@cesarvarela.com
					</a>
				</li>
				<li className="inline-block px-1.5">
					<a 
						href="https://www.twine.fm/cesarvarela" 
						className="no-underline text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200"
					>
						Twine
					</a>
				</li>
				<li className="inline-block px-1.5">
					<a 
						href="https://www.upwork.com/fl/cesarvarela" 
						className="no-underline text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200"
					>
						Upwork
					</a>
				</li>
			</ul>
		</Section>
	);
}