import { useState } from "react";
export default function Info({ title, price, stock, description, size }) {
	const [heart, setHeart] = useState(false);
	function changeState() {
		setHeart(!heart);
	}
	const [value, setValue] = useState(0);
	function reductValue() {
		if (value > 0) {
			setValue(value - 1);
		}
	}
	function addValue() {
		if (value < 20) {
			setValue(value + 1);
		}
	}
	return (
		<>
			<div className="flex flex-col gap-6 p-3 items-center custom-md:items-start">
				<h3 className="sm:text-3xl text-2xl text-bgButtonHover font-bold custom-md:text-left text-center">
					{title}
				</h3>
				<div className="flex items-center gap-6 ">
					<div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1">
						<i className="bx bxs-star text-yellow-400"></i>
						<span className="text-gray-600 text-sm">4.2-54 reviews</span>
					</div>
					<div
						href="#"
						className={`text-white font-semibold py-1 px-2 rounded-md ${
							stock ? "bg-green-500" : "bg-red-500"
						}`}
					>
						{stock ? "En stock" : "Agotado"}
					</div>
				</div>
				<h4 className="text-[1.25rem] font-bold">S/ {price}</h4>
				<p className="text-fontProduct text-center custom-md:text-left">
					{description}
				</p>
				<div className="flex flex-col gap-2 items-center custom-md:items-start">
					<h4 className="uppercase text-fontProduct text-[0.8rem]">
						Mas Opciones disponibles
					</h4>
					<span className="text-neutral-900 font-semibold text-md rounded-md border-[1px] px-4 py-[0.20rem] border-black max-w-max">
						{size}
					</span>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="uppercase text-fontProduct text-[0.8rem] text-center custom-md:text-left ">
						Cantidad
					</h3>
					<div className="flex text-[1rem] text-fontProduct font-semibold ">
						<span
							className="cursor-pointer border-[1px] border-[#E6E7E8] py-1 px-4 rounded-l rounded-tl rounded-bl hover:bg-red-500 hover:border-red-500 hover:text-white transition-all ease-in-out duration-200 flex items-center justify-center"
							onClick={reductValue}
						>
							<i className="fa-solid fa-minus"></i>
						</span>
						<span className="border-t-[1px] border-b-[1px] text-lg  border-[#E6E7E8] py-1 px-4 ">
							{value}
						</span>
						<span
							className="cursor-pointer border-[1px] border-[#E6E7E8] py-1 px-4 rounded-r rounded-tr rounded-br hover:bg-green-600 hover:border-green-600 hover:text-white transition-all ease-in-out duration-200 flex items-center justify-center"
							onClick={addValue}
						>
							<i className="fa-solid fa-plus"></i>
						</span>
					</div>
				</div>
				<div className="flex gap-4">
					<button className="bg-nav text-white py-2  px-8 custom-md:px-20 rounded-md hover:bg-red-500 transition-all ease-in-out duration-200">
						Añadir al carrito
					</button>
					<div
						className="flex items-center justify-center cursor-pointer py-1 px-2 rounded-sm border-2 ring-red-400"
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
