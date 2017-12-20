/**
 * Created by Yevhen Kryvsun on 12/20/2017.
 */
import {INCREMENT} from '../constants'

export default (count = 0, action) => {
    const {type} = action

    switch(type) {
        case INCREMENT: return count + 1
    }

    return count
}