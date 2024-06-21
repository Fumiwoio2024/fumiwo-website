import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import Divider from './Divider'

type TInputProps = ({
	label: string;
	textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
} & InputHTMLAttributes<HTMLInputElement>)



const Input = ({ label, textareaProps, ...props }: TInputProps) => {
	return (
		<div className='w-full text-inputLabel'>
			<label htmlFor={props.name}>
				{label}
			</label>
			<Divider height={6} />
			<div className={`w-full py-3 px-4 border border-inputBorder rounded-md focus-within:outline focus-within:border-primaryGreen`}>
				{textareaProps ? (
					<textarea id={props.name} {...textareaProps} className={`border-none outline-none bg-white w-full  ${textareaProps.className}`} />
				) : (
					<input id={props.name} {...props} className={`border-none outline-none bg-white w-full ${props.className}`} />
				)
				}
			</div>
		</div>
	)
}

export default Input