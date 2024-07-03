import React from 'react'
import Image from 'next/image'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'

import member1 from '@images/member1.png'
import member5 from '@images/leslie.png'
import member4 from '@images/sebastian2.png'
import member3 from '@images/dedonker.png'
import member2 from '@images/kayode.png'


const team = [
	{
		name: 'Olu-Kayodé Karim AMADOU',
		role: 'CEO & Founder',
		image: member2
	},
	{
		name: 'Sébastien Doncker',
		role: 'Chief Technology Officer',
		image: member3
	},
	{
		name: 'Sébastien Dumas',
		role: 'Chief Marketing Officer',
		image: member4
	},
	{
		name: 'Leslie Alexander',
		role: 'Data Scientist',
		image: member5
	},
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
					Lorem ipsum dolor sit amet consectetur. Porta orci sed pretium nec dui etiam vitae pharetra. Aliquet sed ultrices rhoncus lacinia
				</P>
			</div>
			<Divider height={68} />

			<div className='max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8  '>
				{team.map((item, index) => (
					<div key={index} className='w-fit mx-auto'>
						<div>
							<Image
								src={item.image}
								alt='team member'
								className='w-[267px] h-[356px] object-cover'
							/>
						</div>
						<Divider height={30} />

						<P className='font-bold text-xl text-primaryBlack'>
							{item.name}
						</P>
						<P className=''>
							{item.role}
						</P>
					</div>
				))}
			</div>

		</section>
	)
}

export default Team