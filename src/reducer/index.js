/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'

export default combineReducers({
    count: counterReducer,
    articles
})