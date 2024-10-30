import './styles/normalize.css'
import './styles/App.css'
import AppRoutes from './router/AppRoutes.jsx'
import { useEffect } from 'react'
import useTheme from './hooks/useTheme.js'
import useTg from './hooks/useTg.js'
import useColorStore from './store/useColorStore.js'

const App = () => {
	const { tg } = useTg()
	const { checkThemeAndSetProperties } = useTheme()
  const {color, setColor} = useColorStore()

	const handleThemeChange = () => {
		checkThemeAndSetProperties()
    setColor('#fff')
	}

	const initialSetTheme = () => {
		checkThemeAndSetProperties()
	}

	useEffect(() => {
		tg.onEvent('themeChanged', handleThemeChange)

		initialSetTheme()
    setColor('#000')

		return () => {
			tg.offEvent('themeChanged', handleThemeChange)
		}
	}, [])

	return (
		<>
			<AppRoutes />
		</>
	)
}
export default App