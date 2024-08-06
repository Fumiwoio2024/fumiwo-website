import React, { use } from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import HomeTabs from '../global/Tabs'
import HomeSolutionsTabs from "../global/Tabs";

const Solution = () => {
  return (
    <section className="px-6 py-14 xl:py-32 xl:pt-24">
      <div className="sm:text-center">
        <H4 className="md:mx-auto md:max-w-xl lg:!leading-[72px]">
          Better data for{" "}
          <span className="text-primaryGreen">safer credit</span> decisions
        </H4>
        <Divider height={16} />
        <P className="max-w-3xl md:mx-auto">
          Deliver credits in full confidence with our AI driven platform based
          on <b>permissioned smartphone metadata</b> to provide solutions for
          your activities
        </P>
      </div>

      <Divider height={42} />

      <HomeSolutionsTabs />
    </section>
  );
};

export default Solution