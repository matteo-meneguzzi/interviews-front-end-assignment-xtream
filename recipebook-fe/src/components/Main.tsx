import { Recipe } from "../types/recipe";
import { Comment } from "../types/comment";

import CardList from "./CardList";
import Paginator from "./Paginator";
import { useState } from "react";

interface MainProps {
	recipes: Recipe[] | undefined;
	comments: Comment[] | undefined;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Main = ({
	recipes,
	comments,
	currentPage,
	setCurrentPage,
}: MainProps) => {
	const [recordsPerPage] = useState(5);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	// Records to be displayed on the current page
	const currentRecords = recipes?.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil((recipes?.length ?? 0) / recordsPerPage);
	return (
		<main className='flex-grow flex flex-col'>
			<div className='p-4 flex justify-between items-center bg-gray-400'>
				<h1 className='text-xl font-bold'>Results</h1>
				<button className='bg-blue-500 text-white px-4 py-2 rounded'>
					Filter
				</button>
			</div>
			<div
				className={`flex-grow mx-auto w-full flex flex-col overflow-y-auto scroll-container ${
					recipes && recipes.length > 0 ? "" : "justify-center items-center"
				} `}
			>
				<div className='mx-auto max-w-3xl'>
					<CardList recipes={currentRecords} comments={comments} />
				</div>
			</div>
			<div className='p-4 bg-gray-400'>
				<Paginator
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					nPages={nPages}
				/>
			</div>
		</main>
	);
};

export default Main;
