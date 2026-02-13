import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
	return (
		<>
			{/* Section: Hero */}
			<Hero />
			{/* Section: Skills */}
			<Skills />
			{/* Section: Projects */}
			<Projects/>
		</>
	);
};

export default Home;
