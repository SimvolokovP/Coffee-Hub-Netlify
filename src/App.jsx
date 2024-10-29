import './styles/normalize.css'
import './styles/App.css'
import AppRoutes from './router/AppRoutes.jsx'
import { useEffect } from 'react'
import useTheme from './hooks/useTheme.js'
import useTg from './hooks/useTg.js'

const App = () => {
	const { tg } = useTg()
	const { checkThemeAndSetProperties } = useTheme()

	const handleThemeChange = () => {
		checkThemeAndSetProperties()
	

	}

	const initialSetTheme = () => {
		checkThemeAndSetProperties()
	
	}

	useEffect(() => {
		tg.onEvent('themeChaned', handleThemeChange)
		

		initialSetTheme()
		// console.log('color', document.documentElement.style.getPropertyValue('--accent-color'))

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
