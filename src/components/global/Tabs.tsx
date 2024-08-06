"use client";
import Image, { StaticImageData } from "next/image";

import React, {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { H5, P } from "./Typography";
import Divider from "./Divider";
import { PrimaryButton } from "./Buttons";
import fraudInsights from "@images/fraud-insights.png";
// import fraudInsights from "@images/home-fraud.png";
// import creditScoring from "@images/home-credit.png";
import creditScoring from "@images/credit-scoring.png";
import Link from "next/link";
import { useOnScreen } from "@hooks/useOnScreen";

// HOME SOLUTIONS SECTION
const tabItemData = [
  {
    title: "Credit scoring",
    Icon: (
      <svg
        className="h-7 w-7 md:h-12 md:w-12"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.1"
          x="0.5"
          width="48"
          height="48"
          rx="14"
          fill="currentColor"
        />
        <rect
          opacity="0.8"
          x="20.9531"
          y="16.9395"
          width="7.09091"
          height="17.3333"
          rx="1"
          fill="currentColor"
        />
        <rect
          opacity="0.5"
          x="11.5"
          y="20.8789"
          width="7.09091"
          height="13.3939"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="30.4102"
          y="13"
          width="7.09091"
          height="21.2727"
          rx="1"
          fill="currentColor"
        />
      </svg>
    ),
    image: creditScoring,
    content: [
      {
        title: "Behavioral Scoring Models",
        description:
          "Utilizes machine learning algorithms to create comprehensive behavioral scores that predict creditworthiness based on phone usage patterns.",
      },
      {
        title: "Risk Analysis",
        description:
          " Uses advanced analytics to identify unusual patterns in phone usage that may indicate fraudulent activity.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Provides predictive insights on borrowers’ likelihood of default, repayment capabilities, and financial stability.",
      },
    ],
  },
  {
    title: "Fraud",
    image: fraudInsights,
    Icon: (
      <svg
        className="h-7 w-7 md:h-12 md:w-12"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.1"
          x="0.5"
          width="48"
          height="48"
          rx="14"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.3687 27.4875C31.615 30.7544 28.3182 33.318 24.5053 34.3996C20.6898 33.318 17.393 30.7544 15.6393 27.4875C13.7933 24.049 14.1001 20.0996 15.4001 16.1996C17.1694 16.0839 20.578 15.4547 24.5053 13.5996C28.4313 15.4547 31.8308 16.0839 33.6001 16.1996C34.9001 20.0996 34.9001 23.9996 33.3687 27.4875ZM29.9692 19.8305C30.2129 20.0743 30.3499 20.4049 30.3499 20.7496C30.3499 21.0943 30.2129 21.4249 29.9692 21.6687L24.1192 27.5187C23.8754 27.7624 23.5448 27.8993 23.2001 27.8993C22.8554 27.8993 22.5248 27.7624 22.281 27.5187L19.031 24.2687C18.9069 24.1488 18.8078 24.0053 18.7397 23.8467C18.6716 23.6881 18.6357 23.5175 18.6342 23.3449C18.6327 23.1723 18.6656 23.0011 18.731 22.8414C18.7963 22.6816 18.8929 22.5365 19.0149 22.4144C19.137 22.2923 19.2821 22.1958 19.4419 22.1304C19.6017 22.0651 19.7728 22.0322 19.9455 22.0337C20.1181 22.0352 20.2887 22.071 20.4473 22.1392C20.6059 22.2073 20.7493 22.3063 20.8692 22.4305L23.2001 24.7614L28.131 19.8305C28.3748 19.5868 28.7054 19.4499 29.0501 19.4499C29.3948 19.4499 29.7254 19.5868 29.9692 19.8305Z"
          fill="currentColor"
        />
      </svg>
    ),
    content: [
      {
        title: "Anomaly Detection",
        description:
          " Uses advanced analytics to identify unusual patterns in phone usage that may indicate fraudulent activity.",
      },
      {
        title: "Fraud Scoring",
        description:
          "Generates a fraud risk score based on the analysis of behavioral anomalies, device information, and usage patterns.",
      },
      {
        title: "Behavioral Biometrics",
        description:
          "Analyzes unique user behaviors, such as typing patterns and app usage sequences, to detect potential identity theft or account takeover.",
      },
    ],
  },
];

const HomeSolutionsTabItem = ({
  title,
  content,
  image,
}: {
  title: string;
  content: { title: string; description: string }[];
  image: StaticImageData;
}) => {
  return (
    <div className="container items-center gap-16 lg:flex">
      <section className="pb-9 lg:w-[52%] lg:pb-0">
        <Image src={image} alt={title} className="w-full" />
      </section>

      <section className="space-y-6 lg:w-[48%] lg:pr-28">
        {content.map((item, index) => (
          <div key={index} className="">
            <div className="space-y-1">
              <H5 className="w-full !text-xl !font-semibold !text-textHeader md:text-[22px]">
                {item.title}
              </H5>
              <P className="text-sm !leading-8">{item.description}</P>
            </div>
          </div>
        ))}

        {/* <Link
          href="https://calendly.com/hello-fumiwo/demo"
          className="mx-auto block self-center lg:ml-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton className="mx-auto block self-center lg:ml-0">
            Book a demo
          </PrimaryButton>
        </Link> */}
        <Link
          href={
            title === "Credit scoring"
              ? "/solutions/credit-risk-score"
              : "/solutions/fraud-insights"
          }
          className="mx-auto block lg:ml-0 lg:w-fit"
        >
          <PrimaryButton className="">Learn More</PrimaryButton>
        </Link>
      </section>
    </div>
  );
};

// HOME KEY-FEATURES SECTION
const HomeSolutionsTabs = ({ tabs = tabItemData }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedItem = tabItemData[selectedTab];

  return (
    <div className="transition">
      <div className="flex justify-center overflow-x-auto py-2">
        <div className="flex gap-3 border-primaryBlack md:gap-7 md:text-lg">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex cursor-pointer items-center gap-3 rounded-[20px] border-2 px-3.5 py-3 font-bold transition duration-300 active:bg-primaryGreen/20 md:px-7 md:py-4 ${selectedTab === index ? "border-primaryGreen text-textHeader" : "text-bottomFooterBorder"}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab.Icon}
              <h2>{tab.title}</h2>
            </button>
          ))}
        </div>
      </div>
      <Divider className="h-8 lg:h-14" />

      <div className="mx-auto w-fit">
        <HomeSolutionsTabItem
          title={selectedItem.title}
          content={selectedItem.content}
          image={selectedItem.image}
        />
      </div>
    </div>
  );
};

