import '../css/main.css'
import initializeCanvas from './canvas'
import store from './store'
import start from './render'

const context = initializeCanvas()
start(context, store)
