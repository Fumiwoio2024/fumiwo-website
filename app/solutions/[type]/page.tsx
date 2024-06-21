import NavBar from '@/src/components/global/NavBar';
import Head from 'next/head';
import React from 'react'
import SolutionsHero from '@/src/components/solutions/SolutionsHero';
import MakeDecisions from '@/src/components/solutions/MakeDecisions';

const Solutions = () => {
	return (
		<>
			<Head>
				<title>
					Fumiwo - Solutions
				</title>
			</Head>

			<NavBar />
			<main>
				<SolutionsHero />
				<MakeDecisions />
			</main>
		</>
	);
}

export default Solutions