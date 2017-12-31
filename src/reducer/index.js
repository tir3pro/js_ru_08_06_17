/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'
import comments from './comments'

export default combineReducers({
    count: counterReducer,
    articles, filters, comments
})