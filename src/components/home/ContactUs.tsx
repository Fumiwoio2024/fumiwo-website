import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { SecondaryButton } from '../global/Buttons'
import Link from 'next/link'

const ContactUs = () => {

	return (
    <div className="mx-6">
      <div className="z-1 container relative mx-auto -mb-40 flex h-96 flex-col items-center justify-center rounded-lg bg-primaryGreen px-3 text-center text-primaryBlack lg:block lg:pt-20">
        <div className="absolute left-0 top-0 hidden lg:block">
          <svg
            width="248"
            height="311"
            viewBox="0 0 248 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.08"
              x="108.352"
              y="-79"
              width="114.308"
              height="114.308"
              rx="18.8132"
              transform="rotate(45 108.352 -79)"
              fill="#011D7B"
            />
            <rect
              opacity="0.08"
              x="167.137"
              y="53.2637"
              width="114.308"
              height="114.308"
              rx="18.8132"
              transform="rotate(45 167.137 53.2637)"
              fill="#011D7B"
            />
            <rect
              opacity="0.08"
              x="71.6133"
              y="148.787"
              width="114.308"
              height="114.308"
              rx="18.8132"
              transform="rotate(45 71.6133 148.787)"
              fill="#011D7B"
            />
            <rect
              opacity="0.08"
              x="12.8281"
              y="16.5234"
              width="114.308"
              height="114.308"
              rx="18.8132"
              transform="rotate(45 12.8281 16.5234)"
              fill="#011D7B"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-2xl">
          <H4>Ready to get started?</H4>
          <Divider height={16} className="hidden lg:block" />
          <Divider height={12} className="lg:hidden" />
          <P className="!text-contactGray lg:!text-lg">
            Get ready to enhance your credit product to attract more customers,
            access new market segments and drive growth with the power of
            behavioural insights.
          </P>
          <Divider height={34} className="hidden lg:block" />
          <Divider height={24} className="lg:hidden" />

          <Link href="/contact-us">
            <SecondaryButton className="mx-auto hover:bg-white/90 active:bg-white/70 md:!w-auto">
              Contact us
            </SecondaryButton>
          </Link>
        </div>

        <div className="absolute bottom-0 right-0 hidden lg:block">
          <svg
            width="370"
            height="381"
            viewBox="0 0 370 381"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="552"
              cy="-72"
              r="480"
              fill="#011D7B"
              fill-opacity="0.14"
            />
            <circle
              cx="552"
              cy="-72"
              r="516"
              stroke="#011D7B"
              stroke-opacity="0.05"
              stroke-width="72"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ContactUs