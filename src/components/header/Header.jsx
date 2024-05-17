import Search from "./nav/Search.jsx";
import Links from "./nav/Links.jsx";
import Mobile from "./nav/Mobile.jsx";
import { useState } from "react";
export default function Header() {
	const [move, setMove] = useState(false);
	function changePosition() {
		setMove(!move);
	}
	return (
		<>
			<header className="w-full">
				<div className="bg-nav">
					<h1 className="text-center font-semibold py-1 text-white">
						Obtén un 25% de descuento en tu primer pedido
					</h1>
				</div>
				<nav className="w-full bg-white">
					<div className="nav w-11/12 max-w-7xl mx-auto flex items-center justify-between py-4">
						<Links isVisible={true} />
						<label
							className="block custom-lg:hidden relative z-20"
							onChange={changePosition}
						>
							<div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
								<input className="hidden peer" type="checkbox" />
								<div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
								<div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
								<div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
							</div>
						</label>
						<Mobile isMove={move} />
						<Search show={true} />
					</div>
				</nav>
			</header>
		</>
	);
}
