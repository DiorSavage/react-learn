"use client"

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/QueryClient';

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
	return (  
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}

export default TanstackProvider