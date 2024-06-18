import React, { useState } from "react";
import { Alert, Button, Input } from "../components";
import { createHandleChange } from "../utils/form";
import Dropdown from "../components/Dropdown";
import {
	useGetCuisines,
	useGetDiets,
	useGetDifficulties,
} from "../hooks/useQueries";

const AddRecipe = () => {
	const { data: cuisines, error: cuisineListError } = useGetCuisines();
	const { data: diets, error: dietListError } = useGetDiets();
	const { data: difficulties, error: difficultyListError } =
		useGetDifficulties();
	const [form, setForm] = useState<{
		name: string;
		instructions: string;
		ingredients: string[];
		cuisineId: string;
		dietId: string;
		difficultyId: string;
		image: File | undefined;
	}>({
		name: "",
		instructions: "",
		ingredients: [],
		cuisineId: "",
		dietId: "",
		difficultyId: "",
		image: undefined,
	});

	const handleChange = createHandleChange(setForm);

	const [newIngredient, setNewIngredient] = useState("");

	const handleNewIngredientChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewIngredient(event.target.value);
	};

	const handleAddIngredient = () => {
		if (newIngredient.trim() !== "") {
			setForm((prevForm) => ({
				...prevForm,
				ingredients: [
					...prevForm.ingredients,
					newIngredient.toLocaleLowerCase(),
				],
			}));
			setNewIngredient(""); // Clear the input after adding
		}
	};

	const handleRemoveIngredient = (ingredient: string) => {
		const updatedIngredients = form.ingredients.filter(
			(ingr) => ingredient.toLocaleLowerCase() !== ingr.toLocaleLowerCase()
		);

		setForm((prevForm) => ({
			...prevForm,
			ingredients: updatedIngredients,
		}));
	};

	/* 	const { postData: createRecipe } = useCreateRecipe();
	 */

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		/* const recipeForm: Recipe = {
			...form,
			id: recipes?.length
				? String(recipes?.length + 1)
				: String(Math.random() + 1),
		};

		await createRecipe(recipeForm); */
	};

	return (
		<main className='overflow-hidden flex-grow flex flex-col'>
			<div className='p-4 bg-gray-600'>
				<div className='flex justify-between items-center max-w-xl mx-auto'>
					<h1 className='bg-purple-400 p-4 rounded-lg text-xl font-bold'>
						Add a Recipe
					</h1>
				</div>
			</div>
			<div className='p-4 bg-gray-600 max-h-full flex-grow overflow-hidden'>
				<div className='p-8 flex flex-col max-w-xl max-h-full mx-auto bg-gray-200 rounded-lg'>
					<h2 className='text-lg font-bold mb-4'>Recipe Details</h2>
					<form
						onSubmit={handleSubmit}
						className='p-4 flex-grow w-full overflow-y-auto'
					>
						<Input
							value={form.name}
							placeholder='Enter name'
							onChange={handleChange}
							label={"Add a name"}
							id={"name"}
						/>

						<Input
							value={newIngredient}
							placeholder='Enter ingredient'
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleNewIngredientChange(e)
							}
							label={"Add an ingredient"}
							id={"ingredients"}
						/>
						<button
							type='button'
							onClick={handleAddIngredient}
							className='bg-blue-500 text-white px-4 py-2 rounded ml-2'
						>
							Add
						</button>

						<div className='my-4 min-h-20'>
							<h2 className='font-bold mb-2'>Ingredients:</h2>
							<div className='grid grid-cols-4 gap-4'>
								{form.ingredients.length > 0 &&
									form.ingredients.map((ingredient, index) => (
										<div
											key={index}
											className='col-span-1 bg-gray-300 px-4 py-2 rounded flex justify-between items-center'
										>
											<span className='truncate'>{ingredient}</span>
											<button
												onClick={() => handleRemoveIngredient(ingredient)}
												className='text-red-500 relative'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='size-6 relative left-1 top-px'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M6 18 18 6M6 6l12 12'
													/>
												</svg>
											</button>
										</div>
									))}
								{form.ingredients.length === 0 && (
									<div className='w-96'>
										<Alert type='default' children={"Still no ingredients"} />
									</div>
								)}
							</div>
						</div>
						<Input
							value={form.instructions}
							placeholder='Enter instructions'
							onChange={handleChange}
							label={"Add instructions"}
							id={"instructions"}
						/>
						<div className='max-w-52'>
							<Dropdown
								id='cuisineId'
								value={form.cuisineId}
								placeholder='Select a cuisine'
								options={cuisines}
								error={cuisineListError}
								onChange={handleChange}
							/>
							<Dropdown
								id='dietId'
								value={form.dietId}
								placeholder='Select a diet'
								options={diets}
								error={dietListError}
								onChange={handleChange}
							/>
							<Dropdown
								id='difficultyId'
								value={form.difficultyId}
								placeholder='Select a difficulty'
								options={difficulties}
								error={difficultyListError}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col mt-16 max-w-28 mx-auto'>
							<Button type='submit' children='Crea' />
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default AddRecipe;
