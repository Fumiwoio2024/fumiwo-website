import React from 'react'
import Divider from '../global/Divider'
import { H3, H4, P } from '../global/Typography'
import Image from 'next/image'
import heroImage from '@images/hero-laptop.png'
import { PrimaryButton } from '../global/Buttons'


const AdvantageFeatures = ({ index }: { index: number }) => {
	return (
		<div className={`
			${index % 2 === 0 && 'flex-row-reverse'} 
		 lg:flex lg:justify-between items-center text-center lg:text-left gap-10 lg:gap-0 max-w-6xl mx-auto space-y-10 lg:space-y-0
		`}>
			<div className='lg:w-6/12 '>

				<Image
					src={heroImage}
					alt='people'
					className='w-full'
				/>
			</div>
			<div className=' lg:w-5/12 space-y-8'>
				<H3>
					Advantage/features number 1 for using Smart data
				</H3>

				<P >
					Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.
				</P>

				<PrimaryButton className='mx-auto mxl:mx-0'>
					Book a demo
				</PrimaryButton>
			</div>
		</div>
	)
}

const MakeDecisions = () => {
	return (
		<section className='px-6'>

			<div className='max-w-xl mx-auto text-center'>
				<H4>
					Make smarter lending decisions
				</H4>
				<Divider height={16} />
				<P className=''>
					Lorem ipsum dolor sit amet consectetur. Porta orci sed pretium nec dui etiam vitae pharetra. Aliquet sed ultrices rhoncus lacinia nibh vulputate viverra lacus porttitor.
				</P>
			</div>
			<Divider height={132} />


			{[...Array(3)].map((_, index) => (
				<>
					<AdvantageFeatures key={index} index={index} />
					<Divider height={132} />
				</>
			))}

		</section>

	)
}

export default MakeDecisions