import { Link } from "react-router-dom";
import { Comment } from "../types/comment";
import { Recipe } from "../types/recipe";
import Button from "./Button";
import { useGetDifficulties } from "../hooks/useQueries";

interface CardProps {
	recipe?: Recipe;
	comments?: Comment[] | undefined;
}

const Card = ({ recipe, comments }: CardProps) => {
	const { data: difficulties } = useGetDifficulties();

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

	const convertDifficulty = (difficultyId: string | undefined) => {
		const difficulty = difficulties?.find((diff) => diff.id === difficultyId);
		return difficulty?.name;
	};

	return (
		<div className='bg-gray-200 p-4 shadow-lg rounded-lg flex-grow h-full w-full'>
			<div className='grid grid-cols-3 gap-4 h-full h-32'>
				<div className='bg-gray-200 rounded overflow-hidden flex flex-col'>
					<div className='h-full w-full flex-shrink-0'>
						<div className='h-full w-full rounded overflow-hidden'>
							<img
								src={`http://localhost:8080${recipe?.image}`}
								alt='Placeholder'
								className='h-full w-full object-cover rounded'
							/>
						</div>
					</div>
				</div>

				<div className='bg-gray-200 overflow-hidden'>
					<div className='h-full flex flex-col justify-between'>
						<h2 className='text-lg font-semibold'>{recipe?.name}</h2>
						<p className='text-gray-700 line-clamp-3'>{recipe?.instructions}</p>
						<p className='text-sm'>Reviews: {comments?.length} </p>
					</div>
				</div>

				<div className='bg-gray-200 rounded overflow-hidden'>
					<div className='h-full overflow-hidden text-right flex flex-col justify-between'>
						<div className='flex justify-end gap-5 items-center'>
							<h2 className='text-lg font-semibold mb-2'>
								<div className='flex items-center'>
									{calculateMedianRating(comments) ?? "---"}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='size-6'
									>
										<path
											fillRule='evenodd'
											d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
							</h2>
						</div>
						<p className='text-gray-700 line-clamp-3'>
							<span>Difficulty: {convertDifficulty(recipe?.difficultyId)}</span>
						</p>
						<p className='text-gray-700 line-clamp-3'></p>

						<div>
							<Link to={`${recipe?.id}`}>
								<Button children={"Details"} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
