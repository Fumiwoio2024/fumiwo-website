'use client'

import React, { useState } from 'react'
import { H1, H5, P } from '../global/Typography'
import Accordion from '../global/Accordion'

const faqData = [
  {
    name: "Does the SDK collect data in the background?",
    description:
      "No, the SDK is only activated when the the scoring process is initiated. Once the score is sent to the backend, the SDK doest not collect any data.",
  },
  {
    name: "Does Fumiwo collect personal data from the smartphone?",
    description:
      "No. We only collect metadata that are anonymized. The collection of the data requires express consent of the borrower after the user has granted the access through its Operating System's permissions.",
  },
  {
    name: "Where will the data be stored?",
    description:
      "The collected data is stored in France on a secure clouded or in local server depending on our client's and country's policy and regulation?",
  },
  {
    name: "What is the pricing of your services?",
    description:
      "We are pay as you use service with upfront fees to access our license for 12 months. For more details please contact our sales team through the form.",
  },
  {
    name: "What is your onboarding process?",
    description: (
      <ul className="mt-5 list-inside list-disc text-sm text-paraGray/70 md:text-base">
        <P className="!text-sm md:!text-base">
          Fumiwo&apos;s onboarding process include:{" "}
        </P>
        <br />
        <li> Understanding your objectives and challenges</li>
        <li> Signing of NDA</li>
        <li> Presenting proposed solution</li>
        <li> Finalizing terms and conditions</li>
        <li> Signing commercial contract</li>
        <li> Launching data collection</li>
        <li> Developing digital scorecard</li>
        <li> Redesigning underwriting process (after assessing outcomes).</li>
      </ul>
    ),
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState("");

  return (
    <section
      id="faq"
      className="container mx-auto grid px-6 pb-36 pt-28 lg:flex"
    >
      <div className="mb-10 flex-1 text-center lg:mb-0 lg:text-left">
        <H1 className="!leading-[58px] lg:w-80">
          Frequently Asked <span className="text-primaryGreen">Questions</span>
        </H1>
      </div>

      <div className="flex-1">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            name={item.name}
            selected={selected}
            setSelected={setSelected}
          >
            {typeof item.description === "string" ? (
              <P className="mt-5 !text-sm md:!text-base">{item.description}</P>
            ) : (
              item.description
            )}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