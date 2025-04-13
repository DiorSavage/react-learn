import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import "../app/globals.css"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }) {

	const queryClient = new QueryClient({
		defaultOptions:{
			queries: {
				staleTime: 15 * 1000
			}
		}
	})

  return (
		<QueryClientProvider client={queryClient} >
			<HydrationBoundary state={pageProps.dehydratedState}>
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</HydrationBoundary>
		</QueryClientProvider>
	)
}