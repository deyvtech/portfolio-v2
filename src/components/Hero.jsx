import React from "react";
import TextType from "./animation/TextType";
const Hero = () => {
	return (
		<section id="hero" className="scroll-mt-20">
			<div className="inline-flex items-center gap-2 px-3 py-1  border border-green-500/20 bg-green-500/5 text-green-500 text-[10px] mb-20">
				<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
				SYSTEM_STATUS: OPEN_FOR_INQUIRY
			</div>
			<h1 className="text-6xl md:text-[80px] font-light tracking-tighter leading-tight mb-10">
				Hello, <span className="text-gradient italic">I'm Dave</span>
				.<br /> Full Stack{" "}
				<span className="text-neutral-400">
					{" "}
					<TextType
						text={["Developer.", "Problem Solver.", "App Builder."]}
						typingSpeed={100}
						pauseDuration={1500}
						showCursor
						cursorCharacter="▎"
						deletingSpeed={100}
						cursorBlinkDuration={0.5}
					/>
				</span>
			</h1>
			<p className="max-w-2xl text-neutral-500 font-inter text-md leading-relaxed mb-12">
				Focused on building clean, modular full-stack applications with
				an emphasis on usability, accessibility, and scalability. I
				enjoy turning ideas into reliable, well-structured web
				experiences while continuously improving my skills and learning
				best practices.
			</p>
			<div className="flex flex-wrap gap-4">
				<a
					href="#"
					className="bg-red-600 text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-red-700 hover:-translate-y-2 hover:scale-95 transition-all shadow-lg shadow-red-500/20"
				>
					Connect_System()
				</a>
				<a
					href="#"
					className="border border-blue-200 dark:border-blue-800 px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all hover:-translate-y-2 hover:scale-95"
				>
					Get_Resume.PDF
				</a>
			</div>
		</section>
	);
};

export default Hero;
