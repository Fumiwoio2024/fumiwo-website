import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { AboutUsTabs } from '../global/Tabs'

const KeyFeatures = () => {
	return (
		<section className=' pb-32 '>
			<div className='text-center max-w-xl mx-auto px-6 '>
				<H4 className='md:!leading-[72px] max-w-xl mx-auto  '>
					Key <span className='text-primaryGreen'>features</span>
				</H4>
				<Divider height={16} />
				<P className='max-w-3xl mx-auto'>
					Data analysis software is a type of software tool used for data analysis and reporting. It is designed to help businesses, organizations.
				</P>
			</div>

			<AboutUsTabs />
		</section>
	)
}

export default KeyFeatures