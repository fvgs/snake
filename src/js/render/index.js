import {START, PLAYING, END} from '../constants'
import renderStart from './renderStart'
import renderPlaying from './renderPlaying'
import renderEnd from './renderEnd'

const renderStatus = {
	[START]: renderStart,
	[PLAYING]: renderPlaying,
	[END]: renderEnd,
}

const start = (context, store) => {
	const render = timestamp => {
		const {status} = store.getState()
		context.clearRect(0, 0, window.innerWidth, window.innerHeight)
		renderStatus[status](context, store, timestamp)
		window.requestAnimationFrame(render)
	}
	render()
}

export default start
