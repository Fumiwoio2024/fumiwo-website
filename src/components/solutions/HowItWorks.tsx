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
      <div className="space-y-4 py-10 pr-5 lg:flex lg:space-y-0">
        <h6 className="text-[28px] font-bold text-textHeader lg:w-2/5">
          0{index}. {title}
        </h6>
        <P className="text-normal text-lg leading-10 !text-paraGray lg:w-3/5">
          {description}
        </P>
      </div>
      {index < length && <hr className="ml-auto w-11/12" />}
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
      <div className="mx-auto max-w-6xl px-5 pb-20 text-center lg:px-20 lg:text-left">
        <div className="lg:w-3/4">
          <H4 className="!text-textHeader">
            How it <span className="text-primaryGreen">works</span>
          </H4>
          <Divider height={24} />
          <P className="text-normal text-lg leading-10 !text-paraGray">
            Our cutting-edge credit scoring solution enable you assess your
            borrowers behavior in real time and determine their willingness to
            repay.
          </P>
        </div>
        <Divider height={92} />

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

        <Divider height={54} />
        <Link href="/contact-us" className="mx-auto block w-fit">
          <PrimaryButton>Contact us</PrimaryButton>
        </Link>
        <Divider height={102} />
      </div>
    </div>
  );
};

export default HowItWorks;
