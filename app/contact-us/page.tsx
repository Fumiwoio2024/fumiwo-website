import FAQ from '@/src/components/contactUs/FAQ'
import MainSection from '@/src/components/contactUs/MainSection'
import NavBar from '@/src/components/global/NavBar'
import Head from 'next/head'
import React from 'react'

const page = () => {
	return (
		<>
			<Head>
				<title>
					Fumiwo - Contact Us
				</title>
			</Head>

			<NavBar />
			<main>
				<MainSection />
				<FAQ />
			</main>
		</>)
}

export default page