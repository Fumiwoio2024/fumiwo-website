import React from "react";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";
import Image from "next/image";
import partners from "@images/partners-home.png";

const SolutionMetrics = ({
  numbers,
  title,
}: {
  numbers: string;
  title: string;
}) => {
  return (
    <div className="text-center">
      <P className="!text-5xl !font-bold !text-textHeader">{numbers}</P>
      <Divider height={14} />
      <P className="!text-base !font-normal !text-paraGray">{title}</P>
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
      <Divider height={143} />

      <div className="border py-10">
        <div className="mx-auto flex max-w-6xl items-center gap-40">
          <div className="w-2/5">
            <H4 className="!text-textHeader">
              Some <span className="text-primaryGreen">counts</span> that matter
            </H4>
            <Divider height={16} />
            <P className="text-normal text-lg leading-10 !text-paraGray">
              Our achievement in the journey depicted in numbers{" "}
            </P>
          </div>

          <div className="no-scrollbar flex w-3/5 justify-between overflow-x-auto py-2">
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
