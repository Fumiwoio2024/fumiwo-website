import React from 'react'
import Divider from '../global/Divider'
import { H3, H4, P } from '../global/Typography'
import Image from 'next/image'
import heroImage from '@images/hero-laptop.png'
import { PrimaryButton } from '../global/Buttons'

type TAdvantageFeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const fraudAdvantageFeatureItems: TAdvantageFeatureItem[] = [
  {
    title: "Enhanced Accuracy",
    description:
      "Smartphone metadata offers real-time insights into a user's financial activities and behaviors, enabling more precise credit assessments. This results in reduced default rates and better risk management for your institution",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2562_7515)">
          <rect x="4" y="2" width="72" height="72" rx="36" fill="#011D7B" />
          <g clip-path="url(#clip0_2562_7515)">
            <path
              d="M47.1406 28H58.5692V39.4286"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58.5725 28L42.4297 44.1429C42.1626 44.4046 41.8036 44.5512 41.4297 44.5512C41.0558 44.5512 40.6967 44.4046 40.4297 44.1429L33.8583 37.5714C33.5912 37.3097 33.2322 37.1631 32.8583 37.1631C32.4843 37.1631 32.1253 37.3097 31.8583 37.5714L21.4297 48"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2562_7515"
            x="0"
            y="0"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2562_7515"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2562_7515"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_2562_7515">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(20 18)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Comprehensive data analytics",
    description:
      "By analyzing patterns in communication, app usage, and location data, Fumiwo solution generate a more accurate and nuanced credit score that traditional models often miss.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2562_7515)">
          <rect x="4" y="2" width="72" height="72" rx="36" fill="#011D7B" />
          <g clip-path="url(#clip0_2562_7515)">
            <path
              d="M47.1406 28H58.5692V39.4286"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58.5725 28L42.4297 44.1429C42.1626 44.4046 41.8036 44.5512 41.4297 44.5512C41.0558 44.5512 40.6967 44.4046 40.4297 44.1429L33.8583 37.5714C33.5912 37.3097 33.2322 37.1631 32.8583 37.1631C32.4843 37.1631 32.1253 37.3097 31.8583 37.5714L21.4297 48"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2562_7515"
            x="0"
            y="0"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2562_7515"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2562_7515"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_2562_7515">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(20 18)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Data privacy and Security",
    description:
      "Our solution complies with stringent data protection regulations, ensuring that all information is anonymized and encrypted, safeguarding your customers' trust and your organization's reputation.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2562_7515)">
          <rect x="4" y="2" width="72" height="72" rx="36" fill="#011D7B" />
          <g clip-path="url(#clip0_2562_7515)">
            <path
              d="M47.1406 28H58.5692V39.4286"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58.5725 28L42.4297 44.1429C42.1626 44.4046 41.8036 44.5512 41.4297 44.5512C41.0558 44.5512 40.6967 44.4046 40.4297 44.1429L33.8583 37.5714C33.5912 37.3097 33.2322 37.1631 32.8583 37.1631C32.4843 37.1631 32.1253 37.3097 31.8583 37.5714L21.4297 48"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2562_7515"
            x="0"
            y="0"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2562_7515"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2562_7515"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_2562_7515">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(20 18)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const creditScoreAdvantageFeatureItems: TAdvantageFeatureItem[] = [
  {
    title: "Behavioral Scoring Models",
    description:
      "Harness the power of machine learning to analyze patterns in communication, app usage, and location data. Our behavioral scoring models create a detailed profile that accurately reflects the borrower's creditworthiness.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M38 38C42.1421 38 45.5 34.6421 45.5 30.5C45.5 26.3579 42.1421 23 38 23C33.8579 23 30.5 26.3579 30.5 30.5C30.5 34.6421 33.8579 38 38 38Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.1133 53C25.1133 47.195 30.8883 42.5 37.9983 42.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M47.3 52.1C49.951 52.1 52.1 49.951 52.1 47.3C52.1 44.6491 49.951 42.5 47.3 42.5C44.6491 42.5 42.5 44.6491 42.5 47.3C42.5 49.951 44.6491 52.1 47.3 52.1Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53 53L51.5 51.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Risk Analysis",
    description:
      "Spot potential red flags with in-depth risk analysis. Our solution identifies irregular activities and high-risk behaviors, helping lenders mitigate risks effectively.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M40.1455 42.5002H26.6005C23.8705 42.5002 22.1305 39.5752 23.4505 37.1752L26.9455 30.8152L30.2155 24.8602C31.5805 22.3852 35.1505 22.3852 36.5155 24.8602L39.8005 30.8152L41.3755 33.6802L43.2955 37.1752C44.6155 39.5752 42.8755 42.5002 40.1455 42.5002Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53 43.25C53 48.635 48.635 53 43.25 53C37.865 53 33.5 48.635 33.5 43.25C33.5 42.995 33.515 42.755 33.53 42.5H40.145C42.875 42.5 44.615 39.575 43.295 37.175L41.375 33.68C41.975 33.56 42.605 33.5 43.25 33.5C48.635 33.5 53 37.865 53 43.25Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.9339 36L30.3499 34.94H30.1859V36H29.5019V33.192H30.6499C30.8712 33.192 31.0592 33.2307 31.2139 33.308C31.3712 33.3853 31.4886 33.492 31.5659 33.628C31.6432 33.7613 31.6819 33.9107 31.6819 34.076C31.6819 34.2627 31.6286 34.4293 31.5219 34.576C31.4179 34.7227 31.2632 34.8267 31.0579 34.888L31.7059 36H30.9339ZM30.1859 34.456H30.6099C30.7352 34.456 30.8286 34.4253 30.8899 34.364C30.9539 34.3027 30.9859 34.216 30.9859 34.104C30.9859 33.9973 30.9539 33.9133 30.8899 33.852C30.8286 33.7907 30.7352 33.76 30.6099 33.76H30.1859V34.456ZM32.4553 33.536C32.3353 33.536 32.2366 33.5013 32.1593 33.432C32.0846 33.36 32.0473 33.272 32.0473 33.168C32.0473 33.0613 32.0846 32.9733 32.1593 32.904C32.2366 32.832 32.3353 32.796 32.4553 32.796C32.5726 32.796 32.6686 32.832 32.7433 32.904C32.8206 32.9733 32.8593 33.0613 32.8593 33.168C32.8593 33.272 32.8206 33.36 32.7433 33.432C32.6686 33.5013 32.5726 33.536 32.4553 33.536ZM32.7953 33.768V36H32.1113V33.768H32.7953ZM34.199 36.032C34.0043 36.032 33.831 35.9987 33.679 35.932C33.527 35.8653 33.407 35.7747 33.319 35.66C33.231 35.5427 33.1816 35.412 33.171 35.268H33.847C33.855 35.3453 33.891 35.408 33.955 35.456C34.019 35.504 34.0976 35.528 34.191 35.528C34.2763 35.528 34.3416 35.512 34.387 35.48C34.435 35.4453 34.459 35.4013 34.459 35.348C34.459 35.284 34.4256 35.2373 34.359 35.208C34.2923 35.176 34.1843 35.1413 34.035 35.104C33.875 35.0667 33.7416 35.028 33.635 34.988C33.5283 34.9453 33.4363 34.88 33.359 34.792C33.2816 34.7013 33.243 34.58 33.243 34.428C33.243 34.3 33.2776 34.184 33.347 34.08C33.419 33.9733 33.523 33.8893 33.659 33.828C33.7976 33.7667 33.9616 33.736 34.151 33.736C34.431 33.736 34.651 33.8053 34.811 33.944C34.9736 34.0827 35.067 34.2667 35.091 34.496H34.459C34.4483 34.4187 34.4136 34.3573 34.355 34.312C34.299 34.2667 34.2243 34.244 34.131 34.244C34.051 34.244 33.9896 34.26 33.947 34.292C33.9043 34.3213 33.883 34.3627 33.883 34.416C33.883 34.48 33.9163 34.528 33.983 34.56C34.0523 34.592 34.159 34.624 34.303 34.656C34.4683 34.6987 34.603 34.7413 34.707 34.784C34.811 34.824 34.9016 34.8907 34.979 34.984C35.059 35.0747 35.1003 35.1973 35.103 35.352C35.103 35.4827 35.0656 35.6 34.991 35.704C34.919 35.8053 34.8136 35.8853 34.675 35.944C34.539 36.0027 34.3803 36.032 34.199 36.032ZM36.8854 36L36.2054 35.064V36H35.5214V33.04H36.2054V34.676L36.8814 33.768H37.7254L36.7974 34.888L37.7334 36H36.8854Z"
          fill="#011D7B"
        />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage predictive insights to gauge borrowers' likelihood of default, and repayment capabilities. Our solution equips you with the knowledge to understand long-term risks and opportunities.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M30.3203 47.2261V44.1211"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M38 47.2256V41.0156"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M45.6797 47.2245V37.8945"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M45.6803 28.7734L44.9903 29.5834C41.1653 34.0534 36.0353 37.2184 30.3203 38.6434"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M41.2852 28.7734H45.6802V33.1534"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.5 53H42.5C50 53 53 50 53 42.5V33.5C53 26 50 23 42.5 23H33.5C26 23 23 26 23 33.5V42.5C23 50 26 53 33.5 53Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Data Integration",
    description:
      "Integrate our SDK seamlessly with your mobile app to collect real-time data from borrowers' phones. This ensures that the credit scoring process uses up-to-date and relevant information.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M30.5 32H26C24.35 32 23 30.65 23 29V26C23 24.35 24.35 23 26 23H30.5C32.15 23 33.5 24.35 33.5 26V29C33.5 30.65 32.15 32 30.5 32Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.2 30.5H45.8C44.81 30.5 44 29.69 44 28.7V26.3C44 25.31 44.81 24.5 45.8 24.5H51.2C52.19 24.5 53 25.31 53 26.3V28.7C53 29.69 52.19 30.5 51.2 30.5Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.2 41.75H45.8C44.81 41.75 44 40.94 44 39.95V37.55C44 36.56 44.81 35.75 45.8 35.75H51.2C52.19 35.75 53 36.56 53 37.55V39.95C53 40.94 52.19 41.75 51.2 41.75Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.5 27.5H44"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M38.75 27.5V47C38.75 48.65 40.1 50 41.75 50H44" fill="white" />
        <path
          d="M38.75 27.5V47C38.75 48.65 40.1 50 41.75 50H44"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38.75 38.75H44"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.2 53H45.8C44.81 53 44 52.19 44 51.2V48.8C44 47.81 44.81 47 45.8 47H51.2C52.19 47 53 47.81 53 48.8V51.2C53 52.19 52.19 53 51.2 53Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Access detailed reports that provide a holistic view of each borrower's credit profile. Customize these reports to meet your specific needs, making data interpretation straightforward and actionable.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M32 38.3008H42.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32 44.3008H38.57"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 29H41C44 29 44 27.5 44 26C44 23 42.5 23 41 23H35C33.5 23 32 23 32 26C32 29 33.5 29 35 29Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44 26.0312C48.995 26.3013 51.5 28.1462 51.5 35.0013V44.0012C51.5 50.0012 50 53.0012 42.5 53.0012H33.5C26 53.0012 24.5 50.0012 24.5 44.0012V35.0013C24.5 28.1613 27.005 26.3013 32 26.0312"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const AdvantageFeatures2 = ({
  title,
  description,
  icon,
}: TAdvantageFeatureItem) => {
  return (
    <div className="h-[352px flex max-w-sm flex-col items-center justify-center gap-12 rounded-[18px] border p-6">
      <div>{icon}</div>

      <h3 className="text-lg font-semibold text-textHeader md:text-xl">
        {title}
      </h3>

      <P className="text-center !text-base">{description}</P>
    </div>
  );
};

const MakeDecisions = ({ type }: { type: string }) => {
  const isCreditScoring = type === "credit-risk-score";
  const dataItems = isCreditScoring
    ? creditScoreAdvantageFeatureItems
    : fraudAdvantageFeatureItems;

  return (
    <section className="container mx-auto px-6 pb-32 text-center">
      <div className="mx-auto max-w-xl text-center">
        <H4 className="mx-auto max-w-xl md:!leading-[72px]">
          {isCreditScoring ? (
            <>
              Key <span className="text-primaryGreen">features</span>
            </>
          ) : (
            "Make decisions with less effort"
          )}
        </H4>
        <Divider height={16} />
        <P className="">
          Our cutting-edge credit scoring solution enable you assess your
          borrowers behavior in real time and determine their willingness to
          repay.
        </P>
      </div>
      <Divider height={132} />

      {/* <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center content-center justify-items-center'> */}
      <div className="md: flex flex-wrap items-center justify-center gap-6">
        {dataItems.map((item) => (
          <AdvantageFeatures2
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
      <Divider height={62} />

      <PrimaryButton>Start free trial</PrimaryButton>
    </section>
  );
};

export default MakeDecisions