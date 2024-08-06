import React from "react";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";
import { PrimaryButton } from "../global/Buttons";
import Image from "next/image";
import whyUs from "@images/whyUs.png";
import newWhyUs from "@images/new-why-us.png";
import Link from "next/link";

const Metrics = ({ numbers, title }: { numbers: string; title: string }) => {
  return (
    <div className="text-center">
      <P className="text-[28px] !font-bold !text-primaryGreen md:!text-5xl">
        {numbers}
      </P>
      <Divider height={14} />
      <P className="text-xs !font-normal !text-offWhite md:!text-base">
        {title}
      </P>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="relative mb-20 bg-primaryBlack py-12 md:py-28 lg:mb-32">
      <div className="container mx-auto items-center gap-20 space-y-20 px-6 sm:px-0 md:flex md:flex-row-reverse md:space-y-0 lg:text-left">
        <div className="md:w-6/12">
          <H4 className="!text-offWhite">
            Why choose <span className="text-primaryGreen">us</span>
          </H4>
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

          <Link
            href="https://calendly.com/hello-fumiwo/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block self-center lg:ml-0"
          >
            <PrimaryButton>Book a demo</PrimaryButton>
          </Link>
        </div>

        <Image
          src={newWhyUs}
          alt="people typing on laptop"
          className="md:w-6/12"
        />
      </div>
    </section>
  );
};

export default WhyUs;
