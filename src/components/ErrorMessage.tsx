import { TbFaceIdError } from "react-icons/tb";

const ErrorMessage = () => {
	return (
		<div className="w-full min-h-screen px-8 flex flex-col justify-center gap-4 items-center text-primary-light">
			<TbFaceIdError className="h-16 w-16" />
			<p className="md:text-2xl text-xl font-semibold text-center">
				Something went seriously wrong. Please come back later.
			</p>
		</div>
	);
};

export default ErrorMessage;
