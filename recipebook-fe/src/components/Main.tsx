import CardList from "./CardList";
import Paginator from "./Paginator";

const Main = () => {
	return (
		<main className='flex-grow flex flex-col'>
			<div className='p-4 flex justify-between items-center bg-gray-400'>
				<h1 className='text-xl font-bold'>Results</h1>
				<button className='bg-blue-500 text-white px-4 py-2 rounded'>
					Filter
				</button>
			</div>
			<div className='flex-grow overflow-y-auto mx-auto max-w-6xl'>
				<CardList />
			</div>
			<div className='p-4 bg-gray-400'>
				<Paginator />
			</div>
		</main>
	);
};

export default Main;
