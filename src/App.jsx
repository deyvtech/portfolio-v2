import { HashRouter, BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home";
import About from "./page/About";
import MaintenancePage from "./page/MaintenancePage";
import { Header } from "./components/Header";
function App() {
	return (
		<>
			<BrowserRouter>
				<div className="dark:text-white font-jetbrains-mono">
					<Header />
					<div className="max-w-7xl mx-auto pt-40">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="*" element={<MaintenancePage />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}
export default App;
