import React from 'react'
import Image from 'next/image'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'

import member1 from '@images/member1.png'
import member5 from '@images/leslie.png'
import member4 from '@images/sebastian2.png'
import member3 from '@images/dedonker.png'
import member2 from '@images/kayode.png'
import Link from 'next/link'


const team = [
	{
		name: 'Olu-Kayodé Karim AMADOU',
		role: 'CEO & Founder',
		linkedIn: 'https://www.linkedin.com/in/olu-kayodekarim/',
		image: member2
	},
	{
		name: 'Sébastien Doncker',
		role: 'Chief Technology Officer',
		linkedIn: 'https://www.linkedin.com/in/sebastien-doncker/',
		image: member3
	},
	{
		name: 'Sébastien Dumas',
		role: 'Chief Marketing Officer',
		linkedIn: 'https://www.linkedin.com/in/sdu/',
		image: member4
	},
	// {
	// 	name: 'Leslie Alexander',
	// 	role: 'Data Scientist',
	// 	linkedIn: 'https://kayodeamadou.com',
	// 	image: member5
	// },
]

const Team = () => {
	return (
		<section className='text-center bg-member1Gray px-6 py-20 md:py-32'>

			<div className='max-w-xl md:mx-auto'>
				<H4>
					Meet our team
				</H4>
				<Divider height={16} />
				<P className=''>
					Our team brings together decades of experience across credit infrastructure, financial services, and technology.
				</P>
			</div>
			<Divider height={68} />

			<div className='max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  '>
				{team.map((item, index) => (
					<div key={index} className='w-fit mx-auto'>
						<div>
							<Image
								src={item.image}
								alt='team member'
								className='w-[200px] h-[200px] object-cover'
							/>
						</div>
						<Divider height={30} />

						<P className='font-bold text-xl text-primaryBlack'>
							{item.name}
						</P>
						<P className=''>
							{item.role}
						</P>
						<button>
							<Link href={item.linkedIn}>
								<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_1952_7419)">
										<path d="M31.9951 32.0008V32H32.0001V24.665C32.0001 21.0767 31.2276 18.3125 27.0326 18.3125C25.0159 18.3125 23.6626 19.4192 23.1101 20.4683H23.0517V18.6475H19.0742V32H23.2159V25.3883C23.2159 23.6475 23.5459 21.9642 25.7017 21.9642C27.8259 21.9642 27.8576 23.9508 27.8576 25.5V32.0008H31.9951Z" fill="#0E76A8" />
										<path d="M12.3281 18.6484H16.4748V32.0009H12.3281V18.6484Z" fill="#0E76A8" />
										<path d="M14.4017 12C13.0758 12 12 13.0758 12 14.4017C12 15.7275 13.0758 16.8258 14.4017 16.8258C15.7275 16.8258 16.8033 15.7275 16.8033 14.4017C16.8025 13.0758 15.7267 12 14.4017 12V12Z" fill="#0E76A8" />
									</g>
									<defs>
										<clipPath id="clip0_1952_7419">
											<rect width="20" height="20" fill="white" transform="translate(12 12)" />
										</clipPath>
									</defs>
								</svg>
							</Link>
						</button>
					</div>
				))}
			</div>

		</section>
	)
}

export default Team