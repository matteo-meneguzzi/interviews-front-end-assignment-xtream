import { useEffect, useState } from "react";
import { Main, Sidebar } from "../components";
import { useGetComments, useGetRecipes } from "../hooks/useQueries";
import { Recipe } from "../types/recipe";

const RecipeList = () => {
	const { data: recipes } = useGetRecipes();
	const { data: comments } = useGetComments();

	const [currentRecipes, setCurrentRecipes] = useState<Recipe[] | undefined>(
		recipes
	);

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		if (recipes) {
			setCurrentRecipes(recipes);
		}
	}, [recipes]);

	return (
		<div className='flex flex-grow overflow-hidden'>
			<Sidebar
				recipes={recipes}
				setCurrentRecipes={setCurrentRecipes}
				comments={comments}
				setCurrentPage={setCurrentPage}
			/>
			<Main
				recipes={currentRecipes}
				comments={comments}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export default RecipeList;
