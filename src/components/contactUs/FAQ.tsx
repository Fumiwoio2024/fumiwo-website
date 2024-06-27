'use client'

import React, { useState } from 'react'
import { H1, H5, P } from '../global/Typography'
import Accordion from '../global/Accordion'

const faqData = [
	{
		name: 'What Services Does Your Software Agency Offer?',
		description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	},
	{
		name: 'How Involved Will I Be In The Development Process?',
		description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	},
	{
		name: 'What Sets Your Agency Apart From Others In The Industry?',
		description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	},
	{
		name: 'What Is The Pricing Structure For Your Services?',
		description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	},
	{
		name: 'What Level Of Support The Software Launch?',
		description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	},
];

const FAQ = () => {
	const [selected, setSelected] = useState('')

	return (
		<section className='grid lg:flex max-w-6xl mx-auto pb-36 mt-28 px-6'>
			<div className=' flex-1 mb-10 lg:mb-0 text-center lg:text-left'>
				<H1 className=' lg:w-80 !leading-[58px]'>
					Frequently Asked  Questions
				</H1>
			</div>


			<div className='flex-1'>
				{faqData.map((item, index) => (
					<Accordion
						key={index}
						name={item.name}
						selected={selected}
						setSelected={setSelected}
					>
						<P className='!text-sm md:!text-sm mt-5'>
							{item.description}
						</P>
					</Accordion>
				))}
			</div>
		</section>
	)
}

export default FAQ