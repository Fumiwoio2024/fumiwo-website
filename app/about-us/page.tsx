import NavBar from "@components/global/NavBar";
import Story from "@/src/components/about/Story";
import AlternativeData from "@/src/components/about/AlternativeData";
import Team from "@/src/components/about/Team";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: 'Fumiwo - About',
	description: "Fumiwo About Us",
}
const About = () => {
	return (
		<>
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