/**
 * Created by Yevhen Kryvsun on 12/20/2017.
 */
import {DELETE_ARTICLE, INCREMENT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}