import { formatDate } from "../utils/formatDate";

type TableRowProps = {
	id: string;
	symbol: string;
	image: string;
	currentPrice: number;
	marketCap: number;
	totalVolume: number;
	lastUpdated: string;
	priceChangePercentage: number;
};

const TableRow = ({
	id,
	symbol,
	image,
	currentPrice,
	marketCap,
	totalVolume,
	lastUpdated,
	priceChangePercentage,
}: TableRowProps) => {
	const pricePercentageColor =
		priceChangePercentage < 0
			? "text-light-red bg-dark-red"
			: "text-light-green bg-dark-green";
	return (
		<li className="grid font-medium px-5 grid-cols-custom-template w-full py-3 gap-2 text-xs xl:text-sm text-primary-light text-start items-center rounded-b-2xl bg-gradient-to-t from-[rgba(16,17,24,0.5)] to-[rgba(24,24,29,0.5)]">
			<p>{id}</p>
			<p>{symbol}</p>
			<div className="flex items-center gap-2">
				<p className="text-custom-white">{currentPrice}</p>
				<img src={image} alt={symbol} className="w-3 h-3" />
			</div>
			<p>{marketCap}</p>
			<p>{totalVolume}</p>
			<p className="text-custom-grey">{formatDate(lastUpdated)}</p>
			<p
				className={`${pricePercentageColor} w-fit min-w-[60px] px-2 py-1 rounded-lg text-right justify-self-start`}
			>{`${Math.round(priceChangePercentage * 100)}%`}</p>
		</li>
	);
};

export default TableRow;
