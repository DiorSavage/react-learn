import ProductDetailts from '@/app/_components/ProductDetails'
import { getProducts } from './getProducts'
import Link from 'next/link'

const ProductsPage = async () => {

	const data = await getProducts()

	return (
		<section className='flex flex-col items-center gap-y-8'>
			<h1 className='text-3xl font-bold'>Products</h1>
			<div className='grid grid-cols-6 gap-5'>
				{data.map(product => {
					return (
						<Link href={`products/${product.id}`} key={product.id}>
							<ProductDetailts product={product} /> 
						</Link>
					)
				})}
			</div>
		</section>
	);
}

export default ProductsPage