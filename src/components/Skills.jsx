import React from "react";
import { coreTechnologies } from "../data";
import DecryptedText from "./animation/DecryptedText";
import SkillsBadge from "./SkillsBadge";
import {motion as Motion } from "motion/react";

const Skills = () => {
	return (
		<Motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 space-y-6 scroll-mt-20">
			<h3 className="opacity-100 dark:opacity-30 uppercase tracking-[0.4em] text-[10px] mb-8">
				<DecryptedText
					text="Core_Technologies"
					animateOn="both"
					speed={40}
					characters="1010101"
					revealDirection="center"
				/>
			</h3>
			<div
				className="inline-flex flex-wrap gap-x-4 gap-y-3 max-w-200"
			>
				{
					/* Using constants to map through core technologies */
					coreTechnologies.map((tech) => {
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
		</Motion.section>
	);
};

export default Skills;
