export default function Nav() {
	return (
		<nav className="shadow shadow-black/20 px-4 fixed bg-white w-full">
			<div className="max-w-[1600px] w-full mx-auto py-6 flex justify-between items-center text-lg">
				<div className="w-[50%] flex items-center">
					<a href="#" className="mr-12">
						Buy<span className="text-indigo-600">now</span>
					</a>
					<ul className="flex">
						<li className="px-4">
							<a href="#">Top Deals</a>
						</li>
						<li className="px-4">
							<a href="#">Hot Offers</a>
						</li>
					</ul>
				</div>
				<div className="w-[50%] flex items-center">
					<form className="w-3/4 border border-indigo-600/50 flex justify-between rounded overflow-hidden">
						<input
							type="text"
							aria-label="Search item that you are looking for"
							className="pl-2 w-full"
							placeholder="Search"
						/>
						<button>
							<i className="fa-solid fa-magnifying-glass text-white bg-indigo-600 p-2 flex items-center justify-center"></i>
						</button>
					</form>
					<div className="ml-auto">
						<i className="fa-solid fa-user mx-4 cursor-pointer shadow shadow-black/20 p-2 rounded-md"></i>
						<i className="fa-solid fa-cart-shopping mx-4 cursor-pointer shadow shadow-black/20 p-2 rounded-md"></i>
					</div>
				</div>
			</div>
		</nav>
	);
}
