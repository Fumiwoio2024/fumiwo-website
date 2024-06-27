import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { SecondaryButton } from '../global/Buttons'
import Link from 'next/link'

const ContactUs = () => {

	return (
		<div className='w-11/12 md:w-4/5  mx-auto h-96 -mb-40 z-1 relative bg-primaryGreen rounded-lg text-center text-primaryBlue lg:pt-20 px-6 lg:block flex flex-col items-center justify-center'>
			<div className='max-w-2xl mx-auto'>
				<H4>
					Ready to get started?
				</H4>
				<Divider height={16} />
				<P className='text-contactGray'>
					Get ready to enhance your credit product to attract more customers, access new segment market and drive growth with the power of behavioural insights.
				</P>
				<Divider height={34} />
				<Link href='/contact-us' >
					<SecondaryButton className='mx-auto  hover:bg-white/90 active:bg-white/70'>
						Contact us
					</SecondaryButton>
				</Link>
			</div>

		</div>
	)
}

export default ContactUs