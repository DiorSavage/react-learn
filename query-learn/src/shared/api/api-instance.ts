const BASE_URL = "http://localhost:8000/"

class ApiError extends Error {
	constructor(public response: Response) {
		super("ApiError: "+ response.status)
	}
}

export const jsonApiInstance = <T> (
	url: string,
	init?: RequestInit & { json?: unknown }
) => async (meta: { signal?: AbortSignal }) => {

	let headers = init ? init.headers : {}

	if (init?.json) {
		headers = {
			...headers,
			"Content-Type": "application/json"
		}

		init.body = JSON.stringify(init.json)
	}

	const result = await fetch(`${BASE_URL}${url}`, {
		...init,
		// signal: meta.signal,
	})

	if (!result.ok) {
		throw new ApiError(result)
	}

	const data = (await result.json()) as Promise<T>

	return data
}

//? с методом post
// jsonApiInstance(url, {
// 	method: "POST",
// 	json: data
// })