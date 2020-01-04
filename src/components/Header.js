import React from 'react'
import { Section } from './Section'
import picture from '../images/po.png'


export function Header() {

	return <Section id="head" title="Cesar Varela">
		<img className="po" src={picture} alt="po face" />
		<p className="title">Frontend Engineer &amp; UX/UI Consultant</p>
		<p className="po-quote">
			Hi, my name is Cesar Varela, this is my personal website,
			scroll down to know a little more about me.
					</p>
	</Section>
}