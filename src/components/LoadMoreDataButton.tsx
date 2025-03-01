const LoadMoreDataButton = ({
	onLoadMoreRows,
}: {
	onLoadMoreRows: () => void;
}) => {
	return (
		<button
			onClick={onLoadMoreRows}
			className="text-primary-light font-bold font-poppins text-[13px] xl:text-sm bg-gradient-to-t to-[#18181D] from-[#101118] flex items-center justify-center py-3.5 rounded-2xl border border-white border-opacity-5 w-[90%] max-w-[1250px]"
		>
			Load more data
		</button>
	);
};
export default LoadMoreDataButton;
