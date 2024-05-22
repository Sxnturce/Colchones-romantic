import { useState } from "react";
import Buttons from "../../Buttons";
export default function Info({ title, price, stock, description, size }) {
	const [heart, setHeart] = useState(false);
	function changeState() {
		setHeart(!heart);
	}

	return (
		<>
			<div className="flex flex-col items-center gap-6 p-3 custom-md:items-start">
				<h3 className="text-center text-2xl font-bold text-bgButtonHover sm:text-3xl custom-md:text-left">
					{title}
				</h3>
				<div className="flex items-center gap-6 ">
					<div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1">
						<i className="bx bxs-star text-yellow-400"></i>
						<span className="text-sm text-gray-600">4.2-54 reviews</span>
					</div>
					<div
						href="#"
						className={`rounded-md px-2 py-1 font-semibold text-white ${
							stock ? "bg-green-500" : "bg-red-500"
						}`}
					>
						{stock ? "En stock" : "Agotado"}
					</div>
				</div>
				<h4 className="text-[1.25rem] font-bold">S/ {price}</h4>
				<p className="text-center text-fontProduct custom-md:text-left">
					{description}
				</p>
				<div className="flex flex-col items-center gap-2 custom-md:items-start">
					<h4 className="text-[0.8rem] uppercase text-fontProduct">
						Mas Opciones disponibles
					</h4>
					<span className="text-md max-w-max rounded-md border-[1px] border-black px-4 py-[0.20rem] font-semibold text-neutral-900">
						{size}
					</span>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="text-center text-[0.8rem] uppercase text-fontProduct custom-md:text-left ">
						Cantidad
					</h3>
					<Buttons />
				</div>
				<div className="flex gap-4">
					<button className="rounded-md bg-nav px-8  py-2 text-white transition-all duration-200 ease-in-out hover:bg-red-500 custom-md:px-20">
						Añadir al carrito
					</button>
					<div
						className="flex cursor-pointer items-center justify-center rounded-sm border-2 px-2 py-1 ring-red-400"
						onClick={changeState}
					>
						<i
							className={`bx ${
								heart ? "bxs-heart text-red-700" : "bx-heart"
							} text-xl hover:text-red-700`}
						></i>
					</div>
				</div>
			</div>
		</>
	);
}
