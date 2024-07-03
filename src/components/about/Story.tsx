import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import Image from 'next/image'
import story from '@images/story.png'


const Story = () => {
	return (
		<section className='text-center bg-white px-6 py-16'>
			<div className='max-w-xl md:mx-auto'>
				<H4>
					Our Story
				</H4>
				<Divider height={16} />
				<P className=''>
					Fumiwo was founded with the aim to bridge the accessing gap of credit in Africa and improve financial inclusion of billions of individuals by developing innovative credit scoring solutions. We’re harnessing next generation technologies—from machine learning to AI—to build trusted, global standard solutions.
				</P>
			</div>

			<Divider height={64} />

			<div className='max-w-5xl mx-auto '>
				<Image
					src={story}
					alt='story'
					className='w-full'
				/>
			</div>
			<Divider className='h-20 md:h-32' />

			<div className='md:flex text-left gap-10 max-w-5xl mx-auto'>
				<H4 className='md:w-6/12 md:!leading-[72px]'>
					We exist to help you make better credit decisions and reduce defaults
				</H4>
				<div className='md:w-5/12'>
					<P >
						In today's rapidly evolving financial landscape, making informed and accurate credit decisions is more critical than ever. Traditional credit scoring models often fall short in capturing the complete financial picture of potential borrowers, especially those with limited credit histories and lack of financial footprints.

						<br />
						<br />
						That's where our cutting-edge credit scoring solution, leveraging smartphone metadata, comes into play.		
					</P>
				</div>
			</div>
			<Divider height={64} />


		</section>
	)
}

export default Story