{
  /*










  
  
  
  
  SPACE









  



  */
}

const icons = [
  <svg
    key={1}
    width="30"
    height="36"
    viewBox="0 0 30 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.2 9.5V26.5C28.2 33.3 26.5 35 19.7 35H9.5C2.7 35 1 33.3 1 26.5V9.5C1 2.7 2.7 1 9.5 1H19.7C26.5 1 28.2 2.7 28.2 9.5Z"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.9992 6.94922H11.1992"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5998 30.0708C16.0551 30.0708 17.2348 28.8911 17.2348 27.4358C17.2348 25.9805 16.0551 24.8008 14.5998 24.8008C13.1446 24.8008 11.9648 25.9805 11.9648 27.4358C11.9648 28.8911 13.1446 30.0708 14.5998 30.0708Z"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
  <svg
    key={2}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 18C22.1421 18 25.5 14.6421 25.5 10.5C25.5 6.35786 22.1421 3 18 3C13.8579 3 10.5 6.35786 10.5 10.5C10.5 14.6421 13.8579 18 18 18Z"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.11328 33C5.11328 27.195 10.8883 22.5 17.9983 22.5"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.3 32.1C29.951 32.1 32.1 29.951 32.1 27.3C32.1 24.6491 29.951 22.5 27.3 22.5C24.6491 22.5 22.5 24.6491 22.5 27.3C22.5 29.951 24.6491 32.1 27.3 32.1Z"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33 33L31.5 31.5"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
  <svg
    key={3}
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 14.1673V11.334C8.5 6.64482 9.91667 2.83398 17 2.83398C24.0833 2.83398 25.5 6.64482 25.5 11.334V14.1673"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.082 31.166H9.91536C4.2487 31.166 2.83203 29.7493 2.83203 24.0827V21.2493C2.83203 15.5827 4.2487 14.166 9.91536 14.166H24.082C29.7487 14.166 31.1654 15.5827 31.1654 21.2493V24.0827C31.1654 29.7493 29.7487 31.166 24.082 31.166Z"
      stroke="#011D7B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6615 22.6673H22.6742"
      stroke="#011D7B"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9935 22.6673H17.0062"
      stroke="#011D7B"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.3256 22.6673H11.3383"
      stroke="#011D7B"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
];

