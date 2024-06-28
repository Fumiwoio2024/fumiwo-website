import Content from '@/src/components/global/Content';
import Divider from '@/src/components/global/Divider'
import NavBar from '@/src/components/global/NavBar'
import { H1, P } from '@/src/components/global/Typography'
import { Metadata } from 'next';
import React from 'react'


const privacyPolicyContent = [
	{
		header: "1. Who we are",
		subheader: "",
		content: "“Fumiwo”, “we”, “us” or “our” refers to Fumiwo Financial Technologies SAS (registration number 951 147 834 ) and all its affiliated companies, subsidiaries, departments, partners, service providers and contractors. “Websites” refers to all websites owned and operated by Fumiwo. For the purposes of applicable data protection laws in the territories that we operate, Fumiwo acts as a processor of customer information and a controller of employee information."
	},
	{
		header: "2. Our privacy policy",
		subheader: "",
		content: "Fumiwo is a global organisation and for this reason we have adopted privacy principles that govern our operations and are aligned to data protection regulations across all territories we operate in. We will only collect, transfer, process and store your personal information with your consent and for the purpose it is required, unless legally required to do so. We will only use your personal information for the original purpose it is required. We are open about how we use this information during our interactions with you. Should this purpose change, we will immediately notify you. We will only collect, transfer, process and store the personal information that is required and no more. We aim to ensure that your personal information is kept up to date at all times. We will only store your personal information for as long as required. We will protect your personal information at all times. We will ensure we implement all legal requirements and principles to protect your personal information and we acknowledge that you have certain rights as a data subject to query the information we hold."
	},
	{
		header: "3. The information we collect",
		subheader: "",
		content: "We may collect, use, store and transfer different kinds of personal information about you through the use of this website, our services and products, applying for a job vacancy or communicating with us which we have grouped together as follows: Identity Data may include first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender, identity or passport number or any other form of official or nationally recognized identity. Contact Data includes home and postal address, email address, telephone numbers and country of residence. Financial Data includes mobile money account and payment details. Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us or our partners. Technical Data includes internet protocol (IP) address, your login information (where applicable), browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this Site. Usage Data includes information about how you use our website, products and services. Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences. Correspondence Data includes any correspondence and communications with Fumiwo. Recruitment and Employment Data including previous job history, educational details and contact details. Other publicly available personal data, including any which you have shared via a public platform (such as Twitter, Facebook or LinkedIn). Our websites, products and services are not intended for children and we do not knowingly collect the personal information related to children."
	},
	{
		header: "4. What about personal sensitive information?",
		subheader: "",
		content: "As a customer of Fumiwo, who makes use of our products and services, we do not seek to collect any sensitive personal information (e.g race, colour, ethic origin, political opinion, physical and mental health, religious, sexual orientation, genetic data or criminal records). We ask that you do not provide such information to us. As a Fumiwo employee or potential Fumiwo employee, our Human Resources programmes require personal information about you to function properly. In limited circumstances, some programmes may involve certain sensitive health information (e.g. medical certificates submitted to us or other health-related benefits processes), financial information (e.g. payroll) or information about race or religion when mandated by local laws. Such sensitive personal information will be treated with the utmost care and in accordance with special requirements set out in applicable data protection and other laws in the territories in which we recruit."
	},
	{
		header: "5. How is your personal information collected?",
		subheader: "",
		content: "We use different methods to collect information from and about you: Direct interactions. You may give us your personal information when registering on or submitting information through any Fumiwo website or by corresponding with us by post, phone, email or otherwise. This includes Personal Data you provide when you: Create an account on any of our platforms; Subscribe to our service or publications; As part of our contractual agreement through accepting our product terms and conditions; Request marketing to be sent to you; Apply for an employment vacancy; Enter a competition, promotion or survey; Give us feedback or contact us directly; or provide feedback or contact any of our partners. Automated technologies or interactions. As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. We also collect, use and share Aggregated Data such as statistical or demographic information for any purpose. Aggregated Data could be derived from your personal information but it will not directly or indirectly reveal your identity."
	},
	{
		header: "6. Cookies and similar technologies?",
		subheader: "",
		content: "We employ the use of cookies, which are small text files which asks your web browser for permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic. Cookies allow us to tailor our operations and websites to you, e.g. by estimating our audience size and usage patterns, store information about your preferences and recognize when you return to our website. Overall, cookies help us to provide you with a better website, by enabling us to monitor which pages you find useful or not. A cookie in no way gives us access to your computer or any of your personal information, other than that which you choose to share with us. We own and retain all rights to de-identified statistical information collected and compiled by us. You may at any time decline cookies in your web browser settings, but this may prevent you from taking full advantage of our websites. Refer to our cookie policy for more detailed information regarding cookies. Third party Analytics. In order to ensure that the content of our websites remain up to date, user-friendly and comprehensive, we use a web-analysis tool from Google , i.e. Google Analytics. This service uses cookies that track traffic on our website and your preferences during your visits to our websites. The information that is used during this process (which includes your IP Address) is de-identified and makes personal identification impossible. For more information on the use of Google Analytics and your privacy options please visit https://policies.google.com/technologies/partner-sites and for detail regarding the information Google collects and how it is used to deliver targeted advertising, please visit https://www.google.com/policies/privacy/ads."
	},
	{
		header: "7. How we use your data",
		subheader: "",
		content: "We may use your information for purposes of operating our business and other legitimate purposes permitted by applicable law. We may use your personal information in the following ways: To provide our products and services to you; To verify your identity; To administer the careers portion of the website and process your application; To better understand how visitors use our website and products and services, both on an aggregated and individualized basis, in order to improve our website and products and services and for other research and analytical purposes; To send communications to you, either from Fumiwo directly or from our partners, where you have provided consent in order to do so; For customer insight and market research purposes, to better understand your needs; To comply with applicable laws; For crime and fraud prevention, detection and related purposes; To enable our employees to manage customer service interactions with you; To enforce our Terms of Use where we have a legal right or duty to use or disclose your information (for example in relation to an investigation by a public authority or in a legal dispute)."
	},
	{
		header: "8. Transfer of personal information",
		subheader: "",
		content: "Because Fumiwo is a global organisation, your personal information may be transferred to and stored outside the country where you are located in order to provide our products and services to you. When we transfer your personal information, whether to cloud hosting facilities or within the Fumiwo Group, we will always protect that information as described in this privacy policy."
	},
	{
		header: "9. Third party providers",
		subheader: "",
		content: "We may share your personal information with third parties in order to deliver our products and related services. We require all third parties, through our contractual agreements with them, to respect the security and confidentiality of your personal information and to treat it in accordance with the required data protection laws. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data in accordance with our instructions."
	},
	{
		"header": "10. Your rights as a data subject",
		"subheader": "",
		"content": "You may have certain rights in relation to personal information under the data protection laws in the territories we may operate or recruit.\n\nRight to access (Territories: Benin, Nigeria and EU) – To request confirmation of whether we process personal data relating to you, and if so, to request a copy of that personal data.\n\nRight to Erasure, Deletion or Destruction (Territories: Benin, Nigeria and EU) – to request that we delete your personal data in certain circumstances, where we no longer have any legal reason to retain it.\n\nRight to Rectification (Territories: Benin, Nigeria and EU) – To request that we update or correct any personal data that is inaccurate, incomplete or outdated.\n\nRight to Object or Withdraw Consent (Territories: Benin, Nigeria and EU) – To request that you are opted out of any marketing communication that we may send you and to object to us using or holding your personal data if we have no legitimate reason to do so.\n\nRight to Restriction of Processing (Territories: Benin, Nigeria and EU) – to request that we restrict the use of your personal data in certain circumstances, which means that we can secure and retain the data for your benefit but not use it.\n\nRight to be informed (Territories: Benin, Nigeria and EU) – The right to be informed of whether we have collected your personal data or use it for automated decision-making.\n\nRight to Data Portability (Territories: Benin, Nigeria and EU) – to request that we provide a copy of your personal data to you in a structured, commonly used and machine readable format in certain circumstances.\n\nYou can exercise any of these rights in accordance with the data protection regulation in the territories we operate by email or letter. Each request will be reviewed through our internal Fumiwo data request process and we endeavour to provide you with feedback within 20 working days.\n\nAll requests received will be recorded. Please include the following information in your letter, to help us address the request:\n\nRequester name, contact information and company registration or KYC documentation\nDetails of the customer or employee whose data is requested (if not your own):\nName, Surname\nCountry of residence\nMobile number, or employee number, pertaining to the data\nMotivation and authorization documentation supporting the request for the deletion of, or access to, the data\nEmail details of where the data can be sent to if the request for data is approved\n\nEmail:\nFor Customer Data Requests please send an email to hello@fumiwo.io\nFor Employee Data Requests please send an email to hello@fumiwo.io\n\nLetter:\nprivacyPolicy.section-10.list-3.row-1 https://fumiwo.io/contact/"
	},
	{
		"header": "11. Complaints and grievances",
		"subheader": "",
		"content": "You can submit a grievance about our services and the processing of your personal data in relation to this Privacy Notice by email or letter. (Where it is not possible for you to do so our in-office staff may assist you in documenting your case.) All grievances received will be recorded. Please include the following in your letter, to help us resolve the issue:\n\nYour name and contact information. (Where needed we may use the information you submit to us to contact you directly with regard to the grievance raised.)\nThe mobile number you used to access the product or service that resulted in this complaint. (We will use this to investigate your account.)\nThe date of the incident.\nAny documentation supporting your grievance.\n\nEmail: hello@fumiwo.io\n\nLetter: The addresses of each of our country offices are listed on our website, https://fumiwo.io/contact/"
	},
	{
		"header": "12. Retention",
		"subheader": "",
		"content": "Fumiwo only retains your personal data for as long as needed to fulfil the purposes for which it is collected, unless we are required or permitted by law to keep the personal data for longer in accordance with our Fumiwo Retention Policy."
	},
	{
		"header": "13. Security and Data breaches",
		"subheader": "",
		"content": "Fumiwo is committed to keeping your personal data safe and secure. For this reason we have put in place appropriate administrative, technical and physical security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to the same confidentiality and security requirements that we follow. We have also put in place procedures to deal with any suspected personal data breach and will notify you, if you have been affected, as well as any applicable regulator of a breach where we are legally required to do so."
	},
	{
		"header": "14. Updates to this policy",
		"subheader": "",
		"content": "We may update this policy from time to time and will indicate this change by revising the date at the top of this policy. Please check this privacy policy regularly to stay informed about our information practices."
	}
]



export const metadata: Metadata = {
	title: 'Fumiwo - Privacy Policy',
	description: "Fumiwo Privacy Policy",
}

const PrivacyPolicy = () => {
	return (
		<>
			<NavBar />
			<main className=' mt-24 mb-32 mx-6 lg:mx-48'>
				<H1 className='!text-textHeader text-center font-bold text-3xl lg:text-6xl leading-[52px] md:leading-[64px]'>
					Privacy Policy
				</H1>
				<Divider height={12} />

				<P className='mt-6 text-lg text-center !text-paraGray'>
					Last updated January 2024
				</P>

				<Divider height={12} />
				<P className='mt-6 text-lg text-center !text-paraGray'>
					At Fumiwo we take your privacy very seriously and are committed to protecting the privacy and security of our customers and employees. This privacy notice outlines how your personal information is treated through the use of this website, our services and products, when you apply for a vacancy on our career site and when you communicate with us. If you would like to discuss this with us or have any questions, comments, complaints or suggestions, please contact us. This privacy notice should be read together with our website Terms of Use and Cookie Policy.
				</P>
				<Divider height={50} />

				{privacyPolicyContent.map((content, index) => (
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

export default PrivacyPolicy