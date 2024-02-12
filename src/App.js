import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import About from "./pages/About/About";

import "./assets/index.scss";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
    	</div>
	);
}

export default App;
