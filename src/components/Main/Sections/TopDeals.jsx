import TopDealsItem from "./ItemsForSections/TopDealsItems";
import { categories } from "../../../data/categories";

export default function TopDeals() {
	const topDealsElements = categories.map((item) => {
		return <TopDealsItem key={item.id} src={item.src} name={item.name} />;
	});

	return (
		<section className="bg-white">
			<div className="max-w-[1600px] w-full mx-auto py-8 px-4">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-2xl">Top deals</h2>
					<a
						href="#"
						className="uppercase text-indigo-600 font-bold underline tracking-wide">
						view all products
					</a>
				</div>
				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-between py-8">
					{topDealsElements}
				</ul>
			</div>
		</section>
	);
}
