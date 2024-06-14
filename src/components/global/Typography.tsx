import React, { ReactNode } from 'react'

export const H3 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<h3 className={`font-semibold text-xl md:text-4xl text-primaryBlue  ${className}`}>
			{children}
		</h3>
	)
}

export const H4 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<h4 className={`font-bold text-3xl md:text-5xl leading-[48px] md:leading-[58px] text-primaryBlue  ${className}`}>
			{children}
		</h4>
	)
}


export const P = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<p className={`font-normal md:text-lg leading-8 text-paraGray/70  ${className}`}>
			{children}
		</p>
	)
}

