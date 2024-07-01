import Image from 'next/image'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../global/Buttons'
import Divider from '../global/Divider'
import heroImage from '@images/hero-laptop.png'
import partners from '@images/partners.png'
import Tag from '../global/Tag'
import { P } from '../global/Typography'




const SolutionsHero = ({}) => {
	return (
		<section className=' px-6 text-primaryBlack md:py-14 py-5 overflow-hidden'>

			<div className='flex justify-between items-center  lg:pl-10'>
				<div className=' md:px-16 xl:text-left text-center space-y-4 max-w-6xl'>
					<Tag className='xl:mx-0 mx-auto' >
						Fraud Insights
					</Tag>
					<h2 className='font-bold text-4xl md:text-5xl leading-[57px] md:leading-[70px] text-textHeader'>
						Assess creditworthy borrowers using behavioral
					</h2>
					<P className='leading-8'>
						Score confidently borrowers based on alternative smartphone data and unlock new market opportunities for your lending business
					</P>

					<Divider height={32} />

					<div className='grid xl:grid-cols-2 grid-cols-1 gap-4 xl:w-fit'>
						<PrimaryButton className='mx-auto mxl:mx-0'>
							Book a demo
						</PrimaryButton>
						<SecondaryButton className='mx-auto xl:mx-0'>
							Contact sales
						</SecondaryButton>

					</div>
				</div>
				<div className='xl:flex hidden'>
					<Image
						src={heroImage}
						alt='hero'
						className='max-w-2xl'
					/>
				</div>
			</div>

			<Divider height={40} />
		</section>
	)
}

export default SolutionsHero