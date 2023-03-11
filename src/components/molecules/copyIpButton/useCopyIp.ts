export const useCopyIp = () => {
	const IP = String(process.env.NEXT_PUBLIC_SERVER_IP);

	const copyIp = () => {
		navigator.clipboard.writeText(IP);

		alert('Adres IP został skopiowany do schowka');
	};

	return {
		copyIp,
	};
};
