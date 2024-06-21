'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '@images/fumiwo-logo.png'
import logoColor from '@images/fmw-logo-color.png'
import { PrimaryButton } from './Buttons';
import { useRouter, usePathname } from 'next/navigation';


type TNav = {
	title: string;
	link: string;
}

type TNavLinks = TNav & {
	dropDownLink?: TNav[];
}

const navLinks: TNavLinks[] = [
	{
		title: 'Solutions',
		link: '/solutions',
		dropDownLink: [
			{
				title: 'Smart data',
				link: '/solutions/smart-data',
			},
			{
				title: 'Credit risk score',
				link: '/solutions/credit-risk-score',
			},
			{
				title: 'Fraud insights',
				link: '/solutions/fraud-insights',
			}
		]
	},
	{
		title: 'Company',
		link: '/about-us'
	},
	{
		title: 'Resources',
		link: '#',
		dropDownLink: [
			{
				title: 'Blog',
				link: '#'
			},
			{
				title: 'Developers',
				link: '#'
			}
		]
	}

]

const NavBar = ({ dark }: { dark?: boolean }) => {
	const [toggleDropDownName, setToggleDropDownName] = useState('')

	window.addEventListener('click', () => {
		setToggleDropDownName('')
	})

	const toggleName = (name: string) => {
		setToggleDropDownName(prev => prev === name ? '' : name)
	}
	const pathname = usePathname()
	return (
		<nav
			onClick={e => e.stopPropagation()}
			className={` md:py-6 ${dark ? 'text-white bg-primaryBlue' : 'text-linkGray bg-white'}`}
		>
			<div className="container mx-auto ">
				<div className="flex justify-between items-center p-4">
					<Link href="/">
						<Image
							src={dark ? logo : logoColor}
							alt='logo'
							className='max-w-[158px] cursor-pointer'
						/>
					</Link>


					<ul className={`hidden md:flex  space-x-4 ${dark ? 'text-linkGray ' : 'text-primaryBlue'}`}>
						{navLinks.map((navLink, index) => (
							<li key={index} className={`space-x-2 ${pathname.includes(navLink.link) ? 'text-primaryGreen' : ''}`}>
								<Link href={navLink.dropDownLink ? '#' : navLink.link}>
									{navLink.title}
								</Link>
								{navLink.dropDownLink && (
									<>
										<button onClick={() => toggleName(navLink.title)}>
											<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M7.5 8.40625L13.5938 2.34375C13.875 2.03125 13.875 1.5625 13.5938 1.28125L12.875 0.5625C12.5938 0.28125 12.125 0.28125 11.8125 0.5625L7 5.375L2.15625 0.5625C1.84375 0.28125 1.375 0.28125 1.09375 0.5625L0.375 1.28125C0.09375 1.5625 0.09375 2.03125 0.375 2.34375L6.46875 8.40625C6.75 8.6875 7.21875 8.6875 7.5 8.40625Z" fill="#BAB7B7" />
											</svg>
										</button>

										<ul className={`
										 absolute text-primaryBlue text-linkGra rounded-md bg-gray-400 py-2 
									${toggleDropDownName === navLink.title ? 'block' : 'hidden'} 
									`}>
											{navLink.dropDownLink.map((dropDownLink, index) => (
												<li key={index} className='hover:bg-primaryBlue hover:text-linkGray px-4 py-2'>
													<Link href={dropDownLink.link}>
														{dropDownLink.title}
													</Link>
												</li>
											))}
										</ul>
									</>
								)}
							</li>
						))}
					</ul>

					<PrimaryButton className='hidden md:block'>
						Start free trial
					</PrimaryButton>



					<button className='md:hidden'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 6H21M3 12H21M3 18H21" stroke="#BAB7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

				</div>
			</div>
		</nav>
	)
}

export default NavBar