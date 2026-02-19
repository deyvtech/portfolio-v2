import React from "react";

const Experience = () => {
	return (
		<section
			id="experience"
			className="mb-40 scroll-mt-20"
		>
			<h2 className="text-3xl font-light tracking-tight mb-12">
				Experience_Terminal
			</h2>
			<div className="overflow-hidden  shadow-md bg-transparent">
				<div className="bg-slate-900 dark:bg-neutral-800 px-5 py-3 flex justify-between items-center  ">
					<div className="flex gap-2">
						<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
						<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
					</div>
					<div className="text-[9px] text-white dark:opacity-40 uppercase tracking-widest">
						bash — 80x24
					</div>
				</div>
				<div className="p-8 text-[12px]  dark:bg-slate-900/40 backdrop-blur-md leading-relaxed overflow-x-auto">
					<div className="mb-6">
						<span className="text-blue-500">
							user@deyv_system:~$
						</span>{" "}
						<span id="type-line">fetch profile --history</span>
					</div>
					<div className="space-y-8">
						<div>
							<p className="text-green-500 uppercase font-bold tracking-widest font-jetbrains-mono">
								&gt;&gt;&gt; 2023 — PRESENT // Junior Web
								Developer @ JSDigital
							</p>
							{/* WordPress & CMS Engineering */}
							<p className="opacity-40 ml-6 mt-2 text-[12px] leading-relaxed font-jetbrains-mono">
								-- Developed custom WordPress themes utilizing
								Bootstrap and ACF (Advanced Custom Fields) for
								modular, client-managed content.
							</p>

							{/* Maintenance & Quality Assurance */}
							<p className="opacity-40 ml-6 text-[12px] leading-relaxed font-jetbrains-mono">
								-- Executing full-cycle site maintenance, plugin
								audits, and proactive bug-fixing to ensure 99.9%
								uptime across client portfolios.
							</p>

							{/* Shopify & E-commerce Logic */}
							<p className="opacity-40 ml-6 text-[12px] leading-relaxed font-jetbrains-mono">
								-- Engineering high-conversion Shopify landing
								pages from Figma; integrated custom JavaScript
								and REST API logic for AJAX cart functionality.
							</p>

							{/* Quality Standards */}
							<p className="opacity-40 ml-6 text-[12px] leading-relaxed font-jetbrains-mono">
								-- Delivering pixel-perfect, responsive UI
								across all builds, ensuring design fidelity from
								high-fidelity mockups to production-ready code.
							</p>
						</div>
						{/* <div>
								<p className="text-blue-400 font-bold tracking-widest">
									&gt;&gt;&gt; 2020 — 2022 //
									FULL_STACK_ENGINEER @ FLUX_DIGITAL
								</p>
								<p className="opacity-50 ml-6 mt-2">
									-- Built custom headless CMS integrations
									for fortune 500 clients.
								</p>
								<p className="opacity-50 ml-6">
									-- Developed "Pulse UI" library, used across
									15+ production applications.
								</p>
							</div> */}
						<div>
							<span className="text-blue-500">
								user@deyv_system:~$
							</span>{" "}
							<span className="animate-pulse bg-blue-500 w-2 h-4 inline-block align-middle ml-1"></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
