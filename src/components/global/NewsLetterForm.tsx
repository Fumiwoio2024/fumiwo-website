'use client'
import axios from 'axios'
import React, { useState } from 'react'



const defaultValues = {
	email: '',
}


const NewsLetterForm = () => {
	const [formData, setFormData] = useState(defaultValues)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSuccess('')
		setError('')

		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (error) {
			return
		}

		const portalId = "143536254";
		const formGuid = "e840603c-2540-4b46-aa4b-96b7bdc6c805";
		const config = {
			headers: {
				'Content-Type': 'application/json',
			}
		}

		const response = await axios.post(
			`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
			{
				portalId,
				formGuid,
				fields: [
					{
						name: 'email',
						value: formData.email,
					},
				],
			},
			config
		);
		response;
		console.log(response);

		if (response.status === 200) {
			setFormData(defaultValues)
			setSuccess(response.data?.inlineMessage || 'Thank you for subscribing!')
		} else {
			setError(response.data?.message || 'An error occurred, please try again')
		}
	}


	return (
		<>
			<form onSubmit={submitHandler} className='flex w-full md:w-[386px] h-[55px] rounded-md overflow-hidden'>
				<div className='w-2/3 bg-white py-1 px-3'>
					<input
						onChange={onChangeValue}
						value={formData.email}
						name='email'
						type="text"
						placeholder='Enter Email Address'
						className='bg-transparent border-none outline-none text-primaryBlue w-full h-full'
					/>
				</div>
				<button className='h-full w-1/3 bg-primaryGreen'>
					Subscribe
				</button>

			</form>
			<p className={` text-xs mt-2  ${error ? `text-red-500` : `text-green-500`}`}>
				{error || success}
			</p>
		</>
	)
}

export default NewsLetterForm