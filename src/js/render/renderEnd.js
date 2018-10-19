import {PLAYING} from '../constants'
import initializeGameState from '../initializeGameState'

const PRIMARY = 'GAME OVER'
const SECONDARY = 'Thanks for playing!'
const INSTRUCTIONS = `Press 'R' to play again`

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

const drawPrimary = context => {
	context.fillStyle = '#f00'
	context.font = '96px Mali, sans-serif'

	const {width} = context.measureText(PRIMARY)
	const x = (window.innerWidth / 2) - (width / 2)
	const y = window.innerHeight * 0.4

	context.fillText(PRIMARY, x, y)
}

const drawSecondary = context => {
	context.fillStyle = '#fff'
	context.font = '36px Mali, sans-serif'

	const {width} = context.measureText(SECONDARY)
	const x = (window.innerWidth / 2) - (width / 2)
	const y = window.innerHeight * 0.515

	context.fillText(SECONDARY, x, y)
}

const drawInstructions = context => {
	context.fillStyle = '#fff'
	context.font = '48px Mali, sans-serif'

	const {width} = context.measureText(INSTRUCTIONS)
	const x = (window.innerWidth / 2) - (width / 2)
	const y = window.innerHeight * 0.65

	context.fillText(INSTRUCTIONS, x, y)
}

const renderEnd = (context, store) => {
	if (registeredKeyListener === null) {
		registerKeyListener(store)
	}

	drawPrimary(context)
	drawSecondary(context)
	drawInstructions(context)
}

export default renderEnd