const dummyKeyFeaturesTabs = [
  "Data Integration & Analysis",
  "User-Friendly",
  "Integration and API",
  "Security & Reliability",
];

const dummyKeyFeaturesTabsData = [
  [
    {
      title: "Phone usage data collection",
      description:
        "We securely collect privacy-consented metadata from the users device (Android) to predict default payment and risk.",
      Icon: icons[0],
    },
    {
      title: "Behavioral Analytics",
      description:
        "We look at behavioural data to better understand your borrowers and enable better decisions.",
      Icon: icons[1],
    },
    {
      title: "Privacy and Compliance",
      description:
        "Data collection compliant with GDPR, and other relevant data privacy regulations, with user consent and anonymized data",
      Icon: icons[2],
    },
  ],
  [
    {
      title: "Intuitive Interface",
      description:
        "Offers a user-friendly dashboard for lenders to view and interpret borrower insights easily.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.12203 2.83398H24.8612C29.9045 2.83398 31.1654 4.09482 31.1654 9.12398V18.0915C31.1654 23.1348 29.9045 24.3815 24.8754 24.3815H9.12203C4.09286 24.3957 2.83203 23.1348 2.83203 18.1057V9.12398C2.83203 4.09482 4.09286 2.83398 9.12203 2.83398Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 24.3945V31.1662"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.83203 18.416H31.1654"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.625 31.166H23.375"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Reports",
      description:
        "Generates detailed reports and visualizations tailored to the specific needs of the lender.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.332 17.2832H21.2487"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.332 22.9492H17.537"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.1654 8.50065H19.832C22.6654 8.50065 22.6654 7.08398 22.6654 5.66732C22.6654 2.83398 21.2487 2.83398 19.832 2.83398H14.1654C12.7487 2.83398 11.332 2.83398 11.332 5.66732C11.332 8.50065 12.7487 8.50065 14.1654 8.50065Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.6667 5.69531C27.3842 5.95031 29.75 7.69281 29.75 14.167V22.667C29.75 28.3336 28.3333 31.167 21.25 31.167H12.75C5.66667 31.167 4.25 28.3336 4.25 22.667V14.167C4.25 7.70698 6.61583 5.95031 11.3333 5.69531"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Enables real-time monitoring of borrower behavior changes, providing up-to-date risk assessments.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.1654 16.8448V18.1057C31.1654 23.149 29.9045 24.3957 24.8754 24.3957H9.12203C4.09286 24.3957 2.83203 23.1348 2.83203 18.1057V9.12398C2.83203 4.09482 4.09286 2.83398 9.12203 2.83398H11.332"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 24.3945V31.1662"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.83203 18.416H31.1654"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.625 31.166H23.375"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.3031 13.2743H18.5598C16.6048 13.2743 15.9531 11.971 15.9531 10.6677V5.68099C15.9531 4.12266 17.2281 2.84766 18.7865 2.84766H25.3031C26.7481 2.84766 27.9098 4.00932 27.9098 5.45432V10.6677C27.9098 12.1127 26.7481 13.2743 25.3031 13.2743Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.6243 11.2202L27.9102 10.016V6.106L29.6243 4.90183C30.4743 4.321 31.1685 4.67517 31.1685 5.70934V10.4268C31.1685 11.461 30.4743 11.8152 29.6243 11.2202Z"
            stroke="#011D7B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ],
  [
    {
      title: "Seamless Integration",
      description:
        "Integrates with existing lending systems, CRMs, and other financial software through robust APIs.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.91536 11.334H5.66536C4.10703 11.334 2.83203 10.059 2.83203 8.50065V5.66732C2.83203 4.10898 4.10703 2.83398 5.66536 2.83398H9.91536C11.4737 2.83398 12.7487 4.10898 12.7487 5.66732V8.50065C12.7487 10.059 11.4737 11.334 9.91536 11.334Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.468 9.91667H24.368C23.433 9.91667 22.668 9.15165 22.668 8.21665V5.95002C22.668 5.01502 23.433 4.25 24.368 4.25H29.468C30.403 4.25 31.168 5.01502 31.168 5.95002V8.21665C31.168 9.15165 30.403 9.91667 29.468 9.91667Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.468 20.5417H24.368C23.433 20.5417 22.668 19.7766 22.668 18.8416V16.575C22.668 15.64 23.433 14.875 24.368 14.875H29.468C30.403 14.875 31.168 15.64 31.168 16.575V18.8416C31.168 19.7766 30.403 20.5417 29.468 20.5417Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.75 7.08398H22.6667"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.707 7.08398V25.5007C17.707 27.059 18.982 28.334 20.5404 28.334H22.6654"
            fill="white"
          />
          <path
            d="M17.707 7.08398V25.5007C17.707 27.059 18.982 28.334 20.5404 28.334H22.6654"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.707 17.709H22.6654"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.468 31.1667H24.368C23.433 31.1667 22.668 30.4016 22.668 29.4666V27.2C22.668 26.265 23.433 25.5 24.368 25.5H29.468C30.403 25.5 31.168 26.265 31.168 27.2V29.4666C31.168 30.4016 30.403 31.1667 29.468 31.1667Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Data Export",
      description:
        "In addition to a concise documentation, our dedicated developer support is available round the clock.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9987 24.0833V27.455C16.9987 30.1042 15.9362 31.1667 13.2729 31.1667H6.5437C3.89453 31.1667 2.83203 30.1042 2.83203 27.455V20.7258C2.83203 18.0625 3.89453 17 6.5437 17H9.91536V20.3575C9.91536 23.0208 10.9779 24.0833 13.627 24.0833H16.9987Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.0846 16.9993V20.3568C24.0846 23.0202 23.0221 24.0827 20.3588 24.0827H13.6296C10.9805 24.0827 9.91797 23.0202 9.91797 20.3568V13.6277C9.91797 10.9785 10.9805 9.91602 13.6296 9.91602H17.0013V13.2735C17.0013 15.9368 18.0638 16.9993 20.713 16.9993H24.0846Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.1667 6.54565V13.2748C31.1667 15.9382 30.1042 17.0007 27.4408 17.0007H20.7117C18.0625 17.0007 17 15.9382 17 13.2748V6.54565C17 3.89648 18.0625 2.83398 20.7117 2.83398H27.4408C30.1042 2.83398 31.1667 3.89648 31.1667 6.54565Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Developer Support",
      description:
        "Easy export of insights and reports for further analysis or integration with other decision-making tools.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.082 26.1101H18.4154L12.1112 30.3034C11.1762 30.9267 9.91536 30.261 9.91536 29.1276V26.1101C5.66536 26.1101 2.83203 23.2768 2.83203 19.0268V10.5267C2.83203 6.27669 5.66536 3.44336 9.91536 3.44336H24.082C28.332 3.44336 31.1654 6.27669 31.1654 10.5267V19.0268C31.1654 23.2768 28.332 26.1101 24.082 26.1101Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0001 16.0937V15.7963C17.0001 14.833 17.5951 14.3229 18.1901 13.9121C18.7709 13.5154 19.3517 13.0055 19.3517 12.0705C19.3517 10.7671 18.3034 9.71875 17.0001 9.71875C15.6967 9.71875 14.6484 10.7671 14.6484 12.0705"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9949 19.4798H17.0077"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ],
  [
    {
      title: "Data Encryption",
      description:
        "All data is encrypted both in transit and at rest to maintain the highest security standards.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.3346 9.84518V24.1535C28.108 24.111 27.8671 24.0827 27.6263 24.0827C25.6713 24.0827 24.0846 25.6694 24.0846 27.6244C24.0846 27.8652 24.113 28.106 24.1555 28.3327H9.84714C9.88964 28.106 9.91797 27.8652 9.91797 27.6244C9.91797 25.6694 8.3313 24.0827 6.3763 24.0827C6.13547 24.0827 5.89464 24.111 5.66797 24.1535V9.84518C5.89464 9.88768 6.13547 9.91602 6.3763 9.91602C8.3313 9.91602 9.91797 8.32935 9.91797 6.37435C9.91797 6.13352 9.88964 5.89268 9.84714 5.66602H24.1555C24.113 5.89268 24.0846 6.13352 24.0846 6.37435C24.0846 8.32935 25.6713 9.91602 27.6263 9.91602C27.8671 9.91602 28.108 9.88768 28.3346 9.84518Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.91536 6.37565C9.91536 8.33065 8.3287 9.91732 6.3737 9.91732C6.13286 9.91732 5.89203 9.88898 5.66536 9.84648C4.05036 9.52065 2.83203 8.08982 2.83203 6.37565C2.83203 4.42065 4.4187 2.83398 6.3737 2.83398C8.08786 2.83398 9.5187 4.05232 9.84453 5.66732C9.88703 5.89398 9.91536 6.13482 9.91536 6.37565Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.1654 6.37565C31.1654 8.08982 29.947 9.52065 28.332 9.84648C28.1054 9.88898 27.8645 9.91732 27.6237 9.91732C25.6687 9.91732 24.082 8.33065 24.082 6.37565C24.082 6.13482 24.1104 5.89398 24.1529 5.66732C24.4787 4.05232 25.9095 2.83398 27.6237 2.83398C29.5787 2.83398 31.1654 4.42065 31.1654 6.37565Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.91536 27.6257C9.91536 27.8665 9.88703 28.1073 9.84453 28.334C9.5187 29.949 8.08786 31.1673 6.3737 31.1673C4.4187 31.1673 2.83203 29.5806 2.83203 27.6257C2.83203 25.9115 4.05036 24.4806 5.66536 24.1548C5.89203 24.1123 6.13286 24.084 6.3737 24.084C8.3287 24.084 9.91536 25.6707 9.91536 27.6257Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.1654 27.6257C31.1654 29.5806 29.5787 31.1673 27.6237 31.1673C25.9095 31.1673 24.4787 29.949 24.1529 28.334C24.1104 28.1073 24.082 27.8665 24.082 27.6257C24.082 25.6707 25.6687 24.084 27.6237 24.084C27.8645 24.084 28.1054 24.1123 28.332 24.1548C29.947 24.4806 31.1654 25.9115 31.1654 27.6257Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Reliability",
      description:
        "High availability and redundancy to ensure the platform is always accessible when needed.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21.2507C22.2812 21.2507 26.5625 17.1279 26.5625 12.0423C26.5625 6.9567 22.2812 2.83398 17 2.83398C11.7188 2.83398 7.4375 6.9567 7.4375 12.0423C7.4375 17.1279 11.7188 21.2507 17 21.2507Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6548 19.1534L10.6406 29.6084C10.6406 30.8834 11.5331 31.5068 12.6381 30.9826L16.4348 29.1835C16.7465 29.0276 17.2706 29.0276 17.5823 29.1835L21.3931 30.9826C22.484 31.4926 23.3906 30.8834 23.3906 29.6084V18.8984"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "User Authentication",
      description:
        "Robust authentication and role-based access control (RBAC) to ensure that only authorized users can access specific data and functionalities.",
      Icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8581 3.16141L7.78895 5.81057C6.15979 6.41973 4.82812 8.34638 4.82812 10.0889V20.6147C4.82812 22.2864 5.93314 24.4822 7.27897 25.488L13.3706 30.0356C15.3681 31.5372 18.6548 31.5372 20.6523 30.0356L26.744 25.488C28.0898 24.4822 29.1948 22.2864 29.1948 20.6147V10.0889C29.1948 8.34638 27.8631 6.41973 26.2339 5.81057L19.1648 3.16141C17.9606 2.72224 16.0339 2.72224 14.8581 3.16141Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0002 15.4711C16.9436 15.4711 16.8727 15.4711 16.816 15.4711C15.4844 15.4286 14.4219 14.3236 14.4219 12.9777C14.4219 11.6036 15.5411 10.4844 16.9152 10.4844C18.2894 10.4844 19.4086 11.6036 19.4086 12.9777C19.3944 14.3377 18.3319 15.4286 17.0002 15.4711Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.1802 19.4397C12.8202 20.3464 12.8202 21.8338 14.1802 22.7405C15.7243 23.7747 18.2602 23.7747 19.8043 22.7405C21.1643 21.8338 21.1643 20.3464 19.8043 19.4397C18.2743 18.4055 15.7385 18.4055 14.1802 19.4397Z"
            stroke="#011D7B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ],
];

const KeyFeaturesItem = ({
  items,
  featureIndex,
  setSelectedTab,
}: {
  items: { title: string; description: string; Icon: JSX.Element }[];
  featureIndex: number;
  setSelectedTab: (index: number) => void;
}) => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    isOnScreen && setSelectedTab(featureIndex);

    return () => {};
  }, [isOnScreen, setSelectedTab, featureIndex]);

  return (
    <div
      ref={elementRef}
      className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2"
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-6 md:flex-row">
          <div className="flex h-[72px] min-w-[72px] items-center justify-center rounded-full bg-iconBg">
            {item.Icon}
          </div>
          <div className="space-y-4">
            <h6 className="text-2xl font-semibold text-textHeader">
              {item.title}
            </h6>
            <P className="text-justify">{item.description}</P>
          </div>
        </div>
      ))}
    </div>
  );
};

