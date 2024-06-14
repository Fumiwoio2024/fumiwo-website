import Hero from "@components/home/Hero";
import NavBar from "@components/global/NavBar";
import Head from "next/head";
import Solution from "@/src/components/home/Solution";
import AboutUs from "@/src/components/home/AboutUs";
import ClientFeedback from "@/src/components/home/ClientFeedback";
import Footer from "@/src/components/home/Footer";
import ContactUs from "@/src/components/home/ContactUs";
import Story from "@/src/components/about/Story";
import AlternativeData from "@/src/components/about/AlternativeData";
import Team from "@/src/components/about/Team";

const About = () => {
	return (
		<>
			<Head>
				<title>
					Fumiwo - About
				</title>
			</Head>

			<NavBar />
			<main>
				<Story />
				<AlternativeData />
				<Team />
			</main>
		</>
	);
}
export default About