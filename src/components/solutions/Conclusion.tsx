import React from "react";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";
import Image from "next/image";
import partners from "@images/partners.png";

const SolutionMetrics = ({
  numbers,
  title,
}: {
  numbers: string;
  title: string;
}) => {
  return (
    <div className="text-center">
      <P className="!text-[32px] !font-extrabold !text-textHeader lg:!text-5xl">
        {numbers}
      </P>
      <Divider className="h-5 lg:h-3.5" height={14} />
      <P className="text-xs !font-normal !text-paraGray lg:!text-base">
        {title}
      </P>
    </div>
  );
};

const Conclusion = ({ type }: { type: string }) => {
  return (
    <>
      <div className="mx-auto w-fit px-6 text-center font-semibold md:text-2xl lg:px-0">
        <H4 className="!text-textHeader">
          Businesses who <span className="text-primaryGreen">trust us</span>
        </H4>
        <Divider height={36} />
        <Image src={partners} alt="partners" />
      </div>
      <Divider className="h-20 lg:h-36" />

      <div className="border px-6 py-10 sm:px-0">
        <div className="container mx-auto items-center gap-40 space-y-5 lg:flex">
          <div className="space-y-3.5 sm:text-center lg:w-5/12 lg:space-y-4 lg:text-left">
            <H4 className="!text-textHeader lg:max-w-[422px]">
              Some <span className="text-primaryGreen">counts</span> that matter
            </H4>
            <P className="text-normal text-lg leading-10 !text-paraGray/70">
              Our achievement in the journey depicted in numbers{" "}
            </P>
          </div>

          <div className="no-scrollbar flex justify-between overflow-x-auto py-2 lg:w-7/12">
            <SolutionMetrics numbers="+20%" title="Approval Rate" />
            <SolutionMetrics numbers="-15%" title="Default Rate" />
            <SolutionMetrics numbers="~0.2s" title="Avg Response Time" />
          </div>
        </div>
      </div>
      <Divider height={130} />
    </>
  );
};

export default Conclusion;
