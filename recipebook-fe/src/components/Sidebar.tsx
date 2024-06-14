import React, { useState } from "react";

const Sidebar = () => {
	const [isWide, setIsWide] = useState(false);

	const toggleSidebarWidth = () => {
		setIsWide(!isWide);
	};

	return (
		<aside
			className={`${
				isWide ? "w-96 min-w-80" : "w-24 min-w-24"
			} bg-gray-200 overflow-y-auto flex flex-col`}
		>
			<div className='p-4 h-full'>
				{/* Section 1 (2/5 of height) */}
				<div className='h-[40%] bg-blue-200 p-4'>
					{/* Section 1: Clickable Icon */}
					<div
						className={`${
							isWide ? "justify-end" : "justify-center"
						} flex items-center  h-12`}
					>
						<button
							onClick={toggleSidebarWidth}
							className='text-gray-600 hover:text-gray-800 focus:outline-none'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className={`${
									isWide ? "rotate-0" : "rotate-180"
								} h-6 w-6 transform`}
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
								/>
							</svg>
						</button>
					</div>
				</div>
				{/* Section 2 (3/5 of height) */}
				{isWide && (
					<div className='h-[60%] bg-green-200 p-4'>
						{/* Content for section 2 */}
						<p>Sidebar content</p>
						<p>Sidebar content</p>
						<p>Sidebar content</p>
						<p>Sidebar content</p>
						<p>Sidebar content</p>
						<p>Sidebar content</p>
						<p>Sidebar content</p>
						<p>Sidebar content</p>
					</div>
				)}
			</div>
		</aside>
	);
};

export default Sidebar;
