import { Main, Sidebar } from "../components";

const RecipeList = () => {
	return (
		<div className='flex flex-grow overflow-hidden'>
			<Sidebar />
			<Main />
		</div>
	);
};

export default RecipeList;
