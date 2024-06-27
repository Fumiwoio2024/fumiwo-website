import FAQ from '@/src/components/contactUs/FAQ'
import MainSection from '@/src/components/contactUs/MainSection'
import NavBar from '@/src/components/global/NavBar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Fumiwo - Contact Us',
	description: "Fumiwo Contact Us and Faq page",
}

const ContactUs = () => {
	return (
		<>
			<NavBar />
			<main>
				<MainSection />
				<FAQ />
			</main>
		</>)
}

export default ContactUs