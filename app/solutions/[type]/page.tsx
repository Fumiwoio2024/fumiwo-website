import NavBar from '@/src/components/global/NavBar';
import React from 'react'
import SolutionsHero from '@/src/components/solutions/SolutionsHero';
import MakeDecisions from '@/src/components/solutions/MakeDecisions';
import { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Fumiwo - Solutions',
	description: "Fumiwo Solutions",
}

const Solutions = () => {
	return (
		<>
			<NavBar />
			<main>
				<SolutionsHero />
				<MakeDecisions />
			</main>
		</>
	);
}

export default Solutions