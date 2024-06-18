import Dropdown from "./Dropdown";
import {
	useGetCuisines,
	useGetDiets,
	useGetDifficulties,
} from "../hooks/useQueries";
import Button from "./Button";
import Input from "./Input";
import { ChangeEvent } from "react";

interface SearchFormProps {
	form: {
		name: string;
		cuisineId: string;
		dietId: string;
		difficultyId: string;
	};
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({ form, handleChange, handleSubmit }: SearchFormProps) => {
	const { data: cuisines, error: cuisineListError } = useGetCuisines();
	const { data: diets, error: dietListError } = useGetDiets();
	const { data: difficulties, error: difficultyListError } =
		useGetDifficulties();
	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col justify-between flex-grow overflow-hidden'
		>
			<div className='flex flex-col px-4 mb-4 h-full scroll-container flex  '>
				<Input
					label='Search for name'
					value={form.name}
					placeholder='Enter text'
					onChange={handleChange}
					id={"name"}
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
				<Dropdown
					id='difficultyId'
					value={form.difficultyId}
					placeholder='Select a difficulty'
					options={difficulties}
					error={difficultyListError}
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
				<Dropdown
					id='difficultyId'
					value={form.difficultyId}
					placeholder='Select a difficulty'
					options={difficulties}
					error={difficultyListError}
					onChange={handleChange}
				/>
			</div>
			<div className='flex flex-col px-4 flex-grow'>
				<Button type='submit' children='Cerca' />
			</div>
		</form>
	);
};

export default SearchForm;
