import {PLAYING} from '../constants'
import initializeGameState from '../initializeGameState'

const TITLE = 'Snake'
const INSTRUCTIONS = `Press 'R' to start`

let registeredKeyListener = null

const getKeyListener = store => ({key}) => {
	if (key === 'r') {
		unregisterKeyListener()
		initializeGameState(store)
		store.dispatch(store.changeGameStatus(PLAYING))
	}
}

const registerKeyListener = store => {
	const keyListener = getKeyListener(store)
	window.addEventListener('keypress', keyListener)
	registeredKeyListener = keyListener
}

const unregisterKeyListener = () => {
	window.removeEventListener('keypress', registeredKeyListener)
	registeredKeyListener = null
}

const drawStart = context => {
	context.fillStyle = '#ff0'
	context.font = '96px Mali, sans-serif'

	const {width} = context.measureText(TITLE)
	const x = (window.innerWidth / 2) - (width / 2)
	const y = window.innerHeight * 0.4

	context.fillText(TITLE, x, y)
}

const drawInstructions = context => {
	context.fillStyle = '#fff'
	context.font = '48px Mali, sans-serif'

	const {width} = context.measureText(INSTRUCTIONS)
	const x = (window.innerWidth / 2) - (width / 2)
	const y = window.innerHeight * 0.55

	context.fillText(INSTRUCTIONS, x, y)
}

const renderStart = (context, store) => {
	if (registeredKeyListener === null) {
		registerKeyListener(store)
	}

	drawStart(context)
	drawInstructions(context)
}

export default renderStart
