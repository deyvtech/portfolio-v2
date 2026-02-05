import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home";
import About from "./page/About";
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
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}
export default App;
