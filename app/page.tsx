import Hero from "@components/home/Hero";
import NavBar from "@components/global/NavBar";
import Head from "next/head";
import Solution from "@/src/components/home/Solution";
import AboutUs from "@/src/components/home/AboutUs";
import ClientFeedback from "@/src/components/home/ClientFeedback";
import Footer from "@/src/components/home/Footer";
import ContactUs from "@/src/components/home/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Fumiwo - Home
        </title>
      </Head>

      <NavBar dark />
      <main>
        <Hero />
        <Solution />
        <AboutUs />
        <ClientFeedback />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
