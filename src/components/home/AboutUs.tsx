import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { AboutUsTabs } from '../global/Tabs'

const AboutUs = () => {
	return (
		<section className=' pb-32 '>
			<div className='text-center max-w-xl mx-auto px-4'>
				<H4>
					Why <span className='text-primaryGreen'>choose us</span>
				</H4>
				<Divider height={16} />
				<P>
					Data analysis software is a type of software tool used for data analysis and reporting. It is designed to help businesses, organizations.
				</P>
			</div>

			<AboutUsTabs />
		</section>
	)
}

export default AboutUs