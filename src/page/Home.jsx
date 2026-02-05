import React from "react";
import TextType from "../components/animation/TextType";
import { coreTechnologies, techColors } from "../constants";
import DecryptedText from "../components/animation/DecryptedText";



const Home = () => {
	return (
		<>
			{/* HERO */}
			<section>
				<div className="inline-flex items-center gap-2 px-3 py-1  border border-green-500/20 bg-green-500/5 text-green-500 text-[10px] mb-8">
					<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
					SYSTEM_STATUS: OPEN_FOR_INQUIRY
				</div>
				<h1 className="text-6xl md:text-[80px] font-light tracking-tighter leading-tight mb-10">
					Hello,{" "}
					<span className="text-gradient italic">I'm Dave</span>
					.<br /> Full Stack{" "}
					<span className="text-neutral-400">
						{" "}
						<TextType
							text={[
								"Developer.",
								"Problem Solver.",
								"App Builder.",
							]}
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
					Focused on building clean, modular full-stack applications
					with an emphasis on usability, accessibility, and
					scalability. I enjoy turning ideas into reliable,
					well-structured web experiences while continuously improving
					my skills and learning best practices.
				</p>
				<div className="flex flex-wrap gap-4">
					<a
						href="#"
						className="bg-red-600 text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
					>
						Connect_System
					</a>
					<a
						href="#"
						className="border border-blue-200 dark:border-blue-800 px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
					>
						Get_Resume.PDF
					</a>
				</div>
			</section>
			{/* SKILL BADGE */}
			<section className="mt-32 space-y-6">
				<h3 className="opacity-30 uppercase tracking-[0.4em] text-[10px] mb-8">
          <DecryptedText text="Core_Technologies" animateOn="both" speed={40} characters="1010101" revealDirection='center'/>
				</h3>
				<div className="inline-flex flex-wrap gap-x-4 gap-y-2 max-w-125">
					{
						/* Using constants to map through core technologies */
						coreTechnologies.map((tech) => (
								<div key={tech.id}
									className={`group px-4 py-1 border ${techColors[tech.color].border} ${techColors[tech.color].bg} text-[10px] flex items-center gap-2 hover:translate-y-[-3px] ${techColors[tech.color].hover} transition-transform cursor-default`}
								>
									<span
										className={`w-2 h-2 rounded-full inline-block ${techColors[tech.color].bg} border ${techColors[tech.color].border} group-hover:animate-pulse ${techColors[tech.color].groupHover}`}
									></span>
									<span className="leading-normal">
										{tech.name}
									</span>
								</div>
						))
					}
          	
				</div>
			</section>
		</>
	);
};

export default Home;
