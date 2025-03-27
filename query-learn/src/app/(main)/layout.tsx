import ReduxProvider from './_components/ReduxProvider';
import TanstackProvider from './_components/TanstackProvider';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReduxProvider>
			<TanstackProvider>
				<main>
					{children}
				</main>
			</TanstackProvider>
		</ReduxProvider>
	);
}

//? TanstackQuery работает с любой асинхронной логикой, не только с запросами

export default MainLayout