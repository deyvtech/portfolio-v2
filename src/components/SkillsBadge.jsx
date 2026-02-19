import React from "react";
import { motion as Motion} from "motion/react";

const badgeVariant = {
	hide: { opacity: .5, y: [0, -5, 0]  },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", }  },
};

const SkillsBadge = ({ id, parentClass, childClass, name }) => {
	return (
		<Motion.div
			variants={badgeVariant}
			key={id}
			className={`group px-4 py-1 border ${parentClass} text-[10px] flex items-center gap-2  transition-transform cursor-default`}
		>
			<span
				className={`w-2 h-2 rounded-full inline-block ${childClass} border  group-hover:animate-pulse`}
			></span>
			<span className="leading-normal">{name}</span>
		</Motion.div>
	);
};

export default SkillsBadge;
