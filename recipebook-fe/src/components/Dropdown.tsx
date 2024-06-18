import { Diet } from "../types/diet";
import { Cuisine } from "../types/cuisine";
import Alert from "./Alert";

interface DropdownProps {
	id: string;
	value: string;
	placeholder: string;
	options: Cuisine[] | Diet[] | undefined;
	error: string | undefined;
	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

const Dropdown = ({
	id,
	value,
	placeholder,
	options,
	error,
	onChange,
}: DropdownProps) => {
	return (
		<>
			<label className='block text-gray-700 mb-2'>Select category:</label>
			{error && <Alert children={error} />}
			{!error && (
				<div className='relative mb-2'>
					<select
						id={id}
						value={value}
						onChange={onChange}
						className={`${
							value.length === 1 ? "text-gray-900" : "text-gray-400"
						} appearance-none w-full p-2 rounded border border-gray-300 pr-8 bg-white hover:bg-gray-100 focus:text-gray-700 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
					>
						<option value=''>{placeholder}</option>
						{options?.map((option) => (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
						))}
					</select>
					<div className='absolute inset-y-0 left-[87%] flex items-center px-2 pointer-events-none'>
						<svg
							className='w-4 h-4'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M19 9l-7 7-7-7'
							></path>
						</svg>
					</div>
				</div>
			)}
		</>
	);
};

export default Dropdown;
