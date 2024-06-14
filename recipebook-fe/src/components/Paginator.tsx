import React from "react";

const Paginator = () => {
	return (
		<div className='flex justify-center p-4 bg-gray-200'>
			{/* Placeholder for paginator */}
			<button className='bg-blue-500 text-white px-4 py-2 rounded'>
				Previous
			</button>
			<button className='bg-blue-500 text-white px-4 py-2 rounded ml-2'>
				Next
			</button>
		</div>
	);
};

export default Paginator;
