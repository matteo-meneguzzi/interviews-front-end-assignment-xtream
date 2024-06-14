import { Link } from "react-router-dom";
import { Comment } from "../types/comment";
import { Recipe } from "../types/recipe";
import Button from "./Button";

interface CardProps {
	recipe: Recipe;
	comments: Comment[] | undefined;
}

const Card = ({ recipe, comments }: CardProps) => {
	const calculateMedianRating = (comments: Comment[] | undefined) => {
		// Check if comments array is defined and not empty
		if (!comments || comments.length === 0) {
			return undefined; // or handle as needed for your application
		}

		// Extract ratings from comments
		const ratings = comments.map((element) => element.rating);

		// Sort ratings in ascending order
		ratings.sort((a, b) => a - b);

		// Calculate median
		const middle = Math.floor(ratings.length / 2);

		if (ratings.length % 2 === 0) {
			// Even number of ratings, average of middle two
			return (ratings[middle - 1] + ratings[middle]) / 2;
		} else {
			// Odd number of ratings, middle value
			return ratings[middle];
		}
	};

	return (
		<div className='bg-gray-200 p-4 shadow-lg rounded-lg flex-grow h-full w-full'>
			<div className='grid grid-cols-3 gap-4 h-full h-52'>
				<div className='bg-gray-200 rounded overflow-hidden flex flex-col'>
					<div className='h-full w-full flex-shrink-0'>
						<div className='h-full w-full rounded overflow-hidden'>
							<img
								src={`http://localhost:8080${recipe.image}`}
								alt='Placeholder'
								className='h-full w-full object-cover rounded'
							/>
						</div>
					</div>
				</div>

				<div className='bg-gray-200 rounded overflow-hidden'>
					<div className='h-full overflow-hidden'>
						<h2 className='text-lg font-semibold mb-2'>{recipe.name}</h2>

						<p className='text-gray-700 line-clamp-3'>{recipe.instructions}</p>
					</div>
				</div>

				<div className='bg-gray-200 rounded overflow-hidden'>
					<div className='h-full overflow-hidden text-right flex flex-col justify-between'>
						<div>
							<h2 className='text-lg font-semibold mb-2'>
								{calculateMedianRating(comments) ?? "---"}
							</h2>
							<p className='text-gray-700 line-clamp-3'>
								{comments?.length} reviews
							</p>
						</div>
						<div>
							<Link to={`${recipe.id}`}>
								<Button children={"Details"} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		/* <div className='bg-red-400 shadow-md rounded-lg p-4 flex max-h-52 grid grid-cols-3 gap-4 items-center'>
			
			<div className='max-w-52 max-h-max rounded-md overflow-hidden'>
				<img
					src={`http://localhost:8080${recipe.image}`}
					alt='Card Image'
					className='object-cover object-center w-full h-full overflow-hidden'
				/>
			</div>

			
			<div className='max-h-max'>
				<h2 className='text-lg font-semibold mb-2'>{recipe.name}</h2>
				<p className='text-gray-700 truncate '>
					{recipe.ingredients.map((ingredient) => (
						<p>{ingredient}</p>
					))}
				</p>
				<p className='text-gray-700 truncate'>{recipe.instructions}</p>
			</div>

			
			<div className='flex-shrink-0'>
				<p className='text-gray-700'>{recipe.name} Reviews</p>
			</div>
		</div> */
	);
};

export default Card;
