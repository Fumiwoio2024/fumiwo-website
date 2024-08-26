import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../global/Buttons";
import Divider from "../global/Divider";
import partners from "@images/partners.png";
import newerHero from "@images/newer-hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px- overflow-hidden bg-primaryBlack py-5 text-white md:pb-14">
      <div className="container mx-auto flex items-center px-6 sm:px-0">
        <div className="px- space-y-4 md:px-0 xl:w-3/5 xl:text-left">
          <h2 className="mr-0 text-4xl font-bold leading-[57px] text-offWhite md:text-5xl md:leading-[78px] xl:mr-3">
            Assess{" "}
            <span className="text-primaryGreen underline">creditworthy</span>{" "}
            borrowers using{" "}
            <span className="text-primaryGreen underline">behavioral</span>{" "}
            analytics
          </h2>
          <h5 className="leading-8 text-linkGray">
            Score confidently borrowers based on alternative smartphone data and
            unlock new market opportunities for your lending business.
          </h5>
          <Divider height={16} />

          <Link
            href="https://calendly.com/hello-fumiwo/a-new-way-to-assess-creditworthiness"
            className="mx-auto block xl:mx-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton className="">Book a demo</PrimaryButton>
          </Link>
        </div>
        <div className="z-0 hidden xl:flex xl:w-4/5 xl:translate-x-20">
          <Image src={newerHero} alt="hero" />
        </div>
      </div>

      <Divider height={54} />

      <div className="container mx-auto px-6 font-semibold sm:px-0 md:text-2xl lg:mx-auto lg:px-0 xl:text-center">
        <h6 className="">Trusted by leading global finance partners</h6>
        <Divider height={36} />
        <Image src={partners} alt="partners" className="xl:mx-auto" />
      </div>
      <Divider height={40} />
    </section>
  );
};

export default Hero;
