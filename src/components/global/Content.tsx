import React from 'react'
import { H4, P } from './Typography'



type TContent = {
	header: string
	subheader: string
	children: string
}


const Content = ({ header, subheader, children }: TContent) => {
	return (
		<section className='my-8'>
			<H4 className='!text-textHeader'>
				{header}
			</H4>
			<P className='mt-6 text-lg !text-paraGray'>
				{subheader && (
					<span className='font-bold text-textHeader'> {subheader} :</span>
				)}
				{children}
			</P>
		</section>
	)
}

export default Content