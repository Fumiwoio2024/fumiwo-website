import React, { ReactNode } from 'react'

type TPrimaryButton = {
	onClick?: () => void;
	children: string | JSX.Element;
	className?: ReactNode;
}

export const PrimaryButton = ({ onClick, children, className }: TPrimaryButton) => {
	return (
		<button className={`bg-primaryGreen text-primaryBlue py-3 px-10 rounded-[50px] font-medium text-lg hover:bg-primaryGreen/90 active:bg-primaryGreen/70 transition ${className}`}>
			{children}
		</button>
	)
}

