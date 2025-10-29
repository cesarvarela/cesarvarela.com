import React from 'react'
import { Section } from '../Section'
import Image from 'next/image'

export function Contact(): JSX.Element {
	return (
		<Section id="contact" subtitle="Contact">
			<div className="max-w-80 mt-12 mx-auto">
				<div className="neumorphism rounded-lg p-6 bg-[var(--color-background)]">
					<Image 
						src="/images/MECard.png" 
						alt="QR code for contact info" 
						width={240}
						height={240}
						className="w-full h-auto rounded-md mb-4"
					/>
					<p className="text-sm text-[var(--color-foreground)] text-center m-0">
						Scan this to get my contact info on your smartphone.
					</p>
				</div>
			</div>
			<ul className="mt-8 mx-auto list-none p-0 text-center">
				<li className="inline-block px-3 py-1">
					<a 
						href="mailto:mail@cesarvarela.com" 
						className="no-underline text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200 text-sm"
					>
						mail@cesarvarela.com
					</a>
				</li>
				<li className="inline-block px-3 py-1">
					<a 
						href="https://www.twine.fm/cesarvarela" 
						className="no-underline text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200 text-sm"
					>
						Twine
					</a>
				</li>
				<li className="inline-block px-3 py-1">
					<a 
						href="https://www.upwork.com/fl/cesarvarela" 
						className="no-underline text-[var(--color-foreground)] hover:opacity-80 transition-opacity duration-200 text-sm"
					>
						Upwork
					</a>
				</li>
			</ul>
		</Section>
	);
}