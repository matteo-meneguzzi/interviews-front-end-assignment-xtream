import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, RecipeList, AddRecipe, RecipeDetail } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
	return (
		<BrowserRouter>
			<div className='flex flex-col h-screen overflow-y-auto'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='recipes' element={<RecipeList />} />
					<Route path='recipes/:recipeId' element={<RecipeDetail />} />
					<Route path='add-recipe' element={<AddRecipe />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
