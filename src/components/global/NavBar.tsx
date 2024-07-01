'use client'

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import logo from '@images/fumiwo-logo.png'
import logoColor from '@images/fmw-logo-color.png'
import dropdownImage from '@images/dropdown-image.png'
import { PrimaryButton } from './Buttons';
import { useRouter, usePathname } from 'next/navigation';
import { SideBar } from './SideBar';
import { H5, P } from './Typography';


// Dropdown.js
const Dropdown = () => {
	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
				>
					Options
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div
				className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 hover:opacity-100 group-hover:opacity-100"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex={-1}
			>
				<div className="py-1" role="none">
					<a
						href="#"
						className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-0"
					>
						Account settings
					</a>
					<a
						href="#"
						className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-1"
					>
						Support
					</a>
					<a
						href="#"
						className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-2"
					>
						License
					</a>
				</div>
			</div>
		</div>
	);
};





type TNav = {
	title: string;
	link: string;
}

export type TNavLinks = TNav & {
	dropDownLink?: TNav[];
}

export const navLinks: TNavLinks[] = [
	{
		title: 'Solutions',
		link: '/solutions',
		dropDownLink: [
			{
				title: 'Smart data',
				link: '/solutions/smart-data',
			},
			// {
			// 	title: 'Credit risk score',
			// 	link: '/solutions/credit-risk-score',
			// },
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
	const pathname = usePathname()
	const sideBarRef = useRef<HTMLDivElement>(null)


	const toggleName = (name: string) => {
		setToggleDropDownName(prev => prev === name ? '' : name)
	}

	const toggleSideBar = () => {
		sideBarRef.current?.classList.toggle('!translate-x-[0%]')
	}

	// if (window !== undefined) {
	// 	window.addEventListener('click', () => {
	// 		setToggleDropDownName('')
	// 	})
	// }


	useEffect(() => {
		const handleClickOutside = (event: any) => {
			setToggleDropDownName('')
		};

		window.addEventListener('click', handleClickOutside)
		return () => {
			window.removeEventListener('click', handleClickOutside)
		};
	}, []);

	return (
		<>

			<SideBar
				ref={sideBarRef}
				toggleSideBar={toggleSideBar}
				navLinks={navLinks}
			/>
			<nav
				onMouseOut={() => setToggleDropDownName('')}
				className={` md:py-6 ${dark ? 'text-white bg-primaryBlack' : 'text-linkGray bg-white'}`}
			>
				<div onClick={e => e.stopPropagation()} className="container mx-auto ">
					<div className="flex justify-between items-center p-4">
						<Link href="/">
							<Image
								src={dark ? logo : logoColor}
								alt='logo'
								className='max-w-[158px] cursor-pointer'
							/>
						</Link>


						<ul className={`hidden md:flex space-x-8 ${dark ? 'text-linkGray ' : 'text-primaryBlack'}`}>
							{navLinks.map((navLink, index) => (
								<li onMouseOver={() => toggleName(navLink.title)} key={index} className='cursor-pointer relative'>
									<div className={`space-x-2  ${pathname.includes(navLink.link) ? 'text-primaryGreen' : ''}`}>
										<Link href={navLink.dropDownLink ? '#' : navLink.link}>
											{navLink.title}
										</Link>
										{navLink.dropDownLink && (
											<button>
												<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5 8.40625L13.5938 2.34375C13.875 2.03125 13.875 1.5625 13.5938 1.28125L12.875 0.5625C12.5938 0.28125 12.125 0.28125 11.8125 0.5625L7 5.375L2.15625 0.5625C1.84375 0.28125 1.375 0.28125 1.09375 0.5625L0.375 1.28125C0.09375 1.5625 0.09375 2.03125 0.375 2.34375L6.46875 8.40625C6.75 8.6875 7.21875 8.6875 7.5 8.40625Z" fill="#BAB7B7" />
												</svg>
											</button>
										)}
									</div>


									{navLink.dropDownLink && (
										<div className='-left-1/2 pt-5 absolute min-w-[710px] top-6 '>
											<div className={`flex rounded-md bg-white shadow-optionShadow py-8 px-10 ${toggleDropDownName === navLink.title ? 'block' : 'hidden'}`}>
												<section className='space-y-12 flex-1'>
													<H5>
														Solutions
													</H5>
													<P>
														Explore Fumiwo’s range of powerful end-to-end solutions that resonate with your various business requirements.
													</P>

													<Image
														src={dropdownImage}
														alt='dropdown image'
														className='w-[259px] h-[204px]'
													/>
												</section>
												<section className='flex-1'>
													{navLink.dropDownLink.map((item, index) => (
														<div key={index} className='flex flex-col md:flex-row gap-6'>
															<div>
																<svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7367 10.8402C14.1482 11.6344 13.6869 12.4784 13.6869 13.0036C13.6869 13.5288 14.1482 14.3727 15.7367 15.167C17.2433 15.9203 19.4204 16.4257 21.9 16.4257C24.3796 16.4257 26.5567 15.9203 28.0633 15.167C29.6517 14.3727 30.1131 13.5288 30.1131 13.0036C30.1131 12.4784 29.6517 11.6344 28.0633 10.8402C26.5567 10.0869 24.3796 9.58145 21.9 9.58145C19.4204 9.58145 17.2433 10.0869 15.7367 10.8402ZM30.1131 17.1529C29.8457 17.3207 29.5689 17.475 29.2876 17.6157C27.3263 18.5963 24.7124 19.1634 21.9 19.1634C19.0877 19.1634 16.4738 18.5963 14.5124 17.6157C14.2312 17.475 13.9544 17.3207 13.6869 17.1529V18.9353C13.6869 19.5567 14.1937 20.4514 15.7597 21.2718C17.2609 22.0581 19.4295 22.5855 21.9 22.5855C24.3705 22.5855 26.5391 22.0581 28.0403 21.2718C29.6063 20.4514 30.1131 19.5567 30.1131 18.9353V17.1529ZM32.8508 13.0036V18.9353C32.8508 19.0119 32.8488 19.088 32.8446 19.1634H32.8508V24.4107C32.8508 24.4873 32.8488 24.5634 32.8446 24.6388H32.8508V29.8861C32.8508 32.0364 31.2126 33.6515 29.3106 34.6476C27.3438 35.6779 24.7215 36.274 21.9 36.274C19.0785 36.274 16.4562 35.6779 14.4894 34.6476C12.5874 33.6515 10.9492 32.0364 10.9492 29.8861V24.6388H10.9554C10.9513 24.5634 10.9492 24.4873 10.9492 24.4107V19.1634H10.9554C10.9513 19.088 10.9492 19.0119 10.9492 18.9353V13.0036C10.9492 10.8828 12.6329 9.33126 14.5124 8.3915C16.4738 7.41082 19.0877 6.84375 21.9 6.84375C24.7124 6.84375 27.3263 7.41082 29.2876 8.3915C31.1671 9.33126 32.8508 10.8828 32.8508 13.0036ZM13.6869 28.7028V29.8861C13.6869 30.5075 14.1937 31.4022 15.7597 32.2226C17.2609 33.0089 19.4295 33.5363 21.9 33.5363C24.3705 33.5363 26.5391 33.0089 28.0403 32.2226C29.6063 31.4022 30.1131 30.5075 30.1131 29.8861V28.7028C29.8539 28.872 29.5849 29.0286 29.3106 29.1722C27.3438 30.2025 24.7215 30.7986 21.9 30.7986C19.0785 30.7986 16.4562 30.2025 14.4894 29.1722C14.215 29.0286 13.9462 28.872 13.6869 28.7028ZM29.3106 23.6968C29.5849 23.5532 29.8539 23.3966 30.1131 23.2274V24.4107C30.1131 25.0321 29.6063 25.9268 28.0403 26.7472C26.5391 27.5335 24.3705 28.0609 21.9 28.0609C19.4295 28.0609 17.2609 27.5335 15.7597 26.7472C14.1937 25.9268 13.6869 25.0321 13.6869 24.4107V23.2274C13.9462 23.3966 14.215 23.5532 14.4894 23.6968C16.4562 24.7271 19.0785 25.3232 21.9 25.3232C24.7215 25.3232 27.3438 24.7271 29.3106 23.6968Z" fill="#080341" />
																</svg>

															</div>
															<div className='space-y-1'>
																<h6 className='font-semibold text-2xl leading-[48px] text-textHeader'>{item.title}</h6>
																<P className=''>Explore Fumiwo’s range of powerful end-to-end products that resonate with your various business requirements.</P>
															</div>
														</div>
													))}

												</section>


											</div>

										</div>
								)}

								</li>
							))}
						</ul >

						<PrimaryButton className='hidden lg:block'>
							<Link href='/contact-us'>
								Contact Us
							</Link>
						</PrimaryButton>



						<button onClick={toggleSideBar} className='md:hidden'>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 6H21M3 12H21M3 18H21" stroke="#BAB7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>

					</div>
				</div>
			</nav>
			{/* <div className="flex items-center justify-center h-screen bg-gray-100">
				<Dropdown />
			</div> */}

		</>
	)
}

export default NavBar