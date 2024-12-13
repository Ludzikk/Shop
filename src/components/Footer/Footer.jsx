export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gray-50 py-6">
			<div className="max-w-[1600px] w-full mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
					<div className="text-gray-600 flex flex-col gap-4">
						<h3 className="font-bold text-xl text-black">Orders</h3>
						<a href="#">Delivery</a>
						<a href="#">Leasing</a>
						<a href="#">Returns and complaints</a>
						<a href="#">Frequent questions</a>
					</div>
					<div className="text-gray-600 flex flex-col gap-4">
						<h3 className="font-bold text-xl text-black">Promotions</h3>
						<a href="#">Sales</a>
						<a href="#">Gift cards</a>
						<a href="#">Sales</a>
					</div>
					<div className="text-gray-600 flex flex-col gap-4">
						<h3 className="font-bold text-xl text-black">Shop</h3>
						<a href="#">About us</a>
						<a href="#">Statue</a>
						<a href="#">Career</a>
						<a href="#">Contact</a>
					</div>
					<div className="text-gray-600 flex flex-col gap-4">
						<h3 className="font-bold text-xl text-black">Contact</h3>
						<a href="tel:+4812303600">
							<i className="fa-solid fa-phone text-black mr-2"></i>123 936 00
						</a>
						<a href="mailto:shop@shop.com">
							<i className="fa-solid fa-envelope text-black mr-2"></i>
							shop@shop.com
						</a>
						<div className="text-black flex gap-8">
							<a
								href="#"
								className="hover:text-indigo-600 transition-all duration-300">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a
								href="#"
								className="hover:text-indigo-600 transition-all duration-300">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a
								href="#"
								className="hover:text-indigo-600 transition-all duration-300">
								<i className="fa-brands fa-youtube"></i>
							</a>
							<a
								href="#"
								className="hover:text-indigo-600 transition-all duration-300">
								<i className="fa-brands fa-x-twitter"></i>
							</a>
						</div>
					</div>
				</div>
				<p className="text-center pt-8">&copy; shop {year}</p>
			</div>
		</footer>
	);
}
