import './ProductsPage.scss'

import supabase from '../../database/supabase/supabase'
import { useEffect, useState } from 'react'
import useTg from '../../hooks/useTg'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProducts] = useState([])
	const { user } = useTg()

	const userName = user.username
	const firstName = user.first_name // types?

	useEffect(() => {
		const fetchProducts = async () => {
			const { data: products, error } = await supabase
				.from('products')
				.select('*')
			console.log(products)
			setProducts(products)
		}
		fetchProducts()
	}, [])

	return (
		<div>
			<h1 className='main-title'>
				Hello, <span className='accent'>{userName ? userName : firstName}</span>{' '}
				It’s Great <span className='accent'>Day For Coffee</span>
			</h1>

			<div className='products'>
				{products.map(product => (
					<Link
						to={`product/${product.id}`}
						key={product.id}
						className='products__item product'
					>
						<img
							className='product__image'
							src={`/${product.name}.svg`}
							alt={product.name}
							width={70}
							height={70}
						/>
						<h3 className='product__title'>{product.name}</h3>
						<p className='product__descr accent'>${product.price}</p>
					</Link>
				))}
			</div>
		</div>
	)
}
export default ProductsPage
