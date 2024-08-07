import React, { ReactNode } from 'react'

export const H1 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
    <h1
      className={`text-3xl font-bold leading-[48px] text-textHeader lg:text-5xl lg:leading-[58px] ${className}`}
    >
      {children}
    </h1>
  );
}
export const H3 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<h3 className={`font-semibold text-xl md:text-4xl text-textHeader  ${className}`}>
			{children}
		</h3>
	)
}

export const H4 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
    <h4
      className={`text-3xl font-bold leading-[48px] text-textHeader lg:text-5xl lg:leading-[58px] ${className}`}
    >
      {children}
    </h4>
  );
}

export const H5 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<h5 className={`font-semibold text-lg md:text-2xl text-textHeader  ${className}`}>
			{children}
		</h5>
	)
}


export const P = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<p className={`font-normal md:text-lg text-paraGray/70 ${className?.includes('leading') ? className : `!leading-8 ${className}`}`}>
			{children}
		</p>
	)
}

