import useTg from '../hooks/useTg'
import {
	setDarkProperties,
	setLightProperties,
} from '../utils/setThemeProperties'

const useTheme = () => {
	const { tg } = useTg()

	function checkThemeAndSetProperties() {
		if (tg.colorScheme === 'light') {
			setLightProperties()
			
		}

		if (tg.colorScheme === 'dark') {
			setDarkProperties()
		}
	}

	return {
		checkThemeAndSetProperties,
	}
}

export default useTheme
