import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import Image from 'next/image'
import story from '@images/story.png'
import newStory from '@images/new-story.png'


const Story = () => {
	return (
    <section className="text-cente bg-white px-6 py-16">
      <div className="max-w-4xl md:mx-auto">
        <H4>
          Our <span className="text-primaryGreen">story</span>
        </H4>
        <Divider height={16} />
        <P className="">
          Fumiwo was founded with the aim to bridge the accessing gap of credit
          in Africa and improve financial inclusion of billions of individuals
          by developing innovative credit scoring solutions. We’re harnessing
          next generation technologies—from machine learning to AI—to build
          trusted, global standard solutions.
        </P>
      </div>

      <Divider height={64} />

      <div className="container mx-auto">
        <Image src={newStory} alt="story" className="w-full" />
      </div>
      <Divider className="h-20 md:h-32" />

      <div className="container mx-auto gap-16 text-left md:flex">
        <H4 className="md:w-[55%] md:!leading-[72px] lg:text-justify">
          We exist to help you make{" "}
          <span className="text-primaryGreen">better credit decisions</span> and
          reduce defaults
        </H4>
        <div className="mt-3.5 md:mt-0 md:w-[45%]">
          <P>
            In today&apos;s rapidly evolving financial landscape, making
            informed and accurate credit decisions is more critical than ever.
            Traditional credit scoring models often fall short in capturing the
            complete financial picture of potential borrowers, especially those
            with limited credit histories and lack of financial footprints.
            <br />
            <br />
            That&apos;s where our cutting-edge credit scoring solution,
            leveraging smartphone metadata, comes into play.
          </P>
        </div>
      </div>
      <Divider className="hidden lg:block" height={64} />
    </section>
  );
}

export default Story