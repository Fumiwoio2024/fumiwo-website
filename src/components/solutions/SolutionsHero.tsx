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
      {/* <section className=" px-6 text-primaryBlack md:py-14 py-5 overflow-hidden">
				<div className="flex justify-between items-center  lg:pl-10">
					<div className=" md:px-16 xl:text-left text-center space-y-4 max-w-6xl">
						<Tag className="xl:mx-0 mx-auto">Fraud Insights</Tag>
						<h2 className="font-bold text-4xl md:text-5xl leading-[57px] md:leading-[70px] text-textHeader">
							Assess risky applicants and their probability to
							default in real-time.
						</h2>
						<P className="leading-8">
							Leverage on smartphone metadata to get a more
							holistic view of your user&apos;s behavior.
						</P>

						<Divider height={32} />

						<div className="grid xl:grid-cols-2 grid-cols-1 gap-4 xl:w-fit">
							<PrimaryButton className="mx-auto mxl:mx-0">
								Book a demo
							</PrimaryButton>
							<SecondaryButton className="mx-auto xl:mx-0">
								Contact sales
							</SecondaryButton>
						</div>
					</div>
					<div className="xl:flex hidden">
						<Image
							src={newSolutionsHero}
							alt="hero"
							className="max-w-2xl"
						/>
					</div>
				</div>

				<Divider height={40} />
			</section> */}

      <section className="overflow-hidden pt-5 text-primaryBlack md:pt-10">
        <div className="justify-betwee container mx-auto flex items-center gap-4 px-4 lg:pr-0">
          <div className="space-y-4 px-2 text-center md:px-0 xl:w-6/12 xl:pr-5 xl:text-left">
            <Tag className="mx-auto xl:mx-0">
              {isCreditScoring ? "Credit Scoring" : "Fraud"}
            </Tag>

            <h2 className="mr-0 text-4xl font-bold leading-[57px] text-textHeader md:text-5xl md:leading-[78px] xl:mr-3">
              {isCreditScoring
                ? "Assess risky applicants and their probability to default in real-time."
                : "Detect potential fraudulent applicants with ease"}
            </h2>
            <h5 className="leading-8 text-paraGray">
              {isCreditScoring
                ? "Leverage on smartphone metadata to get a more holistic view of your user's behavior."
                : "Leverage on our machine learning model to identify potentially fraudulent user behaviour, thereby minimizing risks."}
            </h5>
            <Divider height={16} />
            <div className="grid grid-cols-1 gap-4 xl:w-fit xl:grid-cols-2">
              <Link
                href="https://calendly.com/hello-fumiwo/demo"
                className="mx-auto block xl:mx-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton className="">Book a demo</PrimaryButton>
              </Link>
              <Link
                href="mailto:hello@fumiwo.io"
                className="mx-auto block xl:mx-0"
              >
                <SecondaryButton className="">Contact sales</SecondaryButton>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex xl:w-6/12">
            <Image
              src={isCreditScoring ? newSolutionsHero : fraudInsightsHero}
              alt="hero"
              className="max-w-2xl pl-5"
            />
          </div>
        </div>
      </section>
      <Divider height={107} />
    </>
  );
};

export default SolutionsHero;
