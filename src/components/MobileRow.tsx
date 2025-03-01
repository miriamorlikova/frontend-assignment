import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import { FaSort } from "react-icons/fa";

type MobileRowProps = {
	id: string;
	symbol: string;
	image: string;
	currentPrice: number;
	marketCap: number;
	lastUpdated: string;
	priceChangePercentage: number;
};

const MobileRow = ({
	id,
	symbol,
	image,
	currentPrice,
	marketCap,
	lastUpdated,
	priceChangePercentage,
}: MobileRowProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const pricePercentageColor =
		priceChangePercentage < 0
			? "text-light-red bg-dark-red"
			: "text-light-green bg-dark-green";

	return (
		<div className="mb-2  font-medium text-xs">
			<div
				className={`grid grid-cols-[1fr_auto] grid-rows-2 items-center p-5 bg-gradient-to-t to-linear-dark from-linear-darker border border-white border-opacity-5 ${
					isOpen ? "rounded-t-3xl" : "rounded-3xl"
				}`}
			>
				<div className="flex gap-1 items-center">
					<p className="text-custom-white text-base font-semibold">
						{currentPrice}
					</p>
					<img src={image} alt={symbol} className="w-4 h-4" />
				</div>
				<button
					className={`${
						isOpen
							? "text-custom-white bg-medium-red"
							: "text-primary-light bg-custom-dark-gray"
					} row-span-2 place-self-start px-1 py-1.5 rounded-lg`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<FaSort className="h-3 w-3" />
				</button>
				<p className="text-custom-grey">{formatDate(lastUpdated)}</p>
			</div>
			{isOpen && (
				<div className="grid items-center p-5 rounded-b-3xl grid-cols-[1fr_2fr] grid-rows-2 gap-y-3 gap-x-4 border border-white border-opacity-5 bg-[#101118]">
					<div className="flex flex-col gap-1.5">
						<p className="text-custom-grey">ID</p>
						<p className="text-primary-light">{id}</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-custom-grey">Symbol</p>
						<p className="text-primary-light">{symbol}</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-custom-grey">Market cap</p>
						<p className="text-primary-light">{marketCap}</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-custom-grey">Price change in 24 hours</p>
						<p
							className={`${pricePercentageColor} w-fit min-w-[60px] px-2 py-1 rounded-lg text-right justify-self-start`}
						>
							{`${Math.round(priceChangePercentage * 100)}%`}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileRow;
