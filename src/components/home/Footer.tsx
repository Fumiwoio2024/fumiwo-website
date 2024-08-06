import React from "react";
import Image from "next/image";
import Divider from "../global/Divider";
import { P } from "../global/Typography";

import fmwLogoSmall from "@images/fmw-logo-small.png";
import footerPartners from "@images/footer-partners.png";
import gdpr from "@images/gdpr.png";
import Link from "next/link";
import NewsLetterForm from "../global/NewsLetterForm";

const headings = ["Company", "Solutions", "Resources", "Follow Us"];

// const footerItems: Record<keyof typeof headings, { title: string; link: string }[]> = {}
const footerItems = [
  [
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "Contact us",
      link: "/contact-us",
    },
  ],
  [
    {
      title: "Credit Scoring",
      link: "/solutions/credit-scoring",
    },
    {
      title: "Fraud",
      link: "/solutions/fraud-insights",
    },
  ],
  [
    // {
    // 	title: 'Blog',
    // 	link: '/'
    // },
    {
      title: "Developers",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
  ],
  [
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/company/fumiwo/",
    },
    {
      title: "Twitter",
      link: "https://x.com/fumiwoio",
    },
    {
      title: "hello@fumiwo.io",
      link: "mailto:hello@fumiwo.io",
    },
  ],
];

const bottomFooterItems = [
  {
    title: "Terms of use",
    link: "/terms-conditions",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBlack pb-20 pt-60 text-white">
      <section className="mx-auto w-4/5 justify-between space-y-20 md:flex md:space-y-0">
        <section>
          <Image src={fmwLogoSmall} alt="company logo" />
          <Divider className="h-3 md:h-4" />
          <P className="!text-logoGray">Better data for better decisions</P>
          <Divider height={32} />
          <div>
            <h6 className="font-semibold text-white md:text-lg">
              Subscribe to Newsletter
            </h6>
            <Divider className="h-3 md:h-4" />

            <NewsLetterForm />

            <Divider className="h-2.5 md:h-3.5" />
            <P className="text-sm font-medium !text-white">
              By subscribing, you agree to our{" "}
              <Link href="/privacy-policy" className="underline">
                privacy policy
              </Link>
            </P>
            <Divider height={58} />

            <Image src={gdpr} alt="company logo" className="h-14 w-36" />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-14 xl:grid-cols-4">
          {headings.map((heading, hIndex) => (
            <div key={heading} className="">
              <h2 className="font-semibold md:text-lg">{heading}</h2>
              <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
                {footerItems[hIndex].map((fItem) => (
                  <li
                    key={fItem.title}
                    className="list-none text-sm text-logoGray hover:text-white"
                  >
                    <Link href={fItem.link} className="">
                      {fItem.title}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
      <Divider height={36} />

      <section className="mx-auto flex w-4/5 flex-wrap items-center justify-between border-t border-bottomFooterBorder pt-8 text-xxs text-logoGray md:text-sm">
        <div className="flex w-fit flex-1 items-center gap-1.5">
          <p> EN </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
          >
            <path
              d="M16.5984 7.45898L11.1651 12.8923C10.5234 13.534 9.47344 13.534 8.83177 12.8923L3.39844 7.45898"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* Mobile */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:hidden"
          >
            <path
              d="M16.5984 7.45898L11.1651 12.8923C10.5234 13.534 9.47344 13.534 8.83177 12.8923L3.39844 7.45898"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex w-fit flex-1 justify-center gap-2 md:gap-5">
          {bottomFooterItems.map((fItem) => (
            <li key={fItem.title} className="list-none hover:text-white">
              <Link href={fItem.link} className="">
                {fItem.title}
              </Link>
            </li>
          ))}
        </div>

        <p className="hidden flex-1 text-right lg:block">
          © Copyright 2024, All Rights Reserved
        </p>
      </section>
      <p className="mt-10 text-center text-xxs text-logoGray md:text-sm lg:hidden">
        © Copyright 2024, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
