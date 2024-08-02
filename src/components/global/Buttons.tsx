import React, { ButtonHTMLAttributes, ReactNode } from 'react'

type TPrimaryButton = {
	onClick?: () => void;
	children: string | JSX.Element;
	className?: ReactNode;
}

export const PrimaryButton = ({ children, className }: TPrimaryButton) => {
	return (
    <button
      className={`w-full rounded-[50px] bg-primaryGreen px-10 py-3 text-sm font-medium text-buttonTextBlue transition hover:bg-primaryGreen/90 active:bg-primaryGreen/70 md:w-auto md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}
export const SecondaryButton = ({ children, className, ...props }: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={` text-buttonTextBlue py-3 px-10 rounded-[50px] font-medium text-lg transition bg-white border border-primaryGreen hover:bg-primaryGreen/5 active:bg-primaryGreen/20  ${className} `}
			{...props}
		>
			{children}
		</button>
	)
}

