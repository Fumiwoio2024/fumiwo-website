import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { KeyFeaturesTabs } from "../global/Tabs";

const KeyFeatures = () => {
  return (
    <section className="pb-32">
      <div className="container mx-auto px-6 sm:px-0 lg:text-center">
        <H4 className="lg:mb-4 lg:!leading-[72px]">
          Key <span className="text-primaryGreen">features</span>
        </H4>
        <Divider height={14} />
        <P className="mx-auto max-w-3xl text-sm !leading-6 lg:!leading-8">
          Here some of the ways we ensure to deliver value to our clients and
          stay ahead of competitors
        </P>
      </div>

      <KeyFeaturesTabs />
    </section>
  );
};

export default KeyFeatures