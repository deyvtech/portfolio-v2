import React from "react";
import SkillsBadge from "./SkillsBadge";
import { coreTechnologies } from "../data";
import { Link2, Github } from "lucide-react";

const ProjectCard = ({
	title,
	subtitle,
	description,
	projectLink,
	repoLink,
	useTechnologies,
}) => {
	return (
		<li className="p-10 border border-slate-100/10 shadow-md backdrop-blur-md">
			<p className="font-jetbrains-mono font-bold uppercase text-[12px] text-sky-600">
				{subtitle}
			</p>
			<h4 className="text-2xl mt-4">{title}()</h4>
			<p className=" text-neutral-500 mt-4 font-inter text-sm leading-relaxed mb-6">
				{description}
			</p>
			<div className="inline-flex flex-wrap gap-x-4 gap-y-3 max-w-200">
				{
					/* Using constants to map through core technologies */
					coreTechnologies
						.filter((tech) => useTechnologies.includes(tech.id))
						.map((tech) => {
							return (
								<SkillsBadge
									key={tech.id}
									parentClass={tech.parentClass}
									childClass={tech.childClass}
									id={tech.id}
									name={tech.name}
								/>
							);
						})
				}
			</div>
			<ul className="mt-6 flex flex-wrap gap-3">
				{/* Repo Link */}
				<li>
					{repoLink !== "#" ? (
						<a
							href={repoLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-2 py-1  text-black  dark:text-zinc-300 font-mono text-sm hover:bg-zinc-400  hover:text-white transition-all duration-200"
					>
						<span>Source_Code()</span>
						<Github className="w-4 h-4" />
					</a>
					) : null}
				</li>
				{/* Explore Link */}
				<li>
					{projectLink !== "#" ? (
						<a
							href={projectLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-2 py-1   text-blue-400 font-mono text-sm hover:bg-blue-500 hover:text-white transition-colors duration-200"
						>
							<span>View_Live()</span>
							<Link2 className="w-4 h-4" />
						</a>
					) : null}
				</li>
			</ul>
		</li>
	);
};

export default ProjectCard;
