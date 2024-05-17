export default function Link({ text }) {
	return (
		<>
			<a
				href="#"
				className="hover:bg-red-400 hover:text-white hover:rounded transition-all ease duration-100 p-1 flex justify-between items-center"
			>
				<li>{text}</li>
				<i className="bx bx-right-arrow-alt"></i>
			</a>
		</>
	);
}
