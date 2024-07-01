import React from 'react'
import Image from 'next/image'
import Divider from '../global/Divider'
import { P } from '../global/Typography'

import fmwLogoSmall from '@images/fmw-logo-small.png'
import footerPartners from '@images/footer-partners.png'
import gdpr from '@images/gdpr.png'
import Link from 'next/link'
import NewsLetterForm from '../global/NewsLetterForm'

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
			link: '/contact-us'
		},
	],
	[
		{
			title: 'Smart data',
			link: '/solutions/smart-data',
		},
		{
			title: 'Fraud insights',
			link: '/solutions/fraud-insights',
		},
	],
	[
		// {
		// 	title: 'Blog',
		// 	link: '/'
		// },
		{
			title: 'Developers',
			link: '#'
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

const bottomFooterItems = [
	{
		title: 'Terms of use',
		link: '/terms-conditions'
	},
	{
		title: 'Privacy Policy',
		link: '/privacy-policy'
	},
	{
		title: 'Cookie Policy',
		link: '/cookie-policy'
	}
]



const Footer = () => {

	return (
		<footer className='bg-primaryBlack text-white pt-60 pb-20 '>
			<section className='w-4/5 mx-auto md:flex space-y-20 md:space-y-0 justify-between'>
				<section>
					<Image
						src={fmwLogoSmall}
						alt='company logo'
					/>
					<Divider className='h-3 md:h-4' />
					<P className='!text-logoGray'>
						Better data for better decisions
					</P>
					<Divider height={32} />
					<div>
						<h6 className='font-semibold md:text-lg text-white'>
							Subscribe to Newsletter
						</h6>
						<Divider className='h-3 md:h-4' />

						<NewsLetterForm />

						<Divider className='h-2.5 md:h-3.5' />
						<P className='font-medium text-sm !text-logoGray'>
							By subscribing, you agree to our privacy policy
						</P>
						<Divider height={58} />

						<Image
							src={gdpr}
							alt='company logo'
							className='h-14 w-36'
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
									<li key={fItem.title} className='text-sm text-logoGray list-none hover:text-white'>
										<Link href={fItem.link} className='' >
											{fItem.title}
										</Link>
									</li>
								))}
							</div>

						</div>
					))}
				</section>
			</section>
			<Divider height={36} />

			<section className='w-4/5 mx-auto flex flex-wrap text-logoGray text-xxs md:text-sm items-center justify-between pt-8 border-t border-bottomFooterBorder'>
				<div className='w-fit flex items-center gap-1.5'>
					<p> EN </p>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden lg:block'>
						<path d="M16.5984 7.45898L11.1651 12.8923C10.5234 13.534 9.47344 13.534 8.83177 12.8923L3.39844 7.45898" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					{/* Mobile */}
					<svg width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:hidden'>
						<path d="M16.5984 7.45898L11.1651 12.8923C10.5234 13.534 9.47344 13.534 8.83177 12.8923L3.39844 7.45898" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>

				<div className='flex w-fit md:gap-5 gap-2'>
					{bottomFooterItems.map(fItem => (
						<li key={fItem.title} className='list-none hover:text-white'>
							<Link href={fItem.link} className='' >
								{fItem.title}
							</Link>
						</li>
					))}
				</div>

				<p className=' hidden lg:block'>
					© Copyright 2024, All Rights Reserved
				</p>
			</section>
			<p className='lg:hidden text-logoGray text-center mt-10 text-xxs md:text-sm'>
				© Copyright 2024, All Rights Reserved
			</p>
		</footer>
	)
}

export default Footer