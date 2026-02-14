import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<>
			{/* Section: Hero */}
			<Hero />
			{/* Section: Skills */}
			<Skills />
			{/* Section: Projects */}
			<Projects />
			{/* Section: Experience */}
			<Experience/>
			{/* Section: Contact */}
			<Contact />
			{/* Section: Footer */}
			<Footer />
		</>
	);
};

export default Home;
