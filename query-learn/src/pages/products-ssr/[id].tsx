import { getAllProducts, getProductById } from '@/shared/api/api'
import { queryClient } from '@/shared/api/QueryClient'
import { IProduct } from '@/types/products.type'
import { GetStaticPaths, GetStaticProps } from 'next'


//? ISR
// interface Props extends IProduct {}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const products = await getAllProducts({})
// 	const paths = products.map(product => ({
// 		params: { id: product.id.toString() }
// 	}))

// 	return { paths, fallback: "blocking" }
// }

// export const getStaticProps: GetStaticProps<Props> = async ({ params }: { params: { id: string } }) => {
// 	const product = await getProductById({ product_id: Number(params.id) })
// 	return {
// 		props: { product },
// 		revalidate: 60
// 	}
// }

//? SSR
export async function getServerSideProps(context: Context) {
	const { id } = context.params
	const product = await getProductById(id)
	return { props: { product } }
}

const ProductPage = ({ product }: { product: IProduct }) => {
	return (
		<div className="bg-white rounded-lg w-1/2 mx-auto shadow-md overflow-hidden transition-transform duration-300 my-12 hover:scale-105">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-lg font-semibold text-indigo-600">
          Price: ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
	);
}

export default ProductPage