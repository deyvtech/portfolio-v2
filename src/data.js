export const coreTechnologies = [
	{
		id: 1,
		name: "JavaScript",
		childClass:
			"bg-yellow-500/5 border-yellow-500/20 group-hover:bg-yellow-500",
		parentClass:
			"border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500",
	},
	{
		id: 2,
		name: "React / Next.js",
		childClass: "bg-blue-500/5 border-blue-500/20 group-hover:bg-blue-500",
		parentClass: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500",
	},
	{
		id: 3,
		name: "Node.js",
		childClass:
			"bg-green-500/5 border-green-500/20 group-hover:bg-green-500",
		parentClass:
			"border-green-500/20 bg-green-500/5 hover:border-green-500",
	},
	{
		id: 4,
		name: "Express.js",
		childClass: "bg-pink-500/5 border-pink-500/20 group-hover:bg-pink-500",
		parentClass: "border-pink-500/20 bg-pink-500/5 hover:border-pink-500",
	},
	{
		id: 5,
		name: "Tailwind CSS",
		childClass:
			"bg-purple-500/5 border-purple-500/20 group-hover:bg-purple-500",
		parentClass:
			"border-purple-500/20 bg-purple-500/5 hover:border-purple-500",
	},
	{
		id: 6,
		name: "MongoDB",
		childClass: "bg-cyan-500/5 border-cyan-500/20 group-hover:bg-cyan-500",
		parentClass: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500",
	},
	{
		id: 7,
		name: "PostgreSQL",
		childClass:
			"bg-indigo-500/5 border-indigo-500/20 group-hover:bg-indigo-500",
		parentClass:
			"border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500",
	},
	{
		id: 8,
		name: "WordPress",
		childClass: "bg-blue-800/5 border-blue-800/20 group-hover:bg-blue-800",
		parentClass: "border-blue-800/20 bg-blue-800/5 hover:border-blue-800",
	},
	{
		id: 9,
		name: "Shopify",
		childClass:
			"bg-green-800/5 border-green-800/20 group-hover:bg-green-800",
		parentClass:
			"border-green-800/20 bg-green-800/5 hover:border-green-800",
	},
];

export const navLinks = [
	{ name: "Projects", path: "#projects" },
	{ name: "Experience", path: "#experience" },
	{ name: "✨ AI_Lab", path: "/ai_lab" },
	{ name: "Connect", path: "#contact" },
];

export const projects = [
	{
		id: 1,
		title: "FS Deluxe Ecommerce",
		subtitle: "Project_002",
		description: `A centralized Merchant Control Center for end-to-end
						store management. Built to handle inventory tracking,
						order processing, and sales analytics.`,
		projectLink: "#",
		repoLink: "https://github.com/deyvtech/pern-ecommerce.git",
		useTechnologies: [1, 2, 3, 5, 7],
	},
	{
		id: 2,
		title: "ByteHive",
		subtitle: "Project_001",
		description: `A Full-Stack Q&A Ecosystem featuring a community-driven
						Forum and a personalized User Dashboard. Built with a
						focus on complex data relationships, gamified reputation
						systems, and real-time content delivery.`,
		projectLink: "https://byte-hive.vercel.app/",
		repoLink: "https://github.com/deyvtech/ByteHive.git",
		useTechnologies: [2, 5, 6],
	},
	{
		id: 3,
		title: "YT_Clone",
		subtitle: "Project_003",
		description: `Digital Media Hub: A YouTube-inspired platform designed
						for seamless video consumption`,
		projectLink: "https://youtube-clone-eta-kohl.vercel.app/",
		repoLink: "https://github.com/deyvtech/Youtube-Clone.git",
		useTechnologies: [1, 2, 5],
	},
	{
		id: 4,
		title: "WordPress_Build",
		subtitle: "Project_004 // Custom_Theme",
		description: `Precise translation of high-fidelity Figma designs into a robust WordPress ecosystem. I focused on pixel-perfect CSS implementation, responsive behavior, and custom theme development to ensure the final product matched the architectural vision exactly.`,
		projectLink: "#",
		repoLink: "#",
		useTechnologies: [8],
	},
	{
		id: 5,
		title: "Custom_Shopify_Build",
		subtitle: "Project_005 // Figma_to_Code",
		description: `I developed custom landing pages from scratch using Liquid, HTML, CSS, and JavaScript. By bypassing pre-built themes, I manually coded every section to achieve 100% design fidelity with the provided Figma mockups. This approach ensured total control over the layout and a precise mobile shopping experience tailored to the client's requirements.`,
		projectLink: "#",
		repoLink: "#",
		useTechnologies: [9],
	},
];
