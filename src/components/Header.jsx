import React from "react";
import { Link } from "react-router";
import GradientText from "./animation/GradientText";

import { navLinks } from "../data";
import { useTheme } from "../context/ThemeContext";
export const Header = () => {
	const {theme, setTheme} = useTheme();
	return (
		<header className="fixed top-0 w-full z-50 border-b custom-border backdrop-blur-md bg-transparent">
			<nav className="max-w-5xl mx-auto h-16 flex items-center justify-between">
				<div>
					<h3 className="uppercase font-bold tracking-tighter text-sm flex items-center gap-2">
						<a href="#hero">
							<GradientText>Deyv_Architecture</GradientText>{" "}
						</a>

						<span className="font-light opacity-100 dark:opacity-30 text-[10px]">
							v2.0.0
						</span>
					</h3>
				</div>
				<ul className="flex items-center gap-8 text-[10px] uppercase tracking-widest">
					{navLinks.map((link) => (
						<li key={link.name} className="hover:text-red-500">
							{link.path.startsWith("#") ? (
								<a href={`/${link.path}`}>{link.name}</a>
							) : (
								<Link to={`${link.path}`}>{link.name}</Link>
							)}
						</li>
					))}
					<li>
						<button className="uppercase border px-2 py-1 custom-border cursor-pointer hover:bg-blue-900/30" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
							{theme === 'light' ? 'Light' : 'Dark'}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};
