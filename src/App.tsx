import axios from "axios";
import "./index.css";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import ContentTable from "./components/ContentTable";

export type CryptoDataType = {
	id: string;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	market_cap: number;
	total_volume: number;
	last_updated: string;
	price_change_percentage_24h: number;
};

const fetchData = async (): Promise<CryptoDataType[]> => {
	const { data } = await axios.get<CryptoDataType[]>(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
	);
	return data;
};

function App() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["crypto"],
		queryFn: fetchData,
		staleTime: 60 * 1000,
		refetchInterval: 60 * 1000,
		refetchOnWindowFocus: true,
	});
	console.log(isLoading);

	return (
		<div className="w-screen bg-gradient-to-b from-primary-linear-dark to-primary-linear-medium">
			{isLoading ? (
				<Spinner />
			) : error ? (
				<ErrorMessage />
			) : (
				<ContentTable cryptoData={data ?? []} />
			)}
		</div>
	);
}

export default App;
