import { useState } from "react";

export default function Buttons() {
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
			<div className="flex text-[1rem] font-semibold text-fontProduct ">
				<span
					className="flex cursor-pointer select-none items-center justify-center rounded-l rounded-bl rounded-tl border-[1px] border-[#E6E7E8] px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:border-red-500 hover:bg-red-500 hover:text-white"
					onClick={reductValue}
				>
					-
				</span>
				<span className="border-b-[1px] border-t-[1px] border-[#E6E7E8]  px-4 py-1 text-lg ">
					{value}
				</span>
				<span
					className="flex cursor-pointer select-none items-center justify-center rounded-r rounded-br rounded-tr border-[1px] border-[#E6E7E8] px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:border-green-600 hover:bg-green-600 hover:text-white"
					onClick={addValue}
				>
					+
				</span>
			</div>
		</>
	);
}
