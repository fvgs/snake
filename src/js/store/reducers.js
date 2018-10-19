import {START, UP} from '../constants'
import {
	CHANGE_GAME_STATUS,
	UPDATE_SNAKE,
	SET_DIRECTION,
	UPDATE_FOOD_LOCATION,
} from './actions'

const statusReducer = (state = START, action) => {
	if (action.type === CHANGE_GAME_STATUS) {
		return action.status
	}
	return state
}

const snakeReducer = (state = [], action) => {
	if (action.type === UPDATE_SNAKE) {
		return action.locations
	}
	return state
}

const directionReducer = (state = UP, action) => {
	if (action.type === SET_DIRECTION) {
		return action.direction
	}
	return state
}

const foodReducer = (state = {x: 0, y: 0}, action) => {
	if (action.type === UPDATE_FOOD_LOCATION) {
		return action.location
	}
	return state
}

const root = (state = {}, action = {}) => ({
	status: statusReducer(state.status, action),
	snake: snakeReducer(state.snake, action),
	direction: directionReducer(state.direction, action),
	food: foodReducer(state.food, action),
})

export default root
