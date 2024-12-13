import { categories } from "../../../data/categories";
import CategoriesItem from "./ItemsForSections/CategoriesItem";

export default function Categories() {
	const categoriesElements = categories.map((item) => {
		return (
			<CategoriesItem
				key={item.id}
				href={item.href}
				specialText={item.specialText}
				src={item.src}
				alt={item.alt}
				name={item.name}
				id={item.id}
			/>
		);
	});

	return (
		<section className="bg-gray-50">
			<div className="max-w-[1600px] w-full mx-auto px-4 pt-8">
				<h2 className="font-bold text-2xl">What are you looking for?</h2>
				<ul className="flex text-center py-8 overflow-auto gap-4 justify-between">
					{categoriesElements}
				</ul>
			</div>
		</section>
	);
}
