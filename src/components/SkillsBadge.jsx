import React from "react";

const SkillsBadge = ({ id, parentClass, childClass, name }) => {
	return (
		<div
			key={id}
			className={`group px-4 py-1 border ${parentClass} text-[10px] flex items-center gap-2 hover:translate-y-[-3px] transition-transform cursor-default`}
		>
			<span
				className={`w-2 h-2 rounded-full inline-block ${childClass} border  group-hover:animate-pulse`}
			></span>
			<span className="leading-normal">{name}</span>
		</div>
	);
};

export default SkillsBadge;
