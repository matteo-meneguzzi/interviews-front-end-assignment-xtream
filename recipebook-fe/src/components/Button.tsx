import React from "react";

interface ButtonProps {
	type?: string;
	onClick?: () => void; // onClick function is optional
	className?: string; // className prop to allow additional Tailwind classes
	children: React.ReactNode; // Content inside the button
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