export const KeyFeaturesTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container mx-auto px-6 sm:px-0">
      <div className="hidden lg:block">
        <div className="my-14 flex gap-16">
          <div className="w-1/4">
            <div className="sticky top-[220px] space-y-11 border-r-4 border-paraGray/10">
              {dummyKeyFeaturesTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`box-content w-full border-r-4 py-2 text-2xl font-bold transition ${selectedTab === index ? "border-textHeader text-textHeader" : "border-transparent text-paraGray/70"}`}
                  // onClick={() => setSelectedTab(index)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="w-3/4 space-y-32">
            {dummyKeyFeaturesTabsData.map((items, index1) => (
              <KeyFeaturesItem
                key={index1}
                items={items}
                featureIndex={index1}
                setSelectedTab={setSelectedTab}
              />
            ))}

            <Link
              href="https://calendly.com/hello-fumiwo/demo"
              className="mx-auto ml-24 block w-fit self-center rounded-3xl pl-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton className="">Book a demo</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="mt-14 space-y-14 lg:hidden">
        {dummyKeyFeaturesTabs.map((itm, idx) => (
          <div key={idx} className="">
            <H5 className="w-full !text-xl !font-bold !text-textHeader">
              {itm}
            </H5>
            <Divider height={36} />

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-l border-featuresBorder/10 pl-7 md:grid-cols-2 md:gap-y-20">
              {dummyKeyFeaturesTabsData[idx].map((item, index) => (
                <div key={index} className="gap-6 space-y-3.5 md:flex">
                  <div className="min- flex h-[42px] w-[42px] items-center justify-center rounded-full bg-iconBg p-3">
                    {item.Icon}
                  </div>
                  <div key={index} className="space-y-4">
                    <h6 className="text-base font-semibold text-textHeader">
                      {item.title}
                    </h6>
                    <P className="text-sm leading-6">{item.description}</P>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Link
          href="https://calendly.com/hello-fumiwo/demo"
          className="mx-auto block self-center sm:w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton className="">Book a demo</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HomeSolutionsTabs;
