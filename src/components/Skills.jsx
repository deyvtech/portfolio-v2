import React from "react";
import { coreTechnologies } from "../constants";
import DecryptedText from "./animation/DecryptedText";
import SkillsBadge from "./SkillsBadge";

const Skills = () => {
	return (
		<section className="mt-32 space-y-6">
			<h3 className="opacity-30 uppercase tracking-[0.4em] text-[10px] mb-8">
				<DecryptedText
					text="Core_Technologies"
					animateOn="both"
					speed={40}
					characters="1010101"
					revealDirection="center"
				/>
			</h3>
			<div className="inline-flex flex-wrap gap-x-4 gap-y-2 max-w-125">
				{
					/* Using constants to map through core technologies */
					coreTechnologies.map((tech) => {
						return (
							<>
								<SkillsBadge
									parentClass={tech.parentClass}
									childClass={tech.childClass}
									id={tech.id}
									name={tech.name}
								/>
							</>
						);
					})
				}
			</div>
		</section>
	);
};

export default Skills;
