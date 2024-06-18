import React from "react";

interface AlertProps {
	type: string;
	onClick?: () => void; // onClick function is optional
	className?: string; // className prop to allow additional Tailwind classes
	children: React.ReactNode; // Content inside the button
}

// Define an object to map alert types to their corresponding class strings
const alertClasses: { [key in AlertProps["type"]]: string } = {
	warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
	error: "bg-red-100 border-red-400 text-red-700",
	success: "bg-green-100 border-green-400 text-green-700",
	info: "bg-blue-100 border-blue-400 text-blue-700",
	default: "bg-gray-100 border-gray-400 text-gray-700",
};

const Alert = ({ children, type }: AlertProps) => {
	return (
		<div
			className={`${
				alertClasses[type] || alertClasses.default
			}  border w-full  px-4 py-3 mb-4 rounded relative`}
			role='alert'
		>
			<strong className='font-bold'>Holy smokes! </strong>
			<span className='block sm:inline'>{children}</span>
			<span className='absolute top-0 bottom-0 right-0 px-4 py-3'></span>
		</div>
	);
};

export default Alert;
