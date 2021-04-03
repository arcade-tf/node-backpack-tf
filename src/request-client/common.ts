export type ApiRequestParams = {
	method: 'GET'|'POST'|'DELETE';
	url: string;
	params?: { [key: string]: any };
	data?: { [key: string]: any };
};

export type RequestClient = {
	send<T>(options: ApiRequestParams): Promise<T>;
};
