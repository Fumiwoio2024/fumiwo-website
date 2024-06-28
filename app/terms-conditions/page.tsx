import Content from '@/src/components/global/Content';
import Divider from '@/src/components/global/Divider'
import NavBar from '@/src/components/global/NavBar'
import { H1, H4, P } from '@/src/components/global/Typography'
import { Metadata } from 'next';
import React from 'react'



const termsContent = [
	{
		header: "Important Information",
		subheader: "Use of the Site.",
		content: " These Terms of use apply to your use of the Site. This includes the Site itself and its content (including the text, images and other information on the Site). By accessing the Site you agree to be bound by the Terms of use. Legal agreement. You agree to be legally bound by the Terms of Use by visiting and using the Site. You may not use the Site and must immediately stop doing so if you do not agree to the Terms of Use. Product and Platform terms. Separate terms apply to our products and services and if you use our products or services these will apply to you. We will make them available to you when you take up a product with us. Changes to the Terms of Use. We may change these terms at any time without notice by updating this posting and by continuing to access this Site you accept such changes."
	},
	{
		header: "Use of and access to the Site",
		subheader: "Use of and access to the Site",
		content: "Information on the Site. The information held on this Site is for your personal, non-commercial use only. You may not transmit, modify, copy or make commercial use of the Site or any part of it without our prior permission. The intention behind the Site is to give you information about Fumiwo. Non-commercial use. You may download and/or print out all or part of the Site for your own personal, non-commercial use. Any reproduction of the content on the Site must include the relevant copyright notice. We grant you a limited license to use the Site. We may cancel your license at any time for any reason. Your license is automatically cancelled if you do not get our written permission before using this Site in a way these Terms of Use do not allow. While we try to ensure that access to the Site is always available. We may change, suspend or discontinue the Site or any part of it, without notice. The Site or any part of it may not always be available. Taking away access. We may take away your rights to use the Site or the content for any reason, without notifying you. If you breach the Terms of Use or infringe any other person’s rights (including copyright), we may cancel your license, block you from using the Site, claim specific performance or damages against you, and take any other steps the law allows, without affecting our rights."
	},
	{
		header: "Prohibited use",
		subheader: "You are not allowed to.",
		content: "Introduce any materials that are designed to hamper the operations of the Site or its content; damage, disable, overburden, impair, or gain unauthorized access to the content or the Site; remove, modify, disable, block, obscure or otherwise impair any advertising displayed on, or used in connection with the Site; use the Site or the content to advertise or promote products or services that we have not expressly approved in writing in advance; interfere with anyone else’s use and enjoyment of the Site; attempt to discover or reverse engineer the source code and other materials forming part of the technology used to provide the Site or forming part of the content; receive or charge money, favours or other consideration for allowing any other person to use or access the Site or the content. do anything that violates any of these Terms of Use; do anything which is illegal, fraudulent or violates or infringes any rights, title or interest (including, any intellectual property rights) in or to this Site or its content; deep link (link to any page other than the home page of this Site) or link in any way that could suggest that we endorse or support you or a third party, or that you have any rights in our Site or intellectual property, without our permission; remove, disable, bypass, or circumvent any protection mechanisms or access control mechanisms on the Site; use any technology (including spiders, crawlers, bots, and similar virtual agents) to search or gain any information from this Site, without our permission;"
	},
	{
		header: "Intellectual property rights",
		subheader: "Ownership.",
		content: "Unless otherwise provided, we are the owner or licensee of all copyright, trademarks and other intellectual property rights in and to the Site. Your rights. Your rights to use the Site and its content are limited to those that we give to you in the Terms of Use. No license for use. We do not grant you any licence or right to use any of our trademarks or other intellectual property on this Site by virtue of your use of or access to the Site. Restrictions. Except as expressly permitted under the agreement, the website and its content may not be: modified or used to make derivative works; rented, leased, loaned, sold or assigned; reverse engineered or copied; or reproduced or distributed. Proprietary notices. You may not remove any copyright, trademark or other proprietary notices from the content. Requested cease of use. You must stop using our trademarks or other content immediately if we ask you to do so."
	},
	{
		header: "Third party websites and material",
		subheader: "No endorsement.",
		content: "Where we provide hypertext links to third-party internet websites, these are not an endorsement by us of any products or services in such websites and we have not verified the truth or accuracy of any content of such websites. You use such links entirely at your own risk and we accept no responsibility or liability for the content, use or availability of such websites. Third party material. This Site may also contain material provided by third parties and we accept no responsibility or liability for the accuracy of such material. No linking without consent. You are not permitted to link any other website to this Site without obtaining our prior written consent."
	},
	{
		header: "Sharing content and social networks",
		subheader: "No endorsement.",
		content: "Where we provide hypertext links to third-party internet websites, these are not an endorsement by us of any products or services in such websites and we have not verified the truth or accuracy of any content of such websites. You use such links entirely at your own risk and we accept no responsibility or liability for the content, use or availability of such websites. Third party material. This Site may also contain material provided by third parties and we accept no responsibility or liability for the accuracy of such material. No linking without consent. You are not permitted to link any other website to this Site without obtaining our prior written consent."
	},
	{
		header: "Privacy",
		subheader: "",
		content: "You may access most areas of the Site without registering your details with us and without us recording any of your personal information; however certain areas of the Site may require you to register. If you submit an application to have access to these areas, you are indicating that you have read our Privacy Policy and are willing for us to deal with your personal data as set out in that policy."
	},
	{
		header: "Internet communications",
		subheader: "",
		content: "We may monitor all internet communications, including web and email traffic into and out of our domains for security, ensuring compliance with these Terms and detecting fraud and other crimes."
	},
	{
		header: "Limits to our rights and responsibilities",
		subheader: "Limits to our rights and responsibilities",
		content: "Own risk. We provide the website “as is”. We do not give any express or implied warranty or make any other promise about this Site. Do not rely on the Site content. Although we have taken all reasonable care to ensure that the information provided on this Site is accurate, we give no warranties with regard to the accuracy, timeliness or completeness of any information. No responsibility. We accept no liability related to your use or inability to use the Site, or in connection with any error, omission, defect, computer virus or system failure, or in connection with the access of, use of, performance of, browsing in or linking to other websites from this Site. You indemnify (or promise to protect) us against any claim, demand, loss, damage, cost, or liability (including reasonable attorneys’ fees) related to your use of this Site. Indirect damages. We will never be responsible for any indirect or consequential damages or losses, even if we should have foreseen them. These may include any loss of profit, loss of goodwill, loss of use or damages related to lost or damaged data."
	},
	{
		header: "Governing Law",
		subheader: "Own risk",
		content: "We provide the website “as is”. We do not give any express or implied warranty or make any other promise about this Site. Do not rely on the Site content. Although we have taken all reasonable care to ensure that the information provided on this Site is accurate, we give no warranties with regard to the accuracy, timeliness or completeness of any information. No responsibility. We accept no liability related to your use or inability to use the Site, or in connection with any error, omission, defect, computer virus or system failure, or in connection with the access of, use of, performance of, browsing in or linking to other websites from this Site. You indemnify (or promise to protect) us against any claim, demand, loss, damage, cost, or liability (including reasonable attorneys’ fees) related to your use of this Site. Indirect damages. We will never be responsible for any indirect or consequential damages or losses, even if we should have foreseen them. These may include any loss of profit, loss of goodwill, loss of use or damages related to lost or damaged data."
	}
];

export const metadata: Metadata = {
	title: 'Fumiwo - Terms & Conditions',
	description: "Fumiwo Terms and Conditions",
}

const Terms = () => {
	return (
		<>
			<NavBar />
			<main className=' mt-24 mb-32 mx-6 lg:mx-48'>
				<H1 className='!text-textHeader text-center font-bold text-3xl lg:text-6xl leading-[52px] md:leading-[64px]'>
					Terms and Conditions
				</H1>
				<Divider height={28} />

				<P className='mt-6 text-lg text-center !text-paraGray'>
					Welcome to Fumiwo’s Cookie Policy. This Cookie Policy applies between Fumiwo Limited and all its affiliated companies (“Fumiwo”, “we”, “us” or “our”) and you when you use the Fumiwo Website (“Site”).				</P>
				<Divider height={50} />

				{termsContent.map((content, index) => (
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

export default Terms