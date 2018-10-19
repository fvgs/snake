const initializeCanvas = () => {
	const canvas = document.querySelector('canvas')
	const context = canvas.getContext('2d')

	// Scale canvas to prevent blurriness on Retina displays
	canvas.style.width = `${window.innerWidth}px`
	canvas.style.height = `${window.innerHeight}px`
	canvas.width = window.innerWidth * window.devicePixelRatio
	canvas.height = window.innerHeight * window.devicePixelRatio
	context.scale(window.devicePixelRatio, window.devicePixelRatio)

	return context
}

export default initializeCanvas
