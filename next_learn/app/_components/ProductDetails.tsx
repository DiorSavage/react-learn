import { IProduct } from '../(main)/(home)/orders/page'


const ProductDetailts = ({ product }: { product: IProduct }) => {
	return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
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

export default ProductDetailts