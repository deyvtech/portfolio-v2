import React from "react";
import { Link } from "react-router";
import GradientText from "./animation/GradientText";

import { navLinks } from "../constants";

export const Header = () => {
	return (
		<header className="fixed top-0 w-full z-50 border-b custom-border backdrop-blur-md">
			<nav className="max-w-7xl mx-auto h-16 flex items-center justify-between">
				<div>
					<h3 className="uppercase font-bold tracking-tighter text-sm flex items-center gap-2">
						<Link to="/">
							<GradientText>Deyv_Architecture</GradientText>{" "}
						</Link>

						<span className="font-light opacity-30 text-[10px]">
							v2.0.0
						</span>
					</h3>
				</div>
				<ul className="flex items-center gap-8 text-[10px] uppercase tracking-widest">
					{navLinks.map((link) => (
						<li key={link.name} className="hover:text-red-500">
							<Link to={link.path}>{link.name}</Link>
						</li>
					))}
					<li>
						<button className="uppercase border px-2 py-1 custom-border cursor-pointer hover:bg-blue-900/30">
							Light
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};
