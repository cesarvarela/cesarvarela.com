import React from 'react'
import { Section as SectionBase } from '../Section'
import Button from '../Button'
const cv = '/downloads/cesar-varela-resume.pdf'
import ScrollSvg from '../../svg/scroll.svg'
import Image from 'next/image'

export function Header() {
	return (
		<SectionBase 
			id="head" 
			className="!mt-15 !-mb-16 before:!hidden"
		>
			<div className="rounded-full w-48 h-48 mx-auto my-0 overflow-hidden relative">
				<Image 
					src="/images/po.png" 
					alt="Cesar Varela" 
					fill
					style={{ objectFit: 'cover' }}
					priority
				/>
			</div>
			
			<h1 className="bg-gradient-to-r from-[#3FC5FF] via-[#3FC5FF] to-[#FF3EC9] bg-clip-text text-transparent tracking-tight text-6xl md:text-7xl mt-6 mx-auto font-black">
				Cesar Varela
			</h1>

			<div className="mt-3 mx-auto text-lg">
				<p>Greetings 👋! </p>
				<p>I'm a full-stack engineer with over 15 years of professional experience in startup and big-tech environments focused on delivering the best UX &amp; UI.</p>
			</div>

			<div className="mt-9 mx-auto">
				Scroll down to know more about me or{' '}
				<Button href={cv} download className="mt-4 ml-4">
					Download Resume
				</Button>
			</div>
			
			<ScrollSvg className="w-8 h-8 mx-auto mt-6 fill-[var(--color-foreground)]" />
		</SectionBase>
	);
}