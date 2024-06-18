import { Dispatch, SetStateAction } from "react";

interface PaginatorProps {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	nPages: number;
}

const Paginator = ({ currentPage, setCurrentPage, nPages }: PaginatorProps) => {
	/* 	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
	 */
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};

	const getPageNumbers = () => {
		const pageNumbers = [];

		if (currentPage === 1) {
			pageNumbers.push(1, 2, 3);
		} else if (currentPage === nPages) {
			pageNumbers.push(nPages - 2, nPages - 1, nPages);
		} else {
			pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
		}

		return pageNumbers.filter((page) => page > 0 && page <= nPages);
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className='flex justify-center p-4 bg-gray-200'>
			{/* Placeholder for paginator */}
			{/* <button
				onClick={prevPage}
				className='bg-blue-500 text-white px-4 py-2 rounded'
			>
				Previous
			</button>
			{pageNumbers.map((pgNumber) => (
				<button
					key={pgNumber}
					onClick={() => setCurrentPage(pgNumber)} // Click event handler for setting the current page
					className={`${
						currentPage == pgNumber ? "text-blue-500" : "text-grey-800"
					} p-4`}
				>
					{pgNumber}
				</button>
			))}
			<button
				onClick={nextPage}
				className='bg-blue-500 text-white px-4 py-2 rounded ml-2'
			>
				Next
			</button> */}

			<nav aria-label='Page navigation example'>
				<ul className='inline-flex -space-x-px text-sm'>
					<li>
						<a
							onClick={prevPage}
							href='#'
							className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray-800 border border-e-0 border-gray-700 rounded-s-lg hover:bg-gray-600 hover:text-gray-300'
						>
							Previous
						</a>
					</li>
					{pageNumbers.map((pgNumber) => (
						<li
							key={pgNumber}
							className={`${
								currentPage === pgNumber ? "text-red-200" : "text-gray-500"
							}`}
						>
							<a
								onClick={() => setCurrentPage(pgNumber)}
								href='#'
								className={`${
									currentPage === pgNumber ? "text-gray-100" : "text-gray-500"
								} flex items-center justify-center px-3 h-8 leading-tight bg-gray-800 border border-gray-700 hover:bg-gray-600 hover:text-gray-300`}
							>
								{pgNumber}
							</a>
						</li>
					))}
					<li>
						<a
							onClick={nextPage}
							href='#'
							className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-800 border border-gray-700 rounded-e-lg hover:bg-gray-600 hover:text-gray-300'
						>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Paginator;
