import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../global/Buttons";
import Divider from "../global/Divider";
import heroImage from "@images/hero-laptop.png";
import landingHero from "@images/landing-hero.png";
import partners from "@images/partners-home.png";
import newHero from "@images/new-hero.png";
import newerHero from "@images/newer-hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px- overflow-hidden bg-primaryBlack py-5 text-white md:py-14">
      <div className="justify-betwee container mx-auto flex items-center gap-4 px-4 lg:pr-0">
        <div className="space-y-4 px-2 text-center md:px-0 xl:text-left">
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
            href="https://calendly.com/hello-fumiwo/demo"
            className="mx-auto block xl:mx-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton className="">Book a demo</PrimaryButton>
          </Link>
        </div>
        <div className="hidden xl:flex">
          <Image src={newerHero} alt="hero" className="max-w-2xl pl-5" />
        </div>
      </div>

      <Divider height={54} />

      <div className="mx-auto w-fit px-6 text-center font-semibold md:text-2xl lg:px-0">
        <h6>Trusted by leading global finance partners</h6>
        <Divider height={36} />
        <Image src={partners} alt="partners" />
      </div>
      <Divider height={40} />
    </section>
  );
};

export default Hero;
