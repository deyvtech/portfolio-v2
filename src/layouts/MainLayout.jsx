import { Header } from "../components/Header";
import { Outlet } from "react-router";
const MainLayout = () => {
	return (
		<>
			<div className="dark:text-white font-jetbrains-mono">
				<Header />
				<div className="max-w-5xl mx-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
