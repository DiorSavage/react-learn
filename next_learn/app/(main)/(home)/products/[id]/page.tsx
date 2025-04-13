// import { GetStaticPaths, GetStaticProps } from 'next'
import { IProduct } from '../../orders/page'
import ProductDetailts from '@/app/_components/ProductDetails'
import { getProductById } from '../getProducts'
import { useParams } from 'next/navigation'
import { Params } from 'next/dist/server/request/params'

// interface Props {
// 	product: IProduct
// }

//? SSG и ISR

//! не сработает в app routing, онли в pages routing
// export const getStaticParams = async () => {
// 	const products = await fetch("http://localhost:8000/products").then(res => res.json())
// 	const paths = products.map((product: IProduct) => ({
// 		params: { id: product.id.toString() }
// 	}))

// 	return { paths, fallback: false }
// }



// export const getStaticProps: GetStaticProps<Props> = async ({
// 	params
// }: {
// 	params: { id: string }
// }) => {
// 	const product = await fetch(`http://localhost:8000/products/${params.id}`).then(res => res.json())
// 	return {
// 		props: { product },
// 		revalidate: 60 //? ревалидация данных каждые 60 секунд
// 	}
// }

// export default function ProductPage({ product }: { product: IProduct }) {
// 	return (
// 		<ProductDetailts product={product} />
// 	)
// }

//? app routing - generateStaticParams() и fetch() с next: { revalidate: 60 }

// export const dynamicParams = true

// export async function generateStaticParams() {
// 	const response = await fetch("http://localhost:8000/products", {
// 		headers: {
// 			"content-type": "application/json"
// 		}
// 	})
// 	const data: IProduct[] = await response.json()
// 	return data.map(product => {
// 		return { id: product.id.toString() }
// 	})
// }

// export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
// 	const params = await props.params
// 	const response = await fetch(`http://localhost:8000/products/${params.id}`, {
// 		next: { revalidate: 60, tags: [`product:${params.id}`] }
// 	})
// 	const data = await response.json()

// 	return (
// 		<ProductDetailts product={data} />
// 	)
// }

//? SSR ( getServerSideProps больше не поддерживается в AppRouting )

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:8000/products", {
//     headers: {
//       "content-type": "application/json"
//     }
//   })
//   const data = await response.json()
//   return { props: { data } }
// } satisfies GetServerSideProps<{ data: IData }>

// export default function ProductPage({ data }: { data: IProduct }) {
// 	return (
// 		<ProductDetailts product={data} />
// 	)
// }

export default async function ProductPage({ params }: { params:  }) {

	const data = await getProductById(params.id)

	return (
		<ProductDetailts product={data} />
	)
}