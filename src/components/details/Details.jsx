import Detalles from "./content/Detalles.jsx";
import File from "./content/File.jsx";
import { useState } from "react";
export default function Details() {
	const [content, setContent] = useState("Detalles");

	function changeFile() {
		setContent("Files");
	}
	function changeDetails() {
		setContent("Detalles");
	}
	return (
		<>
			<section className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 custom-md:grid-cols-[1fr_3fr]">
				<div className="text-fontProduct">
					<div
						className={`cursor-pointer select-none  p-2 rounded-md mt-0 ${content === "Detalles" ? "text-neutral-900 bg-[#F6F6F6] font-semibold" : "".trim()} custom-md:mt-16`}
						onClick={changeDetails}
					>
						<i className="bx bx-detail ml-1"></i> Details
					</div>
					<div
						className={`cursor-pointer select-none p-2 rounded-md ${content === "Files" ? "text-neutral-900 bg-[#F6F6F6] font-semibold" : "".trim()}`}
						onClick={changeFile}
					>
						<i className="bx bx-star ml-1"></i> Ficha tecnica
					</div>
				</div>
				{content === "Detalles" ? <Detalles /> : <File />}
			</section>
		</>
	);
}
