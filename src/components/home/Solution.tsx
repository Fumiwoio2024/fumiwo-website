import React, { use } from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import HomeTabs from '../global/Tabs'

const Solution = () => {

	return (
		<section className='py-14 xl:py-32 xl:pt-24 '>
			<div className='text-center px-4'>
				<H4 className='md:!leading-[72px] max-w-xl mx-auto '>
					Better data for <span className='text-primaryGreen'>safer credit</span> decisions
				</H4>
				<Divider height={16} />
				<P className='max-w-3xl mx-auto'>
					Deliver credits in full confidence with our AI driven platform based on <b>permissioned smartphone metadata</b> to provide solutions for your activities
				</P>
			</div>

			<Divider height={42} />
			{/* TABS */}
			<HomeTabs />
		</section>
	)
}

export default Solution