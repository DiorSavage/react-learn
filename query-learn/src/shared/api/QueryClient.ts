import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 5 * 60 * 1000,
			staleTime: 10 * 1000
		},
	},
})

//? эти штуки убирают повторные запросы при взятии данных из кеша, точнее определяют, через сколько их делать. staleTime по дефолту 0, а значит будут браться, установив минуту такого не будет

//* staletime - время устаревания данных
//* garbageCollectionTime (gcTime) - время стирания данных из кеша - default = 5 minutes