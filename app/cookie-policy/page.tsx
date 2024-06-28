import Content from '@/src/components/global/Content';
import Divider from '@/src/components/global/Divider'
import NavBar from '@/src/components/global/NavBar'
import { H1, P } from '@/src/components/global/Typography'
import { Metadata } from 'next';
import React from 'react'


const cookiesContent = [
	{
		header: "What are cookies",
		subheader: "",
		content: "We use cookies on our Site to gain insight into how our visitors use the Site and to improve our Site service and to contribute to research and analytics studies, including the use of artificial intelligence and machine learning. Internet cookies are common and do not harm your system – they just store or gather site information. They help you do things online, like remembering login details so you don’t have to re-enter them when revisiting a site."
	},
	{
		header: "Why use cookies",
		subheader: "",
		content: "We use cookies to: Gather customer journey information on our public site only. Temporarily store input information in our calculators, tools, illustrations and demonstrations. Store details of your marketing, product preferences to improve our targeting and enhance your journey through our sites and partner sites. Evaluate our sites’ advertising and promotional effectiveness (we own the anonymous data collected and don’t share it with anyone). We don’t use cookies to track people’s Internet usage after leaving our sites and we don’t store personal information in them that others could read and understand. We will not sell or distribute cookie information without your prior consent."
	},
	{
		header: "What cookies do we use",
		subheader: "",
		content: "We use both: Session cookies – a session cookie (also called a transient cookie) is temporary and will be erased once you close your browser (session cookies will not gather information from your computer, but they will recognise you as you navigate between pages during your session and will help maintain security during your visit); and Persistent cookies – persistent cookies are permanent cookies that have set expiration dates, they are stored on your device until they expire or are deleted and they will collect information such as your login details or user preferences when you visit certain websites. Cookies can also be either First-party cookies – a first-party cookie is owned and created by the Site you are visiting and stores a small amount of text on your computer (first-party cookies are usually allowed by most web browsers, but if you should choose to disable these type of cookies, the Site you are visiting will not be able to track your activity during navigation); or Third-party cookies – third-party cookies are created and owned by a website other than the one you are currently visiting, these cookies will usually be from a company providing a service to the owners of the website you are visiting and these type of cookies typically store tracking information and personal preferences. We use both first-party and third-party cookies on our Site. Please consult the privacy policies of third parties, such as Google, Facebook or LinkedIn, to learn more about how they use information that they may collect via our Site."
	},
	{
		header: "Change your cookies settings",
		subheader: "",
		content: "To enable or disable cookies, follow the instructions provided by your browser (usually located within the ‘Help’, ‘Tools’ or ‘Edit’ facility). Alternatively, an external resource is available at All about cookies providing specific information about cookies and how to manage them."
	}
];


export const metadata: Metadata = {
	title: 'Fumiwo - Cookies Policy',
	description: "Fumiwo Cookie Policy",
}

const CookiePolicy = () => {
	return (
		<>
			<NavBar />
			<main className=' mt-24 mb-32 mx-6 lg:mx-48'>
				<H1 className='!text-textHeader text-center font-bold text-3xl lg:text-6xl leading-[52px] md:leading-[64px]'>
					Cookies Policy
				</H1>
				<Divider height={28} />

				<P className='mt-6 text-lg text-center !text-paraGray'>
					Below are the Fumiwo Website’s terms and conditions that apply when you access and use the Fumiwo Website (“Site”). These Terms of Use apply between you and Fumiwo Financial Technologies SAS (registration number 957 147 834) and any of its affiliated companies (“Fumiwo ”, “we”, “our” or “us”) along with the other legal documents that govern the Site, being the Privacy Policy and Cookie Policy
				</P>
				<Divider height={50} />

				{cookiesContent.map((content, index) => (
					<Content
						key={index}
						header={content.header}
						subheader={content.subheader}
					>
						{content.content}
					</Content>
				))}


			</main>
		</>
	)
}

export default CookiePolicy