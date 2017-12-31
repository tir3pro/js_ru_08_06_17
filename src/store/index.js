/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(logger)
const store = createStore(reducer, {}, enhancer)

window.store = store

export default store