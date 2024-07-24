import React, { useRef } from "react";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";
import { PrimaryButton } from "../global/Buttons";
import Image from "next/image";
import benefits from "@images/benefits.png";
import newWhyUs from "@images/new-why-us.png";
import { title } from "process";

const benefitItem = [
  {
    title: "Enhanced Decision Making",
    description:
      "Making Make well-informed lending decisions with a comprehensive understanding of each borrower's credit risk. Our solution provides deeper insights into borrower behavior and potential.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 24C28.799 24 33.5 19.299 33.5 13.5C33.5 7.70101 28.799 3 23 3C17.201 3 12.5 7.70101 12.5 13.5C12.5 19.299 17.201 24 23 24Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M14 33C19.799 33 24.5 28.299 24.5 22.5C24.5 16.701 19.799 12 14 12C8.20101 12 3.5 16.701 3.5 22.5C3.5 28.299 8.20101 33 14 33Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    ),
  },
  {
    title: "Increased Inclusivity",
    description:
      "Assess creditworthiness for individuals who may be overlooked by traditional credit scoring models by leveraging alternative data. Promote financial inclusion and expand your customer base.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5011 10.74C27.4111 10.725 27.3061 10.725 27.2161 10.74C25.1461 10.665 23.4961 8.97 23.4961 6.87C23.4961 4.725 25.2211 3 27.3661 3C29.5111 3 31.2361 4.74 31.2361 6.87C31.2211 8.97 29.5711 10.665 27.5011 10.74Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.9552 21.6602C28.0102 22.0052 30.2752 21.6452 31.8652 20.5802C33.9802 19.1702 33.9802 16.8602 31.8652 15.4502C30.2602 14.3852 27.9652 14.0252 25.9102 14.3852"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.45375 10.74C9.54375 10.725 9.64875 10.725 9.73875 10.74C11.8088 10.665 13.4587 8.97 13.4587 6.87C13.4587 4.725 11.7338 3 9.58875 3C7.44375 3 5.71875 4.74 5.71875 6.87C5.73375 8.97 7.38375 10.665 9.45375 10.74Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.0002 21.6602C8.94515 22.0052 6.68016 21.6452 5.09016 20.5802C2.97516 19.1702 2.97516 16.8602 5.09016 15.4502C6.69516 14.3852 8.99015 14.0252 11.0452 14.3852"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.4972 21.9431C18.4072 21.9281 18.3022 21.9281 18.2122 21.9431C16.1422 21.8681 14.4922 20.1731 14.4922 18.0731C14.4922 15.9281 16.2172 14.2031 18.3622 14.2031C20.5072 14.2031 22.2322 15.9431 22.2322 18.0731C22.2172 20.1731 20.5672 21.8831 18.4972 21.9431Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1331 26.6691C12.0181 28.0791 12.0181 30.3891 14.1331 31.7991C16.5331 33.4041 20.4631 33.4041 22.8631 31.7991C24.9781 30.3891 24.9781 28.0791 22.8631 26.6691C20.4781 25.0791 16.5331 25.0791 14.1331 26.6691Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Data Privacy and Security",
    description:
      "Ensure the highest level of data privacy and security with our robust data protection measures. We comply with all relevant regulations and standards to protect borrower information.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2333 3.34484L8.74828 6.16484C7.02328 6.80984 5.61328 8.84984 5.61328 10.6798V21.8248C5.61328 23.5948 6.78328 25.9198 8.20828 26.9848L14.6583 31.7998C16.7733 33.3898 20.2533 33.3898 22.3683 31.7998L28.8183 26.9848C30.2433 25.9198 31.4133 23.5948 31.4133 21.8248V10.6798C31.4133 8.83484 30.0033 6.79484 28.2783 6.14984L20.7933 3.34484C19.5183 2.87984 17.4783 2.87984 16.2333 3.34484Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0742 17.8045L16.4892 20.2195L22.9392 13.7695"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const SingleBenefit = ({
  items,
}: {
  items: { title: string; description: string; Icon: JSX.Element }[];
}) => {
  return (
    <div className="mt-14 space-y-12">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-6 lg:flex-row">
          <div className="mx-auto">{item.Icon}</div>
          <div className="space-y-4">
            <h6 className="text-2xl font-semibold text-primaryGreen">
              {item.title}
            </h6>
            <P className="!text-base !font-normal !text-white">
              {item.description}
            </P>
          </div>
        </div>
      ))}
    </div>
  );
};

const Benefits = ({ type }: { type: string }) => {
  return (
    <section className="relative mb-24 bg-primaryBlack px-6 py-20 text-center lg:mb-44 lg:py-28">
      {/* <div className='w-fit hidden lg:block h-fit absolute top-0 left-0  '>
				<svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.00110788 0.218966L100.001 -0.000102199C100.115 51.9179 55.4389 94.0978 0.207031 94.2188L0.00110788 0.218966Z" fill="#0BE781" />
				</svg>

			</div> */}

      <div className="text-cen container mx-auto items-center gap-32 space-y-20 xl:flex xl:space-y-0 xl:text-left">
        <div className="lg:flex-1">
          <H4 className="!text-offWhite">
            <span className="text-primaryGreen">Benefits</span> of our solution
          </H4>
          <Divider height={12} />
          <div className="mx-auto lg:w-5/6 lg:text-left xl:mx-0">
            <SingleBenefit items={benefitItem} />
          </div>
        </div>

        <Image
          src={benefits}
          alt="people typing on laptop"
          className="mx-auto md:flex-1"
        />
      </div>

      {/* <div className='w-fit hidden lg:block h-fit absolute bottom-10 right-0  '>
				<svg width="48" height="63" viewBox="0 0 48 63" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.50764e-06 -3.8147e-06L0 63L48 31.4956L5.50764e-06 -3.8147e-06Z" fill="#12B74A" />
				</svg>
			</div> */}
    </section>
  );
};

export default Benefits;
