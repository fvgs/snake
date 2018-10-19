import root from './reducers'

let state = root()

const getState = () => state

const dispatch = action => {
	state = root(state, action)
}

export {getState, dispatch}
