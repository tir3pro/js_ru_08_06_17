/**
 * Created by Yevhen Kryvsun on 12/20/2017.
 */
import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

window.store = store

export default store