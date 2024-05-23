import Category from "../Category/Category.jsx";
import { useState, useEffect } from "react";

function Links({ mobile }) {
	const [show, setShow] = useState(false);
	function showCategory() {
		setShow(!show);
	}
	return (
		<>
			<div className="flex gap-12">
				{!mobile ? null : (
					<a href="/" className="select-none">
						<img
							className={`h-5 sm:h-7`}
							src="/src/assets/img/logoRomantib-webp.webp"
							alt="Colchones logo"
						/>
					</a>
				)}
				<ul
					className={`gap-6 text-gray-500 items-center ${
						mobile ? "hidden md:flex" : "flex flex-col gap-12"
					}`}
				>
					<li className="hover:text-black transition-all ease duration-200">
						<a href="/">Home</a>
					</li>
					<li className="relative" onClick={showCategory}>
						<span className="flex items-center hover:text-black transition-all ease duration-200 cursor-pointer">
							Categorias
							<i
								className={`bx bx-chevron-down ml-1 ${
									show ? "rotate-180" : "rotate-0"
								}`}
							></i>
						</span>
						<Category show={show} />
					</li>
					<li className="hover:text-black transition-all ease duration-200">
						<a href="/">About</a>
					</li>
					<li className="hover:text-black transition-all ease duration-200">
						<a href="/#footer">Contactos</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Links;
