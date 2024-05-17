export default function Search({ show }) {
	return (
		<>
			<div
				className={`flex items-center gap-8  ${
					show ? "hidden custom-lg:flex" : "flex-col"
				}`}
			>
				<div className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-search absolute h-full left-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="gray"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
						<path d="M21 21l-6 -6"></path>
					</svg>
					<input
						className="search outline-none px-4 py-1 rounded-md text-center border-2 border-gray-200 focus:ring-gray-500 focus:border-2"
						type="text"
						placeholder="Buscar productos"
					/>
				</div>
				<div className="flex items-center gap-4">
					<a href="/">
						<svg
							className="hover:text-black transition-all ease duration-200"
							width="26"
							height="26"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="gray"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
							<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
							<path d="M17 17h-11v-14h-2"></path>
							<path d="M6 5l14 1l-1 7h-13"></path>
						</svg>
					</a>
					<a href="/">
						<svg
							className="hover:text-black transition-all ease duration-200"
							width="26"
							height="26"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="gray"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
							<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
						</svg>
					</a>
				</div>
			</div>
		</>
	);
}
