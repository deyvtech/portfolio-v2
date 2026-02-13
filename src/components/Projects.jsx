import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

const Projects = () => {
	return (
		<section className="mt-30">
			<h3 className="text-3xl pb-10 border-b custom-border flex justify-between items-center">
				Project_Archive{" "}
				<span className="text-right inline-block font-light opacity-100 dark:opacity-30 text-[12px] font-jetbrains-mono">
					001-004
				</span>
			</h3>

			<ul className="mt-10 grid grid-cols-2 gap-10 mb-20">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
				
			
			
			</ul>
		</section>
	);
};

export default Projects;
