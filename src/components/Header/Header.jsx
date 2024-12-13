export default function Header() {
	return (
		<header className="py-20">
			<div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-end justify-center py-8 px-4">
				<div className="text-6xl capitalize text-center pb-8 lg:pb-0 lg:w-1/2 lg:text-left">
					<h1 className="[word-spacing:10px]">
						Find top <span className="text-indigo-600">amazing products, </span>
						start shoping now
					</h1>
					<p className="text-2xl pt-8">
						for first purchase
						<span className="text-orange-600"> get 30% off</span>
					</p>
				</div>
				<div className="lg:w-1/2">
					<img src="./src/assets/images/header.svg" alt="Halo" />
				</div>
			</div>
		</header>
	);
}
