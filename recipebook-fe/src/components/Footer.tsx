import { Outlet } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className='w-full min-h-10 bg-gray-800 flex items-center justify-center'>
				<div className='text-white'>Footer</div>
			</footer>

			<Outlet />
		</>
	);
};

export default Footer;
