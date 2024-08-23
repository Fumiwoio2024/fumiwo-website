import React from "react";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";
import { PrimaryButton } from "../global/Buttons";
import Link from "next/link";

const creditScoreHowItWorkItems = [
  {
    title: "SDK Integration",
    description:
      "Easily integrate our SDK with your existing mobile application. The SDK collects anonymized data from borrowers' phones, including communication patterns, app usage, and location data.",
  },
  {
    title: "Data Transmission",
    description:
      "The collected data is securely transmitted to our backend server, where it is processed and analyzed using advanced machine learning algorithms.",
  },
  {
    title: "Score Generation",
    description:
      "Generate a comprehensive credit score based on the analyzed data. This score provides a detailed understanding of the borrower's creditworthiness and risk profile.",
  },
  {
    title: "Reporting and Insights",
    description:
      "Access detailed reports and insights through our intuitive dashboard. Use these insights to make informed lending decisions and manage your risk effectively.",
  },
];

const fraudHowItWorkItems = [
  {
    title: "Data Collection",
    description:
      "Our SDK seamlessly integrates with your application, collecting data from various sources including details, user behavior, and device information.",
  },
  {
    title: "Data Analysis",
    description:
      "The collected data is analyzed using our advanced machine learning algorithms to identify patterns and anomalies indicative of fraudulent activity.",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Receive instant alerts on suspected fraud, allowing you to take immediate action.",
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Access detailed reports and insights into fraud trends, helping you make informed decisions to strengthen your fraud prevention strategies.",
  },
];

const SingleWork = ({
  title,
  description,
  index,
  length,
}: {
  title: string;
  description: string;
  index: number;
  length: number;
}) => {
  return (
    <>
      <div className="group justify-between space-y-4 py-10 pr-5 lg:flex lg:space-y-0">
        <h6 className="text-xl font-bold text-textHeader transition duration-200 group-hover:text-primaryGreen lg:w-2/5 lg:text-[28px]">
          0{index}. {title}
        </h6>
        <P className="text-justify text-sm font-normal leading-10 !text-paraGray/70 group-hover:!text-paraGray lg:w-7/12 lg:text-lg">
          {description}
        </P>
      </div>
      {index < length && <hr className="lg:ml-auto lg:w-11/12" />}
    </>
  );
};

const HowItWorks = ({ type }: { type: string }) => {
  const isCreditScoring = type === "credit-risk-score";
  const dataItems = isCreditScoring
    ? creditScoreHowItWorkItems
    : fraudHowItWorkItems;

  return (
    <div>
      <div className="container mx-auto px-5 lg:px-20">
        <div className="lg:w-3/4">
          <H4 className="text-[28px] !text-textHeader">
            How it <span className="text-primaryGreen">works</span>
          </H4>
          <Divider className="h-3.5 lg:h-6" />
          <P className="text-normal text-sm leading-6 !text-paraGray/70">
            Our cutting-edge credit scoring solution enable you assess your
            borrowers behavior in real time and determine their willingness to
            repay.
          </P>
        </div>
        <Divider className="h-0 lg:h-24" />

        <div>
          {dataItems.map((item, index) => (
            <SingleWork
              key={index}
              title={item.title}
              description={item.description}
              index={index + 1}
              length={dataItems.length}
            />
          ))}
        </div>

        <Divider className="h-8 lg:h-14" />
        <Link href="/contact-us" className="mx-auto block w-full lg:w-fit">
          <PrimaryButton>Contact us</PrimaryButton>
        </Link>
        <Divider className="h-20 lg:h-24" />
      </div>
    </div>
  );
};

export default HowItWorks;
