import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, RecipeList, AddRecipe } from "./pages";
import { Navbar } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='recipes' element={<RecipeList />}>
					{/* 					<Route path=':id' element={<RecipeDetail />} />
					 */}{" "}
				</Route>
				<Route path='recipes' element={<AddRecipe />}>
					{/* 					<Route path=':id' element={<RecipeDetail />} />
					 */}{" "}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
