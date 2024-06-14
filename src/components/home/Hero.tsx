import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from '../global/Buttons'
import Divider from '../global/Divider'
import heroImage from '@images/hero-laptop.png'
import partners from '@images/partners.png'

const Hero = () => {
	return (
		<section className='bg-primaryBlue px-6 text-white md:py-14 py-5 overflow-hidden'>

			<div className='flex justify-between items-center  lg:pl-10'>
				<div className=' md:px-16 xl:text-left text-center space-y-4 max-w-6xl'>
					<h2 className='font-bold text-4xl md:text-5xl leading-[57px] md:leading-[78px] text-offWhite'>Assess creditworthy borrowers using
						behavioral <span className='text-primaryGreen underline'>analytics</span>
					</h2>
					<h5 className='text-linkGray leading-8'>
						Score confidently borrowers based on alternative smartphone data and unlock new market opportunities for your lending business
					</h5>
					<PrimaryButton className='mx-auto mxl:mx-0'>
						Book a demo
					</PrimaryButton>
				</div>
				<div className='xl:flex hidden'>
					<Image
						src={heroImage}
						alt='hero'
						className='max-w-2xl'
					/>
				</div>
			</div>

			<Divider height={100} />

			<div className='text-center w-fit mx-auto font-semibold md:text-2xl '>
				<h6>
					Trusted by leading global finance partners
				</h6>
				<Divider height={36} />
				<Image
					src={partners}
					alt='partners'
				/>
			</div>
			<Divider height={40} />
		</section>
	)
}

export default Hero