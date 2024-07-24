import NavBar from '@/src/components/global/NavBar';
import React from 'react'
import SolutionsHero from '@/src/components/solutions/SolutionsHero';
import MakeDecisions from '@/src/components/solutions/MakeDecisions';
import { Metadata } from 'next';
import Benefits from "@/src/components/solutions/Benefits";
import HowItWorks from "@/src/components/solutions/HowItWorks";
import Conclusion from '@/src/components/solutions/Conclusion';


export const metadata: Metadata = {
	title: 'Fumiwo - Solutions',
	description: "Fumiwo Solutions",
}

const Solutions = ({ params }: { params: { type: string } }) => {
  return (
    <>
      <NavBar />
      <main>
        <SolutionsHero type={params.type} />
        <MakeDecisions type={params.type} />
        <Benefits type={params.type} />
        <HowItWorks type={params.type} />
        <Conclusion type={params.type} />
      </main>
    </>
  );
};

export default Solutions