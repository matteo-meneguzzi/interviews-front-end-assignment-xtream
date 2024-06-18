import { useGetComments, useGetRecipes } from "../hooks/useQueries";
import { Recipe } from "../types/recipe";
import { Comment } from "../types/comment";
import Card from "./Card";

interface CardListProps {
	recipes: Recipe[] | undefined;
	comments: Comment[] | undefined;
}

const CardList = ({ recipes, comments }: CardListProps) => {
	const { error: recipeListError } = useGetRecipes();
	const { error: commentListError } = useGetComments();
	const recipeComments = (recipeId: string) => {
		const filteredComments = comments?.filter(
			(comment) => comment.recipeId === recipeId
		);
		return filteredComments;
	};

	const condition = !recipeListError && recipes?.length === 0;

	return (
		<div className='flex flex-col gap-4 p-4'>
			{recipes?.map((recipe) => (
				<Card
					key={recipe.id}
					recipe={recipe}
					comments={recipeComments(recipe.id)}
				/>
			))}
			{condition && (
				<div className='bg-gray-200 p-4 shadow-lg rounded-lg flex flex-grow w-full'>
					<div className='flex justify-center items-center'>
						Non ci sono ricette valide
					</div>
				</div>
			)}
			{recipeListError !== undefined && <div>{recipeListError}</div>}
			{commentListError !== undefined && <div>{commentListError}</div>}
		</div>
	);
};

export default CardList;
