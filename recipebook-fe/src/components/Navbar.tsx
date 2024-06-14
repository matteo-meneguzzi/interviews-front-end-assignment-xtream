import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className='bg-gray-800 w-full min-h-10 flex items-center'>
				<ul className='flex justify-start'>
					<Link to='recipes' className='text-white mx-6'>
						Recipe List
					</Link>
					<Link to='add-recipe' className='text-white'>
						Add Recipe
					</Link>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;
