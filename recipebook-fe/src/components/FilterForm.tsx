interface FilterFormProps {
	form: {
		name: string;
		cuisineId: string;
		dietId: string;
		ratingIds: string[];
	};
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterForm = ({ form, handleChange }: FilterFormProps) => {
	return (
		<div className='h-[60%] bg-green-200 p-4'>
			<label className='block text-gray-700 mb-2'>Filter by Rating:</label>
			{Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
				<label key={rating} className='block text-gray-700'>
					<input
						id={`ratingIds[${rating}]`}
						type='checkbox'
						value={rating}
						checked={form.ratingIds.includes(rating.toString())}
						onChange={handleChange}
					/>
					{rating} Stars
				</label>
			))}
		</div>
	);
};

export default FilterForm;
