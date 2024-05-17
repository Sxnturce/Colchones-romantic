import Link from "./Link.jsx";

function Category({ show }) {
	return (
		<>
			<div
				className={`absolute top-8  rounded bg-slate-50 w-40 z-20 ${
					show ? "p-2" : "p-0"
				} transsition-all ease duration-200`}
			>
				<ul
					className={`grid gap-2  ${
						show ? "h-52" : "h-0"
					} overflow-hidden transition-all ease duration-300`}
				>
					<Link text={"Osmio"} />
					<Link text={"Paladio"} />
					<Link text={"Platino"} />
					<Link text={"Neo"} />
					<Link text={"Dilettto"} />
				</ul>
			</div>
		</>
	);
}

export default Category;
