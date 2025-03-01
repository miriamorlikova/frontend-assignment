const labels = [
	"ID",
	"Symbol",
	"Current price",
	"Market cap",
	"Total volume",
	"Last Updated",
	"Price change in 24h",
];

const TableHeader = () => {
	return (
		<div className="text-custom-grey xl:text-sm font-poppins font-bold grid grid-cols-custom-template bg-gradient-to-t to-linear-dark from-linear-darker py-3.5 px-5 rounded-t-3xl border border-white border-opacity-5 w-[90%] max-w-[1250px] gap-2 text-xs">
			{labels.map((label, index) => (
				<h3 key={index}>{label}</h3>
			))}
		</div>
	);
};
export default TableHeader;
