import './ProductsPage.scss'

import supabase from '../../database/supabase/supabase'
import { useEffect, useState } from 'react'
import useTg from '../../hooks/useTg'

const ProductsPage = () => {
	const [products, setProducts] = useState([])
	const {tg} = useTg()
	console.log(tg)

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
				Hello, <span className='accent'>Alex Svistunov!</span> It’s Great{' '}
				<span className='accent'>Day For Coffee</span>
			</h1>

			<div className='products'>
				{products.map(product => (
					<div key={product.id} className='products__item product'>
						<img className='product__image' src={`/${product.name}.svg`} alt={product.name} width={70} height={70} />
						<h3 className='product__title'>{product.name}</h3>
						<p className='product__descr accent'>${product.price}</p>
					</div>	
				))}
			</div>
		</div>
	)
}
export default ProductsPage
