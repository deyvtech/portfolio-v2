import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import {  motion as Motion } from "motion/react";

const container = {
	hide: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.2,
		},
	},
};



const Projects = () => {
	return (
		<section className="mt-30 scroll-mt-20" id="projects">
			<h3 className="text-3xl pb-10 border-b border-slate-900/10 dark:border-slate-100/10  flex justify-between items-center">
				Project_Archive{" "}
				<span className="text-right inline-block font-light opacity-100 dark:opacity-30 text-[12px] font-jetbrains-mono">
					001-00{projects.length}
				</span>
			</h3>

			<Motion.ul
				variants={container}
				initial="hide"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20"
			>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project}  />
				))}
			</Motion.ul>
		</section>
	);
};

export default Projects;
