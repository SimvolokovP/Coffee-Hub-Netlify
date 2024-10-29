import './ProductPage.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import supabase from '../../database/supabase/supabase'
import Product from '../../components/Product/Product'

const ProductPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState({})

	useEffect(() => {
		const fetchProduct = async () => {
			const { data: product, error } = await supabase
				.from('products')
				.select('*')
				.eq('id', id)
				.single()
			console.log(product)
			setProduct(product)
		}
		fetchProduct()
	}, [])

	return <Product product={product} />
}
export default ProductPage
