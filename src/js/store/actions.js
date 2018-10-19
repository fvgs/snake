export const CHANGE_GAME_STATUS = 'CHANGE_GAME_STATUS'
export const UPDATE_SNAKE = 'UPDATE_SNAKE'
export const SET_DIRECTION = 'SET_DIRECTION'
export const UPDATE_FOOD_LOCATION = 'UPDATE_FOOD_LOCATION'

export const changeGameStatus = status => ({
	type: CHANGE_GAME_STATUS,
	status,
})

export const updateSnake = locations => ({
	type: UPDATE_SNAKE,
	locations,
})

export const setDirection = direction => ({
	type: SET_DIRECTION,
	direction,
})

export const updateFoodLocation = location => ({
	type: UPDATE_FOOD_LOCATION,
	location,
})
