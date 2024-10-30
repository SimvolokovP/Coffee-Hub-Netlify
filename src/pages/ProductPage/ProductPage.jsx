import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Product from '../../components/Product/Product'
import useTg from '../../hooks/useTg'
import useColorStore from '../../store/useColorStore'
import useProductsStore from '../../store/useProductsStore'
import './ProductPage.scss'

const ProductPage = () => {
	const { id } = useParams()
	const { product, loading, error, fetchProductById } = useProductsStore()
	const { tg } = useTg()
	const { color } = useColorStore()
	const navigate = useNavigate()

	useEffect(() => {
		fetchProductById(id)
	}, [id, fetchProductById])

	const mainButtonParams = {
		text: 'VIEW ORDER',
		color: '#ccc',
		hasShineEffect: true,
	}

	const tgBackButtonOnClick = () => {
		navigate('/')
		tg.BackButton.hide()
	}
	useEffect(() => {
		tg.BackButton.show()
		tg.BackButton.onClick(tgBackButtonOnClick)

		tg.MainButton.show()
		tg.MainButton.setParams(mainButtonParams)
	}, [])

	if (loading) return <LoadingScreen />

	return (
		<div className='page product-page'>
			<Product fetchError={error} product={product} />
		</div>
	)
}

export default ProductPage
