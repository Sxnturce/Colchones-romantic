import Links from "./Links.jsx";
import Search from "./Search.jsx";

export default function Mobile({ isMove }) {
	return (
		<>
			<div
				className={`menu fixed top-0 bottom-0 right-0 left-0 sm:left-auto overflow-hidden bg-slate-50 z-10 flex flex-col justify-center items-center gap-8 shadow-md ${
					isMove ? "translate-x-0" : "translate-x-full"
				} p-4 transition-all ease-in-out duration-300`}
			>
				<Links client:load mobile={false} />
				<Search show={false} />
			</div>
		</>
	);
}
