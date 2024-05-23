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
			<header className="fixed z-20 w-full">
				<div className="bg-nav">
					<h1 className="py-1  text-center text-white">
						Obtén un 25% de descuento en tu primer pedido
					</h1>
				</div>
				<nav className="w-full bg-white">
					<div className="nav mx-auto flex w-11/12 max-w-7xl items-center justify-between py-4">
						<Links mobile={true} />
						<label
							className="burger relative z-20 block custom-lg:hidden"
							onChange={changePosition}
						>
							<div className="flex h-10 w-9 cursor-pointer flex-col items-center justify-center">
								<input className="peer hidden" type="checkbox" />
								<div className="h-[2px] w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-black transition-all duration-300 peer-checked:rotate-[-45deg]"></div>
								<div className="h-[2px] w-[50%] origin-center rounded-md bg-black transition-all duration-300 peer-checked:hidden"></div>
								<div className="h-[2px] w-[50%] origin-left -translate-y-[0.45rem] rounded-md bg-black transition-all duration-300 peer-checked:rotate-[45deg]"></div>
							</div>
						</label>
						<Mobile isMove={move} />
						<Search mobile={true} />
					</div>
				</nav>
			</header>
		</>
	);
}
