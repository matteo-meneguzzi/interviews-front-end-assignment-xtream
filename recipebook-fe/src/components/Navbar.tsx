import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav>
				<Link to='create-recipe'>Add Recipe</Link>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;
