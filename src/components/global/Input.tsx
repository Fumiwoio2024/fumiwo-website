import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import Divider from './Divider'

type TInputProps = ({
	label: string;
} & InputHTMLAttributes<HTMLInputElement>)
// | (
// 	{
// 		label: string;
// 		textarea: true
// 	} & TextareaHTMLAttributes<HTMLTextAreaElement>
// )


const Input = ({ label, textarea, ...props }: TInputProps) => {
	return (
		<div className='w-full text-inputLabel'>
			<label htmlFor={props.name}>
				{label}
			</label>
			<Divider height={6} />
			<div className={`w-full py-3 px-4 border border-inputBorder rounded-md focus-within:outline focus-within:border-primaryGreen`}>
				{textarea ? (
					<textarea id={props.name} {...props} className={`border-none outline-none bg-white w-full  ${props.className}`} />
				) : (
					<input id={props.name} {...props} className={`border-none outline-none bg-white w-full ${props.className}`} />
				)
				}
			</div>
		</div>
	)
}

export default Input