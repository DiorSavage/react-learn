import { queryClient } from '@/shared/api/QueryClient'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
				<Main />
				<NextScript />
      </body>
    </Html>
  )
}