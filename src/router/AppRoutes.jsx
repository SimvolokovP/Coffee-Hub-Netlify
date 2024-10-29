import { Route, Routes } from 'react-router-dom'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import OrderPage from '../pages/OrderPage/OrderPage'


const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<ProductsPage/>} />
				<Route path="/products/:id" element={<ProductPage />} />
				<Route path="/order" element={<OrderPage />} />
			</Routes>
		</div>
	)
}
export default AppRoutes