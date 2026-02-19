import React from "react";
import { motion as Motion } from "motion/react";
const container = {
	hide: { opacity: 0, x: -300 },
	show: {
		opacity: 1,
		x: 0,
        transition: {
            duration: 0.6,
        },
	},
};
const ContainerSlide = ({ children }) => {
	return <Motion.div variants={container} initial="hide" viewport={{once: true}} whileInView="show">{children}</Motion.div>;
};

export default ContainerSlide;
