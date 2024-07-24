import React from 'react'

type TTags = {
	children: string,
	className: string
}


const Tag = ({ children, className }: TTags) => {
	return (
		<p className={`bg-primaryGreen/35 text-textHeader font-bold text-lg px-3 py-1 rounded-full w-fit uppercase ${className}`}>
			{children}
		</p>
	)
}

export default Tag