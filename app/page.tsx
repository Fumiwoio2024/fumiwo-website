import Hero from "@components/home/Hero";
import NavBar from "@components/global/NavBar";
import Solution from "@/src/components/home/Solution";
import WhyUs from "@/src/components/home/WhyUs";
import ClientFeedback from "@/src/components/home/ClientFeedback";
import { Metadata } from "next";
import KeyFeatures from "@/src/components/home/KeyFeatures";

export const metadata: Metadata = {
  title: 'Fumiwo - Home',
  description: "Fumiwo Home Page",
}

export default function Home() {
  return (
    <>
      <NavBar dark />
      <main>
        <Hero />
        <Solution />
        <KeyFeatures />
        <WhyUs />
        <ClientFeedback />
      </main>
    </>
  );
}
