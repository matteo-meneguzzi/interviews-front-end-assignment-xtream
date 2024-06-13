import { useGetRecipes } from "../hooks/useQueries";

const RecipeList = () => {
	const { data, error } = useGetRecipes();
	console.log("ERROR IN COMPONENT: ", error);

	return (
		<>
			{data?.map((recipe) => (
				<div key={recipe.id}>{recipe.name}</div>
			))}
			{error !== undefined && <div>{error}</div>}
		</>
	);
};

export default RecipeList;
