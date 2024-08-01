import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { PrimaryButton } from '../global/Buttons'
import Image from 'next/image'
import whyUs from '@images/whyUs.png'
import newWhyUs from '@images/new-why-us.png'
import Link from "next/link";

const Metrics = ({ numbers, title }: { numbers: string; title: string }) => {
  return (
    <div className="text-center">
      <P className="!text-5xl !font-bold !text-primaryGreen">{numbers}</P>
      <Divider height={14} />
      <P className="!text-base !font-normal !text-offWhite">{title}</P>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="relative mb-20 bg-primaryBlack px-6 py-20 text-center md:py-28 lg:mb-32">
      {/* <div className='w-fit hidden lg:block h-fit absolute top-0 left-0  '>
				<svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.00110788 0.218966L100.001 -0.000102199C100.115 51.9179 55.4389 94.0978 0.207031 94.2188L0.00110788 0.218966Z" fill="#0BE781" />
				</svg>

			</div> */}

      <div className="mx-auto max-w-6xl items-center gap-20 space-y-20 text-center md:flex md:space-y-0 lg:text-left">
        <Image
          src={newWhyUs}
          alt="people typing on laptop"
          className="md:w-6/12"
        />
        <div className="md:w-6/12">
          <H4 className="!text-offWhite">Why Choose Us</H4>
          <Divider height={12} />
          <P className="text-justify !text-offWhite/60">
            Choose our platform to transform you evaluate credit risk by
            leveraging the power of phone usage data. By providing a
            comprehensive view of borrower behavior, it enables more accurate,
            fair, and efficient credit decisions, ultimately contributing to
            better financial outcomes for both lenders and borrowers.
          </P>
          <Divider height={32} />

          <div className="no-scrollbar flex justify-between overflow-x-auto py-2">
            <Metrics numbers="+20%" title="Approval Rate" />
            <Metrics numbers="-15%" title="Default Rate" />
            <Metrics numbers="~0.2s" title="Avg Response Time" />
          </div>
          <Divider height={48} />

          <Link href="/solutions/credit-risk-score">
            <PrimaryButton>Learn More</PrimaryButton>
          </Link>
        </div>
      </div>

      {/* <div className='w-fit hidden lg:block h-fit absolute bottom-10 right-0  '>
				<svg width="48" height="63" viewBox="0 0 48 63" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.50764e-06 -3.8147e-06L0 63L48 31.4956L5.50764e-06 -3.8147e-06Z" fill="#12B74A" />
				</svg>
			</div> */}
    </section>
  );
};

export default WhyUs