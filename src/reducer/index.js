/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'

export default combineReducers({
    count: counterReducer
})