import React from "react";

interface InputProps {
	label: string;
	id: string;
	value: string;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

const Input = ({
	value,
	id,
	label,
	placeholder,
	onChange,
	type,
}: InputProps) => {
	return (
		<>
			<label htmlFor='name' className='snap-start block text-gray-700 mb-2'>
				{label}:
			</label>
			<input
				id={id}
				type={type ?? "text"}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='border border-gray-300 px-3 py-2 mb-2 rounded-md focus:outline-none snap-start'
			/>
		</>
	);
};

export default Input;
