export default function TopDealsItem(props) {
	return (
		<li className="flex flex-col items-center bg-gray-50 font-bold rounded-xl shadow-sm shadow-black/20 md:text-lg py-2">
			<div className="max-w-[200px] min-w-[150px] p-4">
				<img src={props.src} alt="" />
			</div>
			<p>{props.name}</p>
			<p className="text-indigo-600">200$</p>
		</li>
	);
}
