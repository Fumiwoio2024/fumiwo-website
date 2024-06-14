import React from 'react'
import alternative from '@images/alternative.png'
import Image from 'next/image'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'



const AlternativeData = () => {
	return (
		<section className='text-center bg-alternativeGray px-5 py-20 md:py-32'>

			<div className='md:flex items-center text-left gap-10 max-w-5xl mx-auto space-y-10 md:space-y-0'>
				<Image
					src={alternative}
					alt='people'
					className='md:w-7/12'
				/>
				<div className='md:w-5/12'>
					<H4>
						Our use of alternative data sets us apart
					</H4>
					<Divider height={16} />
					<P >
						We share common trends and strategies for improving your rental income and making sure you stay in high demand of service.
						<br />
						<br />
						With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.
					</P>
				</div>
			</div>


		</section>
	)
}

export default AlternativeData