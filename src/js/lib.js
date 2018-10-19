import {SQUARE_SIZE} from './constants'

const setFood = store => {
	const x = Math.random() * (window.innerWidth - SQUARE_SIZE)
	const y = Math.random() * (window.innerHeight - SQUARE_SIZE)
	store.dispatch(store.updateFoodLocation({x, y}))
}

export {setFood}
