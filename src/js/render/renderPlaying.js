import {SQUARE_SIZE, END, UP, DOWN, LEFT, RIGHT} from '../constants'
import {setFood} from '../lib'

const UPDATE_INTERVAL = 20
const keyToDirection = {
	ArrowUp: UP,
	ArrowDown: DOWN,
	ArrowLeft: LEFT,
	ArrowRight: RIGHT,
}

let prevTimestamp = 0
let prevDirection = UP
let prevFood = null
let registeredKeyListener = null

const getKeyListener = store => ({key}) => {
	const direction = keyToDirection[key]

	if (direction) {
		store.dispatch(store.setDirection(direction))
	}
}

const registerKeyListener = store => {
	const keyListener = getKeyListener(store)
	window.addEventListener('keydown', keyListener)
	registeredKeyListener = keyListener
}

const unregisterKeyListener = () => {
	window.removeEventListener('keydown', registeredKeyListener)
	registeredKeyListener = null
}

const drawSquareWithContext = context => ({x, y}, color = '#fff') => {
	context.fillStyle = color
	context.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE)
}

const drawSnake = (context, snake) => {
	const drawSquare = drawSquareWithContext(context)
	snake.forEach(location => drawSquare(location))
}

const drawFood = (context, food) => {
	const drawSquare = drawSquareWithContext(context)
	drawSquare(food, '#ff0')
}

const isValidLocation = (x, y) => (
	0 <= x &&
	x <= window.innerWidth - SQUARE_SIZE &&
	0 <= y &&
	y <= window.innerHeight - SQUARE_SIZE
)

const intersects = (location, locations) =>
	locations.some(
		({x, y}) =>
			Math.abs(location.x - x) < SQUARE_SIZE &&
			Math.abs(location.y - y) < SQUARE_SIZE
	)

const getNextSnakeHead = (snake, direction) => {
	const {x, y} = snake[snake.length - 1]

	let nextX = x
	let nextY = y

	if (direction === UP) {
		nextY -= SQUARE_SIZE
	} else if (direction === DOWN) {
		nextY += SQUARE_SIZE
	} else if (direction === LEFT) {
		nextX -= SQUARE_SIZE
	} else if (direction === RIGHT) {
		nextX += SQUARE_SIZE
	}

	return {x: nextX, y: nextY}
}

const renderPlaying = (context, store, timestamp) => {
	if (registeredKeyListener === null) {
		registerKeyListener(store)
	}

	const {snake, direction, food} = store.getState()

	drawSnake(context, snake)
	drawFood(context, food)

	// No need to update
	if (
		timestamp - prevTimestamp < UPDATE_INTERVAL &&
		direction === prevDirection &&
		food === prevFood) {
		return
	}

	const nextHead = getNextSnakeHead(snake, direction)
	let nextSnake

	if (intersects(nextHead, [food])) {
		setFood(store)
		nextSnake = [...snake]
	} else {
		nextSnake = snake.slice(1)
	}

	const isValid =
		isValidLocation(nextHead.x, nextHead.y) &&
		!intersects(nextHead, nextSnake)

	if (!isValid) {
		unregisterKeyListener()
		store.dispatch(store.changeGameStatus(END))
		return
	}

	nextSnake.push(nextHead)
	store.dispatch(store.updateSnake(nextSnake))
	prevTimestamp = timestamp
	prevDirection = direction
	prevFood = food
}

export default renderPlaying
