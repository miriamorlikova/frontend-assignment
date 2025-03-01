import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatDate = (dateString: string): string => {
	if (!dateString) return "Invalid date";
	const date = format(new Date(dateString), "d MMMM", { locale: enUS });
	const time = format(new Date(dateString), "h:mma", {
		locale: enUS,
	}).toLowerCase();

	return `${date} at ${time}`;
};
