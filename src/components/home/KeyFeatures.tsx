import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import { AboutUsTabs } from '../global/Tabs'

const KeyFeatures = () => {
	return (
    <section className="pb-32">
      <div className="mx-auto max-w-xl px-6 md:text-center">
        <H4 className="mx-auto max-w-xl md:mb-4 md:!leading-[72px]">
          Key <span className="text-primaryGreen">features</span>
        </H4>
        <Divider height={14} />
        <P className="mx-auto max-w-3xl text-sm !leading-6 md:!leading-8">
          Here some of the ways we ensure to deliver value to our clients and
          stay ahead of competitors
        </P>
      </div>

      <AboutUsTabs />
    </section>
  );
}

export default KeyFeatures