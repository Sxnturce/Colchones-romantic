export default function File() {
	return (
		<>
			<div className="flex flex-col gap-6 text-fontProduct p-4 text-[0.95rem]">
				<h2 className="uppercase text-neutral-900 font-bold text-[1.20rem]">
					Ficha técnica
				</h2>
				<ul className="flex flex-col gap-[1px]">
					<p>Caracteristicas principales</p>
					<li className="list-disc list-outside ml-8">
						Tamaño: Queen 160 x 200
					</li>
					<li className="list-disc list-outside ml-8">Incluye: Colchon</li>
				</ul>
				<ul className="flex flex-col gap-[1px]">
					<p>Dimensiones</p>
					<li className="list-disc list-outside ml-8">Alto: 37cm</li>
					<li className="list-disc list-outside ml-8">Ancho: 160cm</li>
					<li className="list-disc list-outside ml-8">Largo: 160cm</li>
				</ul>
				<ul className="flex flex-col gap-4">
					<p>Materiales y cuidados</p>
					<li className="list-disc list-outside ml-8">
						Detalles de materialidad:
					</li>
					<div className="flex flex-col gap-[1px]">
						<li className="list-outside ml-8">Acolchado:</li>
						<li className="list-outside ml-8">
							- Tela Tejido de punto Belga con tratamientos Sanitized y Fire
							Retardant.
						</li>
						<li className="list-outside ml-8">- Napa de fibra poliéster.</li>
						<li className="list-outside ml-8">- Doble capa de poliuretano.</li>
					</div>
					<div className="flex flex-col gap-[1px]">
						<li className="list-outside ml-8">Estructura interna:</li>
						<li className="list-outside ml-8">
							- Buffer de poliuretano High Density 7 zonas.
						</li>
						<li className="list-outside ml-8">- Capa de poliuretano.</li>
						<li className="list-outside ml-8">- Aislante termofusionado.</li>
						<li className="list-outside ml-8">
							- Floating System: Marco de poliuretano + estructura de resortes
							Pocket ®.
						</li>
						<li className="list-outside ml-8">
							- Capa de fibroespuma termofusionada.
						</li>
					</div>
					<li className="list-disc list-outside ml-8">Garantía: 1 año</li>
				</ul>
			</div>
		</>
	);
}
