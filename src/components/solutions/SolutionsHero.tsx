import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../global/Buttons";
import Divider from "../global/Divider";
// import newSolutionsHero from "@images/new-solutions-hero.png";
// import fraudInsightsHero from "@images/fraud-insight-hero.png";
import fraudInsightsHero from "@images/home-fraud.png";
import newSolutionsHero from "@images/home-credit.png";
import Tag from "../global/Tag";
import { P } from "../global/Typography";
import Link from "next/link";

const SolutionsHero = ({ type }: { type: string }) => {
  const isCreditScoring = type === "credit-risk-score";

  return (
    <>
      <section className="overflow-hidden pt-10 text-primaryBlack">
        <div className="justify-betwee container mx-auto items-center gap-4 space-y-[71px] px-4 lg:pr-0 xl:flex xl:space-y-0">
          <div className="space-y-4 px-2 sm:text-center md:px-0 xl:w-6/12 xl:pr-5 xl:text-left">
            <Tag className="mx-0 sm:mx-auto lg:mx-0">
              {isCreditScoring ? "Credit Scoring" : "Fraud"}
            </Tag>

            <h2 className="mr-0 text-4xl font-bold leading-[57px] text-textHeader md:text-5xl md:leading-[78px] xl:mr-3">
              {isCreditScoring
                ? "Assess risky applicants and their probability to default in real-time."
                : "Detect potential fraudulent applicants with ease"}
            </h2>
            <h5 className="leading-8 text-paraGray/70">
              {isCreditScoring
                ? "Leverage on smartphone metadata to get a more holistic view of your user's behavior."
                : "Leverage on our machine learning model to identify potentially fraudulent user behaviour, thereby minimizing risks."}
            </h5>
            <Divider height={2} />
            <div className="grid grid-cols-1 gap-4 xl:w-fit xl:grid-cols-2">
              <Link
                href="https://calendly.com/hello-fumiwo/demo"
                className="mx-auto block w-full lg:w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton className="lg:">Book a demo</PrimaryButton>
              </Link>
              <Link
                href="mailto:hello@fumiwo.io"
                className="mx-auto block w-full lg:w-fit"
              >
                <SecondaryButton className="">Contact sales</SecondaryButton>
              </Link>
            </div>
          </div>
          <div className="hidde xl:flex xl:w-6/12">
            <Image
              src={isCreditScoring ? newSolutionsHero : fraudInsightsHero}
              alt="hero"
              className="xl:max-w-2xl xl:pl-5"
            />
          </div>
        </div>
      </section>
      <Divider className="h-12 xl:h-[107px]" />
    </>
  );
};

export default SolutionsHero;
