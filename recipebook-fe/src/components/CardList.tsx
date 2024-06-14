import { useGetComments, useGetRecipes } from "../hooks/useQueries";
import Card from "./Card";

const CardList = () => {
	const { data: recipes, error: recipeListError } = useGetRecipes();
	const { data: comments, error: commentListError } = useGetComments();
	const recipeComments = (recipeId: string) => {
		const filteredComments = comments?.filter(
			(comment) => comment.recipeId === recipeId
		);
		return filteredComments;
	};

	console.log("ERROR IN COMPONENT: ", recipeListError);
	console.log("D_ATA: ", recipes);

	return (
		<div className='flex flex-col gap-4 p-4 overflow-y-auto'>
			{recipes?.map((recipe) => (
				<Card
					key={recipe.id}
					recipe={recipe}
					comments={recipeComments(recipe.id)}
				/>
			))}
			{recipeListError !== undefined && <div>{recipeListError}</div>}
			{commentListError !== undefined && <div>{commentListError}</div>}
		</div>
	);
};

export default CardList;
