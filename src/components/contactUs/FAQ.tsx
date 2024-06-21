'use client'

import React, { useState } from 'react'
import { H1, H5, P } from '../global/Typography'


const Accordion = ({ name, selected, setSelected, children }: { name: string, selected: string, children: string, setSelected: (name: string) => void }) => {
	return (
		<section className='py-2'>
			{/* <section style={{ borderBottom: sections[sections.length - 1].name === name ? '0' : '1px #090F4733 solid' }} > */}
			<div role='button' onClick={() => setSelected(name === selected ? '' : name)} className=" h-16 flex justify-between
		items-center py-3 pb-0 ">
				<H5 className='font-semibold !text-lg' >{name}</H5>
				{selected === name ? (
					<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 1.09375L13.5938 7.15625C13.875 7.46875 13.875 7.9375 13.5938 8.21875L12.875 8.9375C12.5938 9.21875 12.125 9.21875 11.8125 8.9375L7 4.125L2.15625 8.9375C1.84375 9.21875 1.375 9.21875 1.09375 8.9375L0.375 8.21875C0.09375 7.9375 0.09375 7.46875 0.375 7.15625L6.46875 1.09375C6.75 0.8125 7.21875 0.8125 7.5 1.09375Z" fill="#1B3447" />
					</svg>
				) : (
					<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.46875 8.9375L0.375 2.875C0.09375 2.5625 0.09375 2.09375 0.375 1.8125L1.09375 1.09375C1.375 0.8125 1.84375 0.8125 2.15625 1.09375L7 5.90625L11.8125 1.09375C12.125 0.8125 12.5938 0.8125 12.875 1.09375L13.5938 1.8125C13.875 2.09375 13.875 2.5625 13.5938 2.875L7.5 8.9375C7.21875 9.21875 6.75 9.21875 6.46875 8.9375Z" fill="#1B3447" />
					</svg>
				)}
			</div>

			<div className={`content ${selected === name ? 'selected' : ' '}`}>
				<P className='!text-sm md:!text-sm mt-5'>
					{children}
				</P>
			</div>
		</section >
	)
}

const FAQ = () => {
	const [selected, setSelected] = useState('')

	return (
		<section className='grid md:flex max-w-6xl mx-auto pb-36 mt-28 px-6'>
			<div className=' flex-1 mb-10 lg:mb-0 text-center lg:text-left'>
				<H1 className=' lg:w-80 !leading-[58px]'>
					Frequently Asked  Questions
				</H1>
			</div>
			<div className='flex-1'>
				<Accordion
					name='What Services Does Your Software Agency Offer?'
					selected={selected}
					setSelected={setSelected}
				>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
				</Accordion>
				<Accordion
					name='How Involved Will I Be In The Development Process?'
					selected={selected}
					setSelected={setSelected}
				>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
				</Accordion>
				<Accordion
					name='What Sets Your Agency Apart From Others In The Industry? '
					selected={selected}
					setSelected={setSelected}
				>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
				</Accordion>
				<Accordion
					name='What Is The Pricing Structure For Your Services?'
					selected={selected}
					setSelected={setSelected}
				>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
				</Accordion>
				<Accordion
					name='What Level Of Support The Software Launch?'
					selected={selected}
					setSelected={setSelected}
				>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
				</Accordion>
			</div>
		</section>
	)
}

export default FAQ