import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReduxProvider from './_components/ReduxProvider';
import TanstackProvider from './_components/TanstackProvider';
import Header from '@/shared/UI/Header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<TanstackProvider>
			<ReduxProvider>
				<Header />
				<main>
					{children}
				</main>
				<ReactQueryDevtools initialIsOpen={false} />
			</ReduxProvider>
		</TanstackProvider>
	);
}

//? TanstackQuery работает с любой асинхронной логикой, не только с запросами

export default MainLayout