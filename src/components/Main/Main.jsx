import Categories from "./Sections/Categories";
import TopDeals from "./Sections/TopDeals";
import HotOffers from "./Sections/HotOffers";
import NewsLetter from "./Sections/Newsletter";

export default function Main() {
	return (
		<main className="py-12">
			<Categories />
			<TopDeals />
			<HotOffers />
			<NewsLetter />
		</main>
	);
}
