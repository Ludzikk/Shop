export default function RecommendItem(props) {
	return (
		<li>
			<a href="#">
				<div className="max-w-[200px] min-w-[150px] bg-white p-8 rounded-xl shadow-sm shadow-black/20">
					<img src={props.src} alt="Smart watch" className="object-cover" />
				</div>
				<p className="pt-4 pb-2 text-lg font-bold">Smart watch</p>
				{props.specialText && (
					<p className="bg-red-50 border-2 border-red-400 inline px-2">
						{props.specialText}
					</p>
				)}
			</a>
		</li>
	);
}
