'use client'
import smartData from '@images/smart-data.png'
import Image, { StaticImageData } from 'next/image'

import React, { useState } from 'react'
import { H3, P } from './Typography'
import Divider from './Divider'
import { PrimaryButton } from './Buttons'
import { title } from 'process'

const dummyTabs = [
	'Smart data',
	'Fraud insights',
]

const tabItemData = [
	{
		title: 'Making lending decisions with data enrichment',
		description: 'We share common trends and strategies for improving your rental income and making sure you stay in high demand.',
		image: smartData
	},
	{
		title: 'Fraud insights',
		description: [
			`Anomaly Detection: Uses advanced analytics to identify unusual patterns in phone usage that may indicate fraudulent activity.`,

			`Fraud Scoring: Generates a fraud risk score based on the analysis of behavioral anomalies, device information, and usage patterns.`,

			`Real-Time Alerts: Provides real-time notifications and alerts to lenders when suspicious activities are detected, enabling immediate action.`,

			`Behavioral Biometrics: Analyzes unique user behaviors, such as typing patterns and app usage sequences, to detect potential identity theft or account takeover attempts.`
		],
		image: smartData
	}
]


const dummyAboutTabs = [
	'Data Integration & Analysis',
	'User-Friendly',
	'Integration and API',
	'Security & Reliability'
]

const dummyAboutTabsData = [
	[
		{
			title: 'Phone usage data collection',
			description: 'We securely collect privacy-consented metadata from the users device (Android) to predict default payment and risk.'
		},
		{
			title: 'Behavioral Analytics',
			description: 'We look at behavioural data to better understand your borrowers and enable better decisions.'
		},
		{
			title: 'Privacy and Compliance',
			description: 'Data collection compliant with GDPR, and other relevant data privacy regulations, with user consent and anonymized data'
		},
		{
			title: 'Privacy and Compliance',
			description: 'Data collection compliant with GDPR, and other relevant data privacy regulations, with user consent and anonymized data'
		},
	],
]


const HomeTabs = ({ tabs = dummyTabs }) => {
	const [selectedTab, setSelectedTab] = useState(0)
	const selectedItem = tabItemData[selectedTab]

	return (
		<div className='transition ' >
			<div className='flex justify-center overflow-x-auto py-2 '>
				<div className='flex border-primaryBlue gap-3 md:gap-7 md:text-lg '>
					{tabs.map((tab, index) => (
						<button
							key={index}
							className={`w-max py-2 cursor-pointer text-primaryBlue border-b-4 ${selectedTab === index ? ' font-bold  border-primaryGreen' : ' border-transparent'}`}
							onClick={() => setSelectedTab(index)}
						>
							{tab}
						</button>
					))}
				</div>
			</div>
			<Divider className='h-10' />

			<div className='w-fit mx-auto '>
				<HomeTabItem
					title={selectedItem.title}
					description={selectedItem.description}
					image={selectedItem.image}
				/>
			</div>

		</div>
	)
}

const HomeTabItem = ({ title, description, image }: {
	title: string;
	description: string | string[];
	image: StaticImageData;
}) => {
	return (
		<div className='lg:flex lg:flex-row-reverse items-center gap-20 max-w-5xl '>
			<div className='w-full  px-6 lg:w-2/5'>
				<H3>{title}</H3>
				<Divider height={12} />
				<P className='space-y-4'>
					{
						typeof description === 'string'
							? description
							: description.map(item =>
								<li key={item}>{item}</li>
							)
					}
				</P>
				<Divider height={28} />
				<PrimaryButton>
					Learn more
				</PrimaryButton>
			</div>
			<Image src={image} alt={title} className=' lg:w-3/5 pt-14' />
		</div>
	)
}


export const AboutUsTabs = () => {
	const [selectedTab, setSelectedTab] = useState(0)
	const selectedItems = dummyAboutTabsData[0]

	return (
		<div className='sm:px-10'>
			<div className='md:block hidden '>
				<div className='flex gap-16 max-w-6xl mx-auto my-14'>

					<div className='w-1/3 border-paraGray/30 border-r space-y-11'>
						{dummyAboutTabs.map((tab, index) => (
							<button
								key={index}
								className={`w-full py-2 cursor-pointer text-primaryBlue border-r-4 ${selectedTab === index ? ' font-bold  border-primaryBlue' : ' border-transparent'}`}
								onClick={() => setSelectedTab(index)}
							>
								{tab}
							</button>
						))}
					</div>

					<div className='grid md:grid-cols-2 grid-cols-1  gap-x-8 gap-y-20'>
						{
							selectedItems.map((item, index) => (
								<div key={index} className='flex flex-col md:flex-row  gap-6'>
									<div>
										<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="72" height="72" rx="36" fill="#F4F5F7" />
											<g clip-path="url(#clip0_1192_620)">
												<path d="M42 34H48L45 30L42 34ZM42 38H48L45 42L42 38Z" fill="#D6B1FF" />
												<path d="M25 24H31V48H25C24.7348 48 24.4804 47.8946 24.2929 47.7071C24.1054 47.5196 24 47.2652 24 47V25C24 24.7348 24.1054 24.4804 24.2929 24.2929C24.4804 24.1054 24.7348 24 25 24Z" fill="#8C30F5" />
												<path d="M33 24H39C39.2652 24 39.5196 24.1054 39.7071 24.2929C39.8946 24.4804 40 24.7348 40 25V47C40 47.2652 39.8946 47.5196 39.7071 47.7071C39.5196 47.8946 39.2652 48 39 48H33V24Z" fill="#2EC5CE" />
											</g>
											<defs>
												<clipPath id="clip0_1192_620">
													<rect width="24" height="24" fill="white" transform="translate(24 24)" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<div key={index} className='space-y-4'>
										<h6 className='font-semibold text-2xl'>{item.title}</h6>
										<P>{item.description}</P>
									</div>
								</div>
							))
						}
					</div>
				</div>

				<PrimaryButton className='block mx-auto self-center'>
					Book a demo
				</PrimaryButton>
			</div>

			{/* MOBILE */}
			<div className='md:hidden px-4 mt-14 space-y-14'>
				{dummyAboutTabs.map((item, index) => (
					<div key={index} className=''>
						<button className='flex w-full justify-between text-primaryBlue font-bold'>
							<P className='!text-primaryBlue !font-bold'>
								{item}
							</P>
							<P className='!text-primaryBlue !font-bold'>
								+
							</P>
						</button>
						<Divider height={24} />

						{selectedTab === index &&
							<div className='grid md:grid-cols-2 grid-cols-1  gap-x-8 gap-y-5 md:gap-y-20'>
								{
									selectedItems.map((item, index) => (
										<div key={index} className='flex flex-col md:flex-row  gap-6'>
											<div>
												<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="72" height="72" rx="36" fill="#F4F5F7" />
													<g clip-path="url(#clip0_1192_620)">
														<path d="M42 34H48L45 30L42 34ZM42 38H48L45 42L42 38Z" fill="#D6B1FF" />
														<path d="M25 24H31V48H25C24.7348 48 24.4804 47.8946 24.2929 47.7071C24.1054 47.5196 24 47.2652 24 47V25C24 24.7348 24.1054 24.4804 24.2929 24.2929C24.4804 24.1054 24.7348 24 25 24Z" fill="#8C30F5" />
														<path d="M33 24H39C39.2652 24 39.5196 24.1054 39.7071 24.2929C39.8946 24.4804 40 24.7348 40 25V47C40 47.2652 39.8946 47.5196 39.7071 47.7071C39.5196 47.8946 39.2652 48 39 48H33V24Z" fill="#2EC5CE" />
													</g>
													<defs>
														<clipPath id="clip0_1192_620">
															<rect width="24" height="24" fill="white" transform="translate(24 24)" />
														</clipPath>
													</defs>
												</svg>
											</div>
											<div key={index} className='space-y-4'>
												<h6 className='font-semibold text-2xl'>{item.title}</h6>
												<P>{item.description}</P>
											</div>
										</div>
									))
								}
							</div>
						}
					</div>
				))}
			</div>

		</div >
	)
}

export default HomeTabs