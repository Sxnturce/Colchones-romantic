export default function Suscribe() {
	return (
		<>
			<section className="w-full bg-bgCards py-20">
				<div className="w-11/12 max-w-7xl mx-auto grid  grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-6">
					<div className="flex flex-col  items-center lg:items-start justify-center gap-4">
						<h2 className="text-fontHero text-3xl font-bold text-center">
							Suscribase a nuestro Newsletter
						</h2>
						<p className="text-center">
							Nos encanta sorprender a nuestros suscriptores.
						</p>
					</div>
					<div className="flex gap-6 items-stretch sm:items-center justify-center lg:justify-end flex-col sm:flex-row">
						<input
							type="text"
							placeholder="Correo Electronico"
							className="outline-0 border-2 border-bgButton rounded-md px-6 py-2 focus:border-red-500 transition-all ease-in-out duration-250"
						/>
						<input
							type="button"
							value="Suscribir"
							className="cursor-pointer bg-bgButton rounded-md px-4 py-2 text-white  text-[1.1rem] hover:bg-red-500 transition-all ease-in-out duration-150"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
