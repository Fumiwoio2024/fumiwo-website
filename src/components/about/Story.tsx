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
					Lorem ipsum dolor sit amet consectetur. Porta orci sed pretium nec dui etiam vitae pharetra. Aliquet sed ultrices rhoncus lacinia nibh vulputate viverra lacus porttitor.
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
				<H4 className='md:w-7/12'>
					We exist to help you make better credit decisions and reduce defaults
				</H4>
				<div className='md:w-5/12'>
					<P >
						We share common trends and strategies for improving your rental income and making sure you stay in high demand of service.
						<br />
						<br />
						With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.
					</P>
				</div>
			</div>
			<Divider height={64} />


		</section>
	)
}

export default Story