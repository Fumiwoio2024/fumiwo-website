import React from 'react'
import Image from 'next/image'
import Divider from '../global/Divider'
import { P } from '../global/Typography'

import fmwLogoSmall from '@images/fmw-logo-small.png'
import footerPartners from '@images/footer-partners.png'
import Link from 'next/link'

const headings = [
	'Company',
	'Solutions',
	'Resources',
	'Follow Us',
]

// const footerItems: Record<keyof typeof headings, { title: string; link: string }[]> = {}
const footerItems = [
	[
		{
			title: 'About us',
			link: '/about-us'
		},
		{
			title: 'Contact us',
			link: '/'
		},
		{
			title: 'FAQ',
			link: '/'
		},
	],
	[
		{
			title: 'Smart data',
			link: '/'
		},
		{
			title: 'Credit risk score',
			link: '/'
		},
		{
			title: 'Fraud insights',
			link: '/'
		},
	],
	[
		{
			title: 'Blog',
			link: '/'
		},
		{
			title: 'Developers',
			link: '/'
		},
	],
	[
		{
			title: 'Linkedin',
			link: 'linkedIn.com'
		},
		{
			title: 'Twitter',
			link: 'twitter.com/fumiwo'
		},
		{
			title: 'hello@fumiwo.io',
			link: 'mailto:hello@fumiwo.io'
		},
	],
]




const Footer = () => {
	return (
		<footer className='bg-primaryBlue text-white pt-60 pb-20 '>
			<div className='w-4/5 mx-auto md:flex space-y-20 md:space-y-0 justify-between'>
				<section>
					<Image
						src={fmwLogoSmall}
						alt='company logo'
					/>
					<Divider className='h-3 md:h-4' />
					<P className='text-logoGray'>
						Better data for better decisions
					</P>
					<Divider height={32} />
					<div>
						<h6 className='font-semibold md:text-lg text-white'>
							Subscribe to Newsletter
						</h6>
						<Divider className='h-3 md:h-4' />

						<form className='flex w-full md:w-[386px] h-[55px] rounded-md overflow-hidden'>
							<div className='w-2/3 bg-white py-1 px-3'>
								<input
									type="text"
									placeholder='Enter Email Address'
									className='bg-transparent border-none outline-none text-primaryBlue w-full h-full'
								/>
							</div>
							<button className='h-full w-1/3 bg-primaryGreen'>
								Subscribe
							</button>
						</form>

						<Divider className='h-2.5 md:h-3.5' />
						<P className='font-medium text-sm'>
							By subscribing, you agree to our privacy policy
						</P>
						<Divider height={68} />

						<Image
							src={footerPartners}
							alt='company logo'
						/>
					</div>
				</section>

				<section className='grid xl:grid-cols-4 grid-cols-2 gap-14 '>
					{headings.map((heading, hIndex) => (
						<div key={heading} className=''>
							<h2 className='font-semibold  md:text-lg '>{heading}</h2>
							<div className='mt-6 md:mt-8 space-y-4 md:space-y-5 '>
								{/*TODO: change 0 index to hIndex after updating footerItems data*/}
								{footerItems[hIndex].map(fItem => (
									<li key={fItem.title} className='text-sm text-logoGray list-none'>
										<Link href={fItem.link} className='' >
											{fItem.title}
										</Link>
									</li>
								))}
							</div>

						</div>
					))}
				</section>
			</div>

		</footer>
	)
}

export default Footer