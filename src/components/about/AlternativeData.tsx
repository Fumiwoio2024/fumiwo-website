import React from 'react'
import alternative from '@images/alternative.png'
import newAlternativeData from "@images/alternative-data-image.png";
import Image from "next/image";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";

const AlternativeData = () => {
  return (
    <section className="bg-primaryBlack py-20 text-center md:py-32">
      <div className="container items-center gap-24 space-y-10 px-6 text-left sm:mx-auto sm:px-0 md:flex md:space-y-0">
        <Image src={newAlternativeData} alt="people" className="md:w-[45%]" />
        <div className="md:w-[55%]">
          <H4 className="text-white">
            Our use of{" "}
            <span className="text-primaryGreen">alternative data</span> sets us
            apart
          </H4>
          <Divider height={16} />
          <P className="text-justify !text-white/70">
            Fumiwo&apos;s solution utilizes smartphone metadata to provide a
            more holistic view of a user&apos;s financial behavior. By analyzing
            patterns in communication, app usage, and location data.
            <br />
            <br />
            We can generate a more accurate and nuanced credit score that
            traditional models often miss.
          </P>
        </div>
      </div>
    </section>
  );
};

export default AlternativeData