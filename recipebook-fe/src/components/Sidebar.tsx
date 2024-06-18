import { useState } from "react";
import SearchForm from "./SearchForm";
import { Recipe } from "../types/recipe";
import { Comment } from "../types/comment";
import { createHandleChange } from "../utils/form";

interface SideBarProps {
	recipes: Recipe[] | undefined;
	setCurrentRecipes: React.Dispatch<React.SetStateAction<Recipe[] | undefined>>;
	comments: Comment[] | undefined;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = ({
	recipes,
	setCurrentRecipes,
	setCurrentPage,
}: SideBarProps) => {
	const [isWide, setIsWide] = useState(false);
	const [form, setForm] = useState<{
		name: string;
		cuisineId: string;
		dietId: string;
		difficultyId: string;
	}>({
		name: "",
		cuisineId: "",
		dietId: "",
		difficultyId: "",
	});

	const toggleSidebarWidth = () => {
		setIsWide(!isWide);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const updatedrecipes = recipes?.filter((recipe) => {
			const nameMatches =
				form.name.length > 0
					? recipe.name
							.toLocaleLowerCase()
							.includes(form.name.toLocaleLowerCase())
					: true;
			const cuisineMatches =
				form.cuisineId.length > 0 ? recipe.cuisineId === form.cuisineId : true;
			const dietMatches =
				form.dietId.length > 0 ? recipe.dietId === form.dietId : true;

			const difficultyMatches =
				form.difficultyId.length > 0
					? recipe.difficultyId === form.difficultyId
					: true;

			return nameMatches && cuisineMatches && dietMatches && difficultyMatches;
		});

		setCurrentRecipes(updatedrecipes);
		setCurrentPage(1);
	};

	const handleChange = createHandleChange(setForm);

	return (
		<aside
			className={`${
				isWide ? "w-96 min-w-80" : "w-24 min-w-24"
			} bg-gray-200 flex flex-col`}
		>
			<div className='p-4 h-full'>
				<div className='h-full bg-gray-200 p-4 flex flex-col flex-grow'>
					{/* Section 1: Clickable Icon */}
					<div
						className={`${
							isWide ? "justify-end" : "justify-center"
						} flex items-center h-6`}
					>
						<button
							onClick={toggleSidebarWidth}
							className='text-gray-600 hover:text-gray-800 focus:outline-none'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className={`${
									isWide ? "rotate-0" : "rotate-180"
								} h-6 w-6 transform`}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
								/>
							</svg>
						</button>
					</div>
					{/* Section 2: Heading */}
					{isWide && (
						<div className='pb-4 mx-4'>
							<h2 className='text-lg font-bold text-center'>
								Discover Recipes
							</h2>
						</div>
					)}
					{/* Section 3: Container with Input, Dropdown, and Button */}
					{isWide && (
						<SearchForm
							form={form}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					)}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
