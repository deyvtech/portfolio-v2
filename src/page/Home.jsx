import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContainerSlide from "../components/animation/ContainerSlide";
const Home = () => {
	return (
		<div className="pt-40">
			{/* Section: Hero */}
			<ContainerSlide>
				<Hero />
			</ContainerSlide>
			{/* Section: Skills */}
			<ContainerSlide>
				<Skills />
			</ContainerSlide>
			{/* Section: Projects */}
			<ContainerSlide>
				<Projects />
			</ContainerSlide>
			{/* Section: Experience */}
			<ContainerSlide>
			<Experience />
			</ContainerSlide>
			{/* Section: Contact */}
			<ContainerSlide>
				<Contact />
			</ContainerSlide>
			{/* Section: Footer */}
			<Footer />
		</div>
	);
};

export default Home;
