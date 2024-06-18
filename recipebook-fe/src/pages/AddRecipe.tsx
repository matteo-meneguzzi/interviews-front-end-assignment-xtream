import React, { useState } from "react";
import { Input } from "../components";
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
		image: string;
	}>({
		name: "",
		instructions: "",
		ingredients: [],
		cuisineId: "",
		dietId: "",
		difficultyId: "",
		image: "",
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

	return (
		<main className='flex-grow flex flex-col overflow-hidden'>
			<div className='p-4 bg-gray-400'>
				<div className='flex justify-between items-center max-w-xl mx-auto bg-red-400'>
					<h1 className='text-xl font-bold'>Add a Recipe</h1>
				</div>
			</div>
			<div className='p-4 bg-blue-400'>
				<div className='p-8 flex flex-grow overflow-y-auto justify-between items-center max-w-xl mx-auto bg-red-400 h-full'>
					<div className='bg-gray-200 p-4 shadow-lg rounded-lg h-full overflow-hidden'>
						<div className='bg-red-200 h-full flex flex-col overflow-y-auto'>
							<Input
								value={form.name}
								placeholder='Enter name'
								onChange={handleChange}
								label={"Add a name"}
								id={"name"}
							/>
							<div>
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
									onClick={handleAddIngredient}
									className='bg-blue-500 text-white px-4 py-2 rounded ml-2'
								>
									Add
								</button>
							</div>
							<div className='my-4 min-h-20'>
								<h2 className='font-bold mb-2'>Ingredients:</h2>
								<div className='grid grid-cols-4 gap-4'>
									{form.ingredients.map((ingredient, index) => (
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
								</div>
							</div>
							<Input
								value={form.instructions}
								placeholder='Enter instructions'
								onChange={handleChange}
								label={"Add instructions"}
								id={"instructions"}
							/>
							<Input
								value={form.image}
								onChange={handleChange}
								label={"Add image"}
								id={"image"}
								type='file'
							/>
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
					</div>
				</div>
			</div>
		</main>
	);
};

export default AddRecipe;
