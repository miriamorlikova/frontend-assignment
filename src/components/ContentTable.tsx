import { useCallback, useState } from "react";
import { CryptoDataType } from "../App";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import LoadMoreDataButton from "./LoadMoreDataButton";
import MobileRow from "./MobileRow";
import useMediaQuery from "../utils/useMediaQuery";

type ContentTableProps = {
	cryptoData: CryptoDataType[];
};

const ContentTable = ({ cryptoData }: ContentTableProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 700px)");
	const [visibleRows, setVisibleRows] = useState(7);

	const handleLoadMoreRows = useCallback(() => {
		setVisibleRows((curr) => curr + 7);
	}, []);

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center py-[10%]">
			{isAboveMediumScreen ? (
				<>
					<TableHeader />
					<ul className="w-[90%] max-w-[1250px] flex flex-col gap-y-1">
						{cryptoData.slice(0, visibleRows).map((row) => (
							<TableRow
								key={row.id}
								id={row.id}
								symbol={row.symbol}
								image={row.image}
								currentPrice={row.current_price}
								marketCap={row.market_cap}
								totalVolume={row.total_volume}
								lastUpdated={row.last_updated}
								priceChangePercentage={row.price_change_percentage_24h}
							/>
						))}
					</ul>
				</>
			) : (
				<ul className="w-[90%] max-w-[1250px] flex flex-col">
					{cryptoData.slice(0, visibleRows).map((row) => (
						<MobileRow
							key={row.id}
							id={row.id}
							symbol={row.symbol}
							image={row.image}
							currentPrice={row.current_price}
							marketCap={row.market_cap}
							lastUpdated={row.last_updated}
							priceChangePercentage={row.price_change_percentage_24h}
						/>
					))}
				</ul>
			)}

			{visibleRows < cryptoData.length && (
				<LoadMoreDataButton onLoadMoreRows={handleLoadMoreRows} />
			)}
		</div>
	);
};

export default ContentTable;
