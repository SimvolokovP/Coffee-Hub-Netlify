import { useEffect, useState } from 'react'
import CartList from '../../components/CartList/CartList'
import OrderInput from '../../components/OrderInput/OrderInput'
import useTg from '../../hooks/useTg'
import './OrderPage.scss'
import { useCartStore } from '../../store/useCartStore'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
	const { user } = useTg()
	const { cart } = useCartStore()
  const navigate = useNavigate()

	const getTargetTime = () => {
		const now = new Date()
		now.setMinutes(now.getMinutes() + 15)
		return now.toTimeString().slice(0, 5)
	}

	const targetTime = getTargetTime()

	const [formData, setFormData] = useState({
		name: user?.username,
		time: targetTime,
		message: 'Coffee please',
	})

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/')
    }
  }, [cart])

	return (
		<div className='page order-page'>
			<div className='container'>
				<div className='order-page__title'>
					Your <span className='accent'>order</span>
				</div>
				<CartList />
				<form className='order-page__form'>
					<OrderInput
						placeholder='Customer name'
						value={formData.name}
						setValue={e => setFormData({ ...formData, name: e })}
					/>
					<OrderInput
						placeholder='Desired time'
						type='time'
						value={formData.time}
						setValue={e => setFormData({ ...formData, time: e })}
					/>
					<OrderInput
						placeholder='Special message'
						value={formData.message}
						setValue={e => setFormData({ ...formData, message: e })}
					/>
				</form>
			</div>
		</div>
	)
}
export default OrderPage
