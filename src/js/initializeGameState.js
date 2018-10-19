import {SQUARE_SIZE, UP} from './constants'
import {setFood} from './lib'

const getCenter = () => ({
	x: (window.innerWidth / 2) - (SQUARE_SIZE / 2),
	y: (window.innerHeight / 2) - (SQUARE_SIZE / 2),
})

const initializeSnake = store => {
	const center = getCenter()
	store.dispatch(store.updateSnake([center]))
}

const initializeDirection = store => {
	store.dispatch(store.setDirection(UP))
}

const initializeGameState = store => {
	initializeSnake(store)
	initializeDirection(store) 
	setFood(store)
}

export default initializeGameState
