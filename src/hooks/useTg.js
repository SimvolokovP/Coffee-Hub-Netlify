const useTg = () => {

	const tg = window.Telegram.WebApp
	const initDataUnsafe = tg.initDataUnsafe
	const user = initDataUnsafe.user

	return {
		tg,
		initDataUnsafe,
		user
	}
}
export default useTg